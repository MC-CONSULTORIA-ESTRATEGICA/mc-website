import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/ui/Icon";
import { Pending, ReviewFlag } from "@/components/ui/Review";
import { getClient } from "@/content/clients";
import { projects } from "@/content/projects";
import { services } from "@/content/services";

/** Láminas de caso: imagen · título, memoria, ficha y enlace al servicio, sobre el registro reglado. */
export function CaseLog() {
  return (
    <section className="sec sec-sheet case-log" aria-label="Casos">
      <div className="sec-gridband sec-gridband--top" aria-hidden="true" />
      <div className="page">
        <ol className="log">
          {projects.map((project) => {
            const client = project.client ? getClient(project.client) : null;
            const service = project.serviceSlug ? services.find((item) => item.slug === project.serviceSlug) : null;
            const fields = [
              ...(client ? [{ label: "Cliente", value: client.legalName ?? client.name }] : []),
              ...(project.service ? [{ label: "Servicio", value: project.service }] : []),
              ...(project.scope ? [{ label: "Alcance", value: project.scope }] : []),
            ];
            return (
              <li key={project.slug} id={`caso-${project.slug}`} className="log-entry case-sheet">
                <figure className="case-sheet-media">
                  <Image src={project.image.src} alt={project.image.alt} sizes="(max-width: 899px) 100vw, 640px" />
                  {project.image.kind === "referencial" ? (
                    <figcaption className="img-label case-sheet-ref">Imagen referencial</figcaption>
                  ) : null}
                </figure>
                <div className="case-sheet-body">
                  <h2 className="case-sheet-title">{project.title}</h2>
                  {project.toConfirm ? <ReviewFlag>Por confirmar: que sea un proyecto real</ReviewFlag> : null}
                  <p className="case-sheet-text">{project.description}</p>
                  {fields.length > 0 ? (
                    <dl className="origin">
                      {fields.map((field) => (
                        <div key={field.label} className="origin-row">
                          <dt>{field.label}</dt>
                          <dd>{field.value}</dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                  {service ? (
                    <Link
                      className="link-arrow"
                      href={`/servicios/#servicio-${service.slug}`}
                      aria-label={`Ver el servicio: ${service.title}`}
                    >
                      Ver el servicio
                      <Icon name="arrow-right" size={16} />
                    </Link>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
        {/* PENDIENTE(Sofía o Camila): lista de los ~13 proyectos con cliente, servicio y alcance */}
        <Pending what="lista completa de proyectos">unos 13, con cliente, servicio y alcance (Sofía o Camila).</Pending>
      </div>
    </section>
  );
}
