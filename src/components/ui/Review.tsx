// Modo revisión: lo pendiente (textos por definir, cifras por confirmar, borradores, revisiones
// técnicas) solo existe en desarrollo y en el build de revisión, y aun ahí solo se muestra al abrir
// la página con ?revision. En el build de producción estos componentes no generan nada: ni texto
// visible ni datos en el HTML. Ver "Modo revisión" en el README.
//
// Son componentes de servidor. Un componente de cliente que necesite un pendiente lo recibe ya
// armado como prop (ReactNode) desde su padre de servidor: así el texto no queda en el JS.
import type { ReactNode } from "react";

import { ReviewGate } from "./ReviewGate";

const REVIEW_ENABLED = process.env.REVIEW_MODE === "1";

export function ReviewOnly({ children }: { children: ReactNode }) {
  return REVIEW_ENABLED ? <ReviewGate>{children}</ReviewGate> : null;
}

/** Espacio para contenido que falta y no se inventa. */
export function Pending({ what, children }: { what: string; children?: ReactNode }) {
  return (
    <ReviewOnly>
      <p className="pending">
        <span className="pending-title">Por definir: {what}</span>
        {children ? <span>{children}</span> : null}
      </p>
    </ReviewOnly>
  );
}

/** Marca breve junto a un texto o una pieza: "Borrador", "Por confirmar", "Pendiente: …". */
export function ReviewFlag({ children }: { children: ReactNode }) {
  return (
    <ReviewOnly>
      <span className="review-flag">{children}</span>
    </ReviewOnly>
  );
}
