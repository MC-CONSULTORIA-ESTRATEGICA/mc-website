import { Icon } from "@/components/ui/Icon";
import { Pending } from "@/components/ui/Review";
import { Swatch } from "@/components/ui/Swatch";
import { getClient } from "@/content/clients";
import { caseHref, projects } from "@/content/projects";
import { activeServices, courses, namedOnlyServices } from "@/content/services";
import { site, whatsappLink } from "@/lib/site";

/** La leyenda completa: una unidad por servicio, con su trama, sus códigos y el caso si existe. */
export function ServiceUnits() {
  return (
    <div className="sec sec-paper grain svc-units">
      <div className="page">
        <ol className="svc-list">
          {activeServices.map((service) => {
            const cases = projects.filter((project) => project.serviceSlug === service.slug);
            const hasSheet = Boolean(service.codes?.length) || cases.length > 0;
            return (
              <li key={service.slug} id={`servicio-${service.slug}`} className="svc-unit">
                {service.pattern ? (
                  <Swatch pattern={service.pattern} width={96} height={64} idPrefix="unidad" className="swatch svc-swatch" />
                ) : (
                  <span />
                )}
                <div className="svc-body">
                  <h2 className="svc-title">{service.title}</h2>
                  <p className="svc-desc">{service.description}</p>
                  {/* PENDIENTE(Marcos): catálogo de cursos y si hay cursos abiertos a profesionales */}
                  {service.slug === "capacitacion" && courses.length === 0 ? (
                    <Pending what="catálogo de cursos">y si hay cursos abiertos a profesionales.</Pending>
                  ) : null}
                </div>
                {hasSheet ? (
                  <dl className="origin svc-sheet">
                    {service.codes?.length ? (
                      <div className="origin-row">
                        <dt>Códigos</dt>
                        <dd className="svc-codes">
                          {service.codes.map((code) => (
                            <span key={code} className="code-tag">
                              {code}
                            </span>
                          ))}
                        </dd>
                      </div>
                    ) : null}
                    {cases.map((project) => {
                      const client = project.client ? getClient(project.client) : null;
                      return (
                        <div key={project.slug} className="origin-row">
                          <dt>Caso</dt>
                          <dd>
                            <a className="svc-case" href={caseHref(project.slug)}>
                              {project.title}
                            </a>
                            {client ? <span className="svc-case-client">{client.legalName ?? client.name}</span> : null}
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                ) : null}
              </li>
            );
          })}
        </ol>
        {namedOnlyServices.length > 0 ? (
          <div className="svc-also">
            <p>
              <span className="svc-also-label">También</span>{" "}
              {namedOnlyServices.map((service) => service.title).join(" · ")}
            </p>
            <a className="link-arrow" href={whatsappLink(site.contact.whatsapp.messages.tailings)} target="_blank" rel="noopener noreferrer">
              Consultar por WhatsApp
              <Icon name="arrow-right" size={16} />
            </a>
          </div>
        ) : null}
        {/* PENDIENTE(Marcos): textos de relaves, relleno y tratamiento de agua */}
        <Pending what="relaves, relleno y tratamiento de agua">descripción, alcance y casos.</Pending>
      </div>
    </div>
  );
}
