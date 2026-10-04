# Procedencia y licencias de las skills

Las skills de este directorio se redistribuyen con el repositorio bajo sus licencias originales.
Ninguna incluye el archivo de licencia dentro de su carpeta; el texto completo está en el
repositorio de origen. La versión exacta de cada una está en `skills-lock.json` (instaladas con
`pnpm dlx skills@1.7.0 add <origen> --skill <nombre> --agent codex -y`).

| Skill     | Autor         | Origen                                                        | Licencia |
| --------- | ------------- | ------------------------------------------------------------- | -------- |
| `animate` | Emil Kowalski | [emilkowalski/skills](https://github.com/emilkowalski/skills) | MIT      |

Impeccable (Paul Bakaus, Apache-2.0, [pbakaus/impeccable](https://github.com/pbakaus/impeccable)) no
se versiona: la instala cada persona con su instalador (ver `AGENTS.md`). Al agregar o quitar una
skill, actualizar esta tabla y correr `pnpm run setup`.
