// Curvas de nivel en líneas finas, generadas en código (determinísticas, sin imágenes).
// Son el único lugar del marrón tierra junto con las ondas.

import "./Contours.css";

import { type ContourShape, contourPaths } from "./contourPaths";

export { contourPaths };

type ContoursProps = ContourShape & {
  className?: string;
  /** Cada cuántos anillos va una curva maestra (más gruesa). 0: ninguna. */
  indexEvery?: number;
  viewBox: { width: number; height: number };
  /** Centro de los anillos en el viewBox. */
  center: { x: number; y: number };
};

export function Contours({ className, indexEvery = 4, viewBox, center, ...shape }: ContoursProps) {
  const paths = contourPaths(shape);
  return (
    <svg
      className={className}
      viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
      aria-hidden="true"
      focusable="false"
    >
      <g transform={`translate(${center.x} ${center.y})`}>
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            className={indexEvery > 0 && i % indexEvery === 0 ? "contour contour-index" : "contour"}
            style={{ opacity: 0.96 - (i / paths.length) * 0.42 }}
          />
        ))}
      </g>
    </svg>
  );
}
