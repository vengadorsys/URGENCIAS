/* GastroLab · lógica (vanilla JS, sin red, persistencia en localStorage) */
"use strict";

/* ───────── Utilidades ───────── */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ESC[c]);
const fmt = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const dayStr = (off = 0) => { const d = new Date(); d.setDate(d.getDate() + off); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
const dateFmt = (ts) => new Date(ts).toLocaleDateString("es", { day: "numeric", month: "short", year: "numeric" });
const LETTERS = "ABCD";

const TOPIC = Object.fromEntries(GL.topics.map((t) => [t.id, t]));
const ITEM = {};
GL.questions.forEach((q) => (ITEM[q.id] = { ...q, kind: "q" }));
GL.cases.forEach((c) => (ITEM[c.id] = { ...c, kind: "c" }));
const EVAL_TOPICS = GL.topics.filter((t) => GL.questions.some((q) => q.t === t.id) || GL.cases.some((c) => c.t === t.id));
const topicName = (id) => (TOPIC[id] ? TOPIC[id].title : id);
const topicOptions = (sel, counter) => GL.topics.filter((t) => !counter || counter(t.id) > 0)
  .map((t) => `<option value="${t.id}" ${sel === t.id ? "selected" : ""}>${esc(t.n + ". " + t.title)}${counter ? " (" + counter(t.id) + ")" : ""}</option>`).join("");

/* ───────── Estado ───────── */
const KEY = "gastrolab.v1";
const blank = () => ({ v: 1, studied: {}, seen: {}, ans: {}, rec: {}, errors: {}, cards: {}, exams: [], settings: { theme: "dark" }, last: null, lastTopic: null, total: { n: 0, ok: 0 } });
const SHAPE = { studied: "object", seen: "object", ans: "object", rec: "object", errors: "object", cards: "object", exams: "array", settings: "object", total: "object" };
function sanitize(o) {
  const s = blank();
  if (!o || typeof o !== "object" || o.v !== 1) return null;
  for (const k in SHAPE) {
    const want = SHAPE[k], val = o[k];
    if (val === undefined) continue;
    if (want === "array" ? !Array.isArray(val) : (typeof val !== "object" || val === null || Array.isArray(val))) return null;
    s[k] = val;
  }
  if (typeof o.last === "string") s.last = o.last;
  if (typeof o.lastTopic === "string" && TOPIC[o.lastTopic]) s.lastTopic = o.lastTopic;
  if (typeof s.total.n !== "number" || typeof s.total.ok !== "number") s.total = { n: 0, ok: 0 };
  return s;
}
function load() { try { return sanitize(JSON.parse(localStorage.getItem(KEY))) || blank(); } catch (e) { return blank(); } }
let S = load();
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { toast("No se pudo guardar el progreso en este navegador."); } }

/* Registrar una respuesta real (pregunta o caso) */
function record(id, ok) {
  const it = ITEM[id]; if (!it) return;
  S.total.n++; if (ok) S.total.ok++;
  const a = S.ans[id] || (S.ans[id] = { n: 0, ok: 0 });
  a.n++; if (ok) a.ok++; a.last = ok ? 1 : 0;
  const r = S.rec[it.t] || (S.rec[it.t] = []);
  r.push(ok ? 1 : 0); if (r.length > 10) r.shift();
  if (!ok) { const e = S.errors[id] || (S.errors[id] = { n: 0, streak: 0 }); e.n++; e.streak = 0; e.last = Date.now(); }
  else if (S.errors[id]) S.errors[id].streak++;
  save();
}
/* Dominio = % de aciertos en las últimas 10 respuestas del tema (estimación) */
const mastery = (tid) => { const r = S.rec[tid]; return r && r.length ? pct(r.reduce((x, y) => x + y, 0), r.length) : null; };
function overall() { const v = EVAL_TOPICS.map((t) => mastery(t.id)).filter((x) => x !== null); return v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length) : null; }
const cardDue = (c) => { const st = S.cards[c.id]; return !st || st.due <= dayStr(); };
const errPriority = (e) => Math.max(0, e.n - e.streak);

/* ───────── UI común ───────── */
const main = $("#main");
let toastT;
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2600); }
function ask(msg, okLabel = "Aceptar") {
  const d = $("#dlg");
  $("#dlgMsg").textContent = msg; $("#dlgOk").textContent = okLabel;
  return new Promise((res) => { d.returnValue = ""; d.addEventListener("close", () => res(d.returnValue === "ok"), { once: true }); d.showModal(); });
}
const bar = (v) => `<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${v || 0}"><i style="width:${v || 0}%"></i></div>`;
const badge = (p) => `<span class="badge ${p}">${esc(GL.priorities[p] || p)}</span>`;
const masteryTxt = (m) => (m === null ? "Sin evaluar" : m + "%");
const head = (eyebrow, title, sub = "") => `<div class="page-head"><div class="eyebrow">${esc(eyebrow)}</div><h1>${esc(title)}</h1>${sub ? `<p class="muted">${sub}</p>` : ""}</div>`;
function applyTheme() { document.documentElement.dataset.theme = S.settings.theme === "light" ? "light" : "dark"; }

/* Bloques de contenido */
function renderBlock(b) {
  const [type, x, y] = b;
  if (type === "p") return `<p>${fmt(x)}</p>`;
  if (type === "ul") return `<ul class="clean">${x.map((i) => `<li>${fmt(i)}</li>`).join("")}</ul>`;
  if (type === "tbl") return table(x, y);
  if (type === "flow") return flow(x);
  if (type === "warn") return `<div class="alert warn"><p>${fmt(x)}</p></div>`;
  if (type === "note") return `<div class="alert info"><p>${fmt(x)}</p></div>`;
  if (type === "cmp") return `<div class="cmpbox" role="group" aria-label="Material de clase frente a guía verificada">
    <div><span class="badge clase lbl">Material de clase</span>${fmt(x.c)}</div>
    <div><span class="badge guia lbl">Guía verificada</span>${fmt(x.g)}</div>
    <div class="muted small"><b>Diferencia / nota:</b> ${fmt(x.d)}</div></div>`;
  return "";
}
const table = (h, rows) => `<div class="tbl-wrap" tabindex="0"><table><thead><tr>${h.map((c) => `<th scope="col">${esc(c)}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${fmt(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const flow = (steps) => `<div class="flow" role="list">${steps.map((s, i) => (i ? '<div class="arrow" aria-hidden="true">↓</div>' : "") + `<div class="step" role="listitem">${fmt(s)}</div>`).join("")}</div>`;

/* ───────── Router ───────── */
const routes = { inicio: viewHome, temario: viewSyllabus, tema: viewLesson, flashcards: viewCards, simulacro: viewExam, casos: viewCases, comparador: viewCompare, errores: viewErrors, repaso: viewQuick, progreso: viewProgress };
let cleanup = null;
function route() {
  if (cleanup) { cleanup(); cleanup = null; }
  const [name, arg] = location.hash.replace(/^#\/?/, "").split("/");
  const fn = routes[name] || viewHome;
  $$(".nav a").forEach((a) => a.classList.toggle("active", a.dataset.nav === (name === "tema" ? "temario" : (routes[name] ? name : "inicio"))));
  if (routes[name] && name !== "inicio") { S.last = location.hash; save(); }
  fn(decodeURIComponent(arg || ""));
  closeMenu(); window.scrollTo(0, 0); main.focus({ preventScroll: true });
}
window.addEventListener("hashchange", route);
const go = (h) => { if (location.hash === h) route(); else location.hash = h; };

/* Menú móvil */
function closeMenu() { $("#sidebar").classList.remove("open"); $("#scrim").hidden = true; $("#menuBtn").setAttribute("aria-expanded", "false"); }
$("#menuBtn").addEventListener("click", () => { const o = !$("#sidebar").classList.contains("open"); $("#sidebar").classList.toggle("open", o); $("#scrim").hidden = !o; $("#menuBtn").setAttribute("aria-expanded", String(o)); if (o) $(".nav a").focus(); });
$("#scrim").addEventListener("click", closeMenu);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

/* ───────── Dashboard ───────── */
function viewHome() {
  const h = new Date().getHours();
  const greet = h < 12 ? "Buenos días" : h < 20 ? "Buenas tardes" : "Buenas noches";
  const ov = overall(), studied = Object.keys(S.studied).length;
  const due = GL.cards.filter(cardDue).length, fresh = GL.cards.filter((c) => !S.cards[c.id]).length;
  const lt = S.lastTopic && TOPIC[S.lastTopic];
  const weak = EVAL_TOPICS.map((t) => ({ t, m: mastery(t.id), n: (S.rec[t.id] || []).length })).filter((x) => x.n >= 3 && x.m < 70).sort((a, b) => a.m - b.m);
  const next = (S.last && S.last.replace(/^#\/simulacro\/.*/, "#/simulacro")) || (lt ? "#/tema/" + lt.id : "#/tema/" + (GL.topics.find((t) => !S.studied[t.id]) || GL.topics[0]).id);
  main.innerHTML = `${head(greet, "GastroLab", "Plataforma personal de estudio · " + esc(GL.meta.doc))}
  <div class="grid g4">
    <div class="card stat"><div class="l">Dominio general</div><div class="v ${ov === null ? "na" : ""}">${masteryTxt(ov)}</div>${ov !== null ? bar(ov) : ""}</div>
    <div class="card stat"><div class="l">Temas estudiados</div><div class="v">${studied}<span class="muted" style="font-size:1rem"> / ${GL.topics.length}</span></div>${bar(pct(studied, GL.topics.length))}</div>
    <div class="card stat"><div class="l">Preguntas respondidas</div><div class="v">${S.total.n}</div><div class="l">${Object.keys(S.ans).length} preguntas/casos distintos</div></div>
    <div class="card stat"><div class="l">Aciertos globales</div><div class="v ${S.total.n ? "" : "na"}">${S.total.n ? pct(S.total.ok, S.total.n) + "%" : "Sin evaluar"}</div></div>
    <div class="card stat"><div class="l">Tarjetas pendientes</div><div class="v">${due}</div><div class="l">${fresh} nunca vistas</div></div>
    <div class="card stat"><div class="l">Último tema estudiado</div><div class="v" style="font-size:1.05rem;margin-top:6px">${lt ? esc(lt.title) : '<span class="muted">Ninguno aún</span>'}</div>${lt ? `<div class="l">${esc(GL.modules.find((m) => m.id === lt.module).title)}</div>` : ""}</div>
  </div>
  <p class="muted small">El dominio es una <b>estimación de rendimiento</b>: porcentaje de aciertos en tus últimas 10 respuestas de cada tema, promediado entre los temas evaluados. No es una medida clínica ni absoluta de conocimiento.</p>
  <div class="row" style="margin:18px 0 26px"><a class="btn" href="${esc(next)}">Continuar estudiando →</a></div>
  <h2>Accesos</h2>
  <div class="grid g4" style="margin-bottom:26px">
    <a class="card" href="#/temario"><h3>Aprender</h3><p class="muted small">${GL.topics.length} lecciones en 3 módulos</p></a>
    <a class="card" href="#/flashcards"><h3>Flashcards</h3><p class="muted small">${GL.cards.length} tarjetas · ${due} pendientes</p></a>
    <a class="card" href="#/casos"><h3>Casos clínicos</h3><p class="muted small">${GL.cases.length} casos</p></a>
    <a class="card" href="#/simulacro"><h3>Simulacro</h3><p class="muted small">${GL.questions.length} preguntas de opción múltiple</p></a>
  </div>
  <div class="grid g2">
    <section class="panel"><h2>Temas débiles</h2><p class="muted small">Temas con ≥3 respuestas y menos de 70% de aciertos recientes.</p>${weak.length ? `<div class="stack">${weak.map((w) => `<div class="topic-line"><a class="t" href="#/tema/${w.t.id}">${esc(w.t.title)}</a><span class="pct">${w.m}% · ${w.n} resp.</span></div>${bar(w.m)}`).join("")}</div>` : `<div class="empty">${ov === null ? "Sin evaluar: responde preguntas o casos para detectar temas débiles." : "Ningún tema con ≥3 respuestas está por debajo del 70%."}</div>`}</section>
    <section class="panel"><h2>Dominio por tema</h2><div class="stack">${EVAL_TOPICS.map((t) => { const m = mastery(t.id); return `<div class="topic-line"><a class="t" href="#/tema/${t.id}">${esc(t.n + ". " + t.title)}</a><span class="pct ${m === null ? "muted" : ""}">${masteryTxt(m)}</span></div>`; }).join("")}</div></section>
  </div>`;
}

/* ───────── Temario ───────── */
function viewSyllabus() {
  main.innerHTML = `${head("Aprender", "Temario", "Organizado según los apartados de tu guía. Las prioridades son sugeridas por la guía, no una predicción del examen.")}
  <details class="sec"><summary>Cobertura y límites del documento</summary><div class="body"><ul class="clean">${GL.meta.cobertura.map((x) => `<li>${fmt(x)}</li>`).join("")}</ul><div class="alert warn"><p>${fmt(GL.meta.dosis)}</p></div></div></details>
  ${GL.modules.map((m) => `<section style="margin-top:26px"><h2>${esc(m.title)}</h2><p class="muted small">${esc(m.desc)}</p><div class="grid g3">
    ${GL.topics.filter((t) => t.module === m.id).map((t) => { const mm = mastery(t.id), nq = GL.questions.filter((q) => q.t === t.id).length; return `<a class="card" href="#/tema/${t.id}">
      <div class="row between"><span class="muted small">${esc(t.n)}</span>${badge(t.priority)}</div>
      <h3 style="margin-top:8px">${esc(t.title)}</h3>
      <p class="muted small">${esc(t.source)}</p>
      <div class="row between small"><span>${S.studied[t.id] ? '<span class="badge ok">✓ Estudiado</span>' : '<span class="muted">Pendiente</span>'}</span><span class="muted">${nq ? nq + " preg. · " + masteryTxt(mm) : ""}</span></div>
      ${t.incomplete ? '<p class="small" style="color:var(--warn);margin-bottom:0">⚠ Apartado incompleto en el material</p>' : ""}</a>`; }).join("")}
  </div></section>`).join("")}`;
}

/* ───────── Lección ───────── */
function viewLesson(id) {
  const t = TOPIC[id]; if (!t) return go("#/temario");
  S.lastTopic = id; save();
  const idx = GL.topics.indexOf(t), prev = GL.topics[idx - 1], next = GL.topics[idx + 1];
  const seen = S.seen[id] || [];
  let body = "", total = 0;
  if (t.special === "recall") {
    total = GL.recall.length;
    body = GL.recall.map((r, i) => `<details class="sec" data-i="${i}"><summary><span>${i < 12 ? "Pregunta " + (i + 1) : "Minicaso " + (i - 11)}</span>${seen.includes(i) ? '<span class="seen">✓ revisada</span>' : ""}</summary><div class="body"><p>${fmt(r.q)}</p><div class="alert ok"><p><b>Respuesta razonada:</b> ${fmt(r.a)}</p></div><p class="muted small">Fuente: sección 5, respuesta ${i < 12 ? i + 1 : "minicaso " + (i - 11)}.</p></div></details>`).join("");
  } else if (t.special === "review") {
    total = 4;
    const cmpAll = GL.topics.flatMap((x) => x.sections.flatMap((s) => s.b.filter((b) => b[0] === "cmp").map((b) => ({ t: x, b }))));
    const secs = [
      ["Ideas para recitar (recuperación)", `<ul class="clean">${GL.recite.map((r) => `<li>${fmt(r)}</li>`).join("")}</ul>`],
      ["Errores frecuentes (sustentados en el material)", `<ul class="clean">${GL.mistakes.map((m) => `<li>${fmt(m.x)} <a class="small" href="#/tema/${m.t}">${esc(topicName(m.t))}</a></li>`).join("")}</ul>`],
      ["Diferencias entre material de clase y guía verificada", cmpAll.map((c) => `<h3 style="margin-top:12px">${esc(c.t.title)}</h3>${renderBlock(c.b)}`).join("")],
      ["Fuentes y límites", `<ul class="clean">${GL.meta.fuentes.map((f) => `<li>${esc(f)}</li>`).join("")}</ul><h3>Límites</h3><ul class="clean">${GL.meta.limites.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>`]];
    body = secs.map((s, i) => `<details class="sec" data-i="${i}"><summary><span>${esc(s[0])}</span>${seen.includes(i) ? '<span class="seen">✓ revisado</span>' : ""}</summary><div class="body">${s[1]}</div></details>`).join("");
  } else {
    total = t.sections.length;
    body = t.sections.map((s, i) => `<details class="sec" data-i="${i}"><summary><span>${esc(GL.sectionNames[s.k])}</span>${seen.includes(i) ? '<span class="seen">✓ revisado</span>' : ""}</summary><div class="body">${s.b.map(renderBlock).join("")}</div></details>`).join("");
  }
  const nq = GL.questions.filter((q) => q.t === id).length, nc = GL.cards.filter((c) => c.t === id).length;
  const prog = () => pct((S.seen[id] || []).length, total);
  main.innerHTML = `${head(GL.modules.find((m) => m.id === t.module).title + " · " + t.n, t.title)}
    <div class="row" style="margin:-10px 0 12px">${badge(t.priority)}<span class="muted small">Fuente: ${esc(t.source)}</span></div>
    ${t.incomplete ? `<div class="alert warn"><p><b>Apartado incompleto:</b> ${esc(t.incomplete)}</p></div>` : ""}
    <div class="row between small"><span>Progreso de la lección</span><span id="lp">${prog()}%</span></div>${bar(prog())}
    <div class="easy"><h2>Entiéndelo fácil</h2><p style="margin:0">${fmt(t.easy)}</p></div>
    <div class="row" style="margin-bottom:6px"><button class="btn ghost sm" id="openAll">Expandir todo</button><button class="btn ghost sm" id="closeAll">Ocultar todo</button></div>
    <div id="secs">${body}</div>
    <div class="lesson-actions row">
      <button class="btn ${S.studied[id] ? "ghost" : ""}" id="markBtn" aria-pressed="${!!S.studied[id]}">${S.studied[id] ? "✓ Estudiado (desmarcar)" : "Marcar como estudiado"}</button>
      ${nq ? `<button class="btn sec" id="practice">Practicar este tema (${nq})</button>` : ""}
      ${nc ? `<a class="btn ghost" href="#/flashcards/${id}">Flashcards (${nc})</a>` : ""}
    </div>
    <div class="row between" style="margin-top:18px">${prev ? `<a class="btn ghost sm" href="#/tema/${prev.id}">← ${esc(prev.title)}</a>` : "<span></span>"}${next ? `<a class="btn ghost sm" href="#/tema/${next.id}">${esc(next.title)} →</a>` : ""}</div>`;
  const upd = () => { $("#lp").textContent = prog() + "%"; const b = $(".bar>i", main); b.style.width = prog() + "%"; b.parentNode.setAttribute("aria-valuenow", prog()); };
  $$("#secs details").forEach((d) => d.addEventListener("toggle", () => {
    if (!d.open) return;
    const i = +d.dataset.i, arr = S.seen[id] || (S.seen[id] = []);
    if (!arr.includes(i)) { arr.push(i); save(); upd(); const sm = $("summary", d); sm.insertAdjacentHTML("beforeend", '<span class="seen">✓ revisado</span>'); }
  }));
  $("#openAll").onclick = () => $$("#secs details").forEach((d) => (d.open = true));
  $("#closeAll").onclick = () => $$("#secs details").forEach((d) => (d.open = false));
  $("#markBtn").onclick = () => { if (S.studied[id]) delete S.studied[id]; else S.studied[id] = Date.now(); save(); toast(S.studied[id] ? "Tema marcado como estudiado" : "Marca retirada"); viewLesson(id); };
  if (nq) $("#practice").onclick = () => startExam({ ids: shuffle(GL.questions.filter((q) => q.t === id).map((q) => q.id)).slice(0, 10), label: "Práctica: " + t.title });
}

/* ───────── Flashcards ───────── */
let FC = null;
function viewCards(pre) {
  const topic = TOPIC[pre] ? pre : (FC && FC.topic) || "all";
  const mode = (FC && FC.mode) || "due";
  const pool = () => GL.cards.filter((c) => FC.topic === "all" || c.t === FC.topic);
  FC = { topic, mode, queue: [], cur: null, flipped: false, done: 0 };
  const count = (tid) => GL.cards.filter((c) => c.t === tid).length;
  main.innerHTML = `${head("Repetición espaciada", "Flashcards", "Haz clic en la tarjeta (o pulsa Espacio) para voltearla. Califica con 1 · 2 · 3.")}
  <div class="panel row" style="margin-bottom:16px">
    <label class="small">Tema <select id="fcTopic"><option value="all">Todos los temas</option>${topicOptions(topic, count)}</select></label>
    <div class="seg" role="group" aria-label="Modo"><button data-m="all" aria-pressed="${mode === "all"}">Todas</button><button data-m="due" aria-pressed="${mode === "due"}">Pendientes</button></div>
  </div>
  <div id="fcArea"></div>`;
  const build = () => {
    const p = pool(); FC.queue = shuffle(FC.mode === "due" ? p.filter(cardDue) : p); FC.total = FC.queue.length; FC.done = 0; next();
  };
  const next = () => {
    const a = $("#fcArea"); FC.cur = FC.queue.shift(); FC.flipped = false;
    if (!FC.cur) {
      const p = pool(), dueN = p.filter(cardDue).length;
      a.innerHTML = `<div class="empty"><h2>${FC.total ? "Sesión completada" : FC.mode === "due" ? "No hay tarjetas pendientes" : "No hay tarjetas"}</h2><p>${FC.total ? FC.done + " calificaciones guardadas." : ""} ${dueN ? dueN + " pendientes en este filtro." : "Vuelve cuando lleguen las próximas fechas de repaso."}</p><button class="btn" id="fcAll">Repasar todas las del filtro</button></div>`;
      $("#fcAll").onclick = () => { FC.mode = "all"; $$(".seg button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.m === "all"))); build(); };
      return;
    }
    const c = FC.cur, st = S.cards[c.id];
    a.innerHTML = `<div class="row between small" style="max-width:640px;margin:0 auto"><span>Tarjeta ${FC.done + 1} · quedan ${FC.queue.length + 1}</span><span class="muted">${esc(topicName(c.t))}</span></div>
      ${bar(pct(FC.done, FC.done + FC.queue.length + 1))}
      <div class="fc-wrap"><button class="fc" id="fc" aria-label="Tarjeta: pulsa para voltear"><div class="face front"><span class="lab">Pregunta</span><p>${fmt(c.f)}</p></div><div class="face back" aria-hidden="true"><span class="lab">Respuesta</span><p>${fmt(c.b)}</p></div></button></div>
      <p class="muted small" style="text-align:center">${st ? `Último repaso: ${esc({ again: "Otra vez", hard: "Difícil", easy: "Fácil" }[st.last])} · intervalo ${st.iv} d · próxima ${esc(st.due)}` : "Tarjeta nueva"}</p>
      <div class="rate" id="rate" hidden><button class="btn again" data-r="again">Otra vez<small>repite hoy · mañana</small></button><button class="btn hard" data-r="hard">Difícil<small>mañana</small></button><button class="btn easyb" data-r="easy">Fácil<small>${(st && st.last === "easy" && st.iv >= 3) ? st.iv * 2 : 3} días</small></button></div>`;
    $("#fc").onclick = flip;
    $$("#rate button").forEach((b) => (b.onclick = () => rate(b.dataset.r)));
  };
  const flip = () => { const f = $("#fc"); if (!f) return; FC.flipped = !FC.flipped; f.classList.toggle("flipped", FC.flipped); $(".front", f).setAttribute("aria-hidden", String(FC.flipped)); $(".back", f).setAttribute("aria-hidden", String(!FC.flipped)); $("#rate").hidden = false; };
  const rate = (r) => {
    const c = FC.cur, st = S.cards[c.id] || { iv: 0, n: 0, h: "" };
    if (r === "easy") st.iv = st.last === "easy" && st.iv >= 3 ? st.iv * 2 : 3;
    else st.iv = r === "hard" ? 1 : 0;
    st.due = dayStr(Math.max(1, st.iv)); st.last = r; st.n++; st.h = (st.h + r[0]).slice(-10); st.ts = Date.now();
    S.cards[c.id] = st; save(); FC.done++;
    if (r === "again") FC.queue.push(c);
    next();
  };
  $("#fcTopic").onchange = (e) => { FC.topic = e.target.value; build(); };
  $$(".seg button").forEach((b) => (b.onclick = () => { FC.mode = b.dataset.m; $$(".seg button").forEach((x) => x.setAttribute("aria-pressed", String(x === b))); build(); }));
  const key = (e) => {
    if (!FC.cur || e.target.tagName === "SELECT" || $("#dlg").open) return;
    if (e.key === " " && (e.target === document.body || e.target === main)) { e.preventDefault(); flip(); }
    else if (FC.flipped && ["1", "2", "3"].includes(e.key)) rate(["again", "hard", "easy"][+e.key - 1]);
  };
  document.addEventListener("keydown", key); cleanup = () => document.removeEventListener("keydown", key);
  build();
}

/* ───────── Motor de examen (preguntas y casos) ───────── */
let EX = null, timerId = null;
function vignette(c) {
  const rows = [["Paciente", c.pt], ["Antecedentes", c.hx], ["Motivo de consulta", c.mc], ["Síntomas y signos", c.sx], ["Resultados", c.lab]].filter((r) => r[1]);
  return `<div class="vignette">${rows.map((r) => `<div><b>${esc(r[0])}</b> ${fmt(r[1])}</div>`).join("")}</div>`;
}
function startExam({ ids, label, minutes = 0 }) {
  if (!ids.length) return toast("No hay preguntas disponibles para esa selección.");
  EX = { ids, label, perm: ids.map(() => shuffle([0, 1, 2, 3])), answers: ids.map(() => null), i: 0, start: Date.now(), limit: minutes ? minutes * 60000 : 0, done: false };
  if (location.hash.startsWith("#/simulacro")) runExam(); else location.hash = "#/simulacro/run";
}
function viewExam(arg) {
  if (arg === "run" && EX && !EX.done) return runExam();
  if (arg === "result" && EX && EX.done) return showResult();
  const cnt = (tid) => GL.questions.filter((q) => q.t === tid).length;
  main.innerHTML = `${head("Evaluación", "Simulador de examen", `${GL.questions.length} preguntas de opción múltiple basadas en tu guía. La respuesta correcta permanece oculta hasta entregar.`)}
  <div class="panel stack" style="max-width:720px">
    <label class="small" style="display:block">Tema<br><select id="exTopic" style="width:100%"><option value="all">Todos los temas (${GL.questions.length})</option>${topicOptions("", cnt)}</select></label>
    <div><div class="small" style="margin-bottom:6px">Número de preguntas</div><div class="seg" role="group" aria-label="Número de preguntas" id="exN">${[10, 20, 40, 0].map((n, i) => `<button data-n="${n}" aria-pressed="${i === 0}">${n || "Todas"}</button>`).join("")}</div></div>
    <label class="chk"><input type="checkbox" id="exTimer"> Temporizador (1 minuto por pregunta)</label>
    <p class="muted small" id="exInfo"></p>
    <button class="btn" id="exGo">Comenzar simulacro</button>
  </div>
  <h2 style="margin-top:28px">Historial</h2>
  ${S.exams.length ? table(["Fecha", "Simulacro", "Preguntas", "Calificación"], S.exams.slice().reverse().slice(0, 15).map((e) => [dateFmt(e.ts), e.label, String(e.n), e.ok + "/" + e.n + " (" + pct(e.ok, e.n) + "%)"])) : '<div class="empty">Aún no has hecho simulacros.</div>'}`;
  let n = 10;
  const info = () => { const tp = $("#exTopic").value, avail = tp === "all" ? GL.questions.length : cnt(tp), real = n ? Math.min(n, avail) : avail; $("#exInfo").textContent = `Se usarán ${real} preguntas${n && avail < n ? ` (solo hay ${avail} disponibles para este tema)` : ""}.`; return { tp, real }; };
  $$("#exN button").forEach((b) => (b.onclick = () => { n = +b.dataset.n; $$("#exN button").forEach((x) => x.setAttribute("aria-pressed", String(x === b))); info(); }));
  $("#exTopic").onchange = info; info();
  $("#exGo").onclick = () => {
    const { tp, real } = info();
    const ids = shuffle(GL.questions.filter((q) => tp === "all" || q.t === tp).map((q) => q.id)).slice(0, real);
    startExam({ ids, label: tp === "all" ? "Todos los temas" : topicName(tp), minutes: $("#exTimer").checked ? ids.length : 0 });
  };
}
function runExam() {
  const E = EX, q = ITEM[E.ids[E.i]], perm = E.perm[E.i], answered = E.answers.filter((a) => a !== null).length;
  main.innerHTML = `<div class="row between" style="margin-bottom:8px"><div><div class="eyebrow">${esc(E.label)}</div><h1 style="font-size:1.15rem">Pregunta ${E.i + 1} de ${E.ids.length}</h1></div>${E.limit ? '<span class="timer" id="tmr" aria-live="off"></span>' : ""}</div>
    ${bar(pct(answered, E.ids.length))}<p class="muted small">${answered} respondidas · ${esc(topicName(q.t))}</p>
    <div class="panel">${q.kind === "c" ? `<span class="badge">${esc(q.type)}</span>${vignette(q)}` : ""}<p style="font-size:1.08rem;font-weight:600">${fmt(q.q)}</p>
      <div class="opts" role="group" aria-label="Opciones">${perm.map((oi, k) => `<button class="opt" data-o="${oi}" aria-pressed="${E.answers[E.i] === oi}"><span class="k">${LETTERS[k]}</span><span>${fmt(q.o[oi])}</span></button>`).join("")}</div>
      <div class="row between"><button class="btn ghost" id="prev" ${E.i ? "" : "disabled"}>← Anterior</button>${E.i < E.ids.length - 1 ? '<button class="btn" id="next">Siguiente →</button>' : '<button class="btn sec" id="finish2">Entregar</button>'}</div>
    </div>
    <div class="qnav" aria-label="Ir a pregunta">${E.ids.map((_, k) => `<button class="${k === E.i ? "cur" : E.answers[k] !== null ? "done" : ""}" data-k="${k}" aria-label="Pregunta ${k + 1}${E.answers[k] !== null ? ", respondida" : ""}">${k + 1}</button>`).join("")}</div>
    <div class="row end" style="margin-top:18px"><button class="btn ghost" id="quit">Abandonar</button><button class="btn sec" id="finish">Entregar examen</button></div>`;
  $$(".opt").forEach((b) => (b.onclick = () => { E.answers[E.i] = +b.dataset.o; $$(".opt").forEach((x) => x.setAttribute("aria-pressed", String(x === b))); const nb = $(`.qnav [data-k="${E.i}"]`); nb.classList.add("done"); }));
  $("#prev").onclick = () => { E.i--; runExam(); };
  if ($("#next")) $("#next").onclick = () => { E.i++; runExam(); };
  $$(".qnav button").forEach((b) => (b.onclick = () => { E.i = +b.dataset.k; runExam(); }));
  const fin = async () => { const left = E.answers.filter((a) => a === null).length; if (await ask(left ? `Tienes ${left} pregunta(s) sin responder, que contarán como incorrectas. ¿Entregar el examen?` : "¿Entregar el examen? Ya no podrás cambiar respuestas.", "Entregar")) gradeExam(); };
  $("#finish").onclick = fin; if ($("#finish2")) $("#finish2").onclick = fin;
  $("#quit").onclick = async () => { if (await ask("¿Abandonar el simulacro? No se guardará nada de este intento.", "Abandonar")) { EX = null; go("#/simulacro"); } };
  if (E.limit) {
    const tick = () => { const ms = E.limit - (Date.now() - E.start), el = $("#tmr"); if (ms <= 0) { toast("Tiempo agotado: examen entregado."); gradeExam(); return; } if (el) { const s = Math.ceil(ms / 1000); el.textContent = "⏱ " + Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0"); el.classList.toggle("low", s < 60); } };
    clearInterval(timerId); timerId = setInterval(tick, 1000); tick();
    cleanup = () => clearInterval(timerId);
  }
}
function gradeExam() {
  clearInterval(timerId);
  const E = EX; E.done = true; E.dur = Date.now() - E.start;
  E.ok = 0; E.byTopic = {};
  E.ids.forEach((id, k) => {
    const q = ITEM[id], a = E.answers[k], ok = a === q.a, bt = E.byTopic[q.t] || (E.byTopic[q.t] = [0, 0]);
    bt[1]++; if (ok) { E.ok++; bt[0]++; }
    if (a !== null) record(id, ok);
  });
  S.exams.push({ ts: Date.now(), label: E.label, n: E.ids.length, ok: E.ok, dur: E.dur }); if (S.exams.length > 50) S.exams.shift(); save();
  location.hash = "#/simulacro/result";
}
function showResult() {
  const E = EX, sc = pct(E.ok, E.ids.length), min = Math.round(E.dur / 60000);
  let only = false;
  const list = () => E.ids.map((id, k) => ({ q: ITEM[id], a: E.answers[k], k })).filter((x) => !only || x.a !== x.q.a).map(({ q, a, k }) => {
    const ok = a === q.a;
    return `<div class="card review-item ${ok ? "ok" : "bad"}" style="margin:10px 0"><div class="row between small"><span>${k + 1}. ${esc(topicName(q.t))}</span><span class="badge ${ok ? "ok" : ""}" style="${ok ? "" : "color:var(--bad);border-color:var(--bad)"}">${ok ? "Correcta" : a === null ? "Sin responder" : "Incorrecta"}</span></div>
      ${q.kind === "c" ? vignette(q) : ""}<p style="font-weight:600">${fmt(q.q)}</p>
      ${a !== null && !ok ? `<p class="small" style="color:var(--bad)">Tu respuesta: ${fmt(q.o[a])}</p>` : ""}
      <p class="small" style="color:var(--ok)">Correcta: ${fmt(q.o[q.a])}</p>
      <div class="alert info"><p>${fmt(q.e)}</p><p class="muted small">Fuente: ${esc(q.s)}</p></div></div>`;
  }).join("") || '<div class="empty">No hay preguntas incorrectas. ¡Bien hecho!</div>';
  main.innerHTML = `${head("Resultado", E.label)}
    <div class="grid g3"><div class="card"><div class="muted small">Calificación</div><div class="score" style="color:${sc >= 70 ? "var(--ok)" : sc >= 50 ? "var(--warn)" : "var(--bad)"}">${sc}%</div><div class="muted">${E.ok} de ${E.ids.length} correctas · ${min < 1 ? "<1" : min} min</div></div>
    <div class="card" style="grid-column:span 2;min-width:0"><h3>Estadísticas por tema</h3>${table(["Tema", "Aciertos", "%"], Object.entries(E.byTopic).map(([t, v]) => [topicName(t), v[0] + "/" + v[1], pct(v[0], v[1]) + "%"]))}</div></div>
    <div class="row between" style="margin:22px 0 6px"><h2 style="margin:0">Revisión</h2><div class="seg" role="group" aria-label="Filtro"><button data-f="0" aria-pressed="true">Todas</button><button data-f="1" aria-pressed="false">Solo incorrectas</button></div></div>
    <div id="rev">${list()}</div>
    <div class="row" style="margin-top:16px"><a class="btn" href="#/simulacro">Nuevo simulacro</a><a class="btn ghost" href="#/errores">Ver mis errores</a></div>`;
  $$(".seg button", main).forEach((b) => (b.onclick = () => { only = b.dataset.f === "1"; $$(".seg button", main).forEach((x) => x.setAttribute("aria-pressed", String(x === b))); $("#rev").innerHTML = list(); }));
}

/* ───────── Casos clínicos ───────── */
let CS = { topic: "all", i: 0 };
function viewCases() {
  const list = GL.cases.filter((c) => CS.topic === "all" || c.t === CS.topic);
  if (CS.i >= list.length) CS.i = 0;
  const cnt = (tid) => GL.cases.filter((c) => c.t === tid).length;
  main.innerHTML = `${head("Razonamiento clínico", "Casos clínicos", "Pacientes ficticios; respuestas respaldadas por tu guía. La respuesta se revela al contestar.")}
    <div class="panel row" style="margin-bottom:14px"><label class="small">Tema <select id="csTopic"><option value="all">Todos (${GL.cases.length})</option>${topicOptions(CS.topic, cnt)}</select></label></div>
    <div class="chips" style="margin-bottom:14px" aria-label="Lista de casos">${list.map((c, k) => { const a = S.ans[c.id]; return `<button data-k="${k}" aria-current="${k === CS.i}" style="${k === CS.i ? "border-color:var(--accent);color:var(--accent)" : ""}">${k + 1}${a ? (a.last ? " ✓" : " ✗") : ""}</button>`; }).join("")}</div>
    <div id="case"></div>`;
  $("#csTopic").onchange = (e) => { CS = { topic: e.target.value, i: 0 }; viewCases(); };
  $$(".chips button").forEach((b) => (b.onclick = () => { CS.i = +b.dataset.k; viewCases(); }));
  const c = list[CS.i]; if (!c) { $("#case").innerHTML = '<div class="empty">No hay casos para este tema.</div>'; return; }
  const perm = shuffle([0, 1, 2, 3]);
  $("#case").innerHTML = `<article class="panel"><div class="row between"><span class="badge">${esc(c.type)}</span><span class="muted small">${esc(topicName(c.t))}</span></div>
    <h2 style="margin-top:10px">Caso ${CS.i + 1}</h2>${vignette(c)}<p style="font-weight:600;font-size:1.06rem">${fmt(c.q)}</p>
    <div class="opts">${perm.map((oi, k) => `<button class="opt" data-o="${oi}"><span class="k">${LETTERS[k]}</span><span>${fmt(c.o[oi])}</span></button>`).join("")}</div>
    <div id="csFb" aria-live="polite"></div>
    <div class="row between" style="margin-top:10px"><button class="btn ghost" id="csPrev" ${CS.i ? "" : "disabled"}>← Anterior</button><button class="btn" id="csNext" ${CS.i < list.length - 1 ? "" : "disabled"}>Siguiente caso →</button></div></article>`;
  $$("#case .opt").forEach((b) => (b.onclick = () => {
    const o = +b.dataset.o, ok = o === c.a;
    $$("#case .opt").forEach((x) => { x.disabled = true; if (+x.dataset.o === c.a) x.classList.add("right"); });
    if (!ok) b.classList.add("wrong");
    record(c.id, ok);
    $("#csFb").innerHTML = `<div class="alert ${ok ? "ok" : "bad"}"><p><b>${ok ? "Correcto." : "Incorrecto."}</b> Respuesta: ${fmt(c.o[c.a])}</p><p>${fmt(c.e)}</p><p class="muted small">Fuente: ${esc(c.s)}</p></div>`;
    const chip = $(`.chips [data-k="${CS.i}"]`); if (chip) chip.textContent = CS.i + 1 + (ok ? " ✓" : " ✗");
  }));
  $("#csPrev").onclick = () => { CS.i--; viewCases(); };
  $("#csNext").onclick = () => { CS.i++; viewCases(); };
}

/* ───────── Comparador ───────── */
function viewCompare() {
  main.innerHTML = `${head("Diferenciar", "Comparador de enfermedades", "Tablas construidas solo con datos de la guía. En pantallas pequeñas, desliza la tabla horizontalmente.")}
    <nav class="chips" aria-label="Comparaciones" style="margin-bottom:18px">${GL.compare.map((c) => `<button data-id="${c.id}">${esc(c.title)}</button>`).join("")}</nav>
    ${GL.compare.map((c) => `<section class="panel" id="${c.id}" style="margin-bottom:18px"><h2>${esc(c.title)}</h2><p class="muted small">Fuente: ${esc(c.src)}</p>${c.note ? `<div class="alert warn"><p>${esc(c.note)}</p></div>` : ""}${table(c.head, c.rows)}</section>`).join("")}`;
  $$(".chips button", main).forEach((b) => (b.onclick = () => { const s = document.getElementById(b.dataset.id); s.scrollIntoView({ behavior: "smooth" }); s.setAttribute("tabindex", "-1"); s.focus({ preventScroll: true }); }));
}

/* ───────── Mis errores ───────── */
let ER = { topic: "all", resolved: false };
function viewErrors() {
  const all = Object.entries(S.errors).filter(([id]) => ITEM[id]).map(([id, e]) => ({ id, e, it: ITEM[id], p: errPriority(e) }));
  const list = all.filter((x) => (ER.topic === "all" || x.it.t === ER.topic) && (ER.resolved || x.p > 0)).sort((a, b) => b.p - a.p || b.e.last - a.e.last);
  const cnt = (tid) => all.filter((x) => x.it.t === tid).length;
  main.innerHTML = `${head("Aprender del error", "Mis errores", "Cada fallo queda registrado. Responder bien después reduce su prioridad sin borrar el historial.")}
    <div class="panel row between" style="margin-bottom:14px"><div class="row"><label class="small">Tema <select id="erTopic"><option value="all">Todos</option>${topicOptions(ER.topic, cnt)}</select></label>
    <label class="chk small"><input type="checkbox" id="erRes" ${ER.resolved ? "checked" : ""}> Mostrar superados</label></div>
    <button class="btn" id="erAll" ${list.length ? "" : "disabled"}>Practicar ${list.length} de nuevo</button></div>
    ${list.length ? list.map(({ id, e, it, p }) => `<div class="card review-item ${p ? "bad" : "ok"}" style="margin:10px 0">
      <div class="row between small"><span>${esc(topicName(it.t))} · ${it.kind === "c" ? "Caso clínico" : "Pregunta"}</span><span>Fallada <b>${e.n}</b> ${e.n === 1 ? "vez" : "veces"} · ${p ? "prioridad " + p : '<span style="color:var(--ok)">superada</span>'}${e.streak ? " · " + e.streak + " acierto(s) después" : ""}</span></div>
      <p style="font-weight:600">${fmt(it.q)}</p>
      <details><summary class="small" style="cursor:pointer;color:var(--accent)">Ver respuesta y explicación</summary><p class="small" style="color:var(--ok)">Correcta: ${fmt(it.o[it.a])}</p><p class="small">${fmt(it.e)}</p><p class="muted small">Fuente: ${esc(it.s)}</p></details>
      <div class="row" style="margin-top:10px"><button class="btn sm ghost" data-id="${id}">Practicar de nuevo</button><span class="muted small">Último fallo: ${dateFmt(e.last)}</span></div></div>`).join("")
    : `<div class="empty">${all.length ? "No hay errores pendientes con este filtro." : "Todavía no hay errores registrados. Haz un simulacro o resuelve casos."}</div>`}`;
  $("#erTopic").onchange = (e) => { ER.topic = e.target.value; viewErrors(); };
  $("#erRes").onchange = (e) => { ER.resolved = e.target.checked; viewErrors(); };
  $("#erAll").onclick = () => startExam({ ids: shuffle(list.map((x) => x.id)), label: "Repaso de errores" });
  $$("[data-id]", main).forEach((b) => (b.onclick = () => startExam({ ids: [b.dataset.id], label: "Repaso de un error" })));
}

/* ───────── Repaso rápido ───────── */
function viewQuick() {
  const q = GL.quick;
  const cmpAll = GL.topics.flatMap((x) => x.sections.flatMap((s) => s.b.filter((b) => b[0] === "cmp").map((b) => ({ t: x, b }))));
  main.innerHTML = `${head("Antes del examen", "Repaso rápido", "Vista compacta con lo de alto rendimiento de tu guía.")}
    <nav class="chips" style="margin-bottom:18px"><a href="#q-ideas">Conceptos clave</a><a href="#q-clas">Clasificaciones</a><a href="#q-alarm">Signos de alarma</a><a href="#q-alg">Algoritmos</a><a href="#q-dif">Diferencias</a><a href="#q-err">Errores frecuentes</a><a href="#q-cmp">Clase vs guía</a></nav>
    <section class="panel" id="q-ideas"><h2>Conceptos de alto rendimiento</h2><ul class="clean">${GL.recite.map((r) => `<li>${fmt(r)}</li>`).join("")}</ul></section>
    <h2 id="q-clas" style="margin-top:24px">Clasificaciones importantes</h2><div class="grid g3">${q.classifications.map((c) => `<div class="card"><h3>${esc(c.title)}</h3><ul class="clean small">${c.items.map((i) => `<li>${fmt(i)}</li>`).join("")}</ul></div>`).join("")}</div>
    <h2 id="q-alarm" style="margin-top:24px">Signos de alarma</h2><div class="grid g2">${q.alarms.map((a) => `<div class="alert warn"><p><b>${esc(a.title)}:</b> ${fmt(a.x)}</p></div>`).join("")}</div>
    <h2 id="q-alg" style="margin-top:24px">Algoritmos diagnósticos y terapéuticos</h2><div class="grid g3">${q.algorithms.map((a) => `<div class="card"><h3>${esc(a.title)}</h3>${flow(a.steps)}</div>`).join("")}</div>
    <h2 id="q-dif" style="margin-top:24px">Diferencias entre enfermedades</h2><div class="grid g2">${GL.compare.map((c) => `<div class="card"><h3>${esc(c.title)}</h3><ul class="clean small">${c.rows.slice(0, 3).map((r) => `<li><b>${esc(r[0])}:</b> ${r.slice(1).map((x, i) => esc(c.head[i + 1]) + " → " + fmt(x)).join(" · ")}</li>`).join("")}</ul><a class="small" href="#/comparador">Tabla completa</a></div>`).join("")}</div>
    <section class="panel" id="q-err" style="margin-top:24px"><h2>Errores frecuentes señalados en la guía</h2><ul class="clean">${GL.mistakes.map((m) => `<li>${fmt(m.x)}</li>`).join("")}</ul></section>
    <section id="q-cmp" style="margin-top:24px"><h2>Material de clase vs guía verificada</h2>${cmpAll.map((c) => `<h3 style="margin-top:14px">${esc(c.t.title)}</h3>${renderBlock(c.b)}`).join("")}</section>`;
  $$(".chips a", main).forEach((a) => (a.onclick = (e) => { e.preventDefault(); document.querySelector(a.getAttribute("href")).scrollIntoView({ behavior: "smooth" }); }));
}

/* ───────── Progreso y datos ───────── */
function viewProgress() {
  const rows = GL.topics.map((t) => { const qs = [...GL.questions, ...GL.cases].filter((q) => q.t === t.id), ans = qs.reduce((s, q) => s + (S.ans[q.id] ? S.ans[q.id].n : 0), 0), ok = qs.reduce((s, q) => s + (S.ans[q.id] ? S.ans[q.id].ok : 0), 0); return [t.n + ". " + t.title, S.studied[t.id] ? "✓" : "—", String(ans), ans ? pct(ok, ans) + "%" : "—", masteryTxt(mastery(t.id))]; });
  const reviewed = Object.keys(S.cards).length;
  main.innerHTML = `${head("Seguimiento", "Progreso y datos", "Todo se guarda solo en este navegador (localStorage).")}
    <div class="grid g4"><div class="card stat"><div class="l">Respuestas</div><div class="v">${S.total.n}</div></div><div class="card stat"><div class="l">Aciertos</div><div class="v ${S.total.n ? "" : "na"}">${S.total.n ? pct(S.total.ok, S.total.n) + "%" : "Sin evaluar"}</div></div><div class="card stat"><div class="l">Tarjetas repasadas</div><div class="v">${reviewed}<span class="muted" style="font-size:1rem"> / ${GL.cards.length}</span></div></div><div class="card stat"><div class="l">Simulacros</div><div class="v">${S.exams.length}</div></div></div>
    <h2 style="margin-top:24px">Por tema</h2>${table(["Tema", "Estudiado", "Respuestas", "Aciertos (total)", "Dominio (últ. 10)"], rows)}
    <h2 style="margin-top:24px">Preferencias</h2><div class="panel row"><span>Tema visual</span><div class="seg" role="group" aria-label="Tema visual"><button data-t="dark" aria-pressed="${S.settings.theme !== "light"}">Oscuro</button><button data-t="light" aria-pressed="${S.settings.theme === "light"}">Claro</button></div></div>
    <h2 style="margin-top:24px">Copia de seguridad</h2>
    <div class="panel stack"><div class="row"><button class="btn" id="exp">Exportar progreso (JSON)</button><label class="btn ghost" for="imp" style="cursor:pointer">Importar progreso</label><input type="file" id="imp" accept="application/json,.json" hidden></div>
    <p class="muted small">La importación reemplaza el progreso actual tras confirmar. Solo se aceptan archivos exportados por GastroLab.</p>
    <div><button class="btn danger" id="reset">Reiniciar todo el progreso</button></div></div>`;
  $$(".seg button", main).forEach((b) => (b.onclick = () => { S.settings.theme = b.dataset.t; save(); applyTheme(); viewProgress(); }));
  $("#exp").onclick = () => {
    const blob = new Blob([JSON.stringify({ app: "GastroLab", exported: new Date().toISOString(), state: S }, null, 1)], { type: "application/json" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "gastrolab-progreso-" + dayStr() + ".json"; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); toast("Progreso exportado");
  };
  $("#imp").onchange = (e) => {
    const f = e.target.files[0]; if (!f) return;
    if (f.size > 5e6) { toast("Archivo demasiado grande."); return; }
    const r = new FileReader();
    r.onload = async () => {
      let data = null; try { data = JSON.parse(r.result); } catch (err) { /* inválido */ }
      const st = data && data.app === "GastroLab" ? sanitize(data.state) : null;
      e.target.value = "";
      if (!st) { toast("Archivo no válido: no es una exportación de GastroLab."); return; }
      if (await ask("¿Reemplazar tu progreso actual por el del archivo?", "Importar")) { S = st; save(); applyTheme(); toast("Progreso importado"); viewProgress(); }
    };
    r.readAsText(f);
  };
  $("#reset").onclick = async () => { if (await ask("Se borrarán respuestas, errores, tarjetas, simulacros y temas estudiados. Esta acción no se puede deshacer. ¿Continuar?", "Borrar todo")) { S = blank(); save(); applyTheme(); toast("Progreso reiniciado"); viewProgress(); } };
}

/* ───────── Inicio ───────── */
applyTheme();
if (!location.hash) location.replace("#/inicio");
route();
