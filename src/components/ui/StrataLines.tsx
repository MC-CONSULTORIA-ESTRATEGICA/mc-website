// Estratos en líneas finas, generados en código (no copiados de ninguna imagen).
// "band": paquete de capas de borde a borde, para el pie de una superficie navy.
// "panel": recuadro, respaldo del bloque 3D cuando no hay WebGL2.
import type { CSSProperties } from "react";

import "./StrataLines.css";

type Variant = "band" | "panel";

const CONFIG = {
  band: { w: 1440, h: 180, lines: 24, base: 26, amp: 12, stretch: true },
  panel: { w: 600, h: 480, lines: 26, base: 150, amp: 18, stretch: false },
};

function strataPaths(variant: Variant) {
  const c = CONFIG[variant];
  const paths: { d: string; tone: "minor" | "major" | "contact"; group: number }[] = [];
  for (let i = 0; i < c.lines; i++) {
    let d = "";
    for (let x = -20; x <= c.w + 20; x += 16) {
      const t = x / c.w;
      // capas que engrosan y adelgazan, con un pliegue suave que recorre todo el ancho
      const thick = 5.5 + 2.5 * Math.sin(2 * Math.PI * (t * 1.1 + i * 0.045));
      const fold =
        c.amp * Math.sin(2 * Math.PI * (t * 1.35 + i * 0.012)) + c.amp * 0.5 * Math.sin(2 * Math.PI * (t * 3.2 + 0.4));
      const y = c.base + i * thick + fold;
      d += `${x === -20 ? "M" : "L"}${x} ${y.toFixed(1)} `;
    }
    const tone = i === 9 ? "contact" : i % 6 === 0 ? "major" : "minor";
    paths.push({ d: d.trim(), tone, group: i % 3 });
  }
  return paths;
}

export function StrataLines({ variant, animate }: { variant: Variant; animate: boolean }) {
  const c = CONFIG[variant];
  const paths = strataPaths(variant);
  return (
    <svg
      className={`strata strata-${variant}${animate ? " is-animated" : ""}`}
      viewBox={`0 0 ${c.w} ${c.h}`}
      preserveAspectRatio={c.stretch ? "none" : "xMidYMid meet"}
      aria-hidden="true"
      focusable="false"
    >
      {[0, 1, 2].map((g) => (
        <g key={g} className={`strata-g strata-g${g}`}>
          {paths.map((p, i) =>
            p.group === g ? (
              <path
                key={i}
                d={p.d}
                pathLength={p.tone === "contact" ? undefined : 1}
                className={`strata-line strata-${p.tone}`}
                style={{ "--i": i } as CSSProperties}
              />
            ) : null,
          )}
        </g>
      ))}
    </svg>
  );
}
