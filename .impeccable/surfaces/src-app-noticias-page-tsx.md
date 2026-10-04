---
version: 1
slug: "src-app-noticias-page-tsx"
primary_target: "src/app/noticias/page.tsx"
related_targets: []
---

# Noticias (src/app/noticias/page.tsx)

## Alcance y modo

Página Noticias, escritorio y 375 px. Modo **Persuade** con lectura de archivo: el visitante (cliente
potencial, organizador de eventos o universidad) ve dónde ha estado MC y con quién, en orden de
fecha. Hereda la cabecera interior y la cota-índice.

## Visitante, tarea y prueba

- Responsable técnico que quiere ver presencia real de MC en el sector; organizador de eventos o
  universidad que busca a MC como ponente.
- Acción: "Solicitar una cotización" (WhatsApp) en el cierre de Contacto y siempre en el riel.
- Prueba disponible: 6 eventos (PERUMIN 37, CONTIMIN en la Universidad Continental, aniversario de
  la FGGM de la UNSA, Centrum PUCP, AusIMM y ProExplo) con fecha, tipo, ciudad, resumen y 17 fotos
  reales (una es el afiche de la ponencia de Centrum).
- Restricciones: ninguna afirmación nueva; sin número de asistentes (Camila, 23 sep; no
  confirmado); los meses de AusIMM y ProExplo faltan (se muestra el año, con marca en revisión).

## Decisiones del usuario (4 oct)

Cada evento con fecha, título, tipo y ciudad, la línea de resumen y sus fotos; los "puntos" y los
asistentes no se muestran (quedan en src/content/news.ts). La cota de la cabecera es el índice de la
página: aquí, los eventos por fecha.

## Pendiente

Meses de AusIMM y ProExplo (Camila). Título del evento de la UNSA: dice "Asistencia" pero el tipo es
"Ponencia" y las fotos muestran a Marcos exponiendo (Camila o Sofía). Afiche completo de la ponencia de Centrum (el archivo
viene recortado). Pies de cada foto.

## Direction contract

THESIS: Noticias como el registro de campo de MC: una cota de tiempo con cada evento como estación, y
debajo la ficha de cada estación con su fecha, su lugar y las fotos que lo prueban. Rechaza el blog de
noticias con tarjetas, extracto y "leer más", y las cifras de asistentes.

OWN-WORLD: El mismo Afiche. Cabecera interior navy de portada con su cota; registro de eventos sobre
papel con grano; cierre de Contacto navy con estratos. Fecha en Archivo angosta con cifras tabulares,
regla de cabecera de 2 px navy, filas de 1 px, fotos en marcos rectos de 1 px Retícula Marcada con el
ajuste de saturación del sitio; el afiche de Centrum entero sobre navy.

STORY: Ve en la cota cuántos eventos y cuándo, salta al que le interesa o recorre el registro del más
reciente al más antiguo, reconoce el lugar y el tipo de participación, ve las fotos y escribe.

FIRST VIEWPORT: Cabecera interior: h1 "Noticias" en Archivo angosta blanca (~72 px) con la bajada
"Participación de MC Consultores en ferias, conferencias y universidades del sector minero." Al pie, la
cota-índice como eje de tiempo: un nodo por evento, del más reciente al más antiguo, cada uno con su
fecha (cifras tabulares) y un rótulo corto (PERUMIN 37, CONTIMIN, Aniversario UNSA, Centrum PUCP,
AusIMM, ProExplo); se traza al cargar.

FORM: Afiche (variante 4 de la propuesta v3, Figma 2WjOpYVypwycMiNaT4pbFt, frame 26:2), fijada por el
usuario; sin concept-seed y sin seed key. Firma de la página: la cota de tiempo de la cabecera y su
correspondencia con el registro (cada ficha abre con la misma fecha y el mismo nodo). Ficha de evento:
columna de fecha (angosta, 36 px) con tipo y ciudad debajo; título y resumen; fotos en tira (la
primera 16:9 grande y el resto en miniaturas 3:2). Código guiado (no hay generación de imágenes).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
