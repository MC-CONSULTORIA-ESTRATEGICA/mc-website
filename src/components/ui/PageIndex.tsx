import type { CSSProperties, ReactNode } from "react";

import "./PageIndex.css";

export type PageIndexItem = { href: string; label: string; icon?: ReactNode };

/**
 * Cota-índice de la cabecera interior (va como `children` de PageHead): un nodo por destino de la
 * página, con enlace. `icon` es opcional (en Servicios, la trama de cada servicio).
 */
export function PageIndex({ items, label }: { items: PageIndexItem[]; label: string }) {
  return (
    <nav className="page-index" aria-label={label}>
      <ol style={{ "--n": items.length } as CSSProperties}>
        {items.map((item, i) => (
          <li key={item.href} style={{ "--i": i } as CSSProperties}>
            <a href={item.href}>
              <span className="page-index-node" aria-hidden="true" />
              {item.icon}
              <span className="page-index-label">{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
