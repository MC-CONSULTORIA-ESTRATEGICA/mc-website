"use client";

// Bloque diagrama 3D de Servicios: relieve con curvas de nivel y, en la cara de corte, un cuerpo
// mineralizado atravesado por tres sondajes, con su modelo de bloques (WebGL2, sin librerías).
// Cada servicio con lugar físico lleva su nombre corto; "Reconciliación" va en el flujo de abajo.
import { useEffect, useRef, useState, type ReactNode } from "react";

import { StrataLines } from "@/components/ui/StrataLines";
import type { ServicePattern } from "@/content/services";

import { mountBlockDiagram, type AnchorKey, type Anchors, type BlockApi } from "./blockDiagram";
import "./BlockFigure.css";

// Qué resalta el bloque con cada servicio de la leyenda
const FOCUS: Record<ServicePattern, number> = { lines: 0, crosses: 4, dots: 1, diagonals: 2, chevrons: 3 };
const FLOW = ["Modelo", "Plan", "Mina", "Planta", "Despacho"];

type Label = {
  id: string;
  text: string;
  at: AnchorKey;
  offset: [number, number];
  kind: "service" | "on-block" | "off-block";
  leader?: boolean;
  service?: ServicePattern;
};

const LABELS: Label[] = [
  { id: "superficie", text: "Superficie", at: "superficie", offset: [0, -26], kind: "off-block" },
  { id: "ddh1", text: "DDH-01", at: "ddh1", offset: [30, -78], kind: "off-block", leader: true },
  { id: "ddh2", text: "DDH-02", at: "ddh2", offset: [-10, -58], kind: "off-block", leader: true },
  { id: "ddh3", text: "DDH-03", at: "ddh3", offset: [-50, -38], kind: "off-block", leader: true },
  { id: "roca", text: "Roca caja", at: "rocaCaja", offset: [0, 0], kind: "on-block" },
  { id: "envolvente", text: "Envolvente de ley", at: "envolvente", offset: [104, -30], kind: "on-block", leader: true },
  { id: "qaqc", text: "QA-QC", at: "qaqc", offset: [-110, -40], kind: "service", leader: true, service: "dots" },
  { id: "recursos", text: "Recursos y reservas", at: "recursos", offset: [-120, 60], kind: "service", leader: true, service: "diagonals" },
];

export function BlockFigure({ active, reviewFlag }: { active: ServicePattern | null; reviewFlag?: ReactNode }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRefs = useRef<Record<string, HTMLSpanElement | null>>({});
  const leaderRefs = useRef<Record<string, SVGLineElement | null>>({});
  const apiRef = useRef<BlockApi | null>(null);
  // Sin WebGL2 se muestran estratos en SVG. Se decide en el navegador: el HTML exportado lleva el lienzo.
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage) return;
    // Quieto con movimiento reducido o en pantallas chicas o táctiles
    const quiet = window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 899.98px), (pointer: coarse)").matches;
    const place = (anchors: Anchors) => {
      const width = stage.clientWidth;
      const height = stage.clientHeight;
      const k = Math.min(1, width / 600);
      for (const label of LABELS) {
        const el = labelRefs.current[label.id];
        if (!el) continue;
        const target = anchors[label.at];
        const x = Math.min(Math.max(target[0] + label.offset[0] * k, 30), width - 30);
        const y = Math.min(Math.max(target[1] + label.offset[1] * k, 10), height - 10);
        el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -50%)`;
        const line = leaderRefs.current[label.id];
        if (line) {
          line.setAttribute("x1", x.toFixed(1));
          line.setAttribute("y1", y.toFixed(1));
          line.setAttribute("x2", target[0].toFixed(1));
          line.setAttribute("y2", target[1].toFixed(1));
        }
      }
    };
    try {
      apiRef.current = mountBlockDiagram(canvas, { animate: !quiet, onProject: place });
    } catch (error) {
      console.warn("Bloque diagrama no disponible", error);
    }
    if (!apiRef.current) {
      const id = requestAnimationFrame(() => setFallback(true));
      return () => cancelAnimationFrame(id);
    }
    return () => {
      apiRef.current?.destroy();
      apiRef.current = null;
    };
  }, []);

  useEffect(() => {
    apiRef.current?.setFocus(active ? FOCUS[active] : 0);
  }, [active]);

  const state = (pattern?: ServicePattern) => {
    if (!pattern || active === null) return "";
    const on = active === pattern || (active === "chevrons" && (pattern === "dots" || pattern === "diagonals"));
    return on ? " is-on" : " is-off";
  };

  return (
    <figure className="block-figure">
      <div ref={stageRef} className="bf-stage">
        {fallback ? (
          <StrataLines variant="panel" animate={false} />
        ) : (
          <>
            <canvas
              ref={canvasRef}
              className="bf-canvas"
              role="img"
              aria-label="Bloque diagrama: relieve con curvas de nivel y, en la cara de corte, un cuerpo mineralizado atravesado por tres sondajes (DDH-01 a DDH-03), con su modelo de bloques."
            />
            <svg className="bf-leaders" aria-hidden="true" focusable="false">
              {LABELS.filter((label) => label.leader).map((label) => (
                <line
                  key={label.id}
                  ref={(el) => {
                    leaderRefs.current[label.id] = el;
                  }}
                  className={`bf-leader bf-leader-${label.kind}${state(label.service)}`}
                />
              ))}
            </svg>
            <div className="bf-labels" aria-hidden="true">
              {LABELS.map((label) => (
                <span
                  key={label.id}
                  ref={(el) => {
                    labelRefs.current[label.id] = el;
                  }}
                  className={`bf-label bf-${label.kind}${state(label.service)}`}
                >
                  {label.text}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
      <div className={`bf-flow${state("lines")}`}>
        <span className="bf-flow-name">Reconciliación</span>
        <ol aria-label="Del modelo al despacho">
          {FLOW.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
      <figcaption>
        Bloque diagrama ilustrativo, sin escala.
        {reviewFlag}
      </figcaption>
    </figure>
  );
}
