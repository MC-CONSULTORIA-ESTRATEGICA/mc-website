// Build de revisión: igual que el normal, pero con los pendientes compilados (visibles con
// ?revision). Sirve para mostrarle a Sofía o a Marcos lo que falta, con `pnpm preview`.
// No se publica: el workflow corre el build normal. Funciona igual en macOS, Linux y Windows.
import { spawnSync } from "node:child_process";

const env = { ...process.env, REVIEW: "1" };
const run = (command, args) => {
  const result = spawnSync(command, args, { stdio: "inherit", env, shell: process.platform === "win32" });
  if (result.status !== 0) process.exit(result.status ?? 1);
};

run("pnpm", ["exec", "next", "build"]);
run("node", ["scripts/check-export.mjs"]);
console.log("\nBuild de revisión en out/: abre http://localhost:5186/?revision con `pnpm preview`. No lo publiques.");
