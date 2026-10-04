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
---

# Design System: MC Consultores

## Overview

**Creative North Star: "El Afiche de Campo"**

El sitio se comporta como un afiche técnico impreso de una consultora geológica: roca real recortada sobre navy, papel cálido con grano y todo anotado como un plano de campo. La tecnología aparece como rigor dibujado (cotas, curvas de nivel, estratos, un bloque diagrama, un mapa con retícula), nunca como pantalla: ni neón, ni hologramas, ni paneles de datos de adorno. La seriedad viene del dibujo preciso; la cercanía, de las personas reales y del contacto a un paso.

La página alterna superficies como pliegos de un mismo impreso: navy a sangre en la portada, Eventos, Contacto y pie; papel con grano donde se lee (Servicios, Quiénes somos, Clientes, Artículos); hoja limpia donde se dibuja (Proyectos, el mapa). La densidad es la de una lámina técnica: retícula de 24 px, líneas de 1 px, tablas de ficha y rótulos cortos, con aire generoso entre bloques (96 px por sección). Bordes rectos, sin sombras, sin degradados de adorno.

El movimiento es trazado: las líneas se dibujan, no rebotan. Las cotas de la portada se trazan al cargar, el contorno de Perú y Ecuador se dibuja al entrar en pantalla, el bloque 3D gira apenas y los estratos de Contacto se mecen muy despacio. Todo se apaga con `prefers-reduced-motion` y la página queda completa y legible sin él.

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
- **Navy MC** (#01395C): el azul que identifica a MC; inmutable. Tinta de todos los títulos sobre papel, nombres, reglas de cabecera de 2 px y trazos del mapa; superficie de Contacto y del riel de contacto.
- **Navy Portada** (#002D50): fondo de la portada y de la cabecera; el tono en que se funde la roca.
- **Navy Profundo** (#00263F): superficie de Eventos y del pie; texto sobre el cyan del botón principal; fondo de la cartela de contacto.

### Secondary
- **Cyan Acción** (#3F9DC8): fondo de la acción principal ("Solicitar una cotización", WhatsApp) y subrayado de los enlaces secundarios. Es el único relleno saturado de la página.
- **Cyan Trazo** (#9FC9E0): la línea técnica sobre navy (cotas, estratos, borde de la cartela), enlaces sobre navy y estado hover de la acción principal.
- **Cyan Tinta** (#23709A): el cyan legible sobre papel: categorías, códigos (JORC, NI 43-101), cabeceras de dato, foco, guías del bloque 3D.
- **Cyan Velo** (#D9EBF4): fondo de las muestras de la leyenda de Servicios y de los rótulos de servicio en el bloque 3D.

### Tertiary
- **Tierra Maestra** (#6E4A2F): curvas maestras (más gruesas) de los anillos sobre papel.
- **Tierra Media** (#8B5E3C): anillos de Artículos.
- **Tierra Curva** (#9A6B47): curvas comunes de los anillos sobre papel.
- **Tierra Clara** (#B08462): reglas cortas y curvas de nivel tenues sobre el navy de Eventos.

### Neutral
- **Papel** (#F5F3EF): fondo base del sitio y de las secciones de lectura, siempre con grano.
- **Hoja** (#FCFBF9): superficie limpia de Proyectos y del mapa; fondo de fichas, tablas y paneles.
- **Retícula** (#E8E3DB): retícula de fondo de Proyectos y separadores internos de fichas.
- **Retícula Marcada** (#D8D1C6): bordes de celdas, marcos de imagen, separadores de lista, retícula y países vecinos del mapa.
- **Tinta** (#22211F): texto principal sobre papel.
- **Tinta Media** (#4D4A45): bajadas y descripciones.
- **Tinta Tenue** (#6B665F): metadatos, ejes de coordenadas, rótulos de ficha.
- **Blanco sobre navy** (#FFFFFF): títulos y texto principal sobre navy.
- **Niebla** (#C9D6DF): texto secundario sobre navy, enlaces del menú en reposo.

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
- **Headline** (560, clamp de 38 a 55 px, 1.05): títulos de sección (h2), en navy sobre papel y blanco sobre navy. Sin antetítulo.
- **Title** (560, 23 px, 1.3, angosto): títulos de caso, de grupo de personas. Los títulos de artículo suben a 27 px con interlínea 1.18.
- **Title Small** (600, 17 px, 1.35, ancho normal): h3 de la leyenda de Servicios y títulos de lista.
- **Body Large** (400, 19 px, 30 px): bajada de la portada y texto de Quiénes somos, a 60 caracteres como máximo.
- **Body** (400, 17 px, 24 px): texto corrido; la interlínea es la celda de la retícula. Medida de 60 a 62 caracteres.
- **Body Small** (400, 15 px, 22 px): descripciones de lista, metadatos, cartela, pie.
- **Label** (600, 13 px, 20 px): rótulos de imagen, fichas, ejes de coordenadas, leyendas. En caja normal.
- **Annotation** (600, 11 px, 0.08em, MAYÚSCULAS): solo anotaciones puestas sobre una figura: el crédito "Imagen ilustrativa" de la portada y los nombres del mapa (países a 0.14em, océano a 0.16em).
- **Nav** (500, 15 px, 0.01em, ancho 106): menú principal. El cromo del sitio se ensancha un poco: cabeceras del pie y título del asistente a 110, teléfono vertical del riel a 112.

### Named Rules
**The Narrow-for-Titles Rule.** El ancho 68 es para títulos (display, h2, títulos de caso, de grupo y de artículo). El texto de lectura no se angosta nunca; los rótulos de interfaz pueden ensancharse (106 a 112), no angostarse.

**The Uppercase-Is-Annotation Rule.** La mayúscula espaciada se reserva a lo que anota un dibujo (crédito sobre la roca, nombres del mapa). Los rótulos de interfaz y los encabezados van en caja normal; no hay antetítulos sobre los h2.

**The Tabular Figures Rule.** Fechas, teléfonos, horarios y cifras llevan cifras tabulares y de caja alta (`tabular-nums lining-nums`).

## Layout

Retícula de celda de 24 px: la interlínea del texto y los múltiplos de espaciado salen de ella (secciones de 4 celdas arriba y abajo, 3 en pantallas menores a 900 px; separaciones internas de 1, 1.25, 1.5, 2 y 2.5 celdas). Contenido a 1320 px como máximo, con margen lateral fluido de 16 a 48 px.

Las secciones de dos columnas son asimétricas, nunca mitades: 7/5 (Servicios, Contacto), 5/7 (Mapa, Eventos), 8/4 (Quiénes somos). En Servicios la figura queda fija (`sticky`) mientras se recorre la leyenda. Proyectos usa dos columnas de casos; Artículos, tres; personas, columnas automáticas de 290 px mínimo; clientes, una retícula de 6 columnas con ejes A–F y 1–n como hoja de plano (4 columnas bajo 1100 px, 2 bajo 600 px).

El riel de contacto ocupa 56 px fijos en el borde derecho desde 1024 px (el `body` reserva ese ancho); por debajo pasa a barra inferior de 64 px con rótulos visibles y el `body` reserva ese alto más el área segura. Bajo 900 px todo pasa a una columna, la figura de Servicios sube antes de la leyenda, el menú se pliega y la roca de la portada baja a la mitad inferior con el texto sobre navy limpio. Bajo 600 px la acción principal ocupa todo el ancho.

Cortes usados: 480, 600, 900, 1024 y 1100 px.

## Elevation & Depth

Plano. No hay sombras ni capas elevadas: la profundidad sale del cambio de superficie (navy, papel, hoja), del grano y de líneas finas. Lo que flota sobre el contenido (riel, panel del asistente) se separa con un borde de 1 px (blanco al 12 % sobre navy, navy sobre papel), no con sombra. La única profundidad real es la del bloque diagrama 3D, que es un dibujo, no un recurso de interfaz.

Los degradados existen solo para fundir una imagen o una trama en su superficie: la roca de la portada se funde en el navy hacia la izquierda (hacia arriba en móvil), un velo radial calma la zona del texto y la retícula de Proyectos se desvanece con una máscara. Ningún degradado decora un fondo, un botón o un texto.

### Named Rules
**The Flat Plate Rule.** Las superficies son planas en reposo y en hover. El estado se muestra con color, borde o subrayado, nunca levantando un elemento.

**The Grain Rule.** El grano (mosaico monocromo de 256 px, 7 % de opacidad, `src/assets/texturas/grano.png`, generado por `scripts/build-grain.mjs`) se superpone al color de la superficie con la clase de grano: va en papel y en navy (Servicios, Quiénes somos, Clientes, Artículos, Eventos, Contacto, pie). No va en la hoja limpia (Proyectos, mapa), ni en la portada (ya es roca), ni en la cabecera, ni dentro de tarjetas, fichas o celdas. El color lo pone la superficie; el grano nunca se tiñe ni se sube de opacidad.

## Shapes

Esquinas rectas. El único redondeo es de 2 px, en el botón de acción y en el anillo de foco; el enlace subrayado, las fichas, las celdas, los marcos de imagen y los paneles van a 0. Las formas recurrentes son de plano: líneas de 1 px que no escalan con el dibujo (`vector-effect: non-scaling-stroke`), nodos cuadrados huecos en los extremos de una cota (7 px en la portada; 10 px en el nodo de oficina del mapa y su leyenda), reglas de cabecera de 2 px en navy sobre cada lista (leyenda de Servicios, grupos de personas, artículos, clave del mapa), tramas de muestra (líneas, cruces, puntos, diagonales, uves) como en una carta geológica, retícula punteada de meridianos y paralelos, y curvas de nivel ondulantes con una curva maestra cada tres o cuatro.

Las imágenes van en recuadros rectos con borde de 1 px (Retícula Marcada), proporción 3:2 (16:9 la foto principal de Eventos) y un leve ajuste de saturación y contraste para emparejarlas; los logos de clientes se muestran enteros, sin filtro ni recorte.

## Components

### Buttons
Directos y planos; una sola acción fuerte por bloque.
- **Shape:** esquina casi recta (2 px).
- **Acción principal:** fondo Cyan Acción, texto Navy Profundo, 600, padding 15 × 26 px, con ícono de WhatsApp a la izquierda. Solo para "Solicitar una cotización".
- **Hover / Focus:** el fondo pasa a Cyan Trazo en 160 ms con curva de salida; foco con contorno de 2 px (Cyan Tinta sobre papel, blanco sobre navy) separado 3 px.
- **Enlace de línea (secundario sobre navy):** sin fondo ni padding lateral, texto blanco, subrayado de 1 px en cyan que pasa a blanco en hover ("Ver servicios", "Llamar al …").
- **Enlace con flecha:** texto Navy MC 600, subrayado cyan; en hover el subrayado pasa a navy y la flecha avanza 3 px. Sobre navy, en Cyan Trazo que pasa a blanco.

### Chips
- **Código de norma:** borde de 1 px navy, fondo Hoja, texto Cyan Tinta 12 px 600 (JORC, NI 43-101, S-K 1300).
- **Rótulo de servicio (bloque 3D y flujo):** borde de 1.5 px navy, fondo Cyan Velo, texto navy 13 px 650; activo, fondo navy y texto blanco. Los demás rótulos bajan a 30 % de opacidad mientras uno está activo.

### Cards / Containers
No hay tarjetas con caja: los grupos se abren con una regla de cabecera de 2 px navy y se separan con líneas de 1 px.
- **Ficha de caso (Cliente / Servicio / Alcance):** tabla de dos columnas sobre Hoja, borde de 1 px Retícula Marcada, filas separadas por Retícula, rótulo en Tinta Tenue y dato en Tinta 500, a tamaño Label.
- **Cartela de contacto:** tabla sobre Navy Profundo con borde de 1 px Cyan Trazo; filas separadas por Cyan Trazo al 30 %; rótulo en Niebla, dato en blanco 600.
- **Rótulo de imagen:** "Imagen referencial" sobre navy al 85 %, texto blanco a tamaño Label, en la esquina superior izquierda de la foto. El crédito de la portada ("Imagen ilustrativa") va como anotación en mayúscula abajo a la derecha.
- **Artículo:** regla de 2 px navy arriba, título angosto navy, metadatos al pie (categoría en Cyan Tinta); en hover se subraya el título.
- **Persona:** retrato 4:5 de 96 px (80 px en móvil) con borde de 1 px, nombre navy 650, cargo en Tinta Media, LinkedIn en Cyan Tinta.

### Navigation
- **Cabecera:** franja Navy Portada de 72 px; logo a 40 px (32 px en móvil). Enlaces en Niebla, tamaño Nav; hover a blanco con raya inferior de 1 px Cyan Trazo; página actual en blanco con raya blanca.
- **Móvil (bajo 900 px):** botón "Menú" con borde de 1 px Cyan Trazo; la lista cae bajo la cabecera, a tamaño Body, filas separadas por blanco al 10 %.
- **Pie:** Navy Profundo con grano; columnas 5/2/2/2; enlaces blancos subrayados al 60 %.

### Contact Rail (signature)
La banda de contacto fija del borde derecho, como la banda de raspado de una lámina: Navy MC, 56 px, con el teléfono en vertical arriba (Niebla, ancho 112) y cuatro botones cuadrados de 48 px abajo (WhatsApp en Cyan Acción con texto Navy Profundo; llamada, LinkedIn y asistente transparentes, hover en Cyan Tinta). Cada botón muestra su nombre en una etiqueta Navy Profundo a su izquierda, que aparece deslizándose 4 px en 160 ms. Bajo 1024 px es una barra inferior de 64 px con cuatro columnas y rótulos visibles. El asistente abre un panel no modal sobre Hoja con borde de 1 px navy y cabecera navy, que entra en 240 ms subiendo 8 px.

### Cotas de portada (signature)
Tres cotas verticales en Cyan Trazo de 1 px sobre la roca, con un nodo cuadrado hueco de 7 px en cada extremo y, en dos de ellas, un tramo horizontal. Al cargar se trazan en escalera: la línea se dibuja en 1.1 s (`stroke-dashoffset`, curva de salida) con 0.22 s entre cotas desde 0.35 s; los nodos aparecen en 0.5 s, el de arriba antes que la línea y el de abajo al terminar.

### Mapa de presencia (signature)
Perú y Ecuador dibujados con la misma línea que las cotas: contorno navy de 1.4 px, relleno con trama diagonal navy al 35 %, países vecinos en Retícula Marcada, meridianos y paralelos punteados cada 5° con sus coordenadas, nombres en anotación mayúscula con halo de Hoja, y la oficina de Lima como nodo cuadrado con guía horizontal y rótulo. Con soporte de `animation-timeline: view()`, el contorno se dibuja al entrar en pantalla (de 10 % de entrada a 45 % de cobertura) y la trama y la oficina aparecen después; sin soporte, se ve completo.

### Leyenda de Servicios y bloque 3D (signature)
Cada servicio es una unidad de carta geológica: muestra de 48 × 32 px con su trama en navy sobre Cyan Velo, título, códigos y descripción. Al pasar o enfocar un servicio, la fila se aclara a Hoja y el bloque diagrama (WebGL2, sin librerías, en tonos navy y cyan) resalta dónde ocurre. El bloque oscila ±6° muy despacio (ciclo cercano a un minuto) con un leve seguimiento del puntero, se detiene fuera de pantalla y queda quieto con movimiento reducido, bajo 900 px o con puntero táctil. Sin WebGL2 se muestra el panel de estratos en SVG. Pie de figura: "Bloque diagrama ilustrativo, sin escala."

### Curvas de nivel y estratos
Curvas de nivel generadas en código (anillos ondulantes, curva maestra más gruesa, opacidad que cae hacia afuera) en Tierra, recortadas por el borde de la sección en una esquina. Estratos en líneas de 1 px Cyan (menores al 45 %, maestras en Cyan Trazo, un contacto discontinuo 6/5) en la banda inferior de Contacto, en tres grupos que se mecen entre −3 y +4 px con ciclos de 16, 19 y 23 s alternos.

## Do's and Don'ts

### Do:
- **Do** usar Navy MC (#01395C) tal cual en tinta de títulos y en las superficies de marca; los navy de portada (#002D50) y profundo (#00263F) son solo superficies.
- **Do** reservar el fondo Cyan Acción (#3F9DC8) para la acción de contacto, con texto Navy Profundo (5,1:1).
- **Do** dibujar lo técnico en código, con líneas de 1 px que no escalan, nodos cuadrados huecos y rótulos cortos con guía.
- **Do** abrir cada lista con una regla de 2 px navy y separar sus filas con 1 px Retícula Marcada.
- **Do** poner el grano en papel y navy, y dejar la Hoja limpia para dibujos, fichas y casos.
- **Do** escribir el movimiento como trazado (dibujar una línea, aparecer un nodo) con la curva de salida (`cubic-bezier(0.16, 1, 0.3, 1)`), y apagarlo entero con `prefers-reduced-motion`.
- **Do** rotular toda imagen que no sea foto de MC como "Imagen ilustrativa" o "Imagen referencial".
- **Do** medir el espacio en celdas de 24 px.

### Don't:
- **Don't** usar el marrón tierra fuera de las curvas de nivel: ni texto, ni botones, ni bordes, ni fondos, ni íconos.
- **Don't** usar sombras, elevación en hover ni degradados de adorno; un degradado solo funde una imagen o una trama en su superficie.
- **Don't** redondear más de 2 px ni usar tarjetas con caja y sombra.
- **Don't** poner antetítulos ni rótulos en mayúscula sobre los títulos; la mayúscula espaciada es solo para anotar un dibujo.
- **Don't** angostar el texto de lectura ni usar una segunda familia tipográfica.
- **Don't** usar hologramas, neón, brillos, gráficos o cifras animadas de adorno, grillas de íconos, cascos, maquinaria amarilla ni dorado.
- **Don't** recolorear, recortar, filtrar ni animar los logos de MC ni los de clientes.
- **Don't** usar imágenes generadas que parezcan foto de MC, con personas, logos, texto, maquinaria, tajo o instalaciones.
