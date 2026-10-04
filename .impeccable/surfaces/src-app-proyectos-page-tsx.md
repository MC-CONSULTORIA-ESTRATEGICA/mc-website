---
version: 1
slug: "src-app-proyectos-page-tsx"
primary_target: "src/app/proyectos/page.tsx"
related_targets: []
---

# Proyectos (src/app/proyectos/page.tsx)

## Alcance y modo

Página de Proyectos, escritorio y 375 px. Modo **Persuade**: el visitante comprueba con casos reales
(cliente, servicio, alcance) que MC ya hizo el trabajo que necesita. Hereda la cabecera interior y la
cota-índice. Sale con los 4 casos actuales y lista para sumar los ~13 de Sofía sin rediseñar.

## Visitante, tarea y prueba

- Gerente o jefe técnico de una minera que llegó desde el Inicio o desde Servicios y quiere más
  contexto de un caso: qué se hizo, para quién y con quién.
- Acción: "Solicitar una cotización" (WhatsApp) en el cierre de Contacto y siempre en el riel; ir al
  servicio del caso.
- Prueba disponible: 4 casos de projects.ts con texto largo (description), cliente (Southern Peru
  Copper Corporation, Compañía Minera Condestable, Minera Titán del Perú), servicio y alcance cuando el
  sitio actual los dice; fotos reales en dos y referenciales (rotuladas) en dos.
- Restricciones: ninguna afirmación nueva; Geología estructural sin cliente y por confirmar que sea
  real (marca en revisión); las imágenes referenciales llevan su rótulo; casos confidenciales sin
  cliente deben caber.

## Decisiones del usuario (4 oct)

Página aparte (Sofía, 30 sep) con los 4 casos actuales por ahora; los ~13 entran como datos cuando
lleguen. Geología estructural se muestra (Salim, 4 oct). La cota de la cabecera es el índice: un nodo
por caso.

## Pendiente

Lista de los ~13 proyectos con cliente, servicio y alcance (Sofía o Camila). Si Geología estructural
es un proyecto real (Sofía o Camila). Fotos reales de los casos con imagen referencial. Validación
técnica de las imágenes referenciales.

## Direction contract

THESIS: Proyectos como el archivo de láminas del Afiche: cada caso es una lámina con su imagen, su
memoria descriptiva y su ficha (cliente, servicio, alcance), sobre la hoja limpia con retícula. Rechaza
el portafolio de tarjetas con miniatura y "ver más", y los logos de cliente como galería.

OWN-WORLD: El mismo Afiche. Cabecera interior navy de portada; casos sobre Hoja con la retícula que se
desvanece (como Proyectos en el Inicio), regla de 2 px navy, filas de 1 px y nodo de cota sobre cada
regla; imágenes en marcos rectos de 1 px con rótulo "Imagen referencial" cuando corresponde; ficha de
datos; cierre de Contacto navy. Títulos en Archivo angosta.

STORY: Ve en la cota los casos y a quién se hicieron, entra al que le interesa, lee qué se hizo, ve
para quién y con qué alcance, pasa al servicio relacionado o escribe.

FIRST VIEWPORT: Cabecera interior: h1 "Proyectos" en Archivo angosta blanca (~72 px) con una bajada que
describe la lista; al pie, la cota-índice con un nodo por caso: el cliente arriba (o nada si no tiene
cliente nombrado) y un rótulo corto del caso debajo; se traza al cargar.

FORM: Afiche (variante 4 de la propuesta v3, Figma 2WjOpYVypwycMiNaT4pbFt, frame 26:2), fijada por el
usuario; sin concept-seed y sin seed key. Firma: la lámina de caso en dos columnas (imagen 3:2 · título,
memoria, ficha y enlace al servicio) colgando de su nodo en el registro reglado. Código guiado.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
