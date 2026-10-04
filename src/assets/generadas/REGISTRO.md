# Registro de imágenes generadas

Regla (`PRODUCT.md`): solo texturas, fondos, materia o paisaje sin personas; nunca personas,
eventos, trabajo presentado como de MC, ni el logo o el nombre de MC. En la página llevan el
rótulo "Imagen ilustrativa" o "Imagen referencial". El prompt de cada una está también en su
`.json` (sidecar de `impeccable embed-prompt`).

Herramienta: Codex CLI, generación de imágenes, con
`codex exec -s read-only --disable memories --skip-git-repo-check` desde el scratchpad de la
sesión. Vienen de la propuesta v3 (`mc-website-v3`), sin recortes ni retoques.

## roca-portada.webp (portada del Inicio, "Imagen ilustrativa")
- Fecha: 2026-09-28. Original de 1916×821 px; convertido con `pnpm images` (WebP calidad 82).
- Prompt: "Generate an image: Top-down macro view of a diagonal band of cracked rock and dry
  earth crossing the frame from bottom-left to top-right, deep navy blue mineral tones with
  veins of muted earthy brown and a few pale cyan crystals, the rest of the frame a plain deep
  navy blue background (#01395C) with a subtle fine grain, fine detail, no text, no people, no
  machinery, widest landscape format."
- Revisada: sin texto, marcas de agua, personas ni maquinaria. El fondo sale #002D50.
- Aprobación de Salim: 28 sep 2026 (portada del Afiche).
- Revisión técnica: pendiente (Claudio ya no está en MC; falta quién la haga).

## muestras-laboratorio.webp (caso "Automatización y analítica…", "Imagen referencial")
- Fecha: 2026-09-27. Original de 1536×1024 px (`cwebp -q 82`).
- Prompt: en `muestras-laboratorio.webp.json`.
- Aprobación de Salim: 27 sep 2026; confirmada para el Inicio el 4 oct 2026.
- Revisión técnica: pendiente (los trozos de testigo se ven cortos y poco naturales).

## afloramiento-plegado.webp (caso "Geología estructural", "Imagen referencial")
- Fecha: 2026-09-27. Original de 1536×1024 px (`cwebp -q 82`).
- Prompt: en `afloramiento-plegado.webp.json`.
- Aprobación de Salim: 27 sep 2026; confirmada para el Inicio el 4 oct 2026.
- Revisión técnica: pendiente (coherencia de la falla con el pliegue).
