import type { CSSProperties, ReactNode } from "react";

import "./PageIndex.css";

export type PageIndexItem = {
  href: string;
  label: ReactNode;
  icon?: ReactNode;
  /**
   * Dato corto sobre el rótulo (en Noticias, la fecha). `null` reserva la fila vacía, para que el
   * rótulo quede alineado con los demás (en Proyectos, un caso sin cliente nombrado).
   */
  meta?: ReactNode | null;
  /** Abre en otra pestaña (WhatsApp, LinkedIn). */
  external?: boolean;
};

/**
 * Cota-índice de la cabecera interior (va como `children` de PageHead): un nodo por destino de la
 * página, con enlace. `icon` es opcional (en Servicios, la trama de cada servicio); `meta` también
 * (en Noticias, la fecha de cada evento).
 */
export function PageIndex({
  items,
  label,
  variant,
}: {
  items: PageIndexItem[];
  label: string;
  /** `channels` (Contacto): cada destino es un canal; dato entero, ícono en línea y blanco táctil de 44 px. */
  variant?: "channels";
}) {
  return (
    <nav className={variant ? `page-index page-index--${variant}` : "page-index"} aria-label={label}>
      <ol style={{ "--n": items.length } as CSSProperties}>
        {items.map((item, i) => (
          <li key={item.href} style={{ "--i": i } as CSSProperties}>
            <a href={item.href} {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
              <span className="page-index-node" aria-hidden="true" />
              {item.icon}
              {item.meta !== undefined ? (
                <span className="page-index-text">
                  {item.meta === null ? (
                    <span className="page-index-meta is-empty" aria-hidden="true" />
                  ) : (
                    <span className="page-index-meta">{item.meta}</span>
                  )}
                  <span className="page-index-label">{item.label}</span>
                </span>
              ) : (
                <span className="page-index-label">{item.label}</span>
              )}
              {item.external ? <span className="visually-hidden"> (abre en otra pestaña)</span> : null}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
