---
version: 1
slug: "src-app-blog-page-tsx"
primary_target: "src/app/blog/page.tsx"
related_targets: ["src/app/blog/[slug]/page.tsx"]
---

# Blog (src/app/blog/page.tsx y src/app/blog/[slug]/page.tsx)

## Alcance y modo

Lista del Blog y página de cada artículo, escritorio y 375 px. Modo **Read**: el lector llega por un
buscador a un artículo técnico o recorre la lista; lee con comodidad y encuentra el contacto sin
buscarlo. Hereda la cabecera interior y la cota-índice.

## Visitante, tarea y prueba

- Lector técnico (geología, planeamiento) que llega por un buscador a un tema concreto; responsable
  técnico que evalúa el criterio de MC leyendo lo que publica.
- Acción: leer el artículo, pasar a otro y escribir por WhatsApp (cierre de Contacto y riel).
- Prueba disponible: 4 artículos del sitio actual (reconciliación minera, QA/QC en bases de datos
  geológicas, estimación bajo NI 43-101, gestión de relaves) con categoría, fecha, tiempo de lectura,
  resumen y texto.
- Restricciones: ninguna afirmación nueva; los textos son los del sitio actual; sin las imágenes de IA
  del sitio anterior.

## Decisiones del usuario (4 oct)

Una página por artículo (/blog/<slug>/), adelantada del paso 4. Lista con cota de los artículos por
fecha. Página de artículo con el título como h1, ficha de datos (categoría, fecha, lectura), columna
de lectura y "Otros artículos" al lado. Sin imágenes.

## Pendiente

Ninguno propio. (Datos estructurados de artículo y sitemap van en el paso 4.)

## Direction contract

THESIS: El Blog como un cuaderno técnico del Afiche: cada artículo es una lámina de lectura con su
ficha de datos, sin foto de stock ni tarjeta con imagen. Rechaza el blog de tarjetas con imagen,
etiquetas de colores y "leer más".

OWN-WORLD: El mismo Afiche. Cabecera interior navy de portada; lista sobre papel con grano con regla
de 2 px y filas de 1 px; artículo sobre papel con grano, columna de lectura de 62 caracteres a 19/30
en tinta; "Otros artículos" como lista reglada; cierre de Contacto navy. Categoría en Cyan Tinta,
fechas con cifras tabulares, títulos en Archivo angosta.

STORY: En la lista, ve cuántos artículos hay y de qué, elige por tema o fecha y entra. En el artículo,
sabe en una línea de qué trata y cuánto le toma, lee sin distracciones, salta a otro tema o escribe.

FIRST VIEWPORT: Lista: h1 "Blog" (~72 px) con la bajada que nombra los temas; al pie, la cota-índice
con un nodo por artículo (fecha y categoría), del más reciente al más antiguo; se traza al cargar.
Artículo: h1 con el título del artículo en Archivo angosta blanca, bajada con el resumen y, al pie,
la ficha de datos en línea sobre navy (Categoría, Fecha, Lectura) en lugar de la cota.

FORM: Afiche (variante 4 de la propuesta v3, Figma 2WjOpYVypwycMiNaT4pbFt, frame 26:2), fijada por el
usuario; sin concept-seed y sin seed key. Firma: la lista como registro reglado (fecha y lectura a la
izquierda, categoría, título y resumen al centro, enlace al final) con el nodo de cota sobre cada
regla, como en Noticias; el artículo como lámina de lectura con su ficha. Código guiado.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
