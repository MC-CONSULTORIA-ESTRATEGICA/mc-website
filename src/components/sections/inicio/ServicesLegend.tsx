"use client";

// Leyenda de servicios (como las unidades de una carta geológica) y el bloque 3D: al pasar por un
// servicio, el bloque resalta dónde ocurre.
import Link from "next/link";
import { useState, type ReactNode } from "react";

import { Icon } from "@/components/ui/Icon";
import type { Service, ServicePattern } from "@/content/services";

import { BlockFigure } from "./BlockFigure";

const PATTERNS: Record<ServicePattern, ReactNode> = {
  lineas: <path d="M0 3h12M0 9h12" />,
  cruces: <path d="M3 1v4M1 3h4M9 7v4M7 9h4" />,
  puntos: (
    <>
      <circle cx="3" cy="3" r="0.9" />
      <circle cx="9" cy="9" r="0.9" />
      <circle cx="9" cy="3" r="0.6" />
    </>
  ),
  diagonales: <path d="M-1 5l6-6M-1 13l14-14M7 13l6-6" />,
  uves: <path d="M1 4l2 3 2-3M7 10l2 3 2-3" />,
};

function Swatch({ pattern }: { pattern: ServicePattern }) {
  const id = `trama-${pattern}`;
  return (
    <svg className="swatch" viewBox="0 0 48 32" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={id} width="12" height="12" patternUnits="userSpaceOnUse">
          <g className="swatch-ink">{PATTERNS[pattern]}</g>
        </pattern>
      </defs>
      <rect x="0.5" y="0.5" width="47" height="31" className="swatch-bg" />
      <rect x="0.5" y="0.5" width="47" height="31" fill={`url(#${id})`} className="swatch-frame" />
    </svg>
  );
}

type LegendService = Pick<Service, "slug" | "title" | "description" | "pattern" | "codes">;

type ServicesLegendProps = {
  services: LegendService[];
  /** Pendiente del catálogo de cursos, armado en el servidor (null en producción). */
  coursesPending?: ReactNode;
  /** Marca de revisión técnica del bloque, armada en el servidor (null en producción). */
  figureFlag?: ReactNode;
};

export function ServicesLegend({ services, coursesPending, figureFlag }: ServicesLegendProps) {
  const [active, setActive] = useState<ServicePattern | null>(null);
  return (
    <div className="services-grid">
      <div className="services-legend">
        <ul className="legend-list" onMouseLeave={() => setActive(null)}>
          {services.map((service) => (
            <li
              key={service.slug}
              id={`servicio-${service.slug}`}
              className={service.pattern && active === service.pattern ? "is-on" : undefined}
              onMouseEnter={() => setActive(service.pattern ?? null)}
              onFocus={() => setActive(service.pattern ?? null)}
              onBlur={() => setActive(null)}
            >
              {service.pattern ? <Swatch pattern={service.pattern} /> : <span />}
              <div className="lg-body">
                <h3 className="lg-title">
                  {service.title}
                  {service.codes?.map((code) => (
                    <span key={code} className="lg-code">
                      {code}
                    </span>
                  ))}
                </h3>
                <p className="lg-desc">{service.description}</p>
                {service.slug === "capacitacion" ? (
                  <p className="lg-extra">
                    <a className="link-arrow" href="#caso-curso-sk-1300-southern">
                      Caso: Curso S-K 1300 para Southern Peru Copper Corporation
                      <Icon name="arrow-right" size={16} />
                    </a>
                    {coursesPending}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
        <Link className="link-arrow services-link" href="/servicios/">
          Ver la página de Servicios
          <Icon name="arrow-right" size={16} />
        </Link>
      </div>
      <div className="services-figure">
        <BlockFigure active={active} reviewFlag={figureFlag} />
      </div>
    </div>
  );
}
