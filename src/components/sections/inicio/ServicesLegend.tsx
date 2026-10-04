"use client";

// Leyenda de servicios (como las unidades de una carta geológica) y el bloque 3D: al pasar por un
// servicio, el bloque resalta dónde ocurre.
import Link from "next/link";
import { useState, type ReactNode } from "react";

import { Icon } from "@/components/ui/Icon";
import { Swatch } from "@/components/ui/Swatch";
import type { Service, ServicePattern } from "@/content/services";

import { BlockFigure } from "./BlockFigure";

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
                    <span key={code} className="code-tag">
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
