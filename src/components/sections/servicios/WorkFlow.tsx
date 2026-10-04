import type { CSSProperties } from "react";

import { SectionHead } from "@/components/ui/SectionHead";
import { workProcess } from "@/content/services";

/** Proceso de trabajo en cuatro pasos, sobre una línea con nodos que se traza al entrar en pantalla. */
export function WorkFlow() {
  return (
    <section className="sec sec-sheet svc-flow" aria-labelledby="proceso-title">
      <div className="page">
        <SectionHead id="proceso-title" title="Proceso de trabajo" />
        <ol className="flow">
          {workProcess.map((step, i) => (
            <li key={step.title} style={{ "--i": i } as CSSProperties}>
              <span className="flow-node" aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
