# Product

<!-- impeccable:product-schema 1 -->

Web de MC Consultores (mc-consultoria.com). Rediseño completo del sitio publicado, tomando como
base la variante "Afiche" de la propuesta v3 (Figma "MC web v3 — Inicio", frame `26:2`). Este
archivo recoge el fondo del producto; las decisiones visuales van en `DESIGN.md`.

## Platform

web

## Stack

Next.js con exportación estática (`output: 'export'`), publicado en GitHub Pages desde
`main` del repo `MC-CONSULTORIA-ESTRATEGICA/mc-website`, con el dominio
`www.mc-consultoria.com`. Elegido por Salim y aprobado por Sofía el 3 oct 2026 para tener HTML
por página (SEO). Sin servidor: nada que dependa de SSR, middleware, rutas de API ni
optimización de imágenes en tiempo de ejecución. npm, como el repo actual. Pasar a Vercel es una
mejora posible que decide Marcos (costo y DNS).

Se trabaja en `develop`; `main` publica en producción.

## Users

- **Primario, el que manda en cada decisión**: gerentes y jefes técnicos de empresas mineras
  (geología, planeamiento, operaciones) que evalúan contratar una consultora. Incluye a quien
  contrata una capacitación para su equipo (el curso S-K 1300 fue para el equipo de Exploraciones
  de Southern). Buscan rigor técnico, experiencia comprobable y a quién llamar.
- **Secundario, sin guiar decisiones**: organizadores de eventos y universidades, que llegan por
  eventos y noticias; lectores técnicos que llegan por los artículos desde un buscador.
- **Abierto**: profesionales que buscan cursos por su cuenta. No se sabe si MC da cursos
  abiertos; pendiente de Marcos.
- **No es público de la web**: consultores que buscan asociarse.

## Product Purpose

Que un responsable técnico de una minera encuentre a MC (buscador o enlace), entienda en poco
tiempo qué hace, crea que lo hace con rigor y sepa cómo contactar a una persona. El éxito es un
contacto directo: WhatsApp, llamada o correo.

Alcance: todo el sitio. Inicio, Nosotros, Servicios, Proyectos (nueva), Blog, Noticias y
Contacto, en escritorio y móvil.

**SEO es parte del encargo**: cada página responde 200 con su propio HTML, título y descripción;
`sitemap.xml`, `robots.txt` y una página 404 real. Al 3 oct 2026 toda ruta interna del sitio
publicado respondía 404 y redirigía al inicio. La cuenta de Search Console y Analytics depende de
Marcos.

## Positioning

**Provisional, a confirmar con Marcos:** experiencia de gran minería (clientes y consultores
asociados senior) en una consultora pequeña que atiende directo, y que une el criterio geológico
con el trabajo sobre los datos (bases de datos geológicas, QA-QC, reconciliación). Presencia en
**Perú y Ecuador** (Marcos, 30 sep; se resalta).

- Respaldo disponible pero **no publicable** hasta que Marcos lo apruebe: su trayectoria (más de
  30 años, 11 en Datamine).
- México: Sofía mencionó un servicio en camino. **No se publica** hasta que esté confirmado.

## Operating Context

- MC Consultoría Estratégica SAC ("MC Consultores" en la web), consultora minera de Lima,
  fundada en 2024. Equipo fijo pequeño y consultores asociados senior por especialidad
  (geología, geofísica, metalurgia, geotecnia, planeamiento, relaves).
- Servicios del sitio actual (`src/pages/landing/ServicesPage.tsx`):
  1. Reconciliación minera (coherencia plan de mina y producción real, cadena mina-planta).
  2. Consultoría en el ciclo minero.
  3. Base de datos QA-QC. **QA-QC es control de calidad de ensayes de laboratorio y de datos
     geológicos, no de software.**
  4. Estimación de recursos y reservas bajo JORC y NI 43-101.
  5. Capacitación en códigos mineros y control de calidad; incluye el curso S-K 1300 (caso
     Southern).
- **Servicios que Marcos pidió reforzar** (30 sep), porque hoy busca clientes ahí: manejo de
  canchas de relaves, relleno para mina y tratamiento de agua. Se pueden **nombrar** (lo dijo
  Marcos); su descripción, alcance y casos **no se inventan**: pendientes de Marcos.
- Sofía (30 sep) quiere que Servicios muestre el **flujo de trabajo** de la propuesta.
- Terminología del dominio que la web usa con precisión: reconciliación, ley, tonelaje,
  recuperación, cadena mina-planta, QA-QC, ensayes, modelo geológico, geoestadística, códigos de
  reporte (JORC, NI 43-101, S-K 1300), relaves, relleno.
- Contacto real: WhatsApp y teléfono +51 932 432 031, `ventas@mc-consultoria.com`, LinkedIn
  `linkedin.com/company/mc-consultoria-estrategica`, Lima, Perú. Horario: lunes a viernes
  8:00–18:00, sábado 8:00–13:00. **Camila Algarate** pasa a ventas y debe figurar en contacto
  (Marcos, 30 sep); su dato de contacto está pendiente.
- El asistente de MC es un menú de **preguntas fijas sin IA** que termina en WhatsApp
  (`src/components/bot.tsx`).

## Capabilities and Constraints

- **Imágenes de la firma de correo** en `public/` (`correo.png`, `mclogocorreo.png`,
  `telefono.png`, `web.png`): los correos del equipo las cargan desde el dominio. No se mueven,
  renombran ni borran.
- **Inicio**:
  - Clientes en carrusel; las dos primeras filas, las más reconocidas: Southern, Buenaventura y
    Minsur (Sofía y Marcos). Debe poder crecer.
  - Proyectos: los 4 más relevantes, con enlace a la página de Proyectos.
  - Mapa o mención de presencia: **Perú y Ecuador, solo el país**, sin proyecto ni cliente en
    Ecuador por ahora; listo para sumar detalle.
  - Eventos: los tres más recientes, con "ver todo" hacia Noticias.
  - Botones flotantes: llamada, LinkedIn, WhatsApp y el asistente. Se pueden rediseñar o agrupar
    sin perder ninguna función.
- **Proyectos** (página nueva): sale con los 4 casos actuales y lista para sumar más. Sofía dice
  que son unos 13; la lista (cliente, servicio, alcance) se pide a Sofía o Camila.
- **Personas** (Marcos, 30 sep): salen Claudio Moncada (se fue a Volcan), Arnold Chávez y Astrid
  Flores. Entran un grupo de cuatro consultores de relaves y Percy Surca; nombres, cargos y fotos
  pendientes. Orden equipo/asociados sin decidir: Sofía prefiere equipo arriba; cuando se hizo la
  web, Marcos quiso a los consultores arriba. Preguntar a Marcos.
- **Texto nuevo**: Claude puede redactar rótulos, títulos y frases de enlace, pero **ninguna
  afirmación nueva sobre MC**; las afirmaciones salen del sitio actual o de lo dicho por Marcos.
- **Lo que falta no se muestra en producción**: nada de "Por definir" visible. Se omite la pieza
  y queda `// PENDIENTE(Marcos): …` en el código.
- **Menú**: Inicio, Nosotros, Servicios, Proyectos, Blog, Noticias, Contacto.
- **No se promociona software**: nada de Lythia, XPro Safe, MinXData ni "software para minería".
  Marcos pidió no difundirlos hasta que pasen las pruebas con cliente.
- **Pendiente de Marcos, no se inventa**: misión y visión; certificaciones o partners;
  testimonios; cifras (las del sitio actual se usan solo si se confirman: 10 especialidades,
  15 miembros, 3 alianzas, +10 proyectos); catálogo de cursos; textos de relaves, relleno y agua;
  posicionamiento y trayectoria de Marcos; cuenta de Search Console y Analytics.
- **Pendiente de Camila**: los meses de AusIMM y ProExplo (2026); fotos reales de proyectos.

## Brand Commitments

- **Inmutable**: los logos actuales (`src/assets/logo_mc.webp` horizontal,
  `src/assets/logo_white.webp` vertical blanco, `public/logo.webp` vertical navy). Sin recolorear,
  recortar, redibujar, separar símbolo y texto, aplicar filtros ni animarlos.
- **Inmutable**: navy `#01395C`. "El azul es lo que nos identifica" (Marcos, 30 sep).
- **Dirección aprobada**: la variante Afiche, que le gustó a Marcos; Sofía la aprobó como base el
  3 oct.
- **Más tecnológica, con medida** (Sofía, 30 sep; Salim, 3 oct): la tecnología se muestra como
  rigor (geología y datos dibujados en código, con movimiento), sobre todo en la portada y en
  algunas imágenes, sin llegar a neón, hologramas ni dashboards de adorno. Abierto a ajustes según
  lo que diga Marcos.
- **Movimiento** (Sofía): secciones que no se sientan estáticas, sin perder seriedad.
- **Voz**: español; técnica sin jerga innecesaria; sobria; cercana sin ser informal. **De
  usted**, con construcciones impersonales donde se pueda ("Solicitar una cotización").
- Mensaje actual del hero: "Optimizar decisiones en el ciclo minero".
- **Anti-referencias**, de mayor a menor riesgo:
  1. Tech o SaaS exagerado: hologramas, neón, dashboards y "datos" decorativos; roza el software
     que no se promociona.
  2. Consultora genérica: grillas de íconos, adjetivos y fotos que servirían para cualquier rubro.
  3. Cliché minero: cascos, maquinaria amarilla, dorado.
  4. Solemne y fría: tan "seria" que parezca un banco y se pierda la cercanía.

## Evidence on Hand

Todo en este repo.

- **Casos** (`src/pages/landing/HomePage.tsx`): curso S-K 1300 para Southern Peru Copper
  Corporation (Perú, Chile y Argentina); reconciliación minera para Compañía Minera Condestable;
  automatización y analítica de base de datos geológica para Minera Titán del Perú; geología
  estructural (mapeo y modelamiento 3D, sin cliente nombrado; **por confirmar** que sea un
  proyecto real).
- **Personas** (`HomePage.tsx`, con nombre, cargo y LinkedIn):
  - Equipo: Marcos Calderon, Sofia Quispe, Salim Ramirez y Camila Algarate.
  - Asociados: Armando Simón, Adalberto Rivadeneira, Cecilia Ildefonso, Luis Maldonado y Juan
    Rondinel.
  - Fotos: `mc1` Marcos, `mc2` Armando, `mc4` Cecilia, `team5` Adalberto, `team6` Luis, `team7`
    Juan, `team9` Sofía, `team12` Salim, `team13` Camila. Retratos desparejos (tamaños desde
    179 px, fondos y recortes distintos).
- **Eventos** (`src/data/news.ts`): PERUMIN 37 (sep 2025); CONTIMIN en la Universidad
  Continental (nov 2025); aniversario de la Facultad de Geología, Geofísica y Minas de la UNSA
  (dic 2025); Centrum PUCP Business Consulting Club (feb 2026); AusIMM y ProExplo (2026, sin
  mes).
- **Artículos técnicos** (`src/data/articles.ts`): reconciliación minera (mar 2026), QA/QC en
  bases de datos geológicas (ene 2026), estimación bajo NI 43-101 (nov 2025).
- **Logos de clientes** (`src/assets/empresa1`–`11.webp`): 1 Southern Copper, 2 Compañía Minera
  Condestable, 3 Minera Titán del Perú, 4 Korimallko, 5 INGEMMET, 6 Yura, 7 Buenaventura, 8 Minera
  OREX, 9 Minsur, 10 Yanaquihua, 11 Colorado Mining. Sin transparencia (Minsur sobre cuadro azul).
  INGEMMET es un instituto del Estado y Yura no es minera: la sección no se titula como si todos
  fueran "empresas mineras".
- **Fotos reales**: solo personas y eventos. **No hay foto real de trabajo técnico.** Lo que el
  sitio actual muestra de eso es generado con IA (`video3.mp4` con marca de agua de Veo,
  `section3`, `servicio1`–`5`, `service-1`–`3`, `project-3`, `geologia_estructural`) y sale.
- **Regla de imágenes** (Salim, 27 sep):
  - Personas, equipo, eventos o trabajo de MC: **solo fotos reales**.
  - IA solo para lo que no parezca foto de MC: texturas, fondos, materia (roca, testigos) o
    paisaje sin personas. Nunca el logo o el nombre de MC.
  - Esquemas técnicos en código (SVG o WebGL), no con IA.
  - Imágenes referenciales junto a un caso sin foto: sin personas, logos, texto, maquinaria, tajo
    ni instalaciones; rótulo "Imagen referencial" visible; temporales.
  - Toda imagen generada se registra con prompt, fecha y archivo.
- **Ausencias que no se rellenan**: testimonios, certificaciones, partners, misión y visión,
  catálogo de cursos, textos de relaves, relleno y agua, datos de los asociados nuevos, proyectos
  más allá de los 4.

## Product Principles

1. **Evidencia antes que adjetivos.** Cada afirmación se apoya en un caso, un código, una persona
   o un evento real. Lo que falta no se rellena: se omite hasta tenerlo.
2. **Siempre a un paso de una persona.** El contacto directo (WhatsApp, llamada, correo) está
   disponible desde cualquier punto sin buscarlo.
3. **Rigor técnico legible.** El lenguaje del dominio se usa con precisión para un lector
   técnico, sin jerga de relleno ni promesas genéricas.
4. **Pequeña y senior, sin aparentar tamaño.** Se muestran las personas reales y su
   especialidad; no se simula una escala que MC no tiene.
5. **Crecer sin rehacer.** Proyectos, cursos, testimonios, asociados y fotos nuevas entran como
   datos, sin rediseñar páginas.

## Accessibility & Inclusion

- Contraste WCAG AA como mínimo.
- Respetar `prefers-reduced-motion`; el sitio se ve y funciona bien sin animaciones.
- Revisión en 375 px y en escritorio.
- Contenido en español (`lang="es"`).
