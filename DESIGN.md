---
name: MC Consultores
description: Afiche técnico de una consultora geológica; roca sobre navy, papel con grano y líneas de plano de campo.
colors:
  navy: "#01395c"
  navy-hero: "#002d50"
  navy-deep: "#00263f"
  cyan: "#3f9dc8"
  cyan-light: "#9fc9e0"
  cyan-ink: "#23709a"
  cyan-soft: "#d9ebf4"
  earth-900: "#6e4a2f"
  earth-700: "#8b5e3c"
  earth-600: "#9a6b47"
  earth-400: "#b08462"
  paper: "#f5f3ef"
  sheet: "#fcfbf9"
  grid: "#e8e3db"
  grid-strong: "#d8d1c6"
  ink: "#22211f"
  ink-2: "#4d4a45"
  ink-3: "#6b665f"
  on-navy: "#ffffff"
  on-navy-2: "#c9d6df"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.4rem + 5.6vw, 6.375rem)"
    fontWeight: 560
    lineHeight: 0.96
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 68"
  page-title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.9rem + 3.2vw, 4.5rem)"
    fontWeight: 560
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 68"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.375rem, 1.6rem + 2.4vw, 3.4375rem)"
    fontWeight: 560
    lineHeight: 1.05
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 68"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.4375rem"
    fontWeight: 560
    lineHeight: 1.3
    fontVariation: "'wdth' 68"
  title-sm:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.35
    fontVariation: "'wdth' 100"
  body-lg:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: "30px"
    fontVariation: "'wdth' 100"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: "24px"
    fontVariation: "'wdth' 100"
  body-sm:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: "22px"
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: "20px"
    fontVariation: "'wdth' 100"
  annotation:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 100"
  nav:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 106"
rounded:
  none: "0px"
  sm: "2px"
spacing:
  cell: "24px"
  gutter: "clamp(16px, 4vw, 48px)"
  section: "96px"
  section-compact: "72px"
  rail: "56px"
  page-max: "1320px"
components:
  button-action:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.navy-deep}"
    rounded: "{rounded.sm}"
    padding: "15px 26px"
  button-action-hover:
    backgroundColor: "{colors.cyan-light}"
    textColor: "{colors.navy-deep}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.on-navy}"
    rounded: "{rounded.none}"
    padding: "15px 0"
  link-arrow:
    textColor: "{colors.navy}"
  link-arrow-on-navy:
    textColor: "{colors.cyan-light}"
  nav-link:
    textColor: "{colors.on-navy-2}"
    typography: "{typography.nav}"
    padding: "8px 0"
  nav-link-active:
    textColor: "{colors.on-navy}"
  rail:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy}"
    width: "{spacing.rail}"
  rail-button-primary:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.navy-deep}"
    size: "48px"
  rail-button-hover:
    backgroundColor: "{colors.cyan-ink}"
    textColor: "{colors.on-navy}"
  image-label:
    backgroundColor: "rgb(0 38 63 / 0.85)"
    textColor: "{colors.on-navy}"
    typography: "{typography.label}"
    padding: "2px 8px"
  data-sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "6px 12px"
  contact-sheet:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.on-navy}"
    typography: "{typography.body-sm}"
    padding: "10px 16px"
  code-tag:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.cyan-ink}"
    padding: "0 6px"
  service-tag:
    backgroundColor: "{colors.cyan-soft}"
    textColor: "{colors.navy}"
    padding: "3px 9px"
  service-tag-active:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy}"
  page-head:
    backgroundColor: "{colors.navy-hero}"
    textColor: "{colors.on-navy}"
    typography: "{typography.page-title}"
    padding: "72px 0"
  page-index-link:
    textColor: "{colors.on-navy-2}"
    typography: "{typography.label}"
  page-index-link-hover:
    textColor: "{colors.on-navy}"
  person-sheet:
    textColor: "{colors.navy}"
    typography: "{typography.body}"
    width: "144px"
  specialty-row:
    textColor: "{colors.navy}"
    typography: "{typography.body}"
    padding: "12px 0"
  swatch:
    backgroundColor: "{colors.cyan-soft}"
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
    width: "48px"
    height: "32px"
  swatch-index:
    width: "36px"
    height: "24px"
  swatch-unit:
    width: "96px"
    height: "64px"
  page-index-meta:
    textColor: "{colors.on-navy}"
    typography: "{typography.label}"
  event-entry:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy}"
    padding: "48px 0"
  event-meta:
    textColor: "{colors.ink-3}"
    typography: "{typography.label}"
  event-link-on-navy:
    textColor: "{colors.on-navy}"
  post-entry:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy}"
    padding: "48px 0"
  post-category:
    textColor: "{colors.cyan-ink}"
    typography: "{typography.label}"
  page-facts:
    backgroundColor: "{colors.navy-hero}"
    textColor: "{colors.on-navy}"
    typography: "{typography.label}"
    padding: "12px 36px 0 0"
  page-facts-label:
    textColor: "{colors.on-navy-2}"
  article-prose:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
    width: "50ch"
  article-other:
    textColor: "{colors.navy}"
    padding: "12px 0"
---

# Design System: MC Consultores

## Overview

**Creative North Star: "El Afiche de Campo"**

El sitio se comporta como un afiche técnico impreso de una consultora geológica: roca real recortada sobre navy, papel cálido con grano y todo anotado como un plano de campo. La tecnología aparece como rigor dibujado (cotas, curvas de nivel, estratos, un bloque diagrama, un mapa con retícula), nunca como pantalla: ni neón, ni hologramas, ni paneles de datos de adorno. La seriedad viene del dibujo preciso; la cercanía, de las personas reales y del contacto a un paso.

La página alterna superficies como pliegos de un mismo impreso: navy a sangre en la portada, la cabecera de las páginas interiores, Eventos, Contacto y pie; papel con grano donde se lee (Servicios, Quiénes somos, Clientes, Artículos, la leyenda de la página de Servicios, Sobre MC y las fotos de Nosotros, el registro de Noticias, la lista del Blog y la lámina de cada artículo); hoja limpia donde se dibuja o se ficha (Proyectos, el mapa, el proceso de trabajo, las personas de Nosotros). La densidad es la de una lámina técnica: retícula de 24 px, líneas de 1 px, tablas de ficha y rótulos cortos, con aire generoso entre bloques (96 px por sección). Bordes rectos, sin sombras, sin degradados de adorno.

El movimiento es trazado: las líneas se dibujan, no rebotan. Las cotas de la portada y la cota-índice de cada página interior se trazan al cargar, el contorno de Perú y Ecuador se dibuja al entrar en pantalla, igual que la línea del proceso de trabajo, el bloque 3D gira apenas y los estratos de Contacto se mecen muy despacio. Todo se apaga con `prefers-reduced-motion` y la página queda completa y legible sin él.

**Key Characteristics:**
- Navy de marca (#01395C, inmutable) como campo; cyan solo para actuar y para la línea técnica sobre navy.
- Archivo variable: títulos angostos (eje `wdth` 68), texto en ancho normal.
- Líneas de 1 px que no escalan, nodos cuadrados huecos, retícula y coordenadas como en un plano.
- Grano monocromo sobre papel y navy; la hoja limpia queda para el dibujo.
- Marrón tierra únicamente en curvas de nivel, nunca en interfaz ni texto.
- Dibujos técnicos en código (SVG y WebGL2), con rótulo "Imagen ilustrativa/referencial" en toda imagen que no sea foto de MC.

## Colors

Un navy profundo de marca con un solo acento frío (cyan) para actuar, papel cálido como neutro y una tierra oxidada que vive solo en las curvas de nivel.

### Primary
- **Navy MC** (`--navy`, #01395C): el azul que identifica a MC; inmutable. Tinta de todos los títulos sobre papel, nombres, reglas de cabecera de 2 px, marco de la ficha de persona o de evento señalada, fecha de la ficha de evento y de la entrada del Blog, títulos de "Otros artículos" y trazos del mapa; superficie de Contacto y del riel de contacto.
- **Navy Portada** (`--navy-hero`, #002D50): fondo de la portada, de la cabecera y de la cabecera interior de cada página; el tono en que se funde la roca.
- **Navy Profundo** (`--navy-deep`, #00263F): superficie de Eventos y del pie; texto sobre el cyan del botón principal; fondo de la cartela de contacto.

### Secondary
- **Cyan Acción** (`--cyan`, #3F9DC8): fondo de la acción principal ("Solicitar una cotización", WhatsApp) y subrayado de los enlaces secundarios (también los nombres de la leyenda de especialidades y el nombre de la persona o el título del evento señalados). Es el único relleno saturado de la página.
- **Cyan Trazo** (`--cyan-light`, #9FC9E0): la línea técnica sobre navy (cotas, cota-índice de cada página interior, línea de la ficha en línea de un artículo y, al 30 %, sus separadores; estratos, borde de la cartela), enlaces sobre navy (los títulos de Eventos del Inicio, al 55 % en reposo) y estado hover de la acción principal.
- **Cyan Tinta** (`--cyan-ink`, #23709A): el cyan legible sobre papel: categorías (entrada del Blog, "Otros artículos", artículo del Inicio), códigos (JORC, NI 43-101), cabeceras de dato, foco, guías del bloque 3D.
- **Cyan Velo** (`--cyan-soft`, #D9EBF4): fondo de toda muestra de trama (leyenda del Inicio, cota-índice y unidades de Servicios) y de los rótulos de servicio en el bloque 3D.

### Tertiary
- **Tierra Maestra** (`--earth-900`, #6E4A2F): curvas maestras (más gruesas) de los anillos sobre papel.
- **Tierra Media** (`--earth-700`, #8B5E3C): anillos de Artículos.
- **Tierra Curva** (`--earth-600`, #9A6B47): curvas comunes de los anillos sobre papel.
- **Tierra Clara** (`--earth-400`, #B08462): reglas cortas y curvas de nivel tenues sobre el navy de Eventos.

### Neutral
- **Papel** (`--paper`, #F5F3EF): fondo base del sitio y de las secciones de lectura, siempre con grano.
- **Hoja** (`--sheet`, #FCFBF9): superficie limpia de Proyectos y del mapa; fondo de fichas, tablas y paneles.
- **Retícula** (`--grid`, #E8E3DB): retícula de fondo de Proyectos y separadores internos de fichas.
- **Retícula Marcada** (`--grid-strong`, #D8D1C6): bordes de celdas, marcos de imagen, de retrato y de foto de evento, separadores de lista, retícula y países vecinos del mapa.
- **Tinta** (`--ink`, #22211F): texto principal sobre papel; los párrafos de la lámina de lectura de un artículo.
- **Tinta Media** (`--ink-2`, #4D4A45): bajadas y descripciones.
- **Tinta Tenue** (`--ink-3`, #6B665F): metadatos (tipo · ciudad de la ficha de evento, lectura de la entrada del Blog, fecha en "Otros artículos"), ejes de coordenadas, rótulos de ficha.
- **Blanco sobre navy** (`--on-navy`, #FFFFFF): títulos y texto principal sobre navy; dato sobre el rótulo de la cota-índice (las fechas de Noticias y del Blog) y dato de la ficha en línea.
- **Niebla** (`--on-navy-2`, #C9D6DF): texto secundario sobre navy (bajada de la cabecera interior, rótulos de la cota-índice y de la ficha en línea), enlaces del menú en reposo.

### Named Rules
**The One Action Rule.** El cyan relleno (#3F9DC8) es solo para la acción de contacto: el botón de cotización y el botón de WhatsApp del riel. Ningún otro elemento lleva fondo cyan saturado; los demás cyan son trazo o tinta.

**The Earth-Only-in-Contours Rule.** El marrón tierra va únicamente en curvas de nivel generadas en código (y en el haz de reglas cortas de Eventos que las acompaña). Nunca en texto, rellenos, botones, íconos, bordes de interfaz ni fondos. Sobre papel se usan 900/700/600; sobre navy, solo 400 con opacidad baja (0,3 a 0,7).

**The Navy Is Not Negotiable Rule.** #01395C no se recolorea, aclara ni sustituye. Los dos navy más profundos son tonos de superficie del mismo campo, no marcas alternativas.

## Typography

**Display Font:** Archivo variable, eje de ancho en 68 (con system-ui, sans-serif)
**Body Font:** Archivo variable, ancho 100 (con system-ui, sans-serif)

**Character:** Una sola familia que cambia de ancho según el papel: angosta y apretada en los títulos, como la rotulación de un afiche; normal y abierta en la lectura. Se carga con `next/font` con el eje `wdth`.

### Hierarchy
- **Display** (560, clamp de 48 a 102 px, 0.96): solo el h1 de la portada, en blanco y en tres líneas como máximo (`max-width: 7.2em`).
- **Page Title** (560, clamp de 44 a 72 px, 1): h1 de las páginas interiores, entre el h2 y el display, en blanco sobre la cabecera interior y a 14em como máximo.
- **Headline** (560, clamp de 38 a 55 px, 1.05): títulos de sección (h2), en navy sobre papel y blanco sobre navy. Sin antetítulo.
- **Title** (560, 23 px, 1.3, angosto): títulos de caso, de grupo de personas y de paso del proceso de trabajo. Los títulos de artículo suben a 27 px con interlínea 1.18; los de unidad de Servicios, a un clamp de 28 a 36 px con interlínea 1.1; los de la ficha de evento (h2 de Noticias), a un clamp de 22 a 28 px con interlínea 1.15; los de la entrada del Blog (h2), a un clamp de 24 a 32 px con interlínea 1.12. "Otros artículos", el título del aside de un artículo, va en Title tal cual. La fecha de la ficha de evento y la de la entrada del Blog usan el mismo corte angosto (560) a 36 px (28 px bajo 900 px), interlínea 1, en navy con cifras tabulares.
- **Title Small** (600, 17 px, 1.35, ancho normal): h3 de la leyenda de Servicios, título de la leyenda de especialidades y títulos de lista.
- **Body Large** (400, 19 px, 30 px): bajada de la portada, de la cabecera interior (baja a Body bajo 900 px), texto de Quiénes somos y texto de Sobre MC (también baja a Body bajo 900 px), a 60 caracteres como máximo. En la lámina de lectura de un artículo los párrafos van a Body Large en Tinta con `max-width: 50ch`, que en Archivo a 19 px da unos 62 caracteres reales, y bajan a Body bajo 900 px.
- **Body** (400, 17 px, 24 px): texto corrido; la interlínea es la celda de la retícula. Medida de 60 a 62 caracteres. También las filas de la leyenda de especialidades y el nombre de la ficha de persona (navy 650).
- **Body Small** (400, 15 px, 22 px): descripciones de lista, metadatos, cartela, pie.
- **Label** (600, 13 px, 20 px): rótulos de imagen, fichas, ejes de coordenadas, leyendas, rótulos y datos de la cota-índice y de la ficha en línea, tipo y ciudad de la ficha de evento, lectura y categoría de la entrada del Blog. En caja normal.
- **Annotation** (600, 11 px, 0.08em, MAYÚSCULAS): solo anotaciones puestas sobre una figura: el crédito "Imagen ilustrativa" de la portada y los nombres del mapa (países a 0.14em, océano a 0.16em).
- **Nav** (500, 15 px, 0.01em, ancho 106): menú principal. El cromo del sitio se ensancha un poco: cabeceras del pie y título del asistente a 110, teléfono vertical del riel a 112.

### Named Rules
**The Narrow-for-Titles Rule.** El ancho 68 es para títulos (display, h1 interior, h2, títulos de caso, de grupo, de artículo, de unidad, de paso, de evento y de entrada del Blog, y la fecha de la ficha de evento y de la entrada del Blog). El texto de lectura no se angosta nunca; los rótulos de interfaz pueden ensancharse (106 a 112), no angostarse.

**The Uppercase-Is-Annotation Rule.** La mayúscula espaciada se reserva a lo que anota un dibujo (crédito sobre la roca, nombres del mapa). Los rótulos de interfaz y los encabezados van en caja normal; no hay antetítulos sobre los h2.

**The Tabular Figures Rule.** Fechas, teléfonos, horarios y cifras llevan cifras tabulares y de caja alta (`tabular-nums lining-nums`).

## Layout

Retícula de celda de 24 px: la interlínea del texto y los múltiplos de espaciado salen de ella (secciones de 4 celdas arriba y abajo, 3 en pantallas menores a 900 px; separaciones internas de 1, 1.25, 1.5, 2 y 2.5 celdas). Contenido a 1320 px como máximo, con margen lateral fluido de 16 a 48 px.

Las secciones de dos columnas son asimétricas, nunca mitades: 7/5 (Servicios, Contacto, Sobre MC), 5/7 (Mapa, Eventos), 8/4 (Quiénes somos). En Servicios la figura queda fija (`sticky`) mientras se recorre la leyenda. Proyectos usa dos columnas de casos; Artículos, tres; personas en fila (Inicio), columnas automáticas de 290 px mínimo; fichas de persona (Nosotros), de 200 px mínimo con 1.5 celdas de separación (dos columnas bajo 600 px); clientes, una retícula de 6 columnas con ejes A–F y 1–n como hoja de plano (4 columnas bajo 1100 px, 2 bajo 600 px).

El riel de contacto ocupa 56 px fijos en el borde derecho desde 1024 px (el `body` reserva ese ancho); por debajo pasa a barra inferior de 64 px con rótulos visibles y el `body` reserva ese alto más el área segura. Bajo 900 px todo pasa a una columna, la figura de Servicios sube antes de la leyenda, el menú se pliega y la roca de la portada baja a la mitad inferior con el texto sobre navy limpio. Bajo 600 px la acción principal ocupa todo el ancho.

Las páginas interiores abren con la cabecera interior: 3 celdas arriba y abajo (2 y 2.5 bajo 900 px), bajada a 1 celda del h1 y, a 3 celdas (2 bajo 900 px), el pie con la cota-índice de la página (o la ficha en línea, en un artículo). En Servicios la leyenda sigue directo a la cabecera, sin título propio y con 3 celdas arriba (2 bajo 900 px). Cada unidad es una fila de tres columnas: muestra de 96 px, texto 7 y ficha 4, separadas por 1.5 celdas y con 2 celdas arriba y abajo; bajo 1100 px la ficha baja bajo el texto y bajo 600 px todo va en una columna. La fila "También" y los pendientes se alinean con el texto de las unidades, no con la muestra. La cota-índice reparte una columna por destino (cinco en Servicios, cuatro en Nosotros, seis en Noticias, uno por artículo en el Blog) con 1.5 celdas entre ellas, y el proceso de trabajo cuatro; bajo 900 px las dos pasan a verticales, con la línea a la izquierda y los rótulos a 28 px de ella. En la cota-índice vertical los destinos van en filas de 24 px separadas 16 px, y quedan 16 px de aire antes del nodo de cierre.

En Nosotros, Sobre MC pone el título arriba y debajo una fila 7/5 separada 2.5 celdas: el texto a la izquierda y la ficha de la empresa a la derecha; bajo las dos, a todo el ancho, la leyenda de especialidades, cuyas filas repiten el 7/5 para que los nombres caigan en la columna de la ficha. Bajo 900 px todo va en una columna (2 celdas entre bloques) y las filas de la leyenda pasan a dos mitades; bajo 600 px, a una. Las personas van en dos grupos (Equipo, Consultores asociados) separados 3 celdas (2.5 bajo 900 px). La hoja de fotos es una rejilla de 6 columnas con 12 px de separación: la primera foto ocupa 4 columnas en 3:2 y a su lado va la primera foto vertical, a su misma altura; el resto ocupa 2 columnas en 3:2. Bajo 900 px pasa a 2 columnas cuadradas, con la grande a todo el ancho en 3:2.

En Noticias el registro sigue directo a la cabecera, sin título propio y con 3 celdas arriba (2 bajo 900 px), del evento más reciente al más antiguo. Cada ficha es una fila 2/4/6 (fecha, tipo y ciudad · título y resumen · fotos) separada por 1 celda y 1.5 celdas, con 2 celdas arriba y abajo; entre 900 y 1099 px pasa a 2/5 con las fotos bajo el texto, y bajo 900 px a una columna con 16 px entre bloques y la fecha, el tipo y la ciudad en una línea. El resumen va a 48 caracteres. Las fotos van en una rejilla de 3 columnas con 12 px de separación: la principal a todo el ancho y el resto en miniaturas de a tres.

En el Blog el registro también sigue directo a la cabecera, sin título propio y con 3 celdas arriba (2 bajo 900 px), del artículo más reciente al más antiguo. Cada entrada es una fila 2/7/3 (fecha, lectura y categoría · título y resumen · enlace "Leer el artículo" alineado a la derecha) separada por 1 celda y 1.5 celdas, con 2 celdas arriba y abajo; el resumen va a 62 caracteres. Entre 900 y 1099 px pasa a 2/7 con el enlace bajo el texto, alineado con él. Bajo 900 px es una grilla con áreas: la fecha y la lectura en una fila (columna de fecha a su ancho, 16 px de separación), debajo el título y el resumen, luego la categoría al pie del resumen (nunca suelta sobre el título) y al final el enlace, con 12 px entre filas.

La página de un artículo pone, bajo la cabecera interior, la lámina de lectura sobre papel con grano: columna de lectura y aside en 7/4, separados 2.5 celdas, con los párrafos separados una celda. El aside "Otros artículos" queda fijo (`sticky`, a 2 celdas del borde superior) mientras se lee; bajo 900 px todo va en una columna (2 celdas entre bloques) y el aside baja al final, sin fijarse.

Cortes usados: 480, 600, 900, 1024 y 1100 px.

## Elevation & Depth

Plano. No hay sombras ni capas elevadas: la profundidad sale del cambio de superficie (navy, papel, hoja), del grano y de líneas finas. Lo que flota sobre el contenido (riel, panel del asistente) se separa con un borde de 1 px (blanco al 12 % sobre navy, navy sobre papel), no con sombra. La única profundidad real es la del bloque diagrama 3D, que es un dibujo, no un recurso de interfaz.

Los degradados existen solo para fundir una imagen o una trama en su superficie: la roca de la portada se funde en el navy hacia la izquierda (hacia arriba en móvil), un velo radial calma la zona del texto y la retícula de Proyectos se desvanece con una máscara. Ningún degradado decora un fondo, un botón o un texto.

### Named Rules
**The Flat Plate Rule.** Las superficies son planas en reposo y en hover. El estado se muestra con color, borde o subrayado, nunca levantando un elemento.

**The Grain Rule.** El grano (mosaico monocromo de 256 px, 7 % de opacidad, `src/assets/texturas/grano.png`, generado por `scripts/build-grain.mjs`) se superpone al color de la superficie con la clase de grano: va en papel y en navy (Servicios, Quiénes somos, Clientes, Artículos, Eventos, Contacto, pie; en Nosotros, Sobre MC y las fotos; en Noticias, el registro; en el Blog, la lista y la lámina de lectura). No va en la hoja limpia (Proyectos, mapa, personas de Nosotros), ni en la portada (ya es roca), ni en la cabecera ni en la cabecera interior, ni dentro de tarjetas, fichas o celdas. El color lo pone la superficie; el grano nunca se tiñe ni se sube de opacidad.

## Shapes

Esquinas rectas. El único redondeo es de 2 px, en el botón de acción y en el anillo de foco; el enlace subrayado, las fichas, las celdas, los marcos de imagen y los paneles van a 0. Las formas recurrentes son de plano: líneas de 1 px que no escalan con el dibujo (`vector-effect: non-scaling-stroke`), nodos cuadrados huecos en los extremos y paradas de una cota (7 px en la portada, la cota-índice, el proceso de trabajo, la regla de cada entrada del registro reglado y los extremos de la ficha en línea; 10 px en el nodo de oficina del mapa y su leyenda), reglas de cabecera de 2 px en navy sobre cada lista (leyenda de Servicios, unidades de la página de Servicios, grupos de personas, leyenda de especialidades, artículos, registro de eventos y del Blog, "Otros artículos", clave del mapa), tramas de muestra (líneas, cruces, puntos, diagonales, uves) como en una carta geológica, en mosaico de 12 px con línea navy de 0.9 sobre Cyan Velo y marco de 1 px navy (las cruces tienen brazos de 6 px para no confundirse con los puntos), retícula punteada de meridianos y paralelos, y curvas de nivel ondulantes con una curva maestra cada tres o cuatro.

Las imágenes van en recuadros rectos con borde de 1 px (Retícula Marcada), proporción 3:2 (16:9 la foto principal de Eventos y de cada ficha de evento; en la hoja de fotos, la vertical toma la altura de la grande y bajo 900 px las chicas van cuadradas), retratos en 4:5, y un leve ajuste de saturación y contraste para emparejarlas (el mismo en casos y fotos del equipo); los logos de clientes se muestran enteros, sin filtro ni recorte. Un afiche de evento es pieza gráfica, no foto: va entero (`contain`) sobre Navy MC, sin el ajuste de color.

### Named Rules
**The More-Pattern-Not-Bigger Rule.** Una muestra de trama más grande dibuja más trama con la misma línea; no se amplía el dibujo chico. Hay tres dibujos: 48 × 32 (leyenda del Inicio), 36 × 24 (cota-índice de Servicios) y 96 × 64 (unidades de Servicios). La única reducción permitida es la de la unidad bajo 600 px, a 72 × 48 (3/4), donde la línea queda en 0.7.

## Components

### Buttons
Directos y planos; una sola acción fuerte por bloque.
- **Shape:** esquina casi recta (2 px).
- **Acción principal:** fondo Cyan Acción, texto Navy Profundo, 600, padding 15 × 26 px, con ícono de WhatsApp a la izquierda. Solo para "Solicitar una cotización".
- **Hover / Focus:** el fondo pasa a Cyan Trazo en 160 ms con curva de salida; foco con contorno de 2 px (Cyan Tinta sobre papel, blanco sobre navy) separado 3 px.
- **Enlace de línea (secundario sobre navy):** sin fondo ni padding lateral, texto blanco, subrayado de 1 px en cyan que pasa a blanco en hover ("Ver servicios", "Llamar al …").
- **Enlace con flecha:** texto Navy MC 600, subrayado cyan; en hover el subrayado pasa a navy y la flecha avanza 3 px. Sobre navy, en Cyan Trazo que pasa a blanco.
- **Título enlazado sobre navy:** en Eventos del Inicio, el título de cada evento lleva a su ficha en Noticias (`/noticias/#evento-<id>`); texto blanco 600, subrayado de 1 px en Cyan Trazo al 55 % en reposo (visible también en táctil, donde no hay hover) y pleno en hover.

### Chips
- **Código de norma:** borde de 1 px navy, fondo Hoja, texto Cyan Tinta 12 px 600 (JORC, NI 43-101, S-K 1300). Es pieza compartida: va junto al título en la leyenda del Inicio, en la fila Códigos de la ficha de cada unidad de Servicios y en la ficha de la empresa de Nosotros (los códigos de todos los servicios, sin repetir, separados 6 px).
- **Rótulo de servicio (bloque 3D y flujo):** borde de 1.5 px navy, fondo Cyan Velo, texto navy 13 px 650; activo, fondo navy y texto blanco. Los demás rótulos bajan a 30 % de opacidad mientras uno está activo.

### Cards / Containers
No hay tarjetas con caja: los grupos se abren con una regla de cabecera de 2 px navy y se separan con líneas de 1 px.
- **Ficha de datos:** tabla de dos columnas sobre Hoja, borde de 1 px Retícula Marcada, filas separadas por Retícula, rótulo en Tinta Tenue y dato en Tinta 500, a tamaño Label. Bajo un caso lleva Cliente / Servicio / Alcance; en una unidad de Servicios, Códigos (chips de norma) y Caso (título en navy 600 con subrayado Cyan Acción que pasa a navy en hover, cliente debajo en Tinta Tenue 400); como ficha de la empresa en Nosotros, Razón social / Oficina / Presencia / Códigos, con la columna de rótulo ensanchada a 7rem.
- **Caso:** imagen 3:2 con borde de 1 px, título angosto, texto a 62 caracteres y ficha de datos; dos por fila (una bajo 900 px). Caso, Persona y Artículo son piezas compartidas entre páginas.
- **Cartela de contacto:** tabla sobre Navy Profundo con borde de 1 px Cyan Trazo; filas separadas por Cyan Trazo al 30 %; rótulo en Niebla, dato en blanco 600.
- **Ficha en línea:** la ficha de datos de una página sin destinos, al pie de la cabecera interior sobre Navy Portada (en un artículo: Categoría / Fecha / Lectura). Una línea de 1 px Cyan Trazo de lado a lado con un nodo cuadrado hueco de 7 px (relleno Navy Portada) en cada extremo, como en toda cota; debajo, las celdas en fila separadas por 1 px Cyan Trazo al 30 %, 12 px bajo la línea y 1.5 celdas entre ellas; rótulo en Niebla y dato en blanco 600 con cifras tabulares, a tamaño Label. Bajo 600 px pasa a filas de rótulo (6rem) y dato separadas por 1 px Cyan Trazo al 30 %, como la ficha de datos.
- **Rótulo de imagen:** "Imagen referencial" sobre navy al 85 %, texto blanco a tamaño Label, en la esquina superior izquierda de la foto. El crédito de la portada ("Imagen ilustrativa") va como anotación en mayúscula abajo a la derecha.
- **Artículo:** regla de 2 px navy arriba, título angosto navy, metadatos al pie (categoría en Cyan Tinta); en hover se subraya el título.
- **Persona (fila):** retrato 4:5 de 96 px (80 px en móvil) con borde de 1 px, nombre navy 650, cargo en Tinta Media, LinkedIn en Cyan Tinta. Es la variante del Inicio, en grupos con regla de cabecera.
- **Ficha de persona (vertical):** la variante de Nosotros. Retrato 4:5 de 144 px arriba, con borde de 1 px Retícula Marcada; debajo, a 12 px, el nombre navy 650 a Body (17/24), el cargo en Tinta Media a Body Small y LinkedIn en Cyan Tinta (pasa a navy en hover). Cada ficha es un ancla `#persona-<slug>`; al llegar a ella (`:target`) el retrato toma un marco navy de 2 px separado 3 px y el nombre un subrayado de 2 px Cyan Acción, sin animación. Los retratos de origen con bordes se acercan con una escala propia por persona (`photoScale`) dentro del mismo recorte. Las fichas cuelgan de una regla de 2 px navy, en la rejilla descrita en Layout.

### Navigation
- **Cabecera:** franja Navy Portada de 72 px; logo a 40 px (32 px en móvil). Enlaces en Niebla, tamaño Nav; hover a blanco con raya inferior de 1 px Cyan Trazo; página actual en blanco con raya blanca. La página actual se marca con `aria-current="page"` en la página misma y con `aria-current="true"` en una página interna de su sección (un artículo marca "Blog"); las dos llevan el mismo estilo.
- **Móvil (bajo 900 px):** botón "Menú" con borde de 1 px Cyan Trazo; la lista cae bajo la cabecera, a tamaño Body, filas separadas por blanco al 10 %.
- **Pie:** Navy Profundo con grano; columnas 5/2/2/2; enlaces blancos subrayados al 60 %.

### Cabecera interior
La primera banda de toda página interior: Navy Portada a sangre bajo la cabecera del sitio, sin roca ni grano, con el h1 en Page Title blanco y la bajada en Niebla a Body Large. Su pie lleva la cota-índice de la página cuando la página tiene destinos, y la ficha en línea cuando no los tiene (un artículo, que lleva su título como h1 y su resumen como bajada); la banda, el h1 y el pie se heredan, los destinos o los datos los pone cada página. Foco en blanco.

### Contact Rail (signature)
La banda de contacto fija del borde derecho, como la banda de raspado de una lámina: Navy MC, 56 px, con el teléfono en vertical arriba (Niebla, ancho 112) y cuatro botones cuadrados de 48 px abajo (WhatsApp en Cyan Acción con texto Navy Profundo; llamada, LinkedIn y asistente transparentes, hover en Cyan Tinta). Cada botón muestra su nombre en una etiqueta Navy Profundo a su izquierda, que aparece deslizándose 4 px en 160 ms. Bajo 1024 px es una barra inferior de 64 px con cuatro columnas y rótulos visibles. El asistente abre un panel no modal sobre Hoja con borde de 1 px navy y cabecera navy, que entra en 240 ms subiendo 8 px.

### Cotas de portada (signature)
Tres cotas verticales en Cyan Trazo de 1 px sobre la roca, con un nodo cuadrado hueco de 7 px en cada extremo y, en dos de ellas, un tramo horizontal. Al cargar se trazan en escalera: la línea se dibuja en 1.1 s (`stroke-dashoffset`, curva de salida) con 0.22 s entre cotas desde 0.35 s; los nodos aparecen en 0.5 s, el de arriba antes que la línea y el de abajo al terminar.

### Mapa de presencia (signature)
Perú y Ecuador dibujados con la misma línea que las cotas: contorno navy de 1.4 px, relleno con trama diagonal navy al 35 %, países vecinos en Retícula Marcada, meridianos y paralelos punteados cada 5° con sus coordenadas, nombres en anotación mayúscula con halo de Hoja, y la oficina de Lima como nodo cuadrado con guía horizontal y rótulo. Con soporte de `animation-timeline: view()`, el contorno se dibuja al entrar en pantalla (de 10 % de entrada a 45 % de cobertura) y la trama y la oficina aparecen después; sin soporte, se ve completo.

### Leyenda de Servicios y bloque 3D (signature)
Cada servicio es una unidad de carta geológica: muestra de 48 × 32 px con su trama en navy sobre Cyan Velo, título, códigos y descripción. Al pasar o enfocar un servicio, la fila se aclara a Hoja y el bloque diagrama (WebGL2, sin librerías, en tonos navy y cyan) resalta dónde ocurre. El bloque oscila ±6° muy despacio (ciclo cercano a un minuto) con un leve seguimiento del puntero, se detiene fuera de pantalla y queda quieto con movimiento reducido, bajo 900 px o con puntero táctil. Sin WebGL2 se muestra el panel de estratos en SVG. Pie de figura: "Bloque diagrama ilustrativo, sin escala."

### Cota-índice (signature)
Pieza compartida de toda página interior: la cota de cada cabecera interior es el índice de su página. Una línea de 1 px Cyan Trazo de lado a lado con un nodo cuadrado hueco de 7 px por destino (relleno Navy Portada) y otro al final; bajo cada nodo, el rótulo del destino a tamaño Label en Niebla (20 caracteres como máximo por línea), y cada parada es un enlace a su sección. El ícono es opcional: en Servicios cada parada lleva la trama de su servicio en miniatura (36 × 24) sobre el rótulo; en Nosotros van solo los rótulos (Sobre MC, Equipo, Consultores asociados, Fotos del equipo). El dato también es opcional: un valor corto sobre el rótulo, en blanco y con cifras tabulares, a 2 px de él; en Noticias es la fecha de cada evento y la cota se lee como eje de tiempo, del más reciente al más antiguo. En hover el rótulo pasa a blanco con subrayado Cyan Trazo y el nodo se rellena de Cyan Trazo. Al cargar la línea se traza en 1.1 s desde 0.2 s con la curva de salida, las paradas aparecen en escalera de 0.16 s desde 0.3 s y el nodo final a 1.2 s. Bajo 900 px es vertical, a la izquierda, con el ícono (si lo hay) y el rótulo en fila a la derecha (el dato y el rótulo en una línea, separados 12 px), filas de 24 px separadas 16 px y 16 px de aire antes del nodo de cierre.

### Leyenda de especialidades (signature)
La firma de Nosotros: une cada especialidad con las personas que la cubren, como la leyenda de una carta une la trama con la unidad. Va bajo el texto y la ficha de Sobre MC, a todo el ancho, con su título en Title Small; abre con la regla de 2 px navy y cada fila cierra con 1 px Retícula Marcada, con 12 px arriba y abajo. A la izquierda (7) la especialidad en navy 600; a la derecha (5, alineada con la ficha de la empresa) las personas en Tinta Media, separadas por comas, cada nombre enlazado a su ficha con subrayado de 1 px Cyan Acción que pasa a navy en hover. Las especialidades salen de los cargos; una sin nadie activo no se muestra.

### Registro reglado (signature)
Pieza compartida de Noticias y el Blog: el registro es la cota de la cabecera abierta, y cada entrada es una estación. Sobre papel con grano, la lista abre con la regla de 2 px navy y cada entrada cierra con 1 px Retícula Marcada, con 2 celdas arriba y abajo; sobre la regla de cada entrada, en su borde izquierdo, va un nodo cuadrado hueco de 7 px (borde navy, relleno Papel) centrado en la línea (el de la primera, en la regla de 2 px). Cada entrada es un ancla; al llegar a ella (`:target`) el nodo se rellena de navy, sin animación. Las columnas y lo que se marca además al llegar los pone cada página.

### Ficha de evento (signature)
La firma de Noticias, sobre el registro reglado. Primera columna: la fecha en Archivo angosta navy con cifras tabulares y, debajo, tipo · ciudad en Label Tinta Tenue. Segunda: el título (h2) angosto navy y el resumen en Tinta Media a 48 caracteres. Tercera: las fotos, la principal en 16:9 a todo el ancho de la columna y el resto en miniaturas 3:2 de a tres, en marcos de 1 px Retícula Marcada sobre Hoja con el ajuste de color del sitio; un afiche va entero sobre Navy MC. Cada ficha es un ancla `#evento-<id>` a la que llegan la cota-índice y los títulos de Eventos del Inicio; al llegar (`:target`), además del nodo, el título toma un subrayado de 2 px Cyan Acción y la foto principal un marco navy de 2 px separado 3 px, sin animación (el mismo patrón que la ficha de persona). Sin cifras de asistentes ni "leer más".

### Entrada del Blog
La lista del Blog sobre el registro reglado. Primera columna: la fecha en Archivo angosta navy (560, 36 px, 28 px bajo 900 px) con cifras tabulares y, debajo, la lectura en Label Tinta Tenue y la categoría en Label Cyan Tinta 600. Segunda: el título (h2) angosto navy, enlazado al artículo, y el resumen en Tinta Media a 62 caracteres. Tercera: "Leer el artículo", enlace con flecha a la derecha (una sola parada de teclado por entrada: el título). En hover el título toma un subrayado de 2 px Cyan Acción; cada entrada es un ancla `#articulo-<slug>` a la que llega la cota-índice, y al llegar (`:target`) el título lleva ese mismo subrayado. Sin imagen, sin etiquetas de color ni tarjeta.

### Lámina de lectura
La página de un artículo: cabecera interior con el título del artículo como h1, el resumen como bajada y la ficha en línea al pie; debajo, sobre papel con grano, la columna de lectura (párrafos a 19/30 en Tinta a 50ch; 17/24 bajo 900 px) y, a su lado, el aside "Otros artículos": título en Title, una lista con regla de 2 px navy y filas de 1 px Retícula Marcada (12 px arriba y abajo) con el título de cada artículo en navy 600 y debajo "fecha · categoría" a Body Small (fecha en Tinta Tenue, categoría en Cyan Tinta 600), y al pie el enlace con flecha "Ver todos los artículos". En hover el título del artículo toma un subrayado de 1 px Cyan Acción. Sin imágenes: las de IA del sitio anterior no se usan en los artículos.

### Hoja de fotos
Las fotos reales del equipo como hoja de contactos sobre papel con grano: la primera grande y, a su lado, la primera vertical a su misma altura; el resto en 3:2 (rejilla en Layout). Cada foto en marco de 1 px Retícula Marcada sobre Hoja, recortada a su celda, con el mismo ajuste de saturación y contraste que los casos. Sin pies hasta tenerlos.

### Unidades de la leyenda de Servicios
Cada servicio es una unidad de carta geológica a página completa: muestra de trama de 96 × 64 a la izquierda, título angosto navy (clamp de 28 a 36 px), descripción en Tinta Media a 60 caracteres y, a la derecha, la ficha de datos con Códigos y Caso cuando existen. La lista abre con la regla de 2 px navy y cada unidad cierra con 1 px Retícula Marcada. Los servicios que solo se nombran van debajo en una fila "También" (rótulo navy 600 en caja normal, nombres separados por puntos medios) con un enlace con flecha a WhatsApp; no llevan trama ni ficha.

### Proceso de trabajo (signature)
Cuatro pasos sobre Hoja, colgados de una línea navy de 1 px con un nodo cuadrado hueco de 7 px (relleno Hoja) por paso y otro al final; título de paso en Title, texto en Body Small a 34 caracteres. Sin numerales sobre los títulos: el orden lo da la línea. Con soporte de `animation-timeline`, la línea se dibuja al entrar en pantalla (de 10 % de entrada a 45 % de cobertura), los pasos aparecen escalonados y el nodo final al cerrar; sin soporte, se ve completo. Bajo 900 px es vertical, a la izquierda.

### Cierre de Contacto
La misma sección al pie de cada página: Navy MC con grano y la banda de estratos abajo; a la izquierda el título, la acción principal y el enlace de línea "Llamar al …" (7), a la derecha la cartela de contacto (5); una columna bajo 900 px.

### Curvas de nivel y estratos
Curvas de nivel generadas en código (anillos ondulantes, curva maestra más gruesa, opacidad que cae hacia afuera) en Tierra, recortadas por el borde de la sección en una esquina. Estratos en líneas de 1 px Cyan (menores al 45 %, maestras en Cyan Trazo, un contacto discontinuo 6/5) en la banda inferior de Contacto, en tres grupos que se mecen entre −3 y +4 px con ciclos de 16, 19 y 23 s alternos.

## Do's and Don'ts

### Do:
- **Do** usar Navy MC (#01395C) tal cual en tinta de títulos y en las superficies de marca; los navy de portada (#002D50) y profundo (#00263F) son solo superficies.
- **Do** reservar el fondo Cyan Acción (#3F9DC8) para la acción de contacto, con texto Navy Profundo (5,1:1).
- **Do** dibujar lo técnico en código, con líneas de 1 px que no escalan, nodos cuadrados huecos y rótulos cortos con guía.
- **Do** abrir cada lista con una regla de 2 px navy y separar sus filas con 1 px Retícula Marcada; un registro por fecha (eventos, artículos) usa el registro reglado compartido, con su nodo sobre cada regla.
- **Do** poner el grano en papel y navy, y dejar la Hoja limpia para dibujos, fichas y casos.
- **Do** escribir el movimiento como trazado (dibujar una línea, aparecer un nodo) con la curva de salida (`cubic-bezier(0.16, 1, 0.3, 1)`), y apagarlo entero con `prefers-reduced-motion`.
- **Do** rotular toda imagen que no sea foto de MC como "Imagen ilustrativa" o "Imagen referencial".
- **Do** medir el espacio en celdas de 24 px.
- **Do** abrir cada página interior con la cabecera interior y poner al pie de la banda la cota-índice de la página (un nodo por destino, con enlace), dibujada con la línea y los nodos de la portada; si la página no tiene destinos (un artículo), la ficha en línea con sus datos, con la misma línea y nodos en los extremos.
- **Do** dar a una muestra de trama más grande más trama con la misma línea, no ampliar la chica.
- **Do** señalar el destino de un enlace interno (`:target`) con un marco navy de 2 px separado 3 px y un subrayado de 2 px Cyan Acción, sin movimiento; si la ficha cuelga de un nodo, el nodo se rellena de navy.

### Don't:
- **Don't** usar el marrón tierra fuera de las curvas de nivel: ni texto, ni botones, ni bordes, ni fondos, ni íconos.
- **Don't** usar sombras, elevación en hover ni degradados de adorno; un degradado solo funde una imagen o una trama en su superficie.
- **Don't** redondear más de 2 px ni usar tarjetas con caja y sombra.
- **Don't** poner antetítulos ni rótulos en mayúscula sobre los títulos; la mayúscula espaciada es solo para anotar un dibujo.
- **Don't** angostar el texto de lectura ni usar una segunda familia tipográfica.
- **Don't** usar hologramas, neón, brillos, gráficos o cifras animadas de adorno, grillas de íconos, cascos, maquinaria amarilla ni dorado.
- **Don't** recolorear, recortar, filtrar ni animar los logos de MC ni los de clientes.
- **Don't** usar imágenes generadas que parezcan foto de MC, con personas, logos, texto, maquinaria, tajo o instalaciones.
