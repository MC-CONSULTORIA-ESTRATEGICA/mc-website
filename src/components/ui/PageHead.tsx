import type { ReactNode } from "react";

import "./PageHead.css";

/**
 * Cabecera de las páginas interiores: banda navy de portada (sin roca) con el h1 angosto y la
 * bajada. `children` va al pie de la banda: la cota propia de cada página (en Servicios, el índice).
 */
export function PageHead({ title, lead, children }: { title: string; lead?: ReactNode; children?: ReactNode }) {
  return (
    <header className="page-head on-navy">
      <div className="page">
        <h1 className="page-head-title">{title}</h1>
        {lead ? <p className="page-head-lead">{lead}</p> : null}
        {children ? <div className="page-head-annex">{children}</div> : null}
      </div>
    </header>
  );
}
