import type { ReactNode } from "react";

import "./PageFacts.css";

/** Ficha de datos en línea al pie de la cabecera interior, cuando la página no tiene índice (un artículo). */
export function PageFacts({ facts }: { facts: { label: string; value: ReactNode }[] }) {
  return (
    <dl className="page-facts">
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt>{fact.label}</dt>
          <dd>{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
