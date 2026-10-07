# mc-website

Web de MC Consultores, publicada en [www.mc-consultoria.com](https://www.mc-consultoria.com).
Next.js con exportación estática (cada página sale como HTML propio) y GitHub Pages.

## Cómo trabajar

Requisitos: Node 24 (`.nvmrc`) y pnpm 11.28.0. Con Node 24, `corepack enable` deja disponible la
versión de pnpm que fija `package.json`.

```bash
pnpm install
pnpm dev        # http://localhost:5185
pnpm lint
pnpm build      # genera out/ y valida rutas, 404, firma de correo y SEO
pnpm preview    # sirve out/ en http://localhost:5186
pnpm images <archivo o carpeta> --destino src/assets/eventos   # optimiza fotos nuevas
pnpm images --revisar                                          # lista imágenes pesadas
```

- Con un agente (Claude Code, Codex): sus instrucciones están en `AGENTS.md`. Después de clonar,
  una vez: `pnpm run setup` (enlaza las skills de `.agents/skills`, con versión fijada en
  `skills-lock.json`) y `pnpm dlx impeccable@4.1.0 install --providers=claude --scope=project`
  (instala Impeccable 4.5.0 con sus subagentes y su hook en `.claude/`, que no se versiona).
- Se trabaja en `develop`. Cada push a `main` publica la web; `develop` y los PR solo compilan.
- pnpm instala solo versiones con al menos 7 días publicadas y no ejecuta scripts de dependencias
  (`pnpm-workspace.yaml`), por seguridad.

## Dónde está cada cosa

```
src/app/         rutas: una carpeta por página (page.tsx), layout y 404
src/components/  layout/ (header y pie) y sections/ (secciones de cada página)
src/content/     datos: proyectos, personas, clientes, servicios, noticias, artículos…
src/lib/         site.ts (contacto), routes.ts (páginas y menú), metadata.ts (SEO)
src/assets/      imágenes por tipo: clientes/, personas/, eventos/, fotos/, marca/, ia/
public/          archivos servidos tal cual desde el dominio
```

- **Para agregar un proyecto, una persona o un cliente**: sumar una entrada en `src/content/` y su
  imagen en la carpeta de `src/assets/` que corresponde. Las páginas no se tocan.
- **Fotos nuevas** (JPG, PNG o HEIC del celular): pasarlas por `pnpm images`, que las deja en WebP,
  a 2000 px como máximo, con nombre en kebab-case y sin metadatos (incluido el GPS). Opciones al
  inicio de `scripts/images.mjs`.
- **Contacto** (teléfono, WhatsApp, correo, horario): solo en `src/lib/site.ts`.
- **Una página nueva**: su carpeta en `src/app/` y su línea en `src/lib/routes.ts` (con
  `inSitemap: true` entra sola al `sitemap.xml`; los artículos entran desde `src/content/articles.ts`).
- **SEO**: título y descripción de cada página con `pageMetadata()` (`src/lib/metadata.ts`), datos
  estructurados en `src/lib/structuredData.ts`, `sitemap.xml` y `robots.txt` en `src/app/`. El build
  valida que estén completos.
- **Imagen para compartir** (`public/compartir.png`, la que se ve al pegar un enlace): se rehace con
  `node scripts/build-og.mjs` (usa Chrome y red para la fuente) si cambian el lema o el logo.
- **Search Console**: se verifica por prefijo de URL (`https://www.mc-consultoria.com/`) con la
  etiqueta meta. El código va en `searchConsole` de `src/lib/site.ts` y la etiqueta aparece sola;
  la verificación funciona cuando ese cambio ya está publicado desde `main`.
- Lo que falta (textos, fotos, datos) no se muestra: queda `active: false` o un comentario
  `// PENDIENTE(…)`.

## Modo revisión

Lo que falta (textos por definir, cifras por confirmar, borradores, revisiones técnicas) no sale en
la web publicada. Para verlo marcado en la página:

- En desarrollo: `pnpm dev` y abrir `http://localhost:5185/?revision`.
- Para mostrarlo sin servidor de desarrollo: `pnpm build:revision`, `pnpm preview` y abrir
  `http://localhost:5186/?revision`. Ese `out/` no se publica; el build normal (`pnpm build`) falla
  si encuentra un pendiente.
- En el código, lo pendiente va con `Pending`, `ReviewFlag` o `ReviewOnly`
  (`src/components/ui/Review.tsx`) y un comentario `// PENDIENTE(quién): …`.

## No mover

`public/correo.png`, `public/mclogocorreo.png`, `public/telefono.png` y `public/web.png`: las
firmas de correo del equipo las cargan desde el dominio. No se mueven, renombran ni borran; el
build falla si no llegan intactas al sitio.
