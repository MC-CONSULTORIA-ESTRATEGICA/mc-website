import { Icon } from "@/components/ui/Icon";
import { SectionHead } from "@/components/ui/SectionHead";
import { StrataLines } from "@/components/ui/StrataLines";
import { inicio } from "@/content/inicio";
import { site, WHATSAPP_QUOTE } from "@/lib/site";

export function Contact() {
  const { contact } = site;
  return (
    <section id="contacto" className="sec sec-navy grain sec-contact on-navy" aria-labelledby="contacto-title">
      <StrataLines variant="band" animate />
      <div className="page contact-grid">
        <div className="contact-main">
          <SectionHead id="contacto-title" title={inicio.contact.title} lead={<p>{inicio.contact.lead}</p>} />
          <div className="contact-actions">
            <a className="c-btn c-btn-action" href={WHATSAPP_QUOTE} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={20} />
              Solicitar una cotización
            </a>
            <a className="c-btn c-btn-line" href={contact.phone.href}>
              <Icon name="phone" size={18} />
              <span>
                Llamar al <span className="num">{contact.phone.display}</span>
              </span>
            </a>
          </div>
        </div>
        <dl className="contact-cartela">
          <div>
            <dt>Correo</dt>
            <dd>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </dd>
          </div>
          <div>
            <dt>Teléfono</dt>
            <dd>
              <a href={contact.phone.href} className="num">
                {contact.phone.display}
              </a>
            </dd>
          </div>
          <div>
            <dt>LinkedIn</dt>
            <dd>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                MC Consultoría Estratégica
              </a>
            </dd>
          </div>
          <div>
            <dt>Horario</dt>
            <dd>
              {contact.hours.map((slot) => (
                <span key={slot.days} className="hours">
                  {slot.days} <span className="num">{slot.time}</span>
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt>Oficina</dt>
            <dd>{contact.city}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
