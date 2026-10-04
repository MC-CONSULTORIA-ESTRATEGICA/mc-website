// Curvas de nivel en líneas finas, generadas en código (determinísticas, sin imágenes).
// Son el único lugar del marrón tierra junto con las ondas.

type ContoursProps = {
  className?: string;
  /** Cantidad de anillos. */
  rings?: number;
  /** Radio del primer anillo y separación entre anillos, en unidades del viewBox. */
  radius?: number;
  step?: number;
  /** Achatamiento: ancho / alto de cada anillo. */
  stretch?: number;
  /** Cada cuántos anillos va una curva maestra (más gruesa). 0: ninguna. */
  indexEvery?: number;
  /** Desfase de las ondulaciones, para que dos dibujos no se vean iguales. */
  phase?: number;
  viewBox: { width: number; height: number };
  /** Centro de los anillos en el viewBox. */
  center: { x: number; y: number };
};

export function contourPaths({ rings = 8, radius = 30, step = 22, stretch = 1.2, phase = 0 }: Partial<ContoursProps>) {
  return Array.from({ length: rings }, (_, k) => {
    const r = radius + k * step;
    const points: string[] = [];
    for (let a = 0; a <= 360; a += 8) {
      const t = (a * Math.PI) / 180;
      const wobble = 1 + 0.1 * Math.sin(2 * t + k * 0.5 + phase) + 0.05 * Math.sin(4 * t + 1 + k + phase);
      points.push(`${(r * stretch * wobble * Math.cos(t)).toFixed(1)} ${(r * wobble * Math.sin(t)).toFixed(1)}`);
    }
    return `M${points.join(" L")} Z`;
  });
}

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
