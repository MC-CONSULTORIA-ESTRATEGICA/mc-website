import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  // Salida de Next y carpetas ocultas de herramientas locales (incluye .next/).
  globalIgnores(["out/**", "next-env.d.ts", ".*/**"]),
]);
