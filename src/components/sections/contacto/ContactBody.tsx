import { Icon } from "@/components/ui/Icon";
import { Pending, ReviewFlag } from "@/components/ui/Review";
import { SectionHead } from "@/components/ui/SectionHead";
import { assistantQuestions } from "@/content/assistant";
import { site, WHATSAPP_QUOTE, whatsappLink } from "@/lib/site";

/** Acción principal; debajo, preguntas frecuentes a la izquierda y horario y oficina a la derecha. */
export function ContactBody() {
  const { contact } = site;
  return (
    <section className="sec sec-paper grain contact-body" aria-label="Datos de contacto y preguntas frecuentes">
      <div className="page">
        <div className="contact-body-actions">
          <a className="c-btn c-btn-action" href={WHATSAPP_QUOTE} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={20} />
            Solicitar una cotización
            <span className="visually-hidden"> (abre en otra pestaña)</span>
          </a>
        </div>

        <div className="contact-body-grid">
          <div className="contact-body-main">
            <SectionHead id="preguntas-title" title="Preguntas frecuentes" />
            <ul className="faq">
              {assistantQuestions.map((item) => (
                <li key={item.question}>
                  <h3>{item.question}</h3>
                  <p>
                    {item.answer}{" "}
                    {/* PENDIENTE(Marcos): si hay cursos abiertos a profesionales */}
                    {item.question.includes("capacitaciones") ? <ReviewFlag>Por confirmar: cursos abiertos</ReviewFlag> : null}
                  </p>
                  <a
                    className="link-arrow"
                    href={item.question.includes("cotización") ? WHATSAPP_QUOTE : whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Escribir por WhatsApp
                    <Icon name="arrow-right" size={16} />
                    <span className="visually-hidden"> (abre en otra pestaña)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <aside className="contact-body-aside" aria-label="Horario y oficina">
            <dl className="origin contact-data">
              <div className="origin-row">
                <dt>Horario</dt>
                <dd>
                  {contact.hours.map((slot) => (
                    <span key={slot.days} className="contact-data-hours">
                      {slot.days} <span className="num">{slot.time}</span>
                    </span>
                  ))}
                </dd>
              </div>
              <div className="origin-row">
                <dt>Oficina</dt>
                <dd>{contact.city}</dd>
              </div>
              <div className="origin-row">
                <dt>Razón social</dt>
                <dd>{site.legalName}</dd>
              </div>
            </dl>
            {/* PENDIENTE(Marcos): dato de contacto de Camila Algarate, que pasa a ventas */}
            <Pending what="contacto de Camila Algarate">en ventas (Marcos).</Pending>
          </aside>
        </div>
      </div>
    </section>
  );
}
