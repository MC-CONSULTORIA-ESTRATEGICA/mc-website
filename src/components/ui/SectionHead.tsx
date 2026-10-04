import type { ReactNode } from "react";

/** Encabezado de sección: título (h2) y bajada opcional. */
export function SectionHead({ id, title, lead }: { id: string; title: string; lead?: ReactNode }) {
  return (
    <header className="sec-head">
      <h2 id={id} className="sec-title">
        {title}
      </h2>
      {lead ? <div className="sec-lead">{lead}</div> : null}
    </header>
  );
}
