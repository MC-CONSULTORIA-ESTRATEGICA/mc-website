---
version: 1
slug: "src-app-nosotros-page-tsx"
primary_target: "src/app/nosotros/page.tsx"
related_targets: []
---

# Nosotros (src/app/nosotros/page.tsx)

## Alcance y modo

Página Nosotros, escritorio y 375 px. Modo **Persuade**: el visitante comprueba quién está detrás de
MC (personas reales, su especialidad y sus credenciales) antes de escribir. Hereda la cabecera
interior de Servicios.

## Visitante, tarea y prueba

- Gerente o jefe técnico de una minera que ya vio un servicio o un caso y quiere saber quién lo haría.
- Acción: "Solicitar una cotización" (WhatsApp) en el cierre de Contacto y siempre en el riel.
- Prueba disponible: 4 personas del equipo y 5 consultores asociados con nombre, cargo, credenciales
  (Ph.D., CP MAusIMM) y LinkedIn; especialidades que salen de esos cargos; ficha de la empresa (razón
  social, oficina en Lima, presencia en Perú y Ecuador, códigos JORC, NI 43-101 y S-K 1300); 5 fotos
  reales del equipo en eventos y sesiones.
- Restricciones: ninguna afirmación nueva; el texto del sitio actual se usa sin sus adjetivos vacíos
  y como Borrador hasta que Marcos lo apruebe; sin cifras (por confirmar); retratos de asociados de
  179 a 254 px (no se muestran a más de 144 × 180).

## Decisiones del usuario (4 oct)

Texto "Sobre MC" del sitio actual sin adjetivos vacíos (Borrador), ficha de la empresa y leyenda de
especialidades sacada de los cargos de people.ts, en producción. Las viñetas y el "por qué MC" del
sitio actual no se muestran (quedan en src/content/about.ts). La cota de la cabecera es el índice de
la página. Hoja de fotos reales, sin pie hasta tenerlos. Equipo arriba y asociados abajo, como en el
Inicio.

## Pendiente

Orden equipo/asociados, misión y visión, cifras, consultores nuevos de relaves y Percy Surca, y
aprobación del texto (Marcos). Pies de las fotos y fotos actualizadas (Camila).

## Direction contract

THESIS: Nosotros como la nómina de un informe técnico: cada persona con su nombre, su especialidad y
su firma profesional, y la empresa descrita en una ficha de datos. Rechaza la página "sobre nosotros"
de adjetivos, valores con íconos y foto de stock de apretón de manos.

OWN-WORLD: El mismo Afiche. Cabecera interior navy de portada con su cota; "Sobre MC" sobre papel con
grano; personas sobre hoja limpia; fotos sobre papel con grano; cierre de Contacto navy con estratos.
Reglas de cabecera de 2 px navy sobre cada lista, ficha de datos en tabla, retratos 4:5 con borde de
1 px. Títulos en Archivo angosta (wdth 68).

STORY: Lee en una línea qué reúne MC, ve en la ficha dónde está y con qué códigos trabaja, recorre
las especialidades y llega a la persona que las cubre, la ve con su cargo y su LinkedIn, ve al equipo
en eventos reales y escribe por WhatsApp.

FIRST VIEWPORT: Cabecera interior: h1 "Nosotros" en Archivo angosta blanca (~72 px) con la bajada
"En MC Consultores reunimos a geólogos, ingenieros y especialistas en minería." Al pie, la cota-índice:
línea Cyan Trazo de lado a lado con un nodo por sección (Sobre MC, Equipo, Consultores asociados,
Fotos), cada uno con su rótulo y enlace; se traza al cargar.

FORM: Afiche (variante 4 de la propuesta v3, Figma 2WjOpYVypwycMiNaT4pbFt, frame 26:2), fijada por el
usuario; sin concept-seed y sin seed key. Firma de la página: la leyenda de especialidades, que une
cada especialidad con las personas que la cubren (enlace a su ficha), como la leyenda de una carta une
la trama con la unidad. Personas en fichas verticales: retrato 4:5 de 144 px, nombre, cargo y
LinkedIn. Fotos en hoja de contactos de 6 columnas. Código guiado (no hay generación de imágenes).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
