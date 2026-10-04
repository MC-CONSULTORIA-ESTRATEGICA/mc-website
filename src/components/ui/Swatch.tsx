// Muestra de trama de un servicio, como las unidades de la leyenda de una carta geológica.
import type { ReactNode } from "react";

import type { ServicePattern } from "@/content/services";

import "./Swatch.css";

const PATTERNS: Record<ServicePattern, ReactNode> = {
  lines: <path d="M0 3h12M0 9h12" />,
  crosses: <path d="M3 1v4M1 3h4M9 7v4M7 9h4" />,
  dots: (
    <>
      <circle cx="3" cy="3" r="0.9" />
      <circle cx="9" cy="9" r="0.9" />
      <circle cx="9" cy="3" r="0.6" />
    </>
  ),
  diagonals: <path d="M-1 5l6-6M-1 13l14-14M7 13l6-6" />,
  chevrons: <path d="M1 4l2 3 2-3M7 10l2 3 2-3" />,
};

/**
 * `width` y `height` son las del dibujo: una muestra más grande muestra más trama con la misma línea.
 * `idPrefix` distingue el <pattern> cuando la misma trama aparece más de una vez en la página.
 */
export function Swatch({
  pattern,
  width = 48,
  height = 32,
  idPrefix = "trama",
  className = "swatch",
}: {
  pattern: ServicePattern;
  width?: number;
  height?: number;
  idPrefix?: string;
  className?: string;
}) {
  const id = `${idPrefix}-${pattern}`;
  return (
    <svg className={className} viewBox={`0 0 ${width} ${height}`} aria-hidden="true" focusable="false">
      <defs>
        <pattern id={id} width="12" height="12" patternUnits="userSpaceOnUse">
          <g className="swatch-ink">{PATTERNS[pattern]}</g>
        </pattern>
      </defs>
      <rect x="0.5" y="0.5" width={width - 1} height={height - 1} className="swatch-bg" />
      <rect x="0.5" y="0.5" width={width - 1} height={height - 1} fill={`url(#${id})`} className="swatch-frame" />
    </svg>
  );
}
