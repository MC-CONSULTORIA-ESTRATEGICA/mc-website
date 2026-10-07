// Trazado de las curvas de nivel, aparte del componente para que también lo use
// scripts/build-og.mjs (Node importa .ts, no .tsx).

export type ContourShape = {
  /** Cantidad de anillos. */
  rings?: number;
  /** Radio del primer anillo y separación entre anillos, en unidades del viewBox. */
  radius?: number;
  step?: number;
  /** Achatamiento: ancho / alto de cada anillo. */
  stretch?: number;
  /** Desfase de las ondulaciones, para que dos dibujos no se vean iguales. */
  phase?: number;
};

export function contourPaths({ rings = 8, radius = 30, step = 22, stretch = 1.2, phase = 0 }: ContourShape) {
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
