import Image from "next/image";
import type { ReactNode } from "react";

import { ReviewFlag } from "@/components/ui/Review";
import { getClient } from "@/content/clients";
import type { Project } from "@/content/projects";

import "./CaseCard.css";

/** Ficha de caso: imagen, título, texto y la tabla Cliente / Servicio / Alcance que haya. */
export function CaseCard({ project, text = project.excerpt }: { project: Project; text?: ReactNode }) {
  const client = project.client ? getClient(project.client) : null;
  const fields = [
    ...(client ? [{ label: "Cliente", value: client.legalName ?? client.name }] : []),
    ...(project.service ? [{ label: "Servicio", value: project.service }] : []),
    ...(project.scope ? [{ label: "Alcance", value: project.scope }] : []),
  ];
  return (
    <article id={`caso-${project.slug}`} className="case">
      <figure className="case-media">
        <Image src={project.image.src} alt={project.image.alt} sizes="(max-width: 899px) 100vw, 640px" />
        {project.image.kind === "referencial" ? (
          <figcaption className="img-label case-ref">Imagen referencial</figcaption>
        ) : null}
      </figure>
      <h3>{project.title}</h3>
      <p>{text}</p>
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
      {project.toConfirm ? <ReviewFlag>Por confirmar</ReviewFlag> : null}
    </article>
  );
}
