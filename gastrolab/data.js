/* GastroLab · Contenido extraído EXCLUSIVAMENTE de «Guía de estudio · Gastroenterología (Estómago y duodeno · Intestino delgado)».
   «lám.» = número de lámina del PDF de clase citado por la guía. Marcado: **texto** = término destacado.
   Bloques de lección: ["p",txt] ["ul",[..]] ["tbl",[cab],[[fila]..]] ["flow",[pasos]] ["cmp",{c,g,d}] ["warn",txt] ["note",txt] */
"use strict";
const GL = {};

GL.meta = {
  doc: "Guía de estudio · Gastroenterología — Estómago y duodeno · Intestino delgado",
  cobertura: [
    "Desarrollado: úlcera péptica, gastritis, Zollinger-Ellison, complicaciones de la úlcera, dispepsia, gastroparesia, cáncer gástrico, cuerpos extraños; síndrome diarreico, malabsorción y celíaca, Crohn, intestino irritable, obstrucción intestinal, isquemia mesentérica.",
    "Solo mencionado (breve): esprúe tropical, Whipple, intestino corto, ileítis infecciosa y por AINE, neoplasias del intestino delgado.",
    "Vacío en el material: el tratamiento del cáncer gástrico (lám. 100) y las neoplasias malignas del intestino delgado (lám. 233, 235) casi no traen contenido.",
    "Las prioridades son «sugeridas», no una predicción del examen."
  ],
  dosis: "Las dosis son las que aparecen en las láminas. Solo las del esquema cuádruple con bismuto se contrastaron con guía (ACG 2024); el resto es «del material, no verificado externamente».",
  fuentes: [
    "Fuente base: PDF unido de 235 láminas (Equipo 3 «Estómago y duodeno», lám. 1–101; equipo «Intestino», lám. 102–235).",
    "Chey WD y cols. ACG Clinical Guideline: Treatment of Helicobacter pylori Infection. Am J Gastroenterol 2024.",
    "Laine L y cols. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol 2021.",
    "Roma IV, criterios de SII (resumen BadGut/Gastrointestinal Society).",
    "Husby S y cols. ESPGHAN guidelines for diagnosing coeliac disease 2020. JPGN 2020.",
    "Bala M y cols. Acute mesenteric ischemia: updated guidelines of the WSES. World J Emerg Surg 2022;17:54."
  ],
  limites: [
    "Las guías se verificaron en resúmenes o texto secundario, no en el PDF original.",
    "Dosis de lám. 14–16, 61, 122 y esquemas de Crohn son «del material», sin contraste externo.",
    "Las bases de fisiología y la regla COX-1 son conocimiento establecido, no consultado en libro.",
    "Preguntas y minicasos son didácticos; no sustituyen el criterio clínico ni predicen el examen.",
    "Material de estudio académico, no prescripción individual."
  ]
};

GL.modules = [
  { id: "estomago", title: "Estómago y duodeno", desc: "Bases, enfermedad ácido-péptica, complicaciones, dispepsia, cáncer gástrico y cuerpos extraños." },
  { id: "intestino", title: "Intestino delgado", desc: "Diarrea, malabsorción, Crohn, intestino irritable, obstrucción, isquemia y neoplasias." },
  { id: "repaso", title: "Repaso final", desc: "Recuperación activa con respuestas razonadas, ideas para recitar y errores frecuentes." }
];

GL.priorities = {
  esencial: "Esencial", aplicacion: "Aplicación", ampliacion: "Ampliación", base: "Fundamentos", repaso: "Repaso"
};

GL.topics = [
/* ───────── 0. BASES ───────── */
{ id: "bases", n: "0", title: "Bases desde cero", module: "estomago", priority: "base", source: "Sección 1 (lám. 2–3, 7–8, 103, 125–130)",
  easy: "El estómago guarda, tritura y acidifica la comida; el duodeno la neutraliza con bilis y jugo pancreático; el yeyuno absorbe casi todo y el íleon se especializa en B12 y sales biliares. Casi toda la patología gástrica se entiende como **agresión > defensa**.",
  sections: [
    { k: "anat", b: [
      ["p", "**Estómago:** órgano muscular hueco entre esófago y duodeno. Recibe y almacena el alimento, lo tritura (digestión mecánica) y lo convierte en quimo. Produce **HCl y pepsina** (digerir proteínas), **moco y bicarbonato** (protegerse) y **factor intrínseco** (necesario para absorber vitamina B12 en el íleon). El **píloro** regula el paso del quimo al duodeno (lám. 2)."],
      ["p", "**Duodeno** (≈25 cm, en «C»): recibe el quimo ácido, bilis (grasas) y jugo pancreático (bicarbonato que neutraliza el ácido y enzimas). Aquí empieza la absorción de **hierro, calcio, magnesio y folato** (lám. 3, 103)."],
      ["tbl", ["Segmento", "Ubicación y aspecto", "Función clave"], [
        ["Yeyuno (2/5 proximales)", "Mayor calibre, pared gruesa, muchos pliegues circulares; más vascularizado (rojizo)", "Absorbe la mayoría de carbohidratos, aminoácidos, grasas, agua, vitaminas y minerales"],
        ["Íleon (3/5 distales)", "Más delgado y pálido, menos pliegues, placas de Peyer", "Vitamina B12 (con factor intrínseco), sales biliares (circulación enterohepática), agua y electrolitos; función inmunológica"]]]
    ]},
    { k: "fisio", b: [
      ["p", "**Digestión química** (lám. 125–130): amilasa salival/pancreática y disacaridasas (carbohidratos → monosacáridos); pepsina (pH <3) y enzimas pancreáticas (proteínas → aminoácidos); lipasa gástrica y pancreática con bilis (lípidos → ácidos grasos y monoglicéridos)."],
      ["tbl", ["Concepto", "Definición"], [
        ["Maldigestión", "Hidrólisis defectuosa"],
        ["Malabsorción", "Absorción mucosa defectuosa"],
        ["En común", "Ambas se manifiestan como síndrome malabsortivo"]]],
      ["p", "**Idea madre del bloque gástrico:** la enfermedad aparece cuando la suma de los **agresores** (ácido, pepsina, H. pylori, AINE) supera a las **defensas** (moco, bicarbonato, prostaglandinas, flujo sanguíneo) (lám. 7–8)."],
      ["flow", ["Agresores: ácido + pepsina, H. pylori, AINE", "Agresión > defensa (moco, bicarbonato, prostaglandinas, flujo)", "Lesión de la mucosa"]]
    ]},
    { k: "keys", b: [["ul", ["Factor intrínseco (estómago) + íleon = absorción de B12.", "Hierro, calcio, magnesio y folato empiezan a absorberse en el duodeno.", "Maldigestión ≠ malabsorción, pero ambas dan síndrome malabsortivo."]]]}
  ]},

/* ───────── 1. ÚLCERA PÉPTICA ───────── */
{ id: "ulcera", n: "1", title: "Enfermedad ácido-péptica y úlcera péptica", module: "estomago", priority: "esencial", source: "Sección 2.1 (lám. 4–19, 29–37)",
  easy: "Una úlcera es un «agujero» de ≥5 mm en la mucosa que aparece cuando el ácido gana a las defensas. Los dos grandes culpables son **H. pylori y AINE**. La duodenal mejora al comer; la gástrica empeora y adelgaza. Se diagnostica con **EDA** y siempre se busca H. pylori.",
  sections: [
    { k: "def", b: [["p", "Defecto de la mucosa de **≥5 mm que atraviesa la muscular de la mucosa**, en estómago o duodeno, de curso crónico."]]},
    { k: "etio", b: [
      ["ul", ["**H. pylori** (60–80% de las úlceras).", "**AINE** (más aún con esteroides, anticoagulantes, otros AINE, alendronato, ISRS).", "CMV y VHS-1, isquemia, radioterapia, enfermedad infiltrativa.", "Clopidogrel: resangrado 8.6% (lám. 5–6)."]],
      ["p", "**Epidemiología:** la úlcera péptica es la causa más frecuente de hemorragia digestiva alta y de hospitalización por enfermedad GI; las complicaciones predominan en >70 años (lám. 5)."]
    ]},
    { k: "fisio", b: [
      ["p", "Desequilibrio entre agresión y defensa; el daño dispara inflamación por citocinas y la lesión ulcerosa."],
      ["flow", ["Agresores (HCl + pepsina, H. pylori, AINE; tabaco, alcohol, estrés grave) > defensas (moco + bicarbonato, prostaglandinas, flujo, renovación epitelial)", "Lesión ulcerosa ≥5 mm", "Complicaciones: hemorragia (≈50%) · perforación · penetración · obstrucción (<5%)"]],
      ["cmp", { c: "Lám. 31 atribuye el daño por AINE a «inhibición de la COX-2».", g: "El daño mucoso depende de inhibir **COX-1** (menos prostaglandinas, moco y bicarbonato). Lám. 172–174 (ileítis por AINE) sí dice COX-1 y COX-2.", d: "Base establecida; no verificada con fuente en esa sesión." }]
    ]},
    { k: "clin", b: [
      ["tbl", ["", "Úlcera duodenal", "Úlcera gástrica"], [
        ["Dolor", "Epigástrico ardoroso, 1–3 h después de comer y nocturno; mejora con alimentos y antiácidos", "Posprandial; puede empeorar con la ingesta"],
        ["Peso", "Puede aumentar (comer alivia)", "Pérdida de peso, náusea"],
        ["Causas dominantes", "H. pylori; hipersecreción de ácido (Zollinger-Ellison)", "H. pylori y AINE; vigilar malignidad"]]],
      ["p", "Muchas veces **asintomática hasta la complicación** (sobre todo con AINE). Los síntomas no son específicos para diagnosticar (lám. 34)."],
      ["warn", "**Datos de alarma (EDA):** hematemesis, melena, anemia, pérdida de peso involuntaria, vómito persistente, disfagia, masa, dolor súbito intenso, choque (lám. 35)."]
    ]},
    { k: "dx", b: [
      ["ul", ["**EDA**: método principal (localiza, mide, biopsia, trata sangrado).", "Úlcera gástrica en EDA: bordes irregulares/elevados, fondo sucio, friable, pliegues no confluentes → **biopsiar** lesiones sospechosas.", "Búsqueda de **H. pylori**: prueba de aliento con urea, antígeno fecal, biopsia (ureasa, histología, cultivo).", "La **serología IgG solo indica contacto previo**.", "BH ± hierro/ferritina si hay pérdida crónica."]]
    ]},
    { k: "tx", b: [
      ["tbl", ["Objetivo", "Fármacos (dosis de las láminas)", "Mecanismo / punto clave"], [
        ["Reducir ácido", "IBP: omeprazol 40 mg, esomeprazol 40 mg, pantoprazol 40 mg c/24 h · Anti-H2: famotidina 40 mg noche o 20 mg c/12 h", "IBP bloquean irreversiblemente la H⁺/K⁺-ATPasa de la célula parietal; anti-H2 bloquean la vía de la histamina"],
        ["Erradicar H. pylori", "Triple: IBP + claritromicina + amoxicilina · Cuádruple con bismuto: IBP c/12 h + metronidazol 500 mg + tetraciclina 500 mg c/6 h + subsalicilato de bismuto, 14 días", "La guía ACG 2024 prefiere el cuádruple con bismuto"],
        ["Proteger y aliviar", "Sucralfato 1 g c/6 h · Misoprostol 200 mcg c/6 h · Hidróxido de Al/Mg 15–30 ml", "Sucralfato: barrera física; misoprostol: análogo de prostaglandinas (previene daño por AINE); antiácidos: alivio rápido sin acelerar cicatrización"]]],
      ["cmp", { c: "Erradicación con triple (IBP + claritromicina + amoxicilina) o cuádruple con bismuto (lám. 15, 27).", g: "ACG 2024 (Chey y cols.): primera línea en pacientes sin tratamiento previo = **cuádruple optimizado con bismuto, 14 días** (IBP c/12 h, tetraciclina 500 mg 4 veces/día, metronidazol 500 mg 3–4 veces/día, bismuto 4 veces/día; no sustituir tetraciclina por doxiciclina). La triple con claritromicina no debe usarse sin confirmar sensibilidad.", d: "La triple de la lámina sigue siendo la clásica; conoce ambas y sabe que hoy la cuádruple es la preferida." }],
      ["p", "**Cirugía** (lám. 17–19): solo urgencias y complicaciones: perforación, hemorragia masiva que no cede a endoscopia, obstrucción de salida, falla absoluta al tratamiento médico."],
      ["tbl", ["Procedimiento", "Qué hace", "Cuándo"], [
        ["Parche de Graham", "Sella la perforación con epiplón; evita peritonitis", "Úlceras perforadas"],
        ["Vagotomía (troncular / muy selectiva)", "Corta el nervio vago → se corta la orden de producir ácido", "Úlcera refractaria"],
        ["Piloroplastia", "Ensancha el píloro → vacía el estómago", "Estenosis pilórica / drenaje gástrico"],
        ["Antrectomía", "Quita el antro → elimina la producción de gastrina; reconstrucción a duodeno o yeyuno", "Refractarias, sospecha de malignidad, con vagotomía troncular"],
        ["Ligadura directa", "Sutura del vaso sangrante", "Hemorragia masiva (úlcera duodenal que erosiona la arteria gastroduodenal)"]]]
    ]},
    { k: "comp", b: [["p", "Hemorragia, perforación, penetración y obstrucción de salida: ver el tema **Complicaciones de la úlcera**."]]},
    { k: "keys", b: [["ul", ["Úlcera = agresión > defensa; causas principales H. pylori y AINE; duodenal mejora al comer, gástrica empeora.", "EDA es el método principal; biopsiar la úlcera gástrica sospechosa y buscar H. pylori siempre.", "Erradicación: cuádruple con bismuto 14 días (ACG 2024); triple con claritromicina solo con sensibilidad."]]]}
  ]},

/* ───────── 2. GASTRITIS ───────── */
{ id: "gastritis", n: "2", title: "Gastritis", module: "estomago", priority: "aplicacion", source: "Sección 2.2 (lám. 20–28)",
  easy: "Gastritis = la mucosa del estómago está inflamada **bajo el microscopio**. Por eso se diagnostica con EDA y biopsia, y no es lo mismo que «dispepsia», que son síntomas. La crónica suele ser por **H. pylori** o **autoinmunidad** (esta última roba la B12).",
  sections: [
    { k: "def", b: [
      ["p", "Inflamación de la mucosa gástrica; es un **diagnóstico histológico**, no es sinónimo de dispepsia (que son síntomas)."],
      ["tbl", ["Tipo", "Rasgos"], [
        ["Aguda", "Inicio súbito, reversible (AINE, alcohol, estrés fisiológico grave, infecciones)"],
        ["Crónica", "Inflamación persistente que puede producir atrofia y pérdida de glándulas; causas principales: H. pylori y autoinmunidad"]]]
    ]},
    { k: "etio", b: [
      ["tbl", ["Causa", "Mecanismo / factores de riesgo", "Tratamiento"], [
        ["H. pylori", "Infección crónica; hacinamiento, agua o alimentos contaminados, infancia, convivencia con infectado", "Cuádruple con bismuto 14 días (IBP 2 veces/día + bismuto + tetraciclina + metronidazol)"],
        ["AINE", "Uso prolongado, dosis altas, edad avanzada, úlcera previa, anticoagulantes/esteroides", "Suspender el AINE; IBP (omeprazol 20 mg/día) 4–8 semanas; si es indispensable: menor dosis + IBP"],
        ["Autoinmune", "Anticuerpos contra células parietales y factor intrínseco → déficit de B12 (anemia megaloblástica) y de hierro", "Vitamina B12 IM o VO a dosis altas; corregir hierro"],
        ["Química / reactiva", "Reflujo biliar, alcohol, irritantes", "Quitar el agente; IBP / antiácidos para síntomas"]]]
    ]},
    { k: "dx", b: [["p", "**EDA con biopsia** (inflamación, atrofia, metaplasia, H. pylori) y pruebas de H. pylori (aliento, antígeno fecal, biopsia)."]]},
    { k: "tx", b: [["p", "Según la causa: ver tabla de etiología."]]},
    { k: "err", b: [["warn", "Confundir gastritis con dispepsia: una es diagnóstico histológico, la otra son síntomas (lám. 21)."]]}
  ]},

/* ───────── 3. ZOLLINGER-ELLISON ───────── */
{ id: "zollinger", n: "3", title: "Síndrome de Zollinger-Ellison", module: "estomago", priority: "aplicacion", source: "Sección 2.3 (lám. 38–43)",
  easy: "Un tumor (gastrinoma) fabrica gastrina sin control, el estómago produce ácido «sin freno» y aparecen úlceras graves, recurrentes o resistentes, a menudo con diarrea. Se confirma con gastrina en ayunas muy alta y pH muy ácido; se trata con **IBP** y atacando el tumor.",
  sections: [
    { k: "def", b: [["flow", ["Gastrinoma (tumor neuroendocrino secretor de gastrina)", "Hipergastrinemia no regulada", "Célula parietal secreta ácido sin freno", "Úlceras graves, recurrentes o resistentes"]]]},
    { k: "etio", b: [["ul", ["**Dónde:** duodeno (50–85%), páncreas, ganglios abdominales («triángulo del gastrinoma»).", "**Herencia:** 75% esporádico (~5.ª década); **25% con NEM1** (gen MEN1, 11q13), 10 años antes.", "Incidencia 1–3/millón."]]]},
    { k: "clin", b: [["ul", ["Dolor epigástrico (95% con úlceras en tubo digestivo alto).", "**Diarrea (65%)**, reflujo (44%), daño esofágico (75%).", "Complicaciones de la úlcera."]]]},
    { k: "dx", b: [
      ["ul", ["Sospecha por úlcera/RGE grave, recurrente o resistente.", "**Gastrina sérica en ayunas >10 veces lo normal con pH gástrico <2** confirma.", "Localizar: gammagrafía de receptor de somatostatina, TC/RM, ecografía endoscópica.", "EDA: úlceras y pliegues gástricos engrosados."]],
      ["note", "La lámina escribe «GSA»; la guía lo interpreta como gastrina sérica en ayunas (no verificado)."]
    ]},
    { k: "tx", b: [["ul", ["**IBP de elección** (1–2 dosis/día; IV si no tolera VO).", "Tratar el tumor (60–90% son malignos): cirugía si es localizado y sin NEM1.", "Enfermedad avanzada: quimioterapia, terapia dirigida o radioterapia con receptor de somatostatina."]]]},
    { k: "keys", b: [["ul", ["Zollinger-Ellison = gastrinoma + úlceras graves/refractarias + diarrea; IBP; NEM1 en 25%."]]]}
  ]},

/* ───────── 4. COMPLICACIONES ───────── */
{ id: "complicaciones", n: "4", title: "Complicaciones de la úlcera", module: "estomago", priority: "esencial", source: "Sección 2.4 (lám. 49–70; ACG 2021)",
  easy: "La úlcera puede **sangrar** (lo más frecuente), **perforarse** (lo más grave a corto plazo), **penetrar** a un órgano vecino o **cerrar la salida** del estómago por cicatriz. En la hemorragia: primero estabilizar, luego endoscopia; la adrenalina nunca va sola.",
  sections: [
    { k: "def", b: [["p", "Se agrupan por mecanismo: **vascular** (hemorragia), **invasión** (perforación libre y penetración = úlcera «tenebrada») y **mecánica/cicatricial** (obstrucción)."]]},
    { k: "clin", b: [
      ["tbl", ["Complicación", "Qué pasa y cómo se reconoce", "Qué hacer"], [
        ["Hemorragia (≈50%, la más frecuente)", "Erosión de un vaso: duodenal posterior → arteria gastroduodenal; gástrica → ramas gástricas. Hematemesis (roja = reciente; «posos de café» = sangre expuesta a ácido), melena, choque hipovolémico", "Estabilizar → Hb <7 transfundir → EDA ≤24 h; Forrest Ia/Ib/IIa = hemostasia"],
        ["Perforación (emergencia quirúrgica; la más grave a corto plazo)", "Pérdida de todo el espesor → peritonitis química, luego bacteriana, sepsis. Tríada: dolor súbito + taquicardia + rigidez abdominal; defensa involuntaria, íleo", "NPO + reanimación IV + analgesia + IBP + antibiótico de amplio espectro; laparoscopia si estable, abierta si inestable; cierre primario ± parche de epiplón; lavado peritoneal"],
        ["Penetración (úlcera tenebrada)", "Atraviesa la pared pero un órgano vecino (páncreas, hígado, vía biliar, epiplón, colon) la contiene; 15–20% de las complejas. Dolor de intermitente a persistente, de localizado a irradiado, de respondedor a refractario", "TAC con contraste + EDA; IBP IV 40 mg c/12 h, suspender AINE, erradicar H. pylori; cirugía si dolor tras 6–8 semanas o fístula, absceso, hemorragia, obstrucción, perforación o sospecha de malignidad"],
        ["Obstrucción de salida (<5%)", "Aguda: inflamación + edema + espasmo (reversible). Crónica: cicatrización → fibrosis → estenosis pilórica fija. Vómito persistente, alteraciones de Na, K, Cl, HCO₃⁻", "NPO, sonda nasogástrica, NaCl 0.9% IV, reposición de KCl, IBP; dilatación endoscópica con balón (objetivo ≈15 mm); TC para localizar, biopsiar y descartar malignidad"]]]
    ]},
    { k: "dx", b: [
      ["p", "**Clasificación de Forrest** (hallazgo endoscópico en hemorragia):"],
      ["tbl", ["Forrest", "Hallazgo", "Riesgo"], [
        ["Ia", "Sangrado en chorro", "Alto → hemostasia"], ["Ib", "Sangrado en sábana", "Alto → hemostasia"], ["IIa", "Vaso visible", "Alto → hemostasia"],
        ["IIb", "Coágulo adherido", "—"], ["IIc", "Hematina", "—"], ["III", "Fondo limpio", "—"]]],
      ["p", "**Perforación:** TAC (aire extraluminal, líquido libre); sin TAC: Rx de tórax/abdomen de pie → **neumoperitoneo**; lactato = hipoperfusión."]
    ]},
    { k: "tx", b: [
      ["p", "**Algoritmo de HDA por úlcera en adultos** (Figura 3; lám. 50–56; ACG 2021):"],
      ["flow", ["Sospecha de HDA por úlcera (hematemesis, melena, inestabilidad)", "1. ESTABILIZAR: ABCDE, monitorización; BH, electrolitos, urea/creatinina, TP/INR, TTPa, grupo y cruzadas", "¿Hb <7 g/dL? Sí → transfundir (umbral restrictivo); No → vigilar", "2. EDA ≤24 h tras reanimar (eritromicina IV antes de EDA); clasificar con Forrest", "Forrest Ia/Ib/IIa → hemostasia: adrenalina 1:10 000 NUNCA sola + térmico (bipolar, heater probe) o clips", "Post-hemostasia: IBP en dosis altas (ACG: 3 días)", "Resangrado: 1) repetir EDA → 2) embolización → 3) cirugía si falla / inestable"]],
      ["note", "Siempre: buscar y erradicar H. pylori, confirmar erradicación, retirar AINE."],
      ["note", "Perforación: la lámina muestra piperacilina-tazobactam 4.5 g IV c/6–8 h (del material, no verificado)."]
    ]},
    { k: "keys", b: [["ul", ["HDA: estabilizar → Hb <7 transfundir → EDA ≤24 h; Forrest Ia/Ib/IIa = hemostasia; adrenalina nunca sola.", "Perforación = tríada (dolor súbito, taquicardia, rigidez) → TAC/Rx de pie → cirugía."]]]},
    { k: "err", b: [["warn", "Usar adrenalina sola en hemostasia endoscópica (lám. 55)."]]}
  ]},

/* ───────── 5. DISPEPSIA / GASTROPARESIA ───────── */
{ id: "dispepsia", n: "5", title: "Dispepsia funcional y gastroparesia", module: "estomago", priority: "aplicacion", source: "Sección 2.5 (lám. 71–88)",
  easy: "En la **dispepsia funcional** hay síntomas del abdomen superior sin lesión que los explique. En la **gastroparesia** el estómago se vacía lento sin que nada lo obstruya; la diabetes es la causa principal. Los antieméticos alivian, pero **no** aceleran el vaciamiento.",
  sections: [
    { k: "def", b: [["tbl", ["", "Dispepsia funcional", "Gastroparesia"], [
      ["Definición", "Trastorno de la interacción intestino-cerebro con síntomas dispépticos sin enfermedad estructural (sin úlcera). Prevalencia global 8.4%; más en mujeres", "Retraso del vaciamiento gástrico (sobre todo sólidos) sin obstrucción mecánica + náusea, vómito, plenitud, saciedad precoz, dolor"],
      ["Roma IV", "Uno o más: plenitud posprandial, saciedad precoz, dolor epigástrico, ardor epigástrico. PDS (distrés posprandial: plenitud + saciedad) vs EPS (dolor epigástrico: dolor + ardor)", "—"]]]]},
    { k: "etio", b: [["tbl", ["", "Dispepsia funcional", "Gastroparesia"], [
      ["Mecanismo / causas", "Alteración de la acomodación gástrica, hipersensibilidad visceral, dismotilidad, inflamación duodenal de bajo grado, H. pylori, factores psicosociales", "Diabetes (57%), posquirúrgica/lesión del vago (15%), medicamentos: opioides, anticolinérgicos (11.8%), idiopática (11.3%); Parkinson, esclerosis múltiple, esclerodermia, hipotiroidismo"]]]]},
    { k: "dx", b: [["tbl", ["", "Dispepsia funcional", "Gastroparesia"], [
      ["Diagnóstico", "Descartar alarma (pérdida de peso, sangrado/anemia, disfagia, vómito persistente, masa, antecedente familiar de cáncer GI); evaluar H. pylori; EDA según edad/riesgo", "Excluir obstrucción y demostrar retraso: gammagrafía de vaciamiento con comida sólida ≥3 h (preferible 4 h); alternativas: prueba respiratoria ¹³C, cápsula inalámbrica"]]]]},
    { k: "tx", b: [
      ["p", "**Dispepsia funcional:**"],
      ["flow", ["H. pylori + → erradicar", "Si no → IBP", "Persiste → procinético", "Refractaria → neuromodulador"]],
      ["p", "**Gastroparesia:** dieta de partículas pequeñas, baja en grasa; optimizar glucemia; metoclopramida, domperidona, eritromicina; ondansetrón y otros antieméticos mejoran síntomas pero **NO aceleran el vaciamiento**; refractaria: G-POEM; botox pilórico no de rutina."]
    ]},
    { k: "err", b: [["warn", "Creer que los antieméticos aceleran el vaciamiento en gastroparesia: solo mejoran síntomas (lám. 87)."]]}
  ]},

/* ───────── 6. CÁNCER GÁSTRICO ───────── */
{ id: "cancer", n: "6", title: "Cáncer gástrico", module: "estomago", priority: "aplicacion", source: "Sección 2.6 (lám. 89–101)",
  incomplete: "El apartado «Tratamiento» del material (lám. 100) está vacío; la tabla TNM de lám. 99 parece de otra neoplasia.",
  easy: "Casi todo es **adenocarcinoma**. El tipo **intestinal** nace de la cadena H. pylori → gastritis atrófica; el **difuso** se liga a CDH1 y células en anillo de sello. Da síntomas vagos; en fases avanzadas aparecen ganglios y metástasis «con nombre propio».",
  sections: [
    { k: "def", b: [["ul", ["**Adenocarcinoma ≈85%** (linfomas ≈3%, neuroendocrinos <1%, GIST con alteraciones de c-KIT/PDGFRA).", "Mundial: ≈1.03 millones de casos y 780 000 muertes/año; alta incidencia en China, Corea, Japón, Chile, Europa oriental."]]]},
    { k: "etio", b: [
      ["flow", ["H. pylori", "Gastritis crónica", "Atrofia → menor acidez", "Nitratos a nitritos carcinógenos", "Alteraciones genéticas"]],
      ["ul", ["Precursoras: gastritis atrófica, anemia perniciosa. Dieta ahumada/salada, antecedente familiar.", "Hereditario/molecular: CDH1, Lynch, poliposis adenomatosa familiar, poliposis juvenil, Peutz-Jeghers.", "Subtipos TCGA: EBV, MSI, genómicamente estable, inestabilidad cromosómica. Biomarcadores: HER2, PD-L1, MSI/MMR."]],
      ["tbl", ["Lauren", "Intestinal", "Difuso"], [
        ["Asociación", "H. pylori + gastritis atrófica, metaplasia intestinal; zonas endémicas", "CDH1 (E-cadherina), células en anillo de sello; zonas de baja prevalencia, grupo sanguíneo A"],
        ["Perfil", "Hombres > mujeres, mayores; diseminación hematógena", "Mujeres > hombres, más jóvenes; diseminación linfática"]]]
    ]},
    { k: "clin", b: [["ul", ["Dolor o molestia epigástrica vaga, saciedad temprana, anorexia, pérdida de peso, hematemesis/melena, anemia; disfagia si es de la unión esofagogástrica.", "**Enfermedad avanzada:** ganglio de **Virchow** (supraclavicular izq.), nódulo de la **hermana María José** (umbilical), tumor de **Krukenberg** (ovario), anaquel de **Blumer** (rectal), ascitis."]]]},
    { k: "dx", b: [["ul", ["**EDA + biopsia** (la difusa puede dar biopsia negativa; la ecografía endoscópica guía si es submucosa).", "Estadificación TNM: T profundidad, N ganglios, M metástasis; TC tórax-abdomen-pelvis, PET/TC, EUS, laparoscopia con lavado peritoneal."]]]},
    { k: "tx", b: [["warn", "**Apartado incompleto:** el «Tratamiento» (lám. 100) está vacío en el material. La tabla TNM de lám. 99 menciona vena porta y vesícula biliar: parece de otra neoplasia; usa solo el concepto T-N-M."]]},
    { k: "keys", b: [["ul", ["Lauren: intestinal (H. pylori, atrofia) vs difuso (CDH1, anillo de sello)."]]]}
  ]},

/* ───────── 7. CUERPOS EXTRAÑOS ───────── */
{ id: "cuerpos", n: "7", title: "Cuerpos extraños en tubo digestivo superior", module: "estomago", priority: "ampliacion", source: "Sección 2.7 (lám. 44–48)",
  easy: "La mayoría pasa sola. Lo que no puede esperar: **pilas** (≤2 h), **imanes** (inmediato) y objetos **afilados** (≤6 h). Las monedas en niños asintomáticos pueden esperar hasta 24 h.",
  sections: [
    { k: "def", b: [["ul", ["**80–90% se expulsan solos.**", "Sitios de impactación: **cricofaríngeo (el más común)**, arco aórtico (≈25 cm de incisivos), unión gastroesofágica, píloro.", "Factores: estenosis, esofagitis eosinofílica, malignidad, anillos, acalasia."]]]},
    { k: "dx", b: [["p", "Primera imagen: **radiografía** (≈83% son radiopacos); **TC** si se sospecha perforación."]]},
    { k: "tx", b: [["tbl", ["Objeto", "Conducta (lám. 48)"], [
      ["Pilas", "Extraer de inmediato, idealmente ≤2 h, aun asintomático (lesión grave); si no se expulsa en 10–14 días, repetir imagen"],
      ["Imanes", "Se atraen a través de la pared intestinal → endoscopia inmediata"],
      ["Afilados", "Extracción endoscópica urgente ≤6 h (perforación, mediastinitis)"],
      ["Monedas", "≤24 h en niños asintomáticos; urgente si hay babeo, disfagia o dificultad respiratoria"]]]]}
  ]},

/* ───────── 8. DIARREA ───────── */
{ id: "diarrea", n: "8", title: "Síndrome diarreico", module: "intestino", priority: "esencial", source: "Sección 3.1 (lám. 104–124)",
  easy: "Lo que mata en la diarrea es la **deshidratación**, así que lo primero es valorar el estado de hidratación y elegir el plan A, B o C. La diarrea **alta** es acuosa y abundante; la **baja** trae sangre, moco y fiebre. Antibióticos solo en casos concretos.",
  sections: [
    { k: "def", b: [
      ["p", "**>200 g de heces en 24 h**; clínicamente, consistencia disminuida y **>3 evacuaciones/día** por más agua."],
      ["tbl", ["Duración", "Tiempo"], [["Aguda", "<14 días"], ["Persistente", "14–30 días"], ["Crónica", ">30 días"]]],
      ["p", "**Epidemiología:** la diarrea aguda secretora es la más frecuente y mortal; 8/10 muertes ocurren en <2 años; mayor mortalidad en niños de 6–11 meses y >70 años; transmisión fecal-oral; virus (rotavirus) más en invierno, bacterias en meses cálidos y lluviosos; incubación 1–7 días."]
    ]},
    { k: "etio", b: [
      ["tbl", ["", "Alta (intestino delgado): no inflamatoria", "Baja (colon): inflamatoria / disentérica"], [
        ["Heces", "Acuosas, volumen alto", "Sangre, moco, pus; poco volumen; pujo y tenesmo"],
        ["Fiebre / dolor", "Fiebre baja, dolor periumbilical", "Fiebre alta, dolor cólico"],
        ["Pérdida de sodio", "30–40 mEq/L", "60–120 mEq/L"],
        ["Agentes", "Rotavirus, norovirus, ETEC, V. cholerae, S. aureus (toxina)", "Shigella, Campylobacter, Salmonella, Yersinia, E. coli enteroinvasiva/EHEC, C. difficile, amebas"]]],
      ["p", "**Alimento → microorganismo:** agua (V. cholerae, Giardia, Cryptosporidium, norovirus); mayonesa/crema (Staphylococcus, Clostridium, Salmonella); quesos (Listeria); pollo (Campylobacter, Shigella, Salmonella); vacuno (ETEC); huevo (Salmonella); mariscos (Vibrio); arroz (Bacillus cereus). Fiebre = invasor; artritis reactiva: Salmonella, Shigella."]
    ]},
    { k: "fisio", b: [["tbl", ["Mecanismo bacteriano", "Ejemplos y efecto"], [
      ["Invasión", "Shigella, Campylobacter, Yersinia, Salmonella, EIEC → úlceras e inflamación"],
      ["Enterotoxigenicidad sin invadir", "V. cholerae y ETEC: toxina termolábil ↑AMPc → ↓absorción de Na⁺ y ↑secreción de Cl⁻/agua; termoestable ↑GMPc"],
      ["Adherencia", "E. coli enteroadherente, pilis/fimbrias"],
      ["Citotoxicidad", "EHEC, Shigella, C. difficile"],
      ["Viral", "Rotavirus infecta epitelio del duodeno/yeyuno proximal → acortamiento de vellosidades"]]]]},
    { k: "dx", b: [
      ["p", "Clínico; **lo primero es evaluar la hidratación**. Laboratorio solo si: sospecha de cólera, sangre que no cede, persistente, brote, nosocomial, pérdida de peso, colitis pseudomembranosa o síndrome urémico hemolítico (coprocultivo, moco fecal con leucocitos PMN) o deshidratación grave (BH, equilibrio ácido-base, glucosa, electrolitos, creatinina)."],
      ["tbl", ["Signo", "Plan A: hidratado", "Plan B: deshidratado (≥2 signos)", "Plan C: choque hipovolémico"], [
        ["Estado general", "Alerta", "Inquieto o irritable", "Inconsciente, hipotónico"],
        ["Ojos / mucosas", "Normales, llora con lágrimas; húmedas", "Hundidos; seca, saliva espesa", "Muy hundidos y muy secas"],
        ["Sed", "Normal", "Aumentada, bebe con avidez", "No puede beber"],
        ["Pliegue / pulso", "Pliegue normal; pulso normal", "Pliegue lento; pulso rápido", "Pliegue muy lento (≥2 s); pulso débil o ausente"],
        ["Llenado capilar", "≤2 s", "3–5 s", ">5 s"],
        ["Conducta", "Más líquidos y suero oral, seguir alimentando, reconocer signos de alarma", "SRO 75 ml/kg en 4 h (lám. 122), fraccionado; reponer pérdidas", "Líquidos IV (Ringer lactato o salina) con reevaluación; pasar a SRO cuando pueda beber"]]]
    ]},
    { k: "tx", b: [["ul", ["**Antimicrobianos solo con sangre, inmunocompromiso o cólera** (ej. shigelosis: ciprofloxacino 500 mg c/12 h por 3 días; del material).", "Antidiarreicos (loperamida) en adultos sin fiebre ni disentería.", "Antieméticos: rara vez, porque el vómito cede al hidratar.", "No suspender la alimentación habitual. Evitar bebidas energéticas o refrescos como rehidratación."]]]},
    { k: "comp", b: [["p", "**Deshidratación** (la más frecuente y principal causa de muerte; también acidosis), diarrea persistente, desnutrición; menos comunes: sepsis, insuficiencia renal, íleo paralítico, neumatosis intestinal, infarto/perforación."]]},
    { k: "keys", b: [["ul", ["Diarrea: lo primero es la hidratación; antibióticos solo con sangre, inmunocompromiso o cólera."]]]},
    { k: "err", b: [["warn", "Dar antidiarreicos o antibióticos «por reflejo»: solo en casos seleccionados; lo que salva es la hidratación (lám. 122–124)."]]}
  ]},

/* ───────── 9. MALABSORCIÓN Y CELÍACA ───────── */
{ id: "malabsorcion", n: "9", title: "Malabsorción y enfermedad celíaca", module: "intestino", priority: "esencial", source: "Sección 3.2 (lám. 125–156; ESPGHAN 2020)",
  easy: "Si el intestino no absorbe, aparecen diarrea grasosa y adelgazamiento, y luego los signos de cada déficit (hierro → anemia microcítica, vitamina K → sangrado…). En la **celíaca**, el gluten en una persona HLA-DQ2/DQ8 provoca **atrofia de vellosidades**; se trata con dieta sin gluten de por vida.",
  sections: [
    { k: "def", b: [["p", "**Malabsorción:** global o selectiva, congénita o adquirida. **Enfermedad celíaca:** trastorno inmunológico desencadenado por péptidos del gluten (**gliadina** del trigo, **hordeína** de la cebada, **secalina** del centeno) en personas con **HLA-DQ2 o DQ8**; daña la mucosa del intestino delgado proximal. Prevalencia ≈1%; 50–70% mujeres."]]},
    { k: "etio", b: [["p", "**Causas de malabsorción:** intestinales (Crohn, celíaca, sobrecrecimiento bacteriano, intestino corto, TB, giardia), pancreáticas (pancreatitis crónica, fibrosis quística), gástricas, hepatobiliares y sistémicas (diabetes, tiroides)."]]},
    { k: "fisio", b: [["flow", ["Gluten + HLA-DQ2/DQ8", "Respuesta inmune (IgG/IgA)", "Infiltrado de linfocitos intraepiteliales", "Hiperplasia de criptas y atrofia vellosa", "Menos superficie → malabsorción"]]]},
    { k: "clin", b: [
      ["p", "**Directas:** diarrea crónica, esteatorrea, pérdida de peso, flatulencia, distensión. **Indirectas (por déficit):**"],
      ["tbl", ["Déficit", "Manifestación"], [
        ["Hierro", "Anemia ferropénica (microcítica), queilitis"], ["B12 y folato", "Anemia megaloblástica, glositis, neuropatía (B12)"],
        ["Calcio y vitamina D", "Tetania, parestesias, osteomalacia, raquitismo"], ["Vitamina A / K", "Xeroftalmia, hiperqueratosis / diátesis hemorrágica (hipoprotrombinemia)"],
        ["Proteínas", "Edema, atrofia muscular"], ["Vitaminas B", "Neuropatía periférica, estomatitis angular (B2)"]]],
      ["tbl", ["Forma de celíaca", "Característica (lám. 140–146)"], [
        ["Clásica", "Atrofia vellosa + síntomas de malabsorción (diarrea, esteatorrea, pérdida de peso, distensión; en niños de 9 meses a 2 años) + anticuerpos + resolución al retirar gluten"],
        ["Atípica", "Atrofia vellosa + anticuerpos + pocos síntomas GI (anemia, osteoporosis, aftas, amenorrea)"],
        ["Subclínica", "Síntomas inespecíficos, hallazgo incidental, atrofia de vellosidades"],
        ["Potencial", "Anticuerpos positivos y HLA compatible, sin atrofia (Marsh 0–2); riesgo de desarrollar enfermedad"],
        ["Refractaria", "No mejora con la dieta estricta; linfocitos intraepiteliales aberrantes; asociada a inmunodeficiencia/linfoma"]]]
    ]},
    { k: "dx", b: [
      ["tbl", ["Marsh", "Hallazgo"], [["0", "Normal"], ["1", "LIE >40 por 100 enterocitos"], ["2", "+ hiperplasia de criptas"], ["3a / 3b / 3c", "Atrofia leve / marcada / total"], ["4", "Hipoplasia"]]],
      ["ul", ["Laboratorio: anemia, hipoproteinemia, déficit de Fe, folato, D, K.", "Serología: **anti-transglutaminasa tisular IgA**, antiendomisio, antigliadina.", "**HLA-DQ2/DQ8: valor predictivo negativo 99%** (si es negativo, casi descarta).", "**Biopsia duodenal con el paciente comiendo gluten.**"]],
      ["cmp", { c: "Algoritmo con «halotipo 4/5» y biopsia (criterios ESPGHAN antiguos); en niños 1.ª biopsia posible si genética, serología y clínica son compatibles (lám. 150–152).", g: "ESPGHAN 2020: en niños, **sin biopsia** si anti-tTG IgA **≥10 veces** el límite superior y antiendomisio positivo en una **segunda muestra** (y la familia está de acuerdo); HLA y síntomas ya no son obligatorios. Con tTG positiva <10× se hace biopsia.", d: "Conoce ambos; en adultos la lámina indica biopsia necesaria." }]
    ]},
    { k: "tx", b: [["p", "**Dieta sin gluten de por vida.** Si no responde: diagnóstico errado, incumplimiento, linfoma intestinal."]]},
    { k: "comp", b: [
      ["p", "**Otras malabsorciones** (lám. 154–156, infografías; contenido breve en el material):"],
      ["tbl", ["Entidad", "Datos de la guía"], [
        ["Esprúe tropical", "Zonas tropicales, atrofia vellosa; tratamiento tetraciclina/doxiciclina + ácido fólico; no depende del gluten"],
        ["Whipple", "Tropheryma whipplei, macrófagos PAS positivos; malabsorción + artralgias migratorias + síntomas neurológicos/cardiacos; antibióticos prolongados"],
        ["Intestino corto", "Resección extensa; la pérdida del íleon terminal causa déficit de B12 y de sales biliares"]]]
    ]},
    { k: "keys", b: [["ul", ["Celíaca: HLA-DQ2/DQ8 + gluten → atrofia vellosa; dieta sin gluten de por vida."]]]}
  ]},

/* ───────── 10. CROHN E ILEÍTIS ───────── */
{ id: "crohn", n: "10", title: "Enfermedad de Crohn e ileítis", module: "intestino", priority: "esencial", source: "Sección 3.3 (lám. 157–174)",
  easy: "Crohn es una inflamación crónica que atraviesa **toda la pared** (transmural), salta zonas (parcheada) y prefiere el **íleon terminal**; por eso da fístulas, estenosis y abscesos. Los corticoides apagan el brote pero **no** sirven para mantener.",
  sections: [
    { k: "def", b: [["p", "Enfermedad inflamatoria crónica con daño **parcheado, discontinuo y transmural**; puede afectar todo el tubo digestivo, con **íleon terminal** como zona más frecuente. Inicio bimodal (15–30 y 50–65 años)."]]},
    { k: "fisio", b: [["flow", ["Defecto de barrera mucosa + alteración de tolerancia inmune + disbiosis + genética (NOD2, ATG16L1, HLA-B27) + ambiente (tabaco, antibióticos, dieta ultraprocesada)", "Citocinas (TNF-α, IL-12/23)", "Inflamación transmural", "Fístulas, estenosis, abscesos"]]]},
    { k: "clin", b: [["tbl", ["Aspecto", "Datos clave"], [
      ["Clínica GI", "Diarrea crónica ± sangre, dolor en cuadrante inferior derecho, pérdida de peso, astenia; malabsorción (ácidos biliares, vitaminas liposolubles); complicaciones: fístulas, abscesos, perforación, estenosis"],
      ["Perianal (≈20%)", "Fisuras, fístulas, abscesos; fístulas entero-entéricas, entero-vesicales (infecciones urinarias, neumaturia) y recto-vaginales"],
      ["Extraintestinal (≈50%)", "Artritis seronegativa, entesitis, eritema nodoso, pioderma gangrenoso, uveítis/epiescleritis, colangitis esclerosante, estomatitis aftosa"]]]]},
    { k: "dx", b: [["tbl", ["Aspecto", "Datos clave"], [
      ["Diagnóstico", "Clínica + PCR/VSG, anemia, calprotectina fecal (>50–100); descartar infección; ileocolonoscopia con biopsias (úlceras longitudinales profundas, mucosa «en empedrado», friable); granulomas; enterografía por TC/RM o cápsula; EDA solo si hay síntomas altos"],
      ["Clasificación", "Criterios de Lennard-Jones; Montreal (edad, localización L1 íleon–L4, patrón inflamatorio/estenosante/fistulizante); actividad con CDAI (<150 remisión) y Harvey-Bradshaw"]]]]},
    { k: "tx", b: [
      ["ul", ["General: **dejar tabaco**.", "Inducción: corticoides (**budesonida oral si leve ileocecal**; prednisona/metilprednisolona + tiopurina o terapia avanzada temprana en moderado-grave).", "Mantenimiento: anti-TNF (infliximab ± tiopurina, adalimumab), vedolizumab, ustekinumab, risankizumab, upadacitinib.", "**Corticoides NO para mantener.**", "Antibióticos solo en abscesos o enfermedad perianal. Cirugía en complicaciones."]],
      ["note", "Esquemas de Crohn: «del material», sin contraste externo."]
    ]},
    { k: "comp", b: [
      ["p", "**Ileítis** = inflamación del íleon (no es un diagnóstico etiológico por sí mismo). Causas: Crohn (la más frecuente), infecciones (**Yersinia —puede simular apendicitis—**, Campylobacter, Salmonella, TB, CMV), AINE, isquemia, radioterapia."],
      ["p", "**Ileítis por AINE:** daño sistémico (↓prostaglandinas) y tópico; úlceras superficiales, a veces multifocales y con estenosis «en diafragma»; mejora al suspender el AINE y **no presenta granulomas**, a diferencia del Crohn."]
    ]},
    { k: "keys", b: [["ul", ["Crohn: transmural, parcheado, íleon terminal; corticoides inducen, no mantienen."]]]},
    { k: "err", b: [["warn", "Mantener Crohn con corticoides: no se usan para mantenimiento (lám. 170–171)."]]}
  ]},

/* ───────── 11. SII ───────── */
{ id: "sii", n: "11", title: "Síndrome de intestino irritable", module: "intestino", priority: "aplicacion", source: "Sección 3.4 (lám. 175–187; Roma IV)",
  easy: "Dolor abdominal crónico que se relaciona con la defecación y con cambios del hábito, **sin lesión estructural**. Si hay sangrado, pérdida de peso, fiebre, anemia o empieza después de los 50 años, **no** pienses en SII. La dieta va primero.",
  sections: [
    { k: "def", b: [
      ["p", "Dolor o malestar abdominal crónico asociado a cambios del hábito intestinal, **sin lesión estructural**. Prevalencia 10–20%; 30–50 años, 60–75% mujeres; hasta 7–30% tras gastroenteritis infecciosa aguda."],
      ["p", "**Subtipos:** SII-C (heces duras >25%), SII-D (heces blandas >25%), SII-M."]
    ]},
    { k: "fisio", b: [["p", "Hipersensibilidad visceral, motilidad alterada, fermentación de **FODMAP** (lactosa, fructanos, polioles, exceso de fructosa, GOS) → gas y distensión; se asocia a depresión y ansiedad."]]},
    { k: "dx", b: [
      ["cmp", { c: "Lám. 175: «al menos 3 días por mes en los últimos 3 meses»; lám. 181 dice «Roma II».", g: "Roma IV (verificado): dolor abdominal recurrente **al menos 1 día/semana en los últimos 3 meses**, asociado a **≥2** de: relación con la defecación, cambio en la frecuencia, cambio en la forma de las heces; inicio ≥6 meses antes.", d: "El umbral de «3 días/mes» corresponde a Roma III." }],
      ["warn", "**No compatibles con SII (alarma):** pérdida de peso, sangrado rectal, dolor nocturno progresivo, fiebre, anemia o marcadores inflamatorios, síntomas después de los 50 años."]
    ]},
    { k: "tx", b: [["ul", ["**Dieta** (≠ fármacos en importancia): baja en FODMAP, fibra, probióticos, evitar café/alcohol/picante.", "Antiespasmódicos (bromuro de pinaverio 100 mg c/8–12 h; butilhioscina 10 mg c/8 h).", "Loperamida si hay diarrea.", "Antidepresivos: **ISRS si hay estreñimiento; tricíclicos si hay diarrea**.", "Rifaximina 10–14 días.", "Referir a psiquiatría si hay ansiedad/depresión persistente."]]]}
  ]},

/* ───────── 12. OBSTRUCCIÓN ───────── */
{ id: "obstruccion", n: "12", title: "Obstrucción intestinal", module: "intestino", priority: "esencial", source: "Sección 3.5 (lám. 188–200)",
  easy: "El contenido no avanza; el intestino se distiende, sube la presión, se compromete la circulación de la pared y aparece peritonitis. La causa mecánica principal son las **adherencias**. Rx: asas >3 cm, niveles hidroaéreos y sin aire distal.",
  sections: [
    { k: "def", b: [["p", "Interrupción del tránsito en sentido bucocaudal; **mecánica** (hay obstáculo) o **no mecánica (íleo)**. Mortalidad 3.5–6% (hasta 14% en ancianos)."]]},
    { k: "etio", b: [
      ["p", "Las **adherencias posoperatorias** son la causa mecánica principal."],
      ["tbl", ["Nivel", "Causas"], [
        ["Intraluminales", "Cálculos biliares, bezoares, cuerpos extraños, impacto fecal"],
        ["Intramurales", "Neoplasias, estenosis isquémica, intususcepción, enteritis, diverticulitis"],
        ["Extraluminales", "Adherencias, hernias, vólvulo, neoplasia metastásica"]]]
    ]},
    { k: "fisio", b: [["flow", ["Estasis", "Distensión", "↑Peristalsis y presión intraluminal", "↑Secreción y ↓absorción → mayor distensión", "↑Presión venosa → hipoxia tisular", "Pérdida de viabilidad de la pared → inflamación → peritonitis"]]]},
    { k: "clin", b: [["p", "Dolor cólico intermitente con peristaltismo de lucha, náusea y vómito (alta: frecuente, claro, gástrico), timpanismo, ruidos de timbre metálico; al inicio aún puede canalizar gases; avanzada: signos vitales alterados. Interrogar cirugías previas, hernias, cáncer."]]},
    { k: "dx", b: [["ul", ["Serie abdominal.", "**Tríada radiológica:** asas de delgado dilatadas **>3 cm**, **niveles hidroaéreos** y **ausencia de aire distal**.", "**Signo del grano de café = vólvulo sigmoideo.**"]]]},
    { k: "tx", b: [["ul", ["Ayuno absoluto, descompresión gástrica, venoclisis, vigilar signos vitales, antibióticos si hay infección.", "**Cirugía es el estándar en la obstrucción completa.**", "Manejo conservador: obstrucción parcial del delgado (48 h), posoperatoria temprana y por Crohn.", "Quirúrgico urgente: hernia estrangulada, vólvulo, peritonitis, asa cerrada.", "Viabilidad del asa: color normal, peristalsis, pulsaciones arteriales marginales."]]]},
    { k: "keys", b: [["ul", ["Obstrucción: asas >3 cm, niveles hidroaéreos, sin aire distal; grano de café = vólvulo sigmoideo."]]]}
  ]},

/* ───────── 13. ISQUEMIA ───────── */
{ id: "isquemia", n: "13", title: "Isquemia mesentérica", module: "intestino", priority: "esencial", source: "Sección 3.6 (lám. 201–225; WSES 2022)",
  easy: "**Aguda:** dolor intensísimo con abdomen casi normal a la exploración (desproporcionado), típico de un adulto mayor con fibrilación auricular → AngioTC sin demora y heparina. **Crónica:** «angina intestinal»: dolor después de comer, miedo a comer y pérdida de peso.",
  sections: [
    { k: "def", b: [["tbl", ["", "Aguda", "Crónica"], [
      ["Qué es", "Caída súbita del flujo; incidencia ≈3–6/100 000/año; adultos mayores con enfermedad cardiovascular", "Estenosis progresiva (aterosclerótica, la más frecuente: tronco celíaco, AMS, AMI); raras: ligamento arcuato, vasculitis, displasia fibromuscular, disección"],
      ["Tipos", "Embólica (cardiaca, FA), trombótica arterial, no oclusiva (NOMI) por bajo gasto/vasopresores, trombosis venosa mesentérica", "—"]]]]},
    { k: "etio", b: [["tbl", ["", "Aguda", "Crónica"], [
      ["Riesgo", "Edad, HTA, aterosclerosis, fibrilación auricular, IC, IAM, hipercoagulabilidad, choque, vasopresores", "Edad, tabaquismo, HTA, DM, dislipidemia, arteriopatía periférica"]]]]},
    { k: "clin", b: [["tbl", ["", "Aguda", "Crónica"], [
      ["Clínica", "Dolor intenso **desproporcionado a la exploración física**, náusea, vómito, diarrea, a veces sangre; tardío: defensa, rebote, acidosis, choque séptico", "Tríada: **dolor posprandial** (10–30 min después de comer, dura 1–2 h), **pérdida de peso** («miedo a la comida») y **soplo abdominal**"]]]]},
    { k: "dx", b: [
      ["tbl", ["", "Aguda", "Crónica"], [
        ["Estudios", "Lactato, D-dímero, leucocitos (no confirman); **AngioTC sin demora** (oclusión, falta de realce, neumatosis, gas portal)", "AngioTC; Doppler como tamizaje (limitado por gas, obesidad); EDA para descartar úlcera/neoplasia"]]],
      ["note", "Verificado con WSES 2022: la Rx simple no descarta isquemia y la AngioTC no debe retrasarse por función renal."]
    ]},
    { k: "tx", b: [["tbl", ["", "Aguda", "Crónica"], [
      ["Tratamiento", "Heparina (no fraccionada preferida) antes de cirugía, antibióticos de amplio espectro, revascularización (endovascular primero si hay experiencia; embolectomía/bypass); laparotomía y resección del segmento no viable si hay peritonitis; trombosis venosa: anticoagulación; NOMI: corregir hipotensión y gasto, reducir vasoconstrictores", "Control de factores de riesgo (tabaco, estatinas, antiagregantes); angioplastia + stent (menos invasivo) o bypass/endarterectomía"]]]]},
    { k: "keys", b: [["ul", ["Isquemia aguda: dolor desproporcionado → AngioTC + heparina; crónica: dolor posprandial + pérdida de peso + soplo."]]]}
  ]},

/* ───────── 14. NEOPLASIAS ID ───────── */
{ id: "neoplasias", n: "14", title: "Neoplasias del intestino delgado", module: "intestino", priority: "ampliacion", source: "Sección 3.7 (lám. 228–235)",
  incomplete: "Las neoplasias malignas del intestino delgado (lám. 233, 235) casi no traen contenido en el material.",
  easy: "Son raras y se diagnostican tarde porque los síntomas son vagos. Recuerda la «geografía»: **yeyuno → adenocarcinoma; íleon → TNE y linfomas**, y qué marcador va con cada tumor.",
  sections: [
    { k: "def", b: [["p", "Raras (**1–2% de los cánceres digestivos**); diagnóstico tardío (**6–12 meses**) por síntomas inespecíficos."]]},
    { k: "etio", b: [["ul", ["**Yeyuno:** adenocarcinoma más frecuente; **íleon:** tumores neuroendocrinos (TNE) y linfomas.", "Benignas: adenoma (pólipo precanceroso; colonoscopia + polipectomía endoscópica), leiomioma, lipoma, hamartoma (síndromes como Peutz-Jeghers), hemangioma."]]]},
    { k: "clin", b: [["p", "Dolor cólico difuso, pérdida de peso, anemia ferropénica por sangrado oculto, o urgencia (obstrucción, hemorragia, perforación)."]]},
    { k: "dx", b: [["tbl", ["Estudio", "Para qué"], [
      ["Entero-TC/RM, cápsula endoscópica, enteroscopia con biopsia", "Localizar y obtener tejido"],
      ["5-HIAA en orina de 24 h y cromogranina A", "TNE"], ["Inmunohistoquímica CD117/DOG1", "GIST"], ["CD20/CD3", "Linfomas"]]]]},
    { k: "tx", b: [["p", "Resección segmentaria con linfadenectomía; adyuvancia según tipo (p. ej., **imatinib en GIST de alto riesgo**)."], ["warn", "Contenido limitado en el material sobre neoplasias malignas (lám. 233, 235)."]]}
  ]},

/* ───────── REPASO FINAL ───────── */
{ id: "recuperacion", n: "R1", title: "Recuperación activa y respuestas razonadas", module: "repaso", priority: "repaso", source: "Secciones 4 y 5", special: "recall",
  easy: "Responde de memoria antes de abrir la respuesta: recuperar es lo que fija el recuerdo. Estas preguntas y minicasos también están en el simulador y en casos clínicos.", sections: [] },
{ id: "errores", n: "R2", title: "Ideas para recitar y errores frecuentes", module: "repaso", priority: "repaso", source: "Sección 6 · Sección 7 (fuentes y límites)", special: "review",
  easy: "Repasa en voz alta las ideas clave y verifica que no caes en los errores que la guía señala.", sections: [] }
];

GL.sectionNames = { def: "Definición", anat: "Anatomía y fisiología", etio: "Etiología", fisio: "Fisiopatología", clin: "Manifestaciones clínicas", dx: "Diagnóstico", tx: "Tratamiento", comp: "Complicaciones", keys: "Claves de examen", err: "Errores frecuentes" };

/* Sección 4 y 5: preguntas originales con su respuesta razonada */
GL.recall = [
  { q: "Hombre de 45 años con dolor epigástrico ardoroso 2 h después de comer que lo despierta de noche y mejora al comer. ¿Qué localización de úlcera es más probable? a) Gástrica b) Duodenal c) Gastroparesia d) Dispepsia funcional.", a: "b) Duodenal. El dolor ardoroso 1–3 h posprandial, nocturno y que mejora con alimentos/antiácidos es duodenal; en la gástrica el dolor empeora al comer y hay pérdida de peso. a) fallaría porque la gástrica no mejora con comida; c) y d) no cursan con úlcera." },
  { q: "Principal mecanismo por el que los AINE favorecen la úlcera: a) Aumentan la gastrina b) Reducen prostaglandinas que protegen la mucosa c) Bloquean la H⁺/K⁺-ATPasa d) Destruyen el factor intrínseco.", a: "b). Menos prostaglandinas → menos moco, bicarbonato y flujo sanguíneo (el daño depende sobre todo de COX-1). a) es del Zollinger-Ellison; c) es el mecanismo de los IBP; d) corresponde a la gastritis autoinmune." },
  { q: "Según ACG 2024, primera línea para erradicar H. pylori en un paciente sin tratamiento previo: a) IBP + claritromicina + amoxicilina b) IBP + bismuto + tetraciclina + metronidazol por 14 días c) IBP en monoterapia d) Amoxicilina sola 7 días.", a: "b). Cuádruple con bismuto 14 días (ACG 2024). La triple con claritromicina no debe usarse sin sensibilidad confirmada; IBP solo o amoxicilina sola no erradican." },
  { q: "Paciente con melena, TA 90/60 y Hb 6.8 g/dL. Orden correcto: a) EDA inmediata sin reanimar b) Estabilizar (ABCDE), transfundir y EDA en ≤24 h c) Solo IBP oral y alta d) Cirugía de entrada.", a: "b). Primero estabilizar; Hb <7 g/dL se transfunde; EDA en ≤24 h tras reanimar. a) arriesga a un paciente inestable; c) y d) ignoran la hemorragia activa y la secuencia habitual." },
  { q: "Durante la EDA se inyecta adrenalina diluida 1:10 000 en una úlcera Forrest Ib. ¿Qué debe agregarse y por qué?", a: "Un método térmico (bipolar/heater probe) o mecánico (clips): la adrenalina solo produce vasoconstricción y taponamiento transitorios, por eso nunca se usa como monoterapia; se combina para sellar el vaso." },
  { q: "Escribe la tríada clásica de la perforación y el estudio de elección (y la alternativa si no hay TAC).", a: "Dolor súbito intenso + taquicardia + rigidez abdominal (defensa, íleo). Estudio: TAC abdominal (aire extraluminal, líquido libre); sin TAC, Rx de tórax/abdomen de pie buscando neumoperitoneo. Tratamiento: NPO, reanimación, IBP, antibiótico, cirugía." },
  { q: "Diferencia gastritis de dispepsia en una frase.", a: "La gastritis es un diagnóstico histológico (inflamación de la mucosa); la dispepsia es un conjunto de síntomas del abdomen superior, que puede ser funcional (sin enfermedad estructural) u orgánica." },
  { q: "Lactante con ojos hundidos, saliva espesa, bebe con avidez, pliegue lento y llenado capilar de 4 s. ¿Qué plan de hidratación? a) A b) B c) C d) Solo antidiarreicos.", a: "b) Plan B. Cumple ≥2 signos de deshidratación sin datos de choque. Se da SRO fraccionado (75 ml/kg en 4 h, del material). Plan C requiere choque (letargo, llenado >5 s); los antidiarreicos no tratan la deshidratación." },
  { q: "¿Cuál es la combinación que apunta a Crohn y no a colitis ulcerosa? a) Compromiso continuo desde el recto b) Inflamación transmural parcheada con íleon terminal y granulomas c) Solo mucosa d) Siempre cura con cirugía.", a: "b). Crohn: transmural, parcheado y discontinuo, íleon terminal, granulomas, fístulas; a) describe colitis ulcerosa; c) es mucosa solamente (colitis ulcerosa); d) falso: la cirugía no cura Crohn, que recidiva." },
  { q: "Mujer de 70 años con fibrilación auricular y dolor abdominal súbito e intenso con abdomen blando. Diagnóstico probable y estudio inmediato.", a: "Isquemia mesentérica aguda embólica (FA = fuente de émbolos; dolor desproporcionado a la exploración). Estudio: AngioTC sin demora; heparina, antibióticos, revascularización (WSES 2022)." },
  { q: "Rx de abdomen con imagen «en grano de café»: ¿qué es y qué tríada radiológica define la obstrucción de delgado?", a: "Es vólvulo sigmoideo. Tríada de la obstrucción: asas de delgado >3 cm, niveles hidroaéreos y ausencia de aire distal." },
  { q: "Menciona tres déficits de la malabsorción y su manifestación.", a: "Ejemplos: hierro → anemia microcítica; B12/folato → anemia megaloblástica/glositis; Ca/vit D → tetania, osteomalacia; vit K → diátesis hemorrágica; vit A → xeroftalmia." },
  { q: "Minicaso 1 (didáctico, inventado): hombre de 58 años con gonartrosis, toma naproxeno diario y prednisona. Ingresa con hematemesis «en posos de café» y melena; FC 118, TA 88/54. a) ¿Por qué tiene riesgo alto? b) Escribe los primeros 4 pasos. c) ¿Qué hacer con el AINE y con H. pylori?", a: "a) AINE + esteroide aumentan el riesgo de úlcera y sangrado; hematemesis, melena y choque indican hemorragia grave. b) ABCDE y monitorización; BH, electrolitos, urea/creatinina, TP/INR, grupo y cruzadas; transfundir si Hb <7; EDA ≤24 h con eritromicina previa y hemostasia combinada si Forrest alto. c) Retirar el AINE; buscar H. pylori, erradicar y confirmar erradicación." },
  { q: "Minicaso 2 (didáctico, inventado): mujer de 28 años con 8 meses de diarrea con esteatorrea, pérdida de peso, anemia microcítica y aftas; anti-transglutaminasa IgA positiva. a) Fisiopatología en dos pasos. b) ¿Qué estudio confirma en adultos y bajo qué condición? c) Tratamiento y causas de falta de respuesta.", a: "a) Gluten + HLA-DQ2/DQ8 → respuesta inmune → atrofia vellosa/hiperplasia de criptas → menos superficie absortiva → malabsorción. b) Biopsia duodenal con gluten en la dieta (en adultos; HLA-DQ2/DQ8 negativo casi descarta). c) Dieta sin gluten de por vida; si no responde: diagnóstico errado, incumplimiento, enfermedad refractaria o linfoma intestinal." }
];

GL.recite = [
  "Úlcera = agresión > defensa; causas principales H. pylori y AINE; duodenal mejora al comer, gástrica empeora.",
  "EDA es el método principal; biopsiar la úlcera gástrica sospechosa y buscar H. pylori siempre.",
  "Erradicación: cuádruple con bismuto 14 días (ACG 2024); triple con claritromicina solo con sensibilidad.",
  "HDA: estabilizar → Hb <7 transfundir → EDA ≤24 h; Forrest Ia/Ib/IIa = hemostasia; adrenalina nunca sola.",
  "Perforación = tríada (dolor súbito, taquicardia, rigidez) → TAC/Rx de pie → cirugía.",
  "Zollinger-Ellison = gastrinoma + úlceras graves/refractarias + diarrea; IBP; NEM1 en 25%.",
  "Lauren: intestinal (H. pylori, atrofia) vs difuso (CDH1, anillo de sello).",
  "Diarrea: lo primero es la hidratación; antibióticos solo con sangre, inmunocompromiso o cólera.",
  "Celíaca: HLA-DQ2/DQ8 + gluten → atrofia vellosa; dieta sin gluten de por vida.",
  "Crohn: transmural, parcheado, íleon terminal; corticoides inducen, no mantienen.",
  "Obstrucción: asas >3 cm, niveles hidroaéreos, sin aire distal; grano de café = vólvulo sigmoideo.",
  "Isquemia aguda: dolor desproporcionado → AngioTC + heparina; crónica: dolor posprandial + pérdida de peso + soplo."
];

GL.mistakes = [
  { t: "gastritis", x: "Confundir gastritis con dispepsia: una es diagnóstico histológico, la otra son síntomas (lám. 21)." },
  { t: "dispepsia", x: "Creer que los antieméticos aceleran el vaciamiento en gastroparesia: solo mejoran síntomas (lám. 87)." },
  { t: "complicaciones", x: "Usar adrenalina sola en hemostasia endoscópica (lám. 55)." },
  { t: "crohn", x: "Mantener Crohn con corticoides: no se usan para mantenimiento (lám. 170–171)." },
  { t: "diarrea", x: "Dar antidiarreicos o antibióticos «por reflejo»: solo en casos seleccionados; lo que salva es la hidratación (lám. 122–124)." }
];

/* ───────── PREGUNTAS (a = índice correcto; las opciones se barajan al mostrarse) ───────── */
const Q = (id, t, s, q, o, a, e) => ({ id, t, s, q, o, a, e });
GL.questions = [
/* Bases */
Q("q-bas-1","bases","Sección 1 (lám. 2)","¿Qué producto gástrico es necesario para absorber la vitamina B12 en el íleon?",["Factor intrínseco","Pepsina","Bicarbonato","Moco"],0,"El estómago produce factor intrínseco, necesario para absorber B12 en el íleon. HCl y pepsina digieren proteínas; moco y bicarbonato protegen la mucosa."),
Q("q-bas-2","bases","Sección 1 (tabla de segmentos)","¿Qué segmento absorbe vitamina B12 y sales biliares (circulación enterohepática) y contiene placas de Peyer?",["Yeyuno","Íleon","Duodeno","Estómago"],1,"El íleon (3/5 distales) absorbe B12 con factor intrínseco y sales biliares, y tiene placas de Peyer. El yeyuno absorbe la mayoría de los nutrientes."),
Q("q-bas-3","bases","Sección 1 (lám. 3, 103)","¿En qué segmento empieza la absorción de hierro, calcio, magnesio y folato?",["Íleon terminal","Estómago","Duodeno","Yeyuno distal"],2,"La guía indica que en el duodeno empieza la absorción de hierro, calcio, magnesio y folato."),
Q("q-bas-4","bases","Sección 1 (lám. 125–130)","La maldigestión se define como:",["Absorción mucosa defectuosa","Hidrólisis defectuosa","Retraso del vaciamiento gástrico","Inflamación histológica de la mucosa"],1,"Maldigestión = hidrólisis defectuosa; malabsorción = absorción mucosa defectuosa. Ambas se manifiestan como síndrome malabsortivo."),
Q("q-bas-5","bases","Sección 1 (lám. 7–8)","¿Cuál de los siguientes es un factor DEFENSIVO de la mucosa gástrica?",["Pepsina","H. pylori","AINE","Prostaglandinas"],3,"Defensas: moco, bicarbonato, prostaglandinas, flujo sanguíneo. Agresores: ácido, pepsina, H. pylori, AINE."),
Q("q-bas-6","bases","Sección 1 (tabla de segmentos)","¿Qué describe al yeyuno?",["2/5 proximales, mayor calibre, muchos pliegues circulares y más vascularizado","3/5 distales, pálido, con placas de Peyer","Segmento en «C» de ≈25 cm que recibe bilis","Segmento que regula el paso del quimo"],0,"Yeyuno: 2/5 proximales, mayor calibre, pared gruesa, muchos pliegues, rojizo; absorbe la mayoría de nutrientes. El íleon es pálido con placas de Peyer; el duodeno mide ≈25 cm en «C»; el píloro regula el paso del quimo."),
/* Úlcera */
Q("q-ulc-1","ulcera","Recuperación activa P1 / Respuesta 1","Hombre de 45 años con dolor epigástrico ardoroso 2 h después de comer que lo despierta de noche y mejora al comer. ¿Localización de úlcera más probable?",["Gástrica","Duodenal","Gastroparesia","Dispepsia funcional"],1,"Dolor ardoroso 1–3 h posprandial, nocturno y que mejora con alimentos/antiácidos = duodenal. En la gástrica el dolor empeora al comer y hay pérdida de peso; gastroparesia y dispepsia funcional no cursan con úlcera."),
Q("q-ulc-2","ulcera","Recuperación activa P2 / Respuesta 2","Principal mecanismo por el que los AINE favorecen la úlcera:",["Aumentan la gastrina","Reducen las prostaglandinas que protegen la mucosa","Bloquean la H⁺/K⁺-ATPasa","Destruyen el factor intrínseco"],1,"Menos prostaglandinas → menos moco, bicarbonato y flujo (sobre todo por COX-1). Aumentar gastrina es del Zollinger-Ellison; bloquear la bomba es el mecanismo de los IBP; destruir factor intrínseco corresponde a la gastritis autoinmune."),
Q("q-ulc-3","ulcera","Recuperación activa P3 · Guía verificada ACG 2024","Según ACG 2024, primera línea para erradicar H. pylori en un paciente sin tratamiento previo:",["IBP + claritromicina + amoxicilina","IBP + bismuto + tetraciclina + metronidazol por 14 días","IBP en monoterapia","Amoxicilina sola 7 días"],1,"Guía verificada: cuádruple con bismuto 14 días. La triple con claritromicina (la clásica del material de clase) no debe usarse sin sensibilidad confirmada; IBP solo o amoxicilina sola no erradican."),
Q("q-ulc-4","ulcera","Sección 2.1","¿Cuál es la definición de úlcera péptica que da la guía?",["Defecto de la mucosa ≥5 mm que atraviesa la muscular de la mucosa","Erosión <5 mm limitada al epitelio","Inflamación histológica de la mucosa sin defecto","Retraso del vaciamiento gástrico con dolor"],0,"Úlcera: defecto de ≥5 mm que atraviesa la muscular de la mucosa, en estómago o duodeno, de curso crónico."),
Q("q-ulc-5","ulcera","Sección 2.1 (lám. 5–6)","¿Qué proporción de las úlceras pépticas se atribuye a H. pylori en la guía?",["10–20%","25–35%","60–80%","95–100%"],2,"H. pylori causa el 60–80% de las úlceras según la guía."),
Q("q-ulc-6","ulcera","Sección 2.1 (diagnóstico)","¿Qué indica una serología IgG positiva para H. pylori?",["Infección activa confirmada","Solo contacto previo","Erradicación exitosa","Úlcera activa"],1,"La guía indica que la serología IgG solo indica contacto previo; para infección se usan aliento con urea, antígeno fecal o biopsia."),
Q("q-ulc-7","ulcera","Sección 2.1 (tabla de tratamiento)","Mecanismo de acción de los inhibidores de bomba de protones:",["Bloqueo irreversible de la H⁺/K⁺-ATPasa de la célula parietal","Bloqueo de la vía de la histamina","Barrera física sobre la úlcera","Análogo de prostaglandinas"],0,"IBP: bloqueo irreversible de la H⁺/K⁺-ATPasa. Anti-H2: vía de la histamina; sucralfato: barrera física; misoprostol: análogo de prostaglandinas."),
Q("q-ulc-8","ulcera","Sección 2.1 (tabla de tratamiento)","¿Qué fármaco es un análogo de prostaglandinas que previene el daño por AINE?",["Sucralfato","Famotidina","Misoprostol","Hidróxido de Al/Mg"],2,"Misoprostol 200 mcg c/6 h (dosis del material): análogo de prostaglandinas que previene el daño por AINE."),
Q("q-ulc-9","ulcera","Sección 2.1 (tabla de tratamiento)","Sobre los antiácidos (hidróxido de Al/Mg), según la guía:",["Aceleran la cicatrización de la úlcera","Dan alivio rápido sin acelerar la cicatrización","Erradican H. pylori","Bloquean la bomba de protones"],1,"Antiácidos: alivio rápido sin acelerar la cicatrización."),
Q("q-ulc-10","ulcera","Sección 2.1 (EDA)","Úlcera gástrica en EDA con bordes irregulares/elevados, fondo sucio, friable y pliegues no confluentes. ¿Conducta?",["Biopsiar la lesión sospechosa","Alta sin seguimiento","Solo antiácidos","Gammagrafía de vaciamiento"],0,"Son rasgos sospechosos: la guía indica biopsiar lesiones sospechosas (vigilar malignidad en la úlcera gástrica)."),
Q("q-ulc-11","ulcera","Sección 2.1 (lám. 17–19)","¿Qué hace el parche de Graham?",["Sella la perforación con epiplón","Corta el nervio vago","Ensancha el píloro","Quita el antro"],0,"Parche de Graham: sella la perforación con epiplón y evita peritonitis; indicado en úlceras perforadas."),
Q("q-ulc-12","ulcera","Sección 2.1 (lám. 17–19)","Hemorragia masiva por úlcera duodenal que erosiona la arteria gastroduodenal. Procedimiento descrito en la tabla quirúrgica:",["Piloroplastia","Ligadura directa del vaso","Vagotomía muy selectiva","Parche de Graham"],1,"Ligadura directa: sutura del vaso sangrante en hemorragia masiva (úlcera duodenal que erosiona la arteria gastroduodenal)."),
Q("q-ulc-13","ulcera","Sección 2.1 (lám. 17–19)","¿Cuál NO es una indicación quirúrgica de la úlcera péptica según la guía?",["Perforación","Hemorragia masiva que no cede a endoscopia","Obstrucción de salida","Úlcera duodenal no complicada recién diagnosticada"],3,"La cirugía queda para urgencias y complicaciones: perforación, hemorragia masiva que no cede a endoscopia, obstrucción de salida y falla absoluta al tratamiento médico."),
Q("q-ulc-14","ulcera","Sección 2.1 (lám. 35)","¿Cuál es un dato de alarma que obliga a EDA?",["Disfagia","Ardor que mejora con alimentos","Plenitud ocasional","Eructos"],0,"Datos de alarma: hematemesis, melena, anemia, pérdida de peso involuntaria, vómito persistente, disfagia, masa, dolor súbito intenso, choque."),
Q("q-ulc-15","ulcera","Sección 2.1 · recuadro Material de clase vs Guía verificada","La lámina 31 atribuye el daño mucoso por AINE a inhibir la COX-2. ¿Qué precisión hace la guía?",["El daño depende de inhibir la COX-1","El daño depende de aumentar la gastrina","El daño depende del bloqueo de la H⁺/K⁺-ATPasa","Los AINE no dañan la mucosa"],0,"La guía aclara que el daño mucoso depende de inhibir COX-1 (menos prostaglandinas, moco y bicarbonato). Lo señala como base establecida, no verificada con fuente en esa sesión."),
Q("q-ulc-16","ulcera","Sección 2.1 (lám. 5)","Según la guía, la úlcera péptica es la causa más frecuente de:",["Obstrucción intestinal","Hemorragia digestiva alta","Isquemia mesentérica","Diarrea crónica"],1,"La úlcera péptica es la causa más frecuente de hemorragia digestiva alta y de hospitalización por enfermedad GI."),
/* Gastritis */
Q("q-gas-1","gastritis","Recuperación activa P7 / Respuesta 7","¿Qué diferencia a la gastritis de la dispepsia?",["La gastritis es un diagnóstico histológico; la dispepsia es un conjunto de síntomas","Son sinónimos","La dispepsia es histológica; la gastritis es sintomática","La gastritis siempre es por AINE"],0,"Gastritis = inflamación de la mucosa (histología). Dispepsia = síntomas del abdomen superior, funcional u orgánica."),
Q("q-gas-2","gastritis","Sección 2.2 (lám. 20–28)","Gastritis con anticuerpos contra células parietales y factor intrínseco. ¿Qué déficit es característico?",["Vitamina K","Vitamina B12 (anemia megaloblástica)","Vitamina A","Calcio"],1,"La gastritis autoinmune produce déficit de B12 (anemia megaloblástica) y de hierro; se trata con B12 IM o VO a dosis altas y corrigiendo hierro."),
Q("q-gas-3","gastritis","Sección 2.2 (tabla de causas)","Gastritis por AINE. Tratamiento según la tabla:",["Suspender el AINE e IBP 4–8 semanas","Cuádruple con bismuto 14 días","Vitamina B12 IM","Cirugía"],0,"Suspender el AINE; IBP (omeprazol 20 mg/día) 4–8 semanas; si es indispensable, menor dosis + IBP."),
Q("q-gas-4","gastritis","Sección 2.2","Principales causas de gastritis crónica según la guía:",["H. pylori y autoinmunidad","Alcohol y estrés","Infecciones virales y radioterapia","Reflujo biliar y café"],0,"La crónica puede producir atrofia y pérdida de glándulas; sus causas principales son H. pylori y autoinmunidad."),
Q("q-gas-5","gastritis","Sección 2.2 (tabla de causas)","¿Cuál es un factor de riesgo de infección por H. pylori señalado en la guía?",["Hacinamiento","Grupo sanguíneo A","Diabetes","Uso de estatinas"],0,"Factores: hacinamiento, agua o alimentos contaminados, infancia, convivencia con infectado."),
Q("q-gas-6","gastritis","Sección 2.2","¿Qué estudio establece el diagnóstico de gastritis?",["EDA con biopsia","Serología IgG aislada","Radiografía de abdomen","Gammagrafía de vaciamiento"],0,"Al ser un diagnóstico histológico, se establece con EDA con biopsia (inflamación, atrofia, metaplasia, H. pylori)."),
/* Zollinger */
Q("q-zol-1","zollinger","Sección 2.3 (lám. 38–43)","¿Qué es el síndrome de Zollinger-Ellison?",["Tumor neuroendocrino secretor de gastrina","Gastritis autoinmune","Infección crónica por H. pylori","Retraso del vaciamiento gástrico"],0,"Gastrinoma → hipergastrinemia no regulada → secreción de ácido sin freno → úlceras graves, recurrentes o resistentes."),
Q("q-zol-2","zollinger","Sección 2.3","Localización más frecuente del gastrinoma según la guía:",["Duodeno (50–85%)","Estómago","Íleon","Colon"],0,"Duodeno (50–85%), páncreas y ganglios abdominales («triángulo del gastrinoma»)."),
Q("q-zol-3","zollinger","Sección 2.3","¿Qué proporción de Zollinger-Ellison se asocia a NEM1?",["5%","25%","50%","75%"],1,"75% esporádico; 25% con NEM1 (gen MEN1, 11q13), unos 10 años antes."),
Q("q-zol-4","zollinger","Sección 2.3","¿Qué hallazgo confirma el diagnóstico según la guía?",["Gastrina sérica en ayunas >10 veces lo normal con pH gástrico <2","Serología IgG positiva para H. pylori","Anti-transglutaminasa IgA","Calprotectina fecal elevada"],0,"Gastrina en ayunas >10 veces lo normal con pH <2 confirma (la lámina dice «GSA», interpretado como gastrina sérica en ayunas)."),
Q("q-zol-5","zollinger","Sección 2.3","Tratamiento farmacológico de elección en el Zollinger-Ellison:",["IBP","Misoprostol","Sucralfato","Antiácidos"],0,"IBP de elección (1–2 dosis/día; IV si no tolera VO) + tratar el tumor."),
Q("q-zol-6","zollinger","Sección 2.3","Además del dolor epigástrico, ¿qué síntoma presenta el 65% de los pacientes con Zollinger-Ellison?",["Diarrea","Estreñimiento","Ictericia","Hematuria"],0,"Diarrea (65%), reflujo (44%), daño esofágico (75%)."),
/* Complicaciones */
Q("q-com-1","complicaciones","Recuperación activa P4 · ACG 2021","Paciente con melena, TA 90/60 y Hb 6.8 g/dL. Orden correcto:",["EDA inmediata sin reanimar","Estabilizar (ABCDE), transfundir y EDA en ≤24 h","Solo IBP oral y alta","Cirugía de entrada"],1,"Primero estabilizar; Hb <7 g/dL se transfunde; EDA ≤24 h tras reanimar. Las otras opciones arriesgan a un paciente inestable o ignoran la secuencia."),
Q("q-com-2","complicaciones","Recuperación activa P5 / Respuesta 5","Se inyecta adrenalina 1:10 000 en una úlcera Forrest Ib. ¿Qué debe agregarse?",["Un método térmico (bipolar/heater probe) o mecánico (clips)","Nada: la adrenalina basta","Misoprostol","Antiácidos"],0,"La adrenalina solo da vasoconstricción y taponamiento transitorios: nunca en monoterapia; se combina con térmico o clips para sellar el vaso."),
Q("q-com-3","complicaciones","Recuperación activa P6 / Respuesta 6","Tríada clásica de la perforación de úlcera:",["Dolor súbito intenso + taquicardia + rigidez abdominal","Fiebre + ictericia + dolor en hipocondrio","Dolor posprandial + pérdida de peso + soplo","Vómito + distensión + ausencia de gases"],0,"Dolor súbito + taquicardia + rigidez (defensa involuntaria, íleo). La tríada posprandial es de isquemia mesentérica crónica."),
Q("q-com-4","complicaciones","Sección 2.4","Complicación más frecuente de la úlcera péptica:",["Hemorragia","Perforación","Penetración","Obstrucción de salida"],0,"Hemorragia ≈50%; la obstrucción de salida es <5%."),
Q("q-com-5","complicaciones","Sección 2.4 (Forrest)","En la clasificación de Forrest, un vaso visible corresponde a:",["Ia","Ib","IIa","III"],2,"Ia chorro, Ib sábana, IIa vaso visible, IIb coágulo adherido, IIc hematina, III fondo limpio."),
Q("q-com-6","complicaciones","Sección 2.4 (Forrest)","¿Qué estigmas de Forrest se consideran de alto riesgo y requieren hemostasia?",["Ia, Ib y IIa","IIb, IIc y III","Solo III","Solo IIc"],0,"Ia/Ib/IIa = alto riesgo → hemostasia endoscópica."),
Q("q-com-7","complicaciones","Sección 2.4","Hematemesis «en posos de café» indica:",["Sangre expuesta al ácido","Sangrado reciente y activo en chorro","Sangrado de colon","Perforación"],0,"Roja = reciente; «posos de café» = sangre expuesta a ácido."),
Q("q-com-8","complicaciones","Sección 2.4","Úlcera duodenal de cara posterior que sangra masivamente. ¿Qué vaso suele erosionar?",["Arteria gastroduodenal","Arteria mesentérica superior","Vena porta","Arteria esplénica"],0,"Duodenal posterior → arteria gastroduodenal; gástrica → ramas gástricas."),
Q("q-com-9","complicaciones","Sección 2.4","Dolor ulceroso que pasa de intermitente a persistente, de localizado a irradiado y de respondedor a refractario sugiere:",["Penetración (úlcera tenebrada)","Obstrucción de salida","Gastroparesia","Dispepsia funcional"],0,"En la penetración la úlcera atraviesa la pared pero la contiene un órgano vecino (páncreas, hígado, vía biliar, epiplón, colon)."),
Q("q-com-10","complicaciones","Sección 2.4","En la obstrucción de salida crónica por úlcera, ¿qué conducta endoscópica describe la guía?",["Dilatación con balón (objetivo ≈15 mm)","Ligadura con bandas","Inyección de adrenalina sola","Gastrostomía inmediata"],0,"Manejo: NPO, SNG, NaCl 0.9% IV, KCl, IBP; dilatación endoscópica con balón (≈15 mm); TC para localizar, biopsiar y descartar malignidad."),
Q("q-com-11","complicaciones","Sección 2.4 (Figura 3)","Ante resangrado tras hemostasia endoscópica, la secuencia es:",["Repetir EDA → embolización → cirugía","Cirugía directa → EDA","Solo transfusión","Alta con IBP oral"],0,"Resangrado: 1) repetir EDA, 2) embolización, 3) cirugía si falla o inestable."),
Q("q-com-12","complicaciones","Sección 2.4","Sospecha de perforación sin TAC disponible. ¿Qué estudio busca neumoperitoneo?",["Rx de tórax/abdomen de pie","Gammagrafía de vaciamiento","Colonoscopia","Ecografía endoscópica"],0,"Sin TAC: Rx de tórax/abdomen de pie → neumoperitoneo."),
Q("q-com-13","complicaciones","Sección 2.4 (ACG 2021)","Tras la hemostasia endoscópica, la guía indica IBP en dosis altas durante:",["3 días (ACG)","1 día","30 días IV","No se indica IBP"],0,"Post-hemostasia: IBP en dosis altas (ACG: 3 días)."),
Q("q-com-14","complicaciones","Sección 2.4","En la obstrucción de salida, la fase aguda se caracteriza por:",["Inflamación, edema y espasmo (reversible)","Fibrosis con estenosis fija","Perforación libre","Hemorragia arterial"],0,"Aguda: inflamación + edema + espasmo (reversible). Crónica: cicatrización → fibrosis → estenosis pilórica fija."),
Q("q-com-15","complicaciones","Sección 2.4 (Figura 3; ACG 2021)","¿Qué fármaco se administra IV antes de la EDA en la HDA por úlcera según el algoritmo?",["Eritromicina","Ondansetrón","Metoclopramida","Octreotida"],0,"El algoritmo indica eritromicina IV antes de la EDA (ACG 2021)."),
/* Dispepsia / gastroparesia */
Q("q-dis-1","dispepsia","Sección 2.5 (Roma IV)","Según Roma IV, el síndrome de distrés posprandial (PDS) se caracteriza por:",["Plenitud posprandial y saciedad precoz","Dolor y ardor epigástrico","Diarrea y fiebre","Disfagia y pérdida de peso"],0,"PDS: plenitud + saciedad. EPS (dolor epigástrico): dolor + ardor."),
Q("q-dis-2","dispepsia","Sección 2.5","Causa más frecuente de gastroparesia según la guía:",["Diabetes (57%)","Idiopática","Posquirúrgica","Hipotiroidismo"],0,"Diabetes 57%, posquirúrgica/vagal 15%, medicamentos 11.8%, idiopática 11.3%."),
Q("q-dis-3","dispepsia","Sección 2.5","Estudio para demostrar gastroparesia tras excluir obstrucción:",["Gammagrafía de vaciamiento con comida sólida ≥3 h (preferible 4 h)","Serología IgG para H. pylori","Colonoscopia","Rx de abdomen de pie"],0,"Gammagrafía con comida sólida ≥3 h (preferible 4 h); alternativas: prueba respiratoria ¹³C, cápsula inalámbrica."),
Q("q-dis-4","dispepsia","Sección 2.5 (lám. 87)","Sobre el ondansetrón en gastroparesia:",["Mejora síntomas pero no acelera el vaciamiento","Acelera el vaciamiento gástrico","Es el tratamiento de la gastroparesia refractaria","Está contraindicado siempre"],0,"Los antieméticos mejoran síntomas pero NO aceleran el vaciamiento (error frecuente, lám. 87)."),
Q("q-dis-5","dispepsia","Sección 2.5","Dispepsia funcional con H. pylori negativo. Primer paso terapéutico según la guía:",["IBP","Neuromodulador","G-POEM","Erradicación"],0,"H. pylori + → erradicar; si no → IBP; persiste → procinético; refractaria → neuromodulador."),
Q("q-dis-6","dispepsia","Sección 2.5","Opción para gastroparesia refractaria mencionada en la guía:",["G-POEM","Botox pilórico de rutina","Parche de Graham","Vagotomía troncular"],0,"Refractaria: G-POEM; el botox pilórico no es de rutina."),
Q("q-dis-7","dispepsia","Sección 2.5","Dato que obliga a descartar enfermedad orgánica antes de diagnosticar dispepsia funcional:",["Pérdida de peso","Plenitud posprandial","Ardor epigástrico","Saciedad precoz"],0,"Alarma: pérdida de peso, sangrado/anemia, disfagia, vómito persistente, masa, antecedente familiar de cáncer GI. Las otras opciones son síntomas de Roma IV."),
/* Cáncer gástrico */
Q("q-can-1","cancer","Sección 2.6","Tipo histológico más frecuente de cáncer gástrico:",["Adenocarcinoma (≈85%)","Linfoma","GIST","Tumor neuroendocrino"],0,"Adenocarcinoma ≈85%; linfomas ≈3%; neuroendocrinos <1%."),
Q("q-can-2","cancer","Sección 2.6 (Lauren)","Cáncer gástrico con células en anillo de sello y alteración de CDH1 (E-cadherina). Tipo de Lauren:",["Difuso","Intestinal","Mixto por H. pylori","GIST"],0,"Difuso: CDH1, anillo de sello, mujeres jóvenes, diseminación linfática, grupo sanguíneo A."),
Q("q-can-3","cancer","Sección 2.6 (Lauren)","Perfil del tipo intestinal de Lauren:",["Hombres mayores, H. pylori/gastritis atrófica, diseminación hematógena","Mujeres jóvenes, CDH1, diseminación linfática","Niños, grupo sanguíneo A","Sin relación con H. pylori"],0,"Intestinal: H. pylori + gastritis atrófica, metaplasia intestinal, zonas endémicas; hombres > mujeres, mayores; hematógena."),
Q("q-can-4","cancer","Sección 2.6","Ganglio de Virchow en cáncer gástrico avanzado se localiza en:",["Región supraclavicular izquierda","Ombligo","Ovario","Fondo de saco rectal"],0,"Virchow: supraclavicular izq.; hermana María José: umbilical; Krukenberg: ovario; Blumer: rectal."),
Q("q-can-5","cancer","Sección 2.6","El tumor de Krukenberg es una metástasis de cáncer gástrico en:",["Ovario","Ombligo","Ganglio supraclavicular","Recto"],0,"Krukenberg = ovario."),
Q("q-can-6","cancer","Sección 2.6 (carcinogénesis)","Secuencia de carcinogénesis gástrica descrita:",["H. pylori → gastritis crónica → atrofia → menor acidez → nitritos carcinógenos","AINE → úlcera → perforación","Gluten → atrofia vellosa → linfoma","Gastrinoma → hiperacidez → cáncer"],0,"H. pylori → gastritis crónica → atrofia → menor acidez → nitratos a nitritos carcinógenos → alteraciones genéticas."),
Q("q-can-7","cancer","Sección 2.6","¿Por qué puede ser negativa la biopsia en el cáncer gástrico difuso y qué ayuda?",["Por crecimiento submucoso; la ecografía endoscópica guía","Porque no existe; basta la serología","Porque solo afecta al duodeno","Por su origen en el ovario"],0,"La difusa puede dar biopsia negativa; la ecografía endoscópica guía si es submucosa."),
/* Cuerpos extraños */
Q("q-cue-1","cuerpos","Sección 2.7 (lám. 44–48)","Sitio de impactación más común de cuerpos extraños en tubo digestivo superior:",["Cricofaríngeo","Píloro","Arco aórtico","Unión gastroesofágica"],0,"Cricofaríngeo (el más común), arco aórtico (≈25 cm de incisivos), unión GE, píloro."),
Q("q-cue-2","cuerpos","Sección 2.7 (lám. 48)","Niño que ingirió una pila de botón, asintomático. Conducta:",["Extraer de inmediato, idealmente ≤2 h","Esperar expulsión 10–14 días","Extraer en ≤24 h","Solo observación"],0,"Pilas: extraer de inmediato (≤2 h) aun asintomático por lesión grave."),
Q("q-cue-3","cuerpos","Sección 2.7 (lám. 48)","Objeto afilado en tubo digestivo superior. Plazo de extracción endoscópica:",["Urgente ≤6 h","≤24 h","≤72 h","No requiere extracción"],0,"Afilados: urgente ≤6 h (riesgo de perforación, mediastinitis)."),
Q("q-cue-4","cuerpos","Sección 2.7","Proporción de cuerpos extraños que se expulsan solos:",["80–90%","10–20%","40–50%","100%"],0,"80–90% se expulsan solos."),
Q("q-cue-5","cuerpos","Sección 2.7","Primera imagen ante sospecha de cuerpo extraño (sin sospecha de perforación):",["Radiografía","TC","Gammagrafía","Ecografía endoscópica"],0,"Radiografía (≈83% son radiopacos); TC si se sospecha perforación."),
Q("q-cue-6","cuerpos","Sección 2.7 (lám. 48)","¿Por qué los imanes requieren endoscopia inmediata?",["Se atraen a través de la pared intestinal","Son siempre radiolúcidos","Liberan álcali","Causan obstrucción esofágica constante"],0,"Imanes: se atraen a través de la pared intestinal → endoscopia inmediata."),
/* Diarrea */
Q("q-dia-1","diarrea","Recuperación activa P8 / Respuesta 8","Lactante con ojos hundidos, saliva espesa, bebe con avidez, pliegue lento y llenado capilar de 4 s. Plan de hidratación:",["Plan A","Plan B","Plan C","Solo antidiarreicos"],1,"≥2 signos de deshidratación sin choque → Plan B: SRO fraccionado 75 ml/kg en 4 h (del material). Plan C requiere choque (llenado >5 s)."),
Q("q-dia-2","diarrea","Sección 3.1","Una diarrea de 20 días de evolución se clasifica como:",["Persistente","Aguda","Crónica","Disentérica"],0,"Aguda <14 días, persistente 14–30 días, crónica >30 días."),
Q("q-dia-3","diarrea","Sección 3.1 (patogenia)","Mecanismo de la toxina termolábil de V. cholerae y ETEC:",["↑AMPc → ↓absorción de Na⁺ y ↑secreción de Cl⁻/agua","Invasión con úlceras","↑GMPc exclusivamente","Acortamiento de vellosidades por virus"],0,"Enterotoxigenicidad sin invadir: termolábil ↑AMPc; termoestable ↑GMPc."),
Q("q-dia-4","diarrea","Sección 3.1 (tabla alta vs baja)","Diarrea con sangre, moco, pus, poco volumen, pujo, tenesmo y fiebre alta. Corresponde a:",["Diarrea baja (inflamatoria/disentérica)","Diarrea alta no inflamatoria","Diarrea osmótica por lactosa","Síndrome de intestino irritable"],0,"Baja (colon): sangre, moco, pus, poco volumen, tenesmo; fiebre alta; pérdida de Na 60–120 mEq/L."),
Q("q-dia-5","diarrea","Sección 3.1","Diarrea tras consumir arroz. Microorganismo asociado en la guía:",["Bacillus cereus","Listeria","Vibrio","Campylobacter"],0,"Arroz → Bacillus cereus; quesos → Listeria; mariscos → Vibrio; pollo → Campylobacter."),
Q("q-dia-6","diarrea","Sección 3.1","Complicación más frecuente y principal causa de muerte por diarrea:",["Deshidratación","Sepsis","Íleo paralítico","Perforación"],0,"Deshidratación (y acidosis)."),
Q("q-dia-7","diarrea","Sección 3.1","¿Cuándo indica la guía antimicrobianos en la diarrea?",["Con sangre, inmunocompromiso o cólera","En toda diarrea aguda","Solo en niños","Nunca"],0,"Antimicrobianos solo con sangre, inmunocompromiso o cólera."),
Q("q-dia-8","diarrea","Sección 3.1 (planes)","Paciente inconsciente, hipotónico, no puede beber, pulso débil y llenado capilar >5 s. Conducta:",["Plan C: líquidos IV (Ringer lactato o salina) con reevaluación","Plan B: SRO 75 ml/kg en 4 h","Plan A: más líquidos en casa","Loperamida"],0,"Choque hipovolémico = Plan C: líquidos IV; pasar a SRO cuando pueda beber."),
Q("q-dia-9","diarrea","Sección 3.1","Mecanismo de la diarrea por rotavirus:",["Infecta el epitelio del duodeno/yeyuno proximal y acorta las vellosidades","Invade el colon y forma úlceras","Toxina que ↑AMPc","Citotoxicidad colónica"],0,"Rotavirus: acortamiento de vellosidades en duodeno/yeyuno proximal."),
Q("q-dia-10","diarrea","Sección 3.1","¿En quién puede usarse loperamida según la guía?",["Adultos sin fiebre ni disentería","Niños con disentería","Adultos con fiebre alta","Cualquier paciente con sangre en heces"],0,"Antidiarreicos (loperamida) en adultos sin fiebre ni disentería."),
Q("q-dia-11","diarrea","Sección 3.1 (tabla alta vs baja)","Pérdida de sodio fecal típica de la diarrea alta no inflamatoria:",["30–40 mEq/L","60–120 mEq/L","150–200 mEq/L","<5 mEq/L"],0,"Alta: 30–40 mEq/L; baja: 60–120 mEq/L."),
/* Malabsorción */
Q("q-mal-1","malabsorcion","Recuperación activa P12 / Respuesta 12","¿Qué par déficit → manifestación es correcto?",["Vitamina K → diátesis hemorrágica","Hierro → anemia megaloblástica","Vitamina A → tetania","Calcio → xeroftalmia"],0,"Hierro → anemia microcítica; B12/folato → megaloblástica; Ca/vit D → tetania, osteomalacia; vit K → diátesis hemorrágica; vit A → xeroftalmia."),
Q("q-mal-2","malabsorcion","Sección 3.2","Haplotipos HLA asociados a la enfermedad celíaca:",["HLA-DQ2 o DQ8","HLA-B27","HLA-DR3 exclusivamente","NOD2"],0,"Celíaca: péptidos del gluten en personas con HLA-DQ2 o DQ8. HLA-B27 y NOD2 aparecen en Crohn."),
Q("q-mal-3","malabsorcion","Sección 3.2","Péptido del gluten del centeno:",["Secalina","Gliadina","Hordeína","Avenina"],0,"Gliadina (trigo), hordeína (cebada), secalina (centeno)."),
Q("q-mal-4","malabsorcion","Sección 3.2 (Marsh)","Marsh 1 corresponde a:",["LIE >40 por 100 enterocitos","Hiperplasia de criptas","Atrofia total","Hipoplasia"],0,"Marsh 0 normal; 1 LIE >40/100; 2 + hiperplasia de criptas; 3a/b/c atrofia leve/marcada/total; 4 hipoplasia."),
Q("q-mal-5","malabsorcion","Sección 3.2 (formas)","Anticuerpos positivos y HLA compatible sin atrofia (Marsh 0–2). Forma de celíaca:",["Potencial","Clásica","Refractaria","Atípica"],0,"Potencial: anticuerpos + HLA compatible sin atrofia; riesgo de desarrollar enfermedad."),
Q("q-mal-6","malabsorcion","Sección 3.2","HLA-DQ2/DQ8 negativo en sospecha de celíaca:",["Casi descarta la enfermedad (VPN 99%)","Confirma la enfermedad","No aporta información","Indica forma refractaria"],0,"Valor predictivo negativo 99%: si es negativo, casi descarta."),
Q("q-mal-7","malabsorcion","Sección 3.2","Condición para que la biopsia duodenal sea válida en celíaca:",["Que el paciente esté comiendo gluten","Que lleve 6 meses sin gluten","Que tenga HLA-B27","Que esté en ayuno de 72 h"],0,"Biopsia duodenal con el paciente comiendo gluten."),
Q("q-mal-8","malabsorcion","Sección 3.2 · Guía verificada ESPGHAN 2020","Según ESPGHAN 2020, ¿cuándo puede diagnosticarse celíaca sin biopsia en niños?",["Anti-tTG IgA ≥10 veces el límite superior y antiendomisio positivo en una segunda muestra","Anti-tTG IgA positiva a cualquier título","Solo con HLA-DQ2 positivo","Con síntomas clásicos sin serología"],0,"Guía verificada: tTG IgA ≥10× LSN + EMA positivo en segunda muestra (y acuerdo familiar); HLA y síntomas ya no son obligatorios. Material de clase: algoritmo antiguo con biopsia; en adultos la lámina indica biopsia."),
Q("q-mal-9","malabsorcion","Sección 3.2 (lám. 154–156)","Malabsorción con artralgias migratorias, síntomas neurológicos y macrófagos PAS positivos:",["Enfermedad de Whipple","Esprúe tropical","Celíaca refractaria","Intestino corto"],0,"Whipple: Tropheryma whipplei, macrófagos PAS+; antibióticos prolongados."),
Q("q-mal-10","malabsorcion","Sección 3.2 (lám. 154–156)","Tratamiento del esprúe tropical según la guía:",["Tetraciclina/doxiciclina + ácido fólico","Dieta sin gluten de por vida","Corticoides","Resección intestinal"],0,"Esprúe tropical: zonas tropicales, atrofia vellosa; tetraciclina/doxiciclina + ácido fólico; no depende del gluten."),
Q("q-mal-11","malabsorcion","Sección 3.2","Resección del íleon terminal en intestino corto produce déficit de:",["B12 y sales biliares","Hierro y calcio","Vitamina C","Yodo"],0,"La pérdida del íleon terminal causa déficit de B12 y de sales biliares."),
Q("q-mal-12","malabsorcion","Sección 3.2","Celíaca que no responde a la dieta. Causas que considera la guía:",["Diagnóstico errado, incumplimiento, linfoma intestinal","Exceso de fibra","Falta de IBP","Infección por H. pylori"],0,"Si no responde: diagnóstico errado, incumplimiento, linfoma intestinal (y forma refractaria)."),
Q("q-mal-13","malabsorcion","Sección 3.2 (formas)","Celíaca con atrofia vellosa, anticuerpos y pocos síntomas GI (anemia, osteoporosis, aftas, amenorrea):",["Atípica","Clásica","Potencial","Subclínica"],0,"Atípica: atrofia + anticuerpos + pocos síntomas GI."),
/* Crohn */
Q("q-cro-1","crohn","Recuperación activa P9 / Respuesta 9","¿Qué combinación apunta a Crohn y no a colitis ulcerosa?",["Inflamación transmural parcheada con íleon terminal y granulomas","Compromiso continuo desde el recto","Inflamación solo de la mucosa","Curación definitiva con cirugía"],0,"Crohn: transmural, parcheado, íleon terminal, granulomas, fístulas. Continuo desde el recto y solo mucosa describen colitis ulcerosa; la cirugía no cura Crohn."),
Q("q-cro-2","crohn","Sección 3.3","Zona más frecuentemente afectada en la enfermedad de Crohn:",["Íleon terminal","Recto","Esófago","Duodeno"],0,"Puede afectar todo el tubo digestivo; el íleon terminal es la zona más frecuente."),
Q("q-cro-3","crohn","Sección 3.3 (lám. 170–171)","Papel de los corticoides en Crohn:",["Inducen remisión pero no se usan para mantener","Son el tratamiento de mantenimiento de elección","Están contraindicados en la inducción","Curan la enfermedad"],0,"Corticoides NO para mantener (error frecuente). Mantenimiento: anti-TNF, vedolizumab, ustekinumab, risankizumab, upadacitinib."),
Q("q-cro-4","crohn","Sección 3.3","¿Cuál es una manifestación extraintestinal de Crohn?",["Pioderma gangrenoso","Ganglio de Virchow","Xeroftalmia aislada","Neumoperitoneo"],0,"Extraintestinal (≈50%): artritis seronegativa, entesitis, eritema nodoso, pioderma gangrenoso, uveítis/epiescleritis, colangitis esclerosante, estomatitis aftosa."),
Q("q-cro-5","crohn","Sección 3.3","Un CDAI <150 indica:",["Remisión","Actividad grave","Enfermedad fistulizante","Indicación quirúrgica"],0,"Actividad con CDAI (<150 remisión) y Harvey-Bradshaw."),
Q("q-cro-6","crohn","Sección 3.3","Inducción en Crohn leve ileocecal:",["Budesonida oral","Infliximab de mantenimiento","Antibióticos de rutina","Cirugía"],0,"Leve ileocecal: budesonida oral; moderado-grave: prednisona/metilprednisolona + tiopurina o terapia avanzada temprana."),
Q("q-cro-7","crohn","Sección 3.3","¿Cuándo se usan antibióticos en Crohn según la guía?",["Solo en abscesos o enfermedad perianal","Como mantenimiento","En todo brote","Nunca"],0,"Antibióticos solo en abscesos o enfermedad perianal."),
Q("q-cro-8","crohn","Sección 3.3 (ileítis)","Rasgo que distingue la ileítis por AINE del Crohn:",["Ausencia de granulomas y mejora al suspender el AINE","Inflamación transmural con fístulas","Afectación perianal","Mucosa en empedrado"],0,"Ileítis por AINE: úlceras superficiales, estenosis «en diafragma», mejora al suspender, sin granulomas."),
Q("q-cro-9","crohn","Sección 3.3 (ileítis)","Agente de ileítis infecciosa que puede simular apendicitis:",["Yersinia","Rotavirus","Giardia","V. cholerae"],0,"Yersinia puede simular apendicitis."),
Q("q-cro-10","crohn","Sección 3.3","Paciente con Crohn, infecciones urinarias de repetición y neumaturia. Sospecha:",["Fístula entero-vesical","Fístula recto-vaginal","Colangitis esclerosante","Obstrucción de salida"],0,"Fístulas entero-vesicales: infecciones urinarias, neumaturia."),
Q("q-cro-11","crohn","Sección 3.3","¿Qué medida general indica la guía en Crohn?",["Dejar el tabaco","Dieta sin gluten","Ayuno prolongado","Antiácidos"],0,"General: dejar tabaco (el tabaco es factor ambiental)."),
/* SII */
Q("q-sii-1","sii","Sección 3.4 · Guía verificada Roma IV","Criterio temporal de Roma IV para SII:",["Dolor al menos 1 día/semana en los últimos 3 meses, inicio ≥6 meses antes","Al menos 3 días por mes en los últimos 3 meses","Dolor diario durante 1 mes","Al menos 1 episodio al año"],0,"Roma IV: ≥1 día/semana en 3 meses + ≥2 criterios (relación con defecación, cambio de frecuencia, cambio de forma); inicio ≥6 meses. «3 días/mes» (material de clase) corresponde a Roma III."),
Q("q-sii-2","sii","Sección 3.4","¿Qué dato NO es compatible con SII y obliga a buscar otra causa?",["Sangrado rectal","Distensión","Dolor que se relaciona con la defecación","Cambio en la forma de las heces"],0,"Alarma: pérdida de peso, sangrado rectal, dolor nocturno progresivo, fiebre, anemia o marcadores inflamatorios, inicio después de los 50 años."),
Q("q-sii-3","sii","Sección 3.4","SII-D se define por:",["Heces blandas >25% de las deposiciones","Heces duras >25%","Ausencia de dolor","Sangrado"],0,"SII-C: heces duras >25%; SII-D: heces blandas >25%; SII-M: mixto."),
Q("q-sii-4","sii","Sección 3.4","Antidepresivo indicado en SII con diarrea según la guía:",["Tricíclicos","ISRS","Ninguno","Anti-TNF"],0,"ISRS si hay estreñimiento; tricíclicos si hay diarrea."),
Q("q-sii-5","sii","Sección 3.4","Mecanismo por el que los FODMAP empeoran el SII:",["Fermentación → gas y distensión","Atrofia de vellosidades","Inflamación transmural","Hipersecreción de ácido"],0,"Fermentación de FODMAP (lactosa, fructanos, polioles, exceso de fructosa, GOS) → gas y distensión."),
Q("q-sii-6","sii","Sección 3.4","Según la guía, ¿qué tiene la mayor importancia en el tratamiento del SII?",["La dieta (baja en FODMAP, fibra, probióticos)","Los corticoides","La cirugía","Los antibióticos de amplio espectro de rutina"],0,"Dieta (≠ fármacos en importancia): baja en FODMAP, fibra, probióticos, evitar café/alcohol/picante."),
/* Obstrucción */
Q("q-obs-1","obstruccion","Recuperación activa P11 / Respuesta 11","Rx de abdomen con imagen «en grano de café». ¿Qué es?",["Vólvulo sigmoideo","Obstrucción por adherencias de delgado","Neumoperitoneo","Isquemia mesentérica"],0,"Grano de café = vólvulo sigmoideo."),
Q("q-obs-2","obstruccion","Sección 3.5","Tríada radiológica de la obstrucción de intestino delgado:",["Asas >3 cm, niveles hidroaéreos y ausencia de aire distal","Neumoperitoneo, líquido libre y lactato alto","Gas portal, neumatosis y falta de realce","Asas <1 cm, aire distal y heces"],0,"Asas de delgado dilatadas >3 cm, niveles hidroaéreos y ausencia de aire distal."),
Q("q-obs-3","obstruccion","Sección 3.5","Causa mecánica principal de obstrucción intestinal:",["Adherencias posoperatorias","Cálculos biliares","Bezoares","Neoplasia metastásica"],0,"Las adherencias posoperatorias son la causa mecánica principal."),
Q("q-obs-4","obstruccion","Sección 3.5","¿Cuál se maneja de forma conservadora según la guía?",["Obstrucción parcial del delgado (48 h)","Hernia estrangulada","Vólvulo","Asa cerrada"],0,"Conservador: parcial del delgado (48 h), posoperatoria temprana y por Crohn. Urgente: hernia estrangulada, vólvulo, peritonitis, asa cerrada."),
Q("q-obs-5","obstruccion","Sección 3.5","Signo de viabilidad del asa intestinal durante la cirugía:",["Pulsaciones arteriales marginales","Color negro","Ausencia de peristalsis","Pared friable sin pulso"],0,"Viabilidad: color normal, peristalsis, pulsaciones arteriales marginales."),
Q("q-obs-6","obstruccion","Sección 3.5","Los bezoares y los cálculos biliares son causas de obstrucción:",["Intraluminales","Intramurales","Extraluminales","No mecánicas"],0,"Intraluminales: cálculos biliares, bezoares, cuerpos extraños, impacto fecal."),
Q("q-obs-7","obstruccion","Sección 3.5","El íleo corresponde a una obstrucción:",["No mecánica","Mecánica intraluminal","Mecánica extraluminal","Por vólvulo"],0,"Mecánica (hay obstáculo) o no mecánica (íleo)."),
Q("q-obs-8","obstruccion","Sección 3.5","Tratamiento estándar de la obstrucción intestinal completa:",["Cirugía","Manejo conservador 48 h","Solo antibióticos","Laxantes"],0,"Cirugía es el estándar en la obstrucción completa."),
/* Isquemia */
Q("q-isq-1","isquemia","Recuperación activa P10 · WSES 2022","Mujer de 70 años con FA y dolor abdominal súbito e intenso con abdomen blando. Diagnóstico y estudio inmediato:",["Isquemia mesentérica aguda embólica; AngioTC sin demora","Úlcera perforada; Rx de pie","Obstrucción por adherencias; serie abdominal","SII; criterios de Roma IV"],0,"FA = fuente de émbolos; dolor desproporcionado a la exploración. AngioTC sin demora; heparina, antibióticos, revascularización."),
Q("q-isq-2","isquemia","Sección 3.6","Rasgo clínico típico de la isquemia mesentérica aguda:",["Dolor intenso desproporcionado a la exploración física","Dolor que mejora al comer","Dolor que se relaciona con la defecación","Dolor epigástrico nocturno"],0,"Dolor desproporcionado a la exploración; tardío: defensa, rebote, acidosis, choque séptico."),
Q("q-isq-3","isquemia","Sección 3.6","Tríada de la isquemia mesentérica crónica:",["Dolor posprandial, pérdida de peso y soplo abdominal","Dolor súbito, taquicardia y rigidez","Fiebre, ictericia y dolor","Diarrea, esteatorrea y aftas"],0,"Dolor posprandial (10–30 min tras comer, 1–2 h), pérdida de peso («miedo a la comida») y soplo abdominal."),
Q("q-isq-4","isquemia","Sección 3.6","Anticoagulante preferido antes de la cirugía en isquemia aguda:",["Heparina no fraccionada","Warfarina oral","Clopidogrel","Ninguno"],0,"Heparina (no fraccionada preferida) antes de cirugía."),
Q("q-isq-5","isquemia","Sección 3.6","Isquemia mesentérica no oclusiva (NOMI). Tratamiento:",["Corregir hipotensión y gasto, reducir vasoconstrictores","Embolectomía urgente siempre","Solo anticoagulación oral","Dieta baja en FODMAP"],0,"NOMI (bajo gasto/vasopresores): corregir hipotensión y gasto, reducir vasoconstrictores."),
Q("q-isq-6","isquemia","Sección 3.6 · Guía verificada WSES 2022","Según WSES 2022, sobre la AngioTC en sospecha de isquemia aguda:",["No debe retrasarse por la función renal","Debe esperar a normalizar la creatinina","Se sustituye por Rx simple","Solo tras laparotomía"],0,"La Rx simple no descarta isquemia y la AngioTC no debe retrasarse por función renal."),
Q("q-isq-7","isquemia","Sección 3.6","Lactato, D-dímero y leucocitos en isquemia aguda:",["No confirman el diagnóstico","Lo confirman si son normales","Descartan isquemia si son normales","Reemplazan la AngioTC"],0,"Lactato, D-dímero, leucocitos no confirman; la AngioTC sin demora."),
Q("q-isq-8","isquemia","Sección 3.6","Tratamiento de la trombosis venosa mesentérica según la guía:",["Anticoagulación","Angioplastia + stent","Reducir vasoconstrictores","Dieta"],0,"Trombosis venosa: anticoagulación."),
Q("q-isq-9","isquemia","Sección 3.6","Opción menos invasiva para la isquemia mesentérica crónica:",["Angioplastia + stent","Bypass","Endarterectomía","Laparotomía exploradora"],0,"Control de factores de riesgo; angioplastia + stent (menos invasivo) o bypass/endarterectomía."),
/* Neoplasias */
Q("q-neo-1","neoplasias","Sección 3.7","Tumor maligno más frecuente del yeyuno según la guía:",["Adenocarcinoma","Tumor neuroendocrino","Linfoma","GIST"],0,"Yeyuno: adenocarcinoma; íleon: TNE y linfomas."),
Q("q-neo-2","neoplasias","Sección 3.7","Marcadores para tumores neuroendocrinos del intestino delgado:",["5-HIAA en orina de 24 h y cromogranina A","CD117/DOG1","CD20/CD3","Anti-transglutaminasa IgA"],0,"5-HIAA y cromogranina A (TNE); CD117/DOG1 (GIST); CD20/CD3 (linfomas)."),
Q("q-neo-3","neoplasias","Sección 3.7","Inmunohistoquímica CD117/DOG1 identifica:",["GIST","Linfoma","Adenocarcinoma","Hemangioma"],0,"CD117/DOG1 = GIST; adyuvancia con imatinib en GIST de alto riesgo."),
Q("q-neo-4","neoplasias","Sección 3.7","¿Por qué el diagnóstico de las neoplasias del intestino delgado suele ser tardío (6–12 meses)?",["Síntomas inespecíficos","Siempre son asintomáticas hasta la muerte","Se ven en la EDA convencional","Producen ictericia temprana"],0,"Síntomas inespecíficos: dolor cólico difuso, pérdida de peso, anemia ferropénica por sangrado oculto, o urgencia."),
Q("q-neo-5","neoplasias","Sección 3.7","Fármaco adyuvante mencionado para GIST de alto riesgo:",["Imatinib","Infliximab","Rifaximina","Budesonida"],0,"Adyuvancia según tipo, p. ej., imatinib en GIST de alto riesgo.")
];

/* ───────── FLASHCARDS ───────── */
const F = (id, t, f, b) => ({ id, t, f, b });
GL.cards = [
F("f-bas-1","bases","¿Qué produce el estómago para absorber B12 y dónde se absorbe?","Factor intrínseco; la B12 se absorbe en el íleon."),
F("f-bas-2","bases","Maldigestión vs malabsorción","Maldigestión = hidrólisis defectuosa. Malabsorción = absorción mucosa defectuosa. Ambas → síndrome malabsortivo."),
F("f-bas-3","bases","Idea madre del bloque gástrico","Enfermedad cuando agresores (ácido, pepsina, H. pylori, AINE) superan a defensas (moco, bicarbonato, prostaglandinas, flujo)."),
F("f-bas-4","bases","Funciones clave del íleon","B12 (con factor intrínseco), sales biliares (enterohepática), agua y electrolitos; función inmunológica (placas de Peyer)."),
F("f-ulc-1","ulcera","Definición de úlcera péptica","Defecto de la mucosa ≥5 mm que atraviesa la muscular de la mucosa, en estómago o duodeno, de curso crónico."),
F("f-ulc-2","ulcera","Dolor de úlcera duodenal vs gástrica","Duodenal: ardoroso 1–3 h posprandial y nocturno, mejora al comer. Gástrica: posprandial, puede empeorar al comer; pérdida de peso."),
F("f-ulc-3","ulcera","Pruebas para H. pylori","Aliento con urea, antígeno fecal, biopsia (ureasa, histología, cultivo). Serología IgG = solo contacto previo."),
F("f-ulc-4","ulcera","Primera línea de erradicación (ACG 2024, guía verificada)","Cuádruple optimizado con bismuto 14 días: IBP c/12 h + tetraciclina + metronidazol + bismuto. Triple con claritromicina solo con sensibilidad confirmada."),
F("f-ulc-5","ulcera","Mecanismo de los IBP vs anti-H2","IBP: bloqueo irreversible de la H⁺/K⁺-ATPasa. Anti-H2: bloquean la vía de la histamina."),
F("f-ulc-6","ulcera","Sucralfato y misoprostol: mecanismo","Sucralfato: barrera física. Misoprostol: análogo de prostaglandinas (previene daño por AINE)."),
F("f-ulc-7","ulcera","Indicaciones de cirugía en úlcera péptica","Perforación, hemorragia masiva que no cede a endoscopia, obstrucción de salida, falla absoluta al tratamiento médico."),
F("f-ulc-8","ulcera","Vagotomía y antrectomía: qué hacen","Vagotomía: corta la orden vagal de producir ácido (úlcera refractaria). Antrectomía: quita el antro y elimina la producción de gastrina."),
F("f-ulc-9","ulcera","Datos de alarma que indican EDA","Hematemesis, melena, anemia, pérdida de peso involuntaria, vómito persistente, disfagia, masa, dolor súbito intenso, choque."),
F("f-gas-1","gastritis","Gastritis vs dispepsia","Gastritis = diagnóstico histológico (inflamación de mucosa). Dispepsia = síntomas del abdomen superior."),
F("f-gas-2","gastritis","Gastritis autoinmune: mecanismo y consecuencia","Anticuerpos contra células parietales y factor intrínseco → déficit de B12 (anemia megaloblástica) y de hierro."),
F("f-gas-3","gastritis","Causas de gastritis aguda","AINE, alcohol, estrés fisiológico grave, infecciones (inicio súbito, reversible)."),
F("f-gas-4","gastritis","Tratamiento de gastritis por AINE","Suspender el AINE; IBP 4–8 semanas; si es indispensable: menor dosis + IBP."),
F("f-zol-1","zollinger","Zollinger-Ellison en una línea","Gastrinoma → hipergastrinemia → ácido sin freno → úlceras graves, recurrentes o resistentes + diarrea."),
F("f-zol-2","zollinger","Confirmación de Zollinger-Ellison","Gastrina en ayunas >10 veces lo normal con pH gástrico <2."),
F("f-zol-3","zollinger","Zollinger-Ellison: localización y herencia","Duodeno 50–85%, páncreas, ganglios («triángulo del gastrinoma»). 75% esporádico; 25% NEM1 (MEN1, 11q13)."),
F("f-com-1","complicaciones","Clasificación de Forrest","Ia chorro · Ib sábana · IIa vaso visible · IIb coágulo adherido · IIc hematina · III fondo limpio. Alto riesgo: Ia/Ib/IIa."),
F("f-com-2","complicaciones","Secuencia en HDA por úlcera","Estabilizar (ABCDE) → Hb <7 transfundir → eritromicina IV → EDA ≤24 h → hemostasia si Forrest alto → IBP dosis altas."),
F("f-com-3","complicaciones","¿Por qué la adrenalina nunca va sola?","Solo da vasoconstricción y taponamiento transitorios; se combina con térmico (bipolar/heater probe) o clips."),
F("f-com-4","complicaciones","Tríada de la perforación y estudio","Dolor súbito + taquicardia + rigidez. TAC (aire extraluminal); sin TAC: Rx de tórax/abdomen de pie (neumoperitoneo)."),
F("f-com-5","complicaciones","Penetración (úlcera tenebrada)","La úlcera atraviesa la pared pero un órgano vecino (páncreas, hígado, vía biliar, epiplón, colon) la contiene. Dolor que se vuelve persistente, irradiado y refractario."),
F("f-com-6","complicaciones","Obstrucción de salida: fases","Aguda: inflamación + edema + espasmo (reversible). Crónica: fibrosis → estenosis pilórica fija."),
F("f-com-7","complicaciones","Resangrado tras hemostasia","1) Repetir EDA → 2) embolización → 3) cirugía si falla o inestable."),
F("f-com-8","complicaciones","Manejo inicial de perforación","NPO + reanimación IV + analgesia + IBP + antibiótico de amplio espectro; laparoscopia si estable, abierta si inestable; cierre ± parche de epiplón."),
F("f-dis-1","dispepsia","Roma IV de dispepsia funcional: síntomas","Plenitud posprandial, saciedad precoz, dolor epigástrico, ardor epigástrico (uno o más). PDS = plenitud + saciedad; EPS = dolor + ardor."),
F("f-dis-2","dispepsia","Gastroparesia: definición","Retraso del vaciamiento gástrico (sobre todo sólidos) sin obstrucción mecánica + náusea, vómito, plenitud, saciedad precoz, dolor."),
F("f-dis-3","dispepsia","Diagnóstico de gastroparesia","Excluir obstrucción + gammagrafía de vaciamiento con comida sólida ≥3 h (preferible 4 h)."),
F("f-dis-4","dispepsia","Escalera terapéutica de la dispepsia funcional","H. pylori + → erradicar; si no → IBP; persiste → procinético; refractaria → neuromodulador."),
F("f-dis-5","dispepsia","¿Los antieméticos aceleran el vaciamiento en gastroparesia?","No. Ondansetrón y otros mejoran síntomas pero NO aceleran el vaciamiento."),
F("f-can-1","cancer","Lauren: intestinal vs difuso","Intestinal: H. pylori, atrofia, hombres mayores, hematógena. Difuso: CDH1, anillo de sello, mujeres jóvenes, linfática."),
F("f-can-2","cancer","Signos de cáncer gástrico avanzado","Virchow (supraclavicular izq.), hermana María José (umbilical), Krukenberg (ovario), Blumer (rectal), ascitis."),
F("f-can-3","cancer","Carcinogénesis gástrica","H. pylori → gastritis crónica → atrofia → menor acidez → nitritos carcinógenos → alteraciones genéticas."),
F("f-can-4","cancer","Precursoras de cáncer gástrico","Gastritis atrófica, anemia perniciosa; dieta ahumada/salada, antecedente familiar."),
F("f-cue-1","cuerpos","Plazos de extracción de cuerpos extraños","Pilas ≤2 h · imanes: inmediata · afilados ≤6 h · monedas ≤24 h (niño asintomático)."),
F("f-cue-2","cuerpos","Sitios de impactación","Cricofaríngeo (más común), arco aórtico (≈25 cm), unión gastroesofágica, píloro."),
F("f-dia-1","diarrea","Duración de la diarrea","Aguda <14 días · persistente 14–30 días · crónica >30 días."),
F("f-dia-2","diarrea","Diarrea alta vs baja","Alta: acuosa, volumen alto, fiebre baja, periumbilical, Na 30–40. Baja: sangre/moco/pus, tenesmo, fiebre alta, Na 60–120."),
F("f-dia-3","diarrea","Plan B de hidratación","≥2 signos de deshidratación sin choque → SRO 75 ml/kg en 4 h, fraccionado; reponer pérdidas."),
F("f-dia-4","diarrea","Plan C de hidratación","Choque (inconsciente, no bebe, llenado >5 s) → líquidos IV (Ringer lactato o salina) con reevaluación."),
F("f-dia-5","diarrea","Toxina termolábil vs termoestable","Termolábil ↑AMPc (↓absorción Na⁺, ↑secreción Cl⁻/agua). Termoestable ↑GMPc."),
F("f-dia-6","diarrea","Indicaciones de antimicrobianos en diarrea","Sangre, inmunocompromiso o cólera."),
F("f-dia-7","diarrea","Alimento → microorganismo (arroz, quesos, mariscos, huevo)","Arroz: Bacillus cereus · Quesos: Listeria · Mariscos: Vibrio · Huevo: Salmonella."),
F("f-mal-1","malabsorcion","Déficits de malabsorción y signo","Hierro → anemia microcítica · B12/folato → megaloblástica · Ca/D → tetania · K → diátesis hemorrágica · A → xeroftalmia."),
F("f-mal-2","malabsorcion","Celíaca: desencadenante y genética","Péptidos del gluten (gliadina, hordeína, secalina) en personas con HLA-DQ2/DQ8."),
F("f-mal-3","malabsorcion","Clasificación de Marsh","0 normal · 1 LIE >40/100 · 2 + hiperplasia de criptas · 3a/b/c atrofia leve/marcada/total · 4 hipoplasia."),
F("f-mal-4","malabsorcion","Valor del HLA-DQ2/DQ8 negativo","VPN 99%: casi descarta la celíaca."),
F("f-mal-5","malabsorcion","ESPGHAN 2020: niños sin biopsia","Anti-tTG IgA ≥10× LSN + antiendomisio positivo en segunda muestra (y acuerdo familiar)."),
F("f-mal-6","malabsorcion","Celíaca que no responde a la dieta","Diagnóstico errado, incumplimiento, enfermedad refractaria, linfoma intestinal."),
F("f-mal-7","malabsorcion","Whipple","Tropheryma whipplei, macrófagos PAS+; malabsorción + artralgias migratorias + síntomas neurológicos/cardiacos; antibióticos prolongados."),
F("f-cro-1","crohn","Características de la lesión en Crohn","Parcheada, discontinua y transmural; íleon terminal la zona más frecuente; granulomas."),
F("f-cro-2","crohn","Crohn: inducción vs mantenimiento","Inducción: corticoides (budesonida si leve ileocecal). Mantenimiento: anti-TNF, vedolizumab, ustekinumab, risankizumab, upadacitinib. Corticoides NO mantienen."),
F("f-cro-3","crohn","Hallazgos endoscópicos de Crohn","Úlceras longitudinales profundas, mucosa «en empedrado», friable; granulomas."),
F("f-cro-4","crohn","Ileítis por AINE vs Crohn","AINE: úlceras superficiales, estenosis «en diafragma», mejora al suspender, sin granulomas."),
F("f-cro-5","crohn","Clasificación de Montreal","Edad, localización (L1 íleon–L4) y patrón (inflamatorio, estenosante, fistulizante)."),
F("f-sii-1","sii","Roma IV de SII (guía verificada)","Dolor ≥1 día/semana en 3 meses + ≥2: relación con defecación, cambio de frecuencia, cambio de forma; inicio ≥6 meses. «3 días/mes» = Roma III."),
F("f-sii-2","sii","Datos no compatibles con SII","Pérdida de peso, sangrado rectal, dolor nocturno progresivo, fiebre, anemia o marcadores inflamatorios, inicio >50 años."),
F("f-sii-3","sii","Antidepresivos en SII","ISRS si estreñimiento; tricíclicos si diarrea."),
F("f-obs-1","obstruccion","Tríada radiológica de obstrucción de delgado","Asas >3 cm, niveles hidroaéreos, ausencia de aire distal."),
F("f-obs-2","obstruccion","Signo del grano de café","Vólvulo sigmoideo."),
F("f-obs-3","obstruccion","Obstrucción: conservador vs cirugía urgente","Conservador: parcial de delgado (48 h), posoperatoria temprana, Crohn. Urgente: hernia estrangulada, vólvulo, peritonitis, asa cerrada."),
F("f-obs-4","obstruccion","Fisiopatología de la obstrucción","Estasis → distensión → ↑presión → ↑secreción/↓absorción → ↑presión venosa → hipoxia → pérdida de viabilidad → peritonitis."),
F("f-isq-1","isquemia","Isquemia mesentérica aguda: clínica y estudio","Dolor desproporcionado a la exploración → AngioTC sin demora; heparina, antibióticos, revascularización."),
F("f-isq-2","isquemia","Tríada de isquemia mesentérica crónica","Dolor posprandial (10–30 min), pérdida de peso («miedo a la comida»), soplo abdominal."),
F("f-isq-3","isquemia","Tipos de isquemia mesentérica aguda","Embólica (FA), trombótica arterial, no oclusiva (NOMI: bajo gasto/vasopresores), trombosis venosa mesentérica."),
F("f-neo-1","neoplasias","Neoplasias de intestino delgado: dónde","Yeyuno: adenocarcinoma. Íleon: TNE y linfomas."),
F("f-neo-2","neoplasias","Marcadores de neoplasias de delgado","TNE: 5-HIAA urinario y cromogranina A · GIST: CD117/DOG1 · Linfoma: CD20/CD3.")
];

/* ───────── CASOS CLÍNICOS (pacientes ficticios; respuestas respaldadas por la guía) ───────── */
GL.cases = [
{ id: "c-01", t: "complicaciones", type: "Conducta", s: "Minicaso 1 (secciones 4–5) · Figura 3", pt: "Hombre, 58 años", hx: "Gonartrosis; naproxeno diario y prednisona.", mc: "Hematemesis «en posos de café» y melena.", sx: "FC 118, TA 88/54.", lab: "",
  q: "¿Cuál es la secuencia inicial correcta?", o: ["ABCDE y monitorización, laboratorio con grupo y cruzadas, transfundir si Hb <7 y EDA ≤24 h con eritromicina previa", "EDA inmediata antes de cualquier reanimación", "IBP oral y alta con cita", "Laparotomía exploradora de entrada"], a: 0,
  e: "AINE + esteroide aumentan el riesgo de úlcera y sangrado; hematemesis, melena y choque indican hemorragia grave. Además: retirar el AINE, buscar H. pylori, erradicar y confirmar erradicación." },
{ id: "c-02", t: "malabsorcion", type: "Prueba diagnóstica", s: "Minicaso 2 (secciones 4–5)", pt: "Mujer, 28 años", hx: "Sin antecedentes relevantes.", mc: "Diarrea de 8 meses.", sx: "Esteatorrea, pérdida de peso, aftas.", lab: "Anemia microcítica; anti-transglutaminasa IgA positiva.",
  q: "¿Qué estudio confirma el diagnóstico en esta adulta y bajo qué condición?", o: ["Biopsia duodenal con gluten en la dieta", "Biopsia duodenal tras 6 meses sin gluten", "Solo HLA-DQ2/DQ8 positivo", "Gammagrafía de vaciamiento gástrico"], a: 0,
  e: "En adultos la lámina indica biopsia; debe hacerse comiendo gluten. Un HLA-DQ2/DQ8 negativo casi descarta, pero uno positivo no confirma. Tratamiento: dieta sin gluten de por vida." },
{ id: "c-03", t: "zollinger", type: "Diagnóstico probable", s: "Sección 2.3", pt: "Hombre, 48 años", hx: "Úlceras duodenales recurrentes pese a tratamiento.", mc: "Dolor epigástrico persistente.", sx: "Diarrea crónica y reflujo.", lab: "EDA: úlceras múltiples y pliegues gástricos engrosados.",
  q: "¿Cuál es el diagnóstico más probable?", o: ["Síndrome de Zollinger-Ellison", "Dispepsia funcional", "Gastroparesia diabética", "Síndrome de intestino irritable"], a: 0,
  e: "Úlceras graves/recurrentes/resistentes + diarrea + pliegues engrosados sugieren gastrinoma. Se confirma con gastrina en ayunas >10 veces lo normal con pH <2; IBP de elección." },
{ id: "c-04", t: "zollinger", type: "Interpretación de resultado", s: "Sección 2.3", pt: "Mujer, 35 años", hx: "Hiperparatiroidismo en estudio; madre con tumores endocrinos.", mc: "Úlcera duodenal refractaria.", sx: "Dolor epigástrico, diarrea.", lab: "Gastrina sérica en ayunas 12 veces el valor normal con pH gástrico 1.5.",
  q: "¿Cómo se interpreta el resultado?", o: ["Confirma Zollinger-Ellison; la edad y los antecedentes obligan a considerar NEM1", "Es normal en la úlcera duodenal común", "Indica gastritis autoinmune", "Indica gastroparesia"], a: 0,
  e: "Gastrina >10 veces lo normal con pH <2 confirma. El 25% de los casos se asocia a NEM1 (gen MEN1) y se presenta unos 10 años antes. La guía indica cirugía del tumor si es localizado y sin NEM1." },
{ id: "c-05", t: "complicaciones", type: "Prueba diagnóstica", s: "Sección 2.4", pt: "Hombre, 62 años", hx: "Úlcera péptica conocida; toma AINE.", mc: "Dolor abdominal súbito e intenso hace 2 h.", sx: "Taquicardia, abdomen en tabla con defensa involuntaria.", lab: "No hay TAC disponible en el hospital.",
  q: "¿Qué estudio solicitar?", o: ["Rx de tórax/abdomen de pie buscando neumoperitoneo", "Gammagrafía de vaciamiento", "Colonoscopia", "Serología para H. pylori"], a: 0,
  e: "Tríada de perforación (dolor súbito, taquicardia, rigidez). Estudio de elección: TAC; sin TAC, Rx de pie → neumoperitoneo. Luego NPO, reanimación, IBP, antibiótico y cirugía." },
{ id: "c-06", t: "complicaciones", type: "Identificación de complicación", s: "Sección 2.4", pt: "Mujer, 55 años", hx: "Úlcera duodenal tratada de forma irregular.", mc: "Dolor epigástrico distinto al habitual.", sx: "El dolor pasó de intermitente a persistente, ahora se irradia a la espalda y ya no responde a IBP.", lab: "",
  q: "¿Qué complicación sospechas?", o: ["Penetración (úlcera tenebrada)", "Obstrucción de salida", "Hemorragia Forrest III", "Gastroparesia"], a: 0,
  e: "Cambio a persistente, irradiado y refractario sugiere penetración a un órgano vecino (p. ej., páncreas). Estudio: TAC con contraste + EDA; IBP IV, suspender AINE, erradicar H. pylori." },
{ id: "c-07", t: "complicaciones", type: "Conducta", s: "Sección 2.4", pt: "Hombre, 67 años", hx: "Úlcera péptica crónica.", mc: "Vómito persistente de varios días.", sx: "Deshidratación.", lab: "Alteraciones de Na, K, Cl y HCO₃⁻.",
  q: "Con sospecha de obstrucción de salida, ¿qué manejo inicial describe la guía?", o: ["NPO, sonda nasogástrica, NaCl 0.9% IV, reposición de KCl e IBP", "Loperamida y dieta normal", "Alta con antiácidos", "Metoclopramida como único tratamiento"], a: 0,
  e: "Después: dilatación endoscópica con balón (≈15 mm) y TC para localizar, biopsiar y descartar malignidad." },
{ id: "c-08", t: "dispepsia", type: "Diagnóstico diferencial", s: "Sección 2.5", pt: "Mujer, 52 años", hx: "Diabetes mellitus de larga evolución con mal control.", mc: "Náusea, vómito, plenitud y saciedad precoz.", sx: "Sin datos de obstrucción mecánica.", lab: "EDA sin úlcera ni obstrucción.",
  q: "¿Qué prueba demuestra el diagnóstico más probable?", o: ["Gammagrafía de vaciamiento con comida sólida ≥3 h (preferible 4 h)", "Colonoscopia con biopsias", "Anti-transglutaminasa IgA", "Rx de abdomen buscando grano de café"], a: 0,
  e: "Gastroparesia (la diabetes es la causa en 57%). Manejo: dieta de partículas pequeñas baja en grasa, optimizar glucemia, procinéticos; los antieméticos no aceleran el vaciamiento." },
{ id: "c-09", t: "cancer", type: "Interpretación de resultado", s: "Sección 2.6", pt: "Mujer, 41 años", hx: "Grupo sanguíneo A; familiar con cáncer gástrico.", mc: "Saciedad temprana y pérdida de peso.", sx: "Ganglio supraclavicular izquierdo palpable.", lab: "Biopsia con células en anillo de sello.",
  q: "¿Qué tipo de Lauren y qué significa el ganglio?", o: ["Difuso; ganglio de Virchow = enfermedad avanzada", "Intestinal; hallazgo sin importancia", "Difuso; nódulo de la hermana María José", "Intestinal; tumor de Krukenberg"], a: 0,
  e: "Difuso: CDH1, anillo de sello, mujeres jóvenes, grupo A. Virchow (supraclavicular izq.) indica enfermedad avanzada. Hermana María José es umbilical; Krukenberg es ovárico." },
{ id: "c-10", t: "cuerpos", type: "Conducta", s: "Sección 2.7 (lám. 48)", pt: "Niño, 3 años", hx: "Sano.", mc: "Ingestión presenciada de una pila de botón hace 1 h.", sx: "Asintomático.", lab: "Rx: cuerpo extraño radiopaco en esófago.",
  q: "¿Qué conducta corresponde?", o: ["Extracción inmediata, idealmente ≤2 h, aun asintomático", "Observar 10–14 días", "Extracción en ≤24 h como una moneda", "Alta sin seguimiento"], a: 0,
  e: "Las pilas causan lesión grave: extraer de inmediato aun sin síntomas. Monedas ≤24 h en niños asintomáticos; afilados ≤6 h; imanes inmediato." },
{ id: "c-11", t: "diarrea", type: "Conducta", s: "Recuperación activa P8 · Sección 3.1", pt: "Lactante, 10 meses", hx: "Diarrea acuosa de 2 días.", mc: "Irritable.", sx: "Ojos hundidos, saliva espesa, bebe con avidez, pliegue lento, llenado capilar 4 s.", lab: "",
  q: "¿Qué plan de hidratación indicas?", o: ["Plan B: SRO 75 ml/kg en 4 h fraccionado", "Plan A en casa", "Plan C con líquidos IV", "Loperamida"], a: 0,
  e: "≥2 signos de deshidratación sin choque = Plan B. El Plan C requiere choque (inconsciente, no puede beber, llenado >5 s). Los antidiarreicos no tratan la deshidratación." },
{ id: "c-12", t: "diarrea", type: "Diagnóstico diferencial", s: "Sección 3.1", pt: "Hombre, 30 años", hx: "Brote en una comida colectiva.", mc: "Diarrea con sangre y moco.", sx: "Fiebre alta, dolor cólico, pujo y tenesmo; evacuaciones de poco volumen.", lab: "",
  q: "¿Qué tipo de diarrea y qué agente es compatible?", o: ["Baja inflamatoria; Shigella", "Alta no inflamatoria; rotavirus", "Alta no inflamatoria; V. cholerae", "Funcional; SII-D"], a: 0,
  e: "Sangre, moco, tenesmo y fiebre alta = diarrea baja (disentérica): Shigella, Campylobacter, Salmonella, EIEC/EHEC, etc. Hay sangre → antimicrobiano indicado según la guía (ej. shigelosis: ciprofloxacino, dosis del material)." },
{ id: "c-13", t: "crohn", type: "Diagnóstico probable", s: "Sección 3.3", pt: "Mujer, 24 años", hx: "Fumadora.", mc: "Diarrea crónica y dolor en cuadrante inferior derecho.", sx: "Pérdida de peso, fístula perianal, eritema nodoso.", lab: "PCR elevada; calprotectina fecal alta; ileocolonoscopia: úlceras longitudinales, mucosa en empedrado, granulomas.",
  q: "¿Diagnóstico más probable?", o: ["Enfermedad de Crohn", "Síndrome de intestino irritable", "Ileítis por AINE", "Enfermedad celíaca"], a: 0,
  e: "Transmural, íleon terminal, perianal, extraintestinal y granulomas = Crohn. El SII no tiene lesión estructural ni marcadores inflamatorios; la ileítis por AINE no tiene granulomas. Indicar dejar el tabaco." },
{ id: "c-14", t: "sii", type: "Diagnóstico diferencial", s: "Sección 3.4", pt: "Hombre, 58 años", hx: "Sin antecedentes.", mc: "Dolor abdominal y cambio del hábito intestinal de inicio reciente.", sx: "Sangrado rectal y pérdida de peso.", lab: "Anemia.",
  q: "¿Es razonable diagnosticar síndrome de intestino irritable?", o: ["No: inicio >50 años, sangrado, pérdida de peso y anemia no son compatibles con SII", "Sí, cumple Roma IV", "Sí, si mejora con dieta baja en FODMAP", "Sí, si tiene ansiedad"], a: 0,
  e: "La guía lista como no compatibles con SII: pérdida de peso, sangrado rectal, dolor nocturno progresivo, fiebre, anemia o marcadores inflamatorios y síntomas después de los 50 años." },
{ id: "c-15", t: "obstruccion", type: "Interpretación de resultado", s: "Sección 3.5", pt: "Mujer, 66 años", hx: "Dos cirugías abdominales previas.", mc: "Dolor cólico intermitente y vómito.", sx: "Distensión, timpanismo, ruidos de timbre metálico.", lab: "Serie abdominal: asas de delgado de 4 cm, niveles hidroaéreos, sin aire distal.",
  q: "¿Qué indica la imagen y cuál es la causa más probable?", o: ["Obstrucción de intestino delgado; adherencias posoperatorias", "Vólvulo sigmoideo", "Perforación de úlcera", "Isquemia mesentérica crónica"], a: 0,
  e: "Tríada radiológica de obstrucción de delgado (asas >3 cm, niveles, sin aire distal). Las adherencias posoperatorias son la causa mecánica principal. Completa → cirugía; parcial → conservador 48 h." },
{ id: "c-16", t: "isquemia", type: "Diagnóstico probable", s: "Recuperación activa P10 · Sección 3.6", pt: "Mujer, 70 años", hx: "Fibrilación auricular.", mc: "Dolor abdominal súbito e intenso.", sx: "Abdomen blando, sin defensa (desproporción entre dolor y exploración).", lab: "",
  q: "¿Diagnóstico probable y estudio inmediato?", o: ["Isquemia mesentérica aguda embólica; AngioTC sin demora", "Úlcera perforada; Rx de pie", "SII; criterios Roma IV", "Obstrucción por adherencias; serie abdominal"], a: 0,
  e: "FA = fuente de émbolos; dolor desproporcionado. AngioTC sin demora (no retrasar por función renal); heparina, antibióticos, revascularización (WSES 2022)." },
{ id: "c-17", t: "isquemia", type: "Diagnóstico probable", s: "Sección 3.6", pt: "Hombre, 68 años", hx: "Tabaquismo, HTA, dislipidemia, arteriopatía periférica.", mc: "Dolor abdominal 20 minutos después de cada comida, dura 1–2 h.", sx: "Pérdida de peso porque evita comer; soplo abdominal.", lab: "",
  q: "¿Qué diagnóstico y estudio corresponden?", o: ["Isquemia mesentérica crónica; AngioTC", "Úlcera duodenal; serología IgG", "Dispepsia funcional; IBP empírico", "SII; dieta baja en FODMAP"], a: 0,
  e: "Tríada crónica: dolor posprandial, pérdida de peso («miedo a la comida»), soplo. AngioTC (Doppler como tamizaje). Tratamiento: control de factores de riesgo; angioplastia + stent o bypass." },
{ id: "c-18", t: "malabsorcion", type: "Interpretación de resultado", s: "Sección 3.2 · Guía verificada ESPGHAN 2020", pt: "Niña, 6 años", hx: "Talla baja.", mc: "Distensión y diarrea crónica.", sx: "Anemia.", lab: "Anti-tTG IgA 14 veces el límite superior; antiendomisio positivo en una segunda muestra; la familia está de acuerdo.",
  q: "Según ESPGHAN 2020 (guía verificada), ¿cómo se interpreta?", o: ["Puede diagnosticarse celíaca sin biopsia", "Requiere obligatoriamente HLA y biopsia", "Descarta celíaca", "Indica enfermedad de Whipple"], a: 0,
  e: "ESPGHAN 2020: en niños, sin biopsia si tTG IgA ≥10× LSN y EMA positivo en segunda muestra. El material de clase usa el algoritmo antiguo con biopsia; conoce ambos." }
];

/* ───────── COMPARADOR ───────── */
GL.compare = [
  { id: "cmp-ulcera", title: "Úlcera duodenal vs gástrica", src: "Sección 2.1", head: ["", "Úlcera duodenal", "Úlcera gástrica"], rows: [
    ["Dolor", "Epigástrico ardoroso, 1–3 h después de comer y nocturno; mejora con alimentos y antiácidos", "Posprandial; puede empeorar con la ingesta"],
    ["Peso", "Puede aumentar (comer alivia)", "Pérdida de peso, náusea"],
    ["Causas dominantes", "H. pylori; hipersecreción de ácido (Zollinger-Ellison)", "H. pylori y AINE; vigilar malignidad"],
    ["Endoscopia", "—", "Bordes irregulares/elevados, fondo sucio, friable, pliegues no confluentes → biopsiar"],
    ["Hemorragia", "Duodenal posterior → arteria gastroduodenal", "Ramas gástricas"]] },
  { id: "cmp-gastritis", title: "Gastritis vs dispepsia", src: "Secciones 2.2, 2.5 y Respuesta 7", note: "La guía compara ambos conceptos en definición; el resto procede de sus respectivos apartados.", head: ["", "Gastritis", "Dispepsia"], rows: [
    ["Qué es", "Inflamación de la mucosa gástrica", "Conjunto de síntomas del abdomen superior; funcional (sin enfermedad estructural) u orgánica"],
    ["Tipo de diagnóstico", "Histológico", "Clínico (síntomas; Roma IV para la funcional)"],
    ["Diagnóstico", "EDA con biopsia + pruebas de H. pylori", "Descartar alarma, evaluar H. pylori, EDA según edad/riesgo"],
    ["Causas / mecanismos", "H. pylori, AINE, autoinmune, química/reactiva", "Funcional: acomodación alterada, hipersensibilidad visceral, dismotilidad, inflamación duodenal, H. pylori, factores psicosociales"]] },
  { id: "cmp-dispepsia", title: "Dispepsia funcional vs gastroparesia", src: "Sección 2.5", head: ["", "Dispepsia funcional", "Gastroparesia"], rows: [
    ["Definición", "Trastorno intestino-cerebro con síntomas dispépticos sin enfermedad estructural", "Retraso del vaciamiento (sobre todo sólidos) sin obstrucción mecánica"],
    ["Criterios / síntomas", "Roma IV: plenitud, saciedad precoz, dolor o ardor epigástrico (PDS vs EPS)", "Náusea, vómito, plenitud, saciedad precoz, dolor"],
    ["Causas", "Acomodación alterada, hipersensibilidad, dismotilidad, inflamación duodenal, H. pylori, psicosocial", "Diabetes 57%, posquirúrgica 15%, fármacos 11.8%, idiopática 11.3%"],
    ["Diagnóstico", "Descartar alarma; H. pylori; EDA según edad/riesgo", "Excluir obstrucción; gammagrafía sólida ≥3 h (preferible 4 h)"],
    ["Tratamiento", "Erradicar → IBP → procinético → neuromodulador", "Dieta, glucemia, procinéticos; antieméticos no aceleran vaciamiento; G-POEM si refractaria"]] },
  { id: "cmp-complic", title: "Hemorragia vs perforación vs penetración vs obstrucción de salida", src: "Sección 2.4", head: ["", "Hemorragia", "Perforación", "Penetración", "Obstrucción de salida"], rows: [
    ["Mecanismo", "Vascular: erosión de un vaso", "Invasión: pérdida de todo el espesor", "Invasión contenida por órgano vecino", "Mecánica/cicatricial"],
    ["Frecuencia / gravedad", "≈50%, la más frecuente", "Emergencia; la más grave a corto plazo", "15–20% de las complejas", "<5%"],
    ["Clínica", "Hematemesis, melena, choque", "Dolor súbito + taquicardia + rigidez", "Dolor persistente, irradiado, refractario", "Vómito persistente, alteración de Na, K, Cl, HCO₃⁻"],
    ["Estudio", "EDA ≤24 h tras estabilizar (Forrest)", "TAC; sin TAC Rx de pie (neumoperitoneo)", "TAC con contraste + EDA", "TC para localizar/biopsiar; descartar malignidad"],
    ["Manejo", "Hb <7 transfundir; hemostasia combinada si Ia/Ib/IIa", "NPO, reanimación, IBP, antibiótico, cirugía", "IBP IV, suspender AINE, erradicar; cirugía si persiste o se complica", "NPO, SNG, NaCl, KCl, IBP; dilatación con balón"]] },
  { id: "cmp-diarrea", title: "Diarrea alta vs baja", src: "Sección 3.1", head: ["", "Alta (delgado): no inflamatoria", "Baja (colon): inflamatoria"], rows: [
    ["Heces", "Acuosas, volumen alto", "Sangre, moco, pus; poco volumen; pujo y tenesmo"],
    ["Fiebre / dolor", "Fiebre baja, dolor periumbilical", "Fiebre alta, dolor cólico"],
    ["Pérdida de sodio", "30–40 mEq/L", "60–120 mEq/L"],
    ["Agentes", "Rotavirus, norovirus, ETEC, V. cholerae, S. aureus (toxina)", "Shigella, Campylobacter, Salmonella, Yersinia, EIEC/EHEC, C. difficile, amebas"]] },
  { id: "cmp-malab", title: "Malabsorción vs maldigestión", src: "Sección 1 (lám. 125–130) y 3.2", note: "Datos limitados: la guía solo define ambos conceptos y lista causas de malabsorción.", head: ["", "Maldigestión", "Malabsorción"], rows: [
    ["Definición", "Hidrólisis defectuosa (fallo de la digestión química)", "Absorción mucosa defectuosa"],
    ["Expresión clínica", "Síndrome malabsortivo", "Síndrome malabsortivo: diarrea crónica, esteatorrea, pérdida de peso, déficits"],
    ["Causas en la guía", "No se detallan por separado", "Intestinales, pancreáticas, gástricas, hepatobiliares y sistémicas"]] },
  { id: "cmp-crohn-sii", title: "Enfermedad de Crohn vs síndrome de intestino irritable", src: "Secciones 3.3 y 3.4", head: ["", "Crohn", "SII"], rows: [
    ["Naturaleza", "Inflamatoria crónica, transmural, parcheada", "Sin lesión estructural; hipersensibilidad visceral, motilidad alterada"],
    ["Clínica", "Diarrea crónica ± sangre, dolor FID, pérdida de peso; perianal y extraintestinal", "Dolor crónico relacionado con la defecación y cambios del hábito"],
    ["Señales", "Sangre, pérdida de peso, PCR/calprotectina altas son parte del cuadro", "Sangrado, pérdida de peso, fiebre, anemia o marcadores inflamatorios NO son compatibles"],
    ["Diagnóstico", "Ileocolonoscopia con biopsias, granulomas, enterografía", "Criterios Roma IV, descartando alarma"],
    ["Tratamiento", "Corticoides inducen; anti-TNF y otros mantienen; dejar tabaco", "Dieta baja en FODMAP, antiespasmódicos, antidepresivos, rifaximina"]] },
  { id: "cmp-lauren", title: "Cáncer gástrico: tipo intestinal vs difuso (Lauren)", src: "Sección 2.6", head: ["", "Intestinal", "Difuso"], rows: [
    ["Asociación", "H. pylori + gastritis atrófica, metaplasia intestinal; zonas endémicas", "CDH1 (E-cadherina), células en anillo de sello; zonas de baja prevalencia, grupo A"],
    ["Perfil", "Hombres > mujeres, mayores", "Mujeres > hombres, más jóvenes"],
    ["Diseminación", "Hematógena", "Linfática"]] },
  { id: "cmp-isq", title: "Isquemia mesentérica aguda vs crónica", src: "Sección 3.6", head: ["", "Aguda", "Crónica"], rows: [
    ["Clínica", "Dolor desproporcionado a la exploración", "Dolor posprandial + pérdida de peso + soplo"],
    ["Estudio", "AngioTC sin demora", "AngioTC; Doppler como tamizaje"],
    ["Tratamiento", "Heparina, antibióticos, revascularización; resección si no viable", "Factores de riesgo; angioplastia + stent o bypass"]] }
];

/* ───────── REPASO RÁPIDO ───────── */
GL.quick = {
  classifications: [
    { title: "Forrest (HDA)", items: ["Ia chorro · Ib sábana · IIa vaso visible → alto riesgo, hemostasia", "IIb coágulo adherido · IIc hematina · III fondo limpio"] },
    { title: "Marsh (celíaca)", items: ["0 normal · 1 LIE >40/100 · 2 + hiperplasia de criptas", "3a/3b/3c atrofia leve/marcada/total · 4 hipoplasia"] },
    { title: "Lauren (cáncer gástrico)", items: ["Intestinal: H. pylori, atrofia, hombres mayores, hematógena", "Difuso: CDH1, anillo de sello, mujeres jóvenes, linfática"] },
    { title: "Duración de la diarrea", items: ["Aguda <14 d · persistente 14–30 d · crónica >30 d"] },
    { title: "Roma IV", items: ["Dispepsia: PDS (plenitud + saciedad) vs EPS (dolor + ardor)", "SII: dolor ≥1 día/semana en 3 meses + ≥2 criterios; inicio ≥6 meses; SII-C / SII-D / SII-M"] },
    { title: "Crohn", items: ["Montreal: edad, localización L1–L4, patrón inflamatorio/estenosante/fistulizante", "CDAI <150 = remisión"] }
  ],
  alarms: [
    { title: "Úlcera / EDA", x: "Hematemesis, melena, anemia, pérdida de peso involuntaria, vómito persistente, disfagia, masa, dolor súbito intenso, choque." },
    { title: "Dispepsia", x: "Pérdida de peso, sangrado/anemia, disfagia, vómito persistente, masa, antecedente familiar de cáncer GI." },
    { title: "No compatibles con SII", x: "Pérdida de peso, sangrado rectal, dolor nocturno progresivo, fiebre, anemia o marcadores inflamatorios, inicio >50 años." },
    { title: "Cáncer gástrico avanzado", x: "Virchow, hermana María José, Krukenberg, Blumer, ascitis." },
    { title: "Cuerpos extraños", x: "Pilas ≤2 h · imanes inmediato · afilados ≤6 h · monedas urgentes si babeo, disfagia o dificultad respiratoria." }
  ],
  algorithms: [
    { title: "HDA por úlcera", steps: ["Estabilizar (ABCDE)", "Hb <7 → transfundir", "Eritromicina IV → EDA ≤24 h", "Forrest Ia/Ib/IIa → adrenalina + térmico/clips", "IBP dosis altas", "Resangrado: EDA → embolización → cirugía"] },
    { title: "Dispepsia funcional", steps: ["H. pylori + → erradicar", "Si no → IBP", "Persiste → procinético", "Refractaria → neuromodulador"] },
    { title: "Diarrea", steps: ["Evaluar hidratación", "Plan A / B (SRO 75 ml/kg en 4 h) / C (IV)", "Antibiótico solo si sangre, inmunocompromiso o cólera"] },
    { title: "Isquemia mesentérica aguda", steps: ["Sospecha: dolor desproporcionado", "AngioTC sin demora", "Heparina + antibióticos", "Revascularización; resecar lo no viable"] },
    { title: "Obstrucción intestinal", steps: ["Ayuno, descompresión, venoclisis", "Rx: asas >3 cm, niveles, sin aire distal", "Completa → cirugía; parcial del delgado → conservador 48 h"] }
  ]
};
