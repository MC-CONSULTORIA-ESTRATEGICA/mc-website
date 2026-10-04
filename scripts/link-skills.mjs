// Enlaza las skills de .agents/skills en .claude/skills, que es donde Claude Code las busca
// (Codex lee .agents/skills directamente). Los enlaces no se commitean: se regeneran con
// `pnpm setup` después de clonar o al agregar una skill.
import { lstatSync, mkdirSync, readdirSync, symlinkSync, unlinkSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = join(root, ".agents", "skills");
const target = join(root, ".claude", "skills");

// En Windows una junction no pide permisos de administrador, pero exige ruta absoluta.
const isWindows = process.platform === "win32";

const skills = readdirSync(source, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

mkdirSync(target, { recursive: true });

// Quitar enlaces de skills que ya no existen.
for (const entry of readdirSync(target, { withFileTypes: true })) {
  if (entry.isSymbolicLink() && !skills.includes(entry.name)) {
    unlinkSync(join(target, entry.name));
  }
}

for (const skill of skills) {
  const link = join(target, skill);
  const existing = lstatSync(link, { throwIfNoEntry: false });

  if (existing && !existing.isSymbolicLink()) {
    console.warn(`  ! ${relative(root, link)} existe y no es un enlace; lo dejo como está`);
    continue;
  }
  if (existing) unlinkSync(link);

  const skillDir = join(source, skill);
  if (isWindows) symlinkSync(skillDir, link, "junction");
  else symlinkSync(relative(target, skillDir), link, "dir");
}

console.log(`  ${skills.length} skills enlazadas en ${relative(root, target)}/`);
