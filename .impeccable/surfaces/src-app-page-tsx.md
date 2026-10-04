---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Inicio (src/app/page.tsx)

## Alcance y modo

Portada del sitio, escritorio y 375 px. Modo **Persuade**: el visitante decide si MC es la
consultora con la que quiere hablar y contacta a una persona.

## Visitante, tarea y prueba

- Gerente o jefe técnico de una minera (geología, planeamiento, operaciones) que llega por
  buscador o enlace y decide en minutos si MC es seria.
- Acción: contacto directo (WhatsApp para cotización, llamada, correo), siempre a un paso
  (riel de contacto lateral; en móvil, barra inferior).
- Prueba disponible: 4 casos reales con cliente, servicio y alcance; 11 clientes; equipo y
  asociados con nombre, cargo y LinkedIn; eventos con fotos; 3 artículos técnicos.
- Restricciones: ninguna afirmación nueva; lo pendiente se oculta (visible solo con
  `?revision`); imágenes de IA solo como "Imagen ilustrativa/referencial"; firma de correo
  intacta; exportación estática.

## Decisiones del usuario (4 oct)

Equipo completo en el Inicio (equipo arriba, asociados abajo, solo activos). Geología
estructural visible. Imágenes referenciales del Afiche por ahora. Mapa Perú y Ecuador como
sección propia entre Clientes y Eventos. Movimiento: trazado sutil. Menú con Proyectos.

## Pendiente

Orden equipo/asociados (Marcos). Validación técnica de las imágenes referenciales y del bloque
3D (Claudio ya no está). Textos de relaves, relleno y agua. Testimonios, certificaciones,
cifras, misión y visión.

## Direction contract

THESIS: El sitio como un afiche técnico impreso de una consultora geológica: roca real recortada
sobre navy, anotada como un plano de campo. Rechaza la landing de consultora genérica (hero con
foto de cascos, grilla de íconos, cifras animadas).

OWN-WORLD: Navy manda (#01395C inmutable, con #002D50 en portada y cabecera y #00263F en Eventos y
pie), con grano de navy; papel cálido con grano en Servicios, Quiénes somos, Clientes y Artículos;
hoja sin grano en Proyectos y en el mapa. Títulos en Archivo angosta (wdth 68), texto en
Archivo normal. Líneas finas de 1 px, nodos cuadrados de 7 px, etiquetas en mayúscula espaciada.
Marrón tierra (#6e4a2f, #8b5e3c, #9a6b47, #b08462) solo en curvas de nivel y reglas cortas; las
ondas de Contacto van en cyan. Bordes
rectos, sin sombras ni degradados decorativos.

STORY: Entiende qué hace MC (decisiones en el ciclo minero), lo cree por los casos con cliente
nombrado, las personas reales y los clientes, y escribe por WhatsApp o llama sin buscar.

FIRST VIEWPORT: Navy a sangre; la franja de roca cruza en diagonal desde el centro hacia la derecha
y se funde en el navy a la izquierda. Arriba a la izquierda, el h1 "Optimizar decisiones en el
ciclo minero" en Archivo angosta blanca, a unos 96 px, en tres líneas; debajo, una línea de
contexto y la acción primaria "Solicitar una cotización" (WhatsApp, cyan) con "Ver servicios"
como enlace subrayado. Sobre la roca, tres cotas verticales con nodos que se trazan al cargar.
"Imagen ilustrativa" abajo a la derecha. Riel de contacto fijo a la derecha.

FORM: Afiche (variante 4 de la propuesta v3, Figma 2WjOpYVypwycMiNaT4pbFt, frame 26:2), fijada por
el usuario; sin concept-seed y sin seed key. Firma: el trazado de las cotas de la portada y el
mapa de Perú y Ecuador dibujado con la misma línea. Código guiado (no hay generación de imágenes).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
