# Instrucciones para agentes

Web de MC Consultores (www.mc-consultoria.com): Next.js con exportación estática en GitHub Pages.

- **Contexto del producto** (público, propósito, voz, qué se puede afirmar y qué no):
  [`PRODUCT.md`](PRODUCT.md). Leerlo antes de escribir textos o diseñar.
- **Cómo correr el proyecto y dónde está cada cosa**: [`README.md`](README.md).
- Responder y escribir en español. La web habla de usted.

## Antes de empezar

- Después de clonar: `pnpm install` y `pnpm run setup` (enlaza las skills de `.agents/skills`
  en `.claude/skills`, donde las busca Claude Code; versiones en `skills-lock.json`).
- Impeccable no se versiona: cada persona la instala una vez con
  `pnpm dlx impeccable@4.1.0 install --providers=claude --scope=project` (Impeccable 4.5.0, con sus
  subagentes de revisión y documentación y su hook, en `.claude/`). Para actualizarla,
  `pnpm dlx impeccable@4.1.0 update`, y anotar la versión nueva aquí.
- Usar solo pnpm: npm queda bloqueado por `devEngines`. Las reglas de seguridad de
  `pnpm-workspace.yaml` (antigüedad mínima de 7 días, sin scripts de dependencias) no se relajan
  para salir de un apuro: si una versión no se instala, esperar o elegir una anterior.

## Ramas y publicación

- Se trabaja en `develop`. Cada push a `main` publica la web en producción; no se commitea directo
  a `main`.
- Antes de dar algo por terminado: `pnpm lint` y `pnpm build` sin errores. El build incluye
  `scripts/check-export.mjs`, que valida rutas, 404, la firma de correo y el SEO (sitemap, robots,
  títulos, canonical, Open Graph y JSON-LD).

## Commits

Conventional Commits: tipo en inglés (`feat`, `fix`, `docs`, `chore`, `refactor`, `ci`…), scope
opcional y descripción en español. Ej.: `feat(inicio): agrega la portada`.

## Arquitectura

- `src/app/`: solo rutas. Cada `page.tsx` compone secciones y exporta su metadata con
  `pageMetadata()` de `src/lib/metadata.ts`; no define datos ni lógica.
- `src/content/`: los datos, tipados, uno por entidad. Crecer (un proyecto, una persona, un
  cliente) es agregar una entrada aquí, sin tocar páginas.
- `src/lib/site.ts`: única fuente de los datos de contacto. `src/lib/routes.ts`: única lista de
  páginas (menú, chequeo del build y sitemap). Una página nueva se registra ahí.
- Componentes de servidor por defecto; `"use client"` solo en piezas interactivas. Nada de
  `window` durante el render: la exportación prerenderiza todo.
- Importar con el alias `@/` (`@/content/projects`), no con rutas relativas largas.
- Componentes: `layout/` (cabecera, pie, riel), `ui/` (piezas que usan varias páginas, cada una
  con su CSS al lado) y `sections/` (cierres compartidos como `Contact`, y una carpeta por página
  con el nombre de su ruta: `sections/servicios/`).
- Nombres: el código va en inglés (componentes, tipos, funciones, archivos, clases CSS y valores
  internos como `pattern: "lines"`); en español va lo atado a la URL o al contenido (rutas, carpetas
  de sección por página, slugs, textos, comentarios y las carpetas de `src/assets/`).
- La exportación estática no admite redirects, rewrites, headers, rutas de API, Server Actions
  ni el optimizador de imágenes de Next.

## Contenido

- No inventar afirmaciones sobre MC, cifras, clientes, testimonios ni textos de servicios. Lo que
  falta no se muestra: se marca `active: false` o con `// PENDIENTE(quién): qué falta`.
- Lo que falta y conviene ver marcado en la página va con `Pending`, `ReviewFlag` o `ReviewOnly`
  (`src/components/ui/Review.tsx`): solo existe en `pnpm dev` y en `pnpm build:revision`, y se ve
  con `?revision` (detalle en el README). Son componentes de servidor: si un componente de cliente
  necesita uno, lo recibe ya armado como prop.
- No promocionar software (Lythia, XPro Safe, MinXData): Marcos pidió no difundirlos todavía.

## Imágenes

- Personas, equipo, eventos o trabajo de MC: solo fotos reales. La IA solo para texturas, fondos o
  materia sin personas, y nunca con el logo o el nombre de MC. Toda imagen generada se registra
  con prompt, fecha y archivo. Detalle en `PRODUCT.md` (Evidence on Hand).
- `src/assets/ia/` son imágenes de IA del sitio anterior que salen con el rediseño: no agregar
  más ahí.
- Fotos nuevas: `pnpm images <archivo> --destino src/assets/<tipo>` (WebP, 2000 px como máximo,
  sin metadatos). Los logos de MC no se recolorean, recortan, redibujan ni animan.

## No tocar

`public/correo.png`, `public/mclogocorreo.png`, `public/telefono.png` y `public/web.png`: las
firmas de correo del equipo las cargan desde el dominio. No se mueven, renombran, convierten ni
borran.

## Diseño con Impeccable

- Las decisiones visuales van en `DESIGN.md`, que se escribe al final desde lo construido. Antes
  de diseñar una página, su contrato de dirección con `impeccable surface-brief write` (queda en
  `.impeccable/surfaces/`).
- El hook de diseño está activado para el proyecto (`.impeccable/config.json`); el instalador lo
  deja registrado en `.claude/settings.local.json`.
- Al cerrar una página, la revisión de acabado y `DESIGN.md` los hacen los subagentes
  `impeccable-finish-reviewer` e `impeccable-documenter` que trae el instalador.
- `animate` (`.agents/skills/animate`) para decidir y construir el movimiento; respetar siempre
  `prefers-reduced-motion`.
