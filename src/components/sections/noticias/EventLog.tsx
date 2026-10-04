import Image from "next/image";

import { ReviewFlag } from "@/components/ui/Review";
import { recentNews } from "@/content/news";

/** Registro de eventos, del más reciente al más antiguo: fecha, lugar, resumen y fotos. */
export function EventLog() {
  return (
    <section className="sec sec-paper grain event-log" aria-label="Eventos">
      <div className="page">
        <ol className="event-list">
          {recentNews().map((event) => {
            // PENDIENTE(Camila): meses de AusIMM y ProExplo; mientras, solo el año.
            const noMonth = event.dateTime.length === 4;
            const [first, ...rest] = event.images;
            return (
              <li key={event.id} id={`evento-${event.id}`} className="event">
                <div className="event-when">
                  <time className="event-date num" dateTime={event.dateTime}>
                    {event.date}
                  </time>
                  {noMonth ? <ReviewFlag>Mes por confirmar</ReviewFlag> : null}
                  <span className="event-meta">
                    {event.type} · {event.city}
                  </span>
                </div>
                <div className="event-body">
                  <h2 className="event-title">{event.title}</h2>
                  <p className="event-summary">{event.summary}</p>
                  {event.reviewNote ? <ReviewFlag>{event.reviewNote}</ReviewFlag> : null}
                </div>
                <div className="event-photos">
                  <figure className={`event-photo is-main${event.poster ? " is-poster" : ""}`}>
                    <Image
                      src={first}
                      alt={event.poster ? `Afiche: ${event.title}` : `${event.title}, foto 1 de ${event.images.length}`}
                      sizes="(max-width: 899px) 100vw, 640px"
                    />
                  </figure>
                  {rest.map((image, i) => (
                    <figure key={image.src} className="event-photo">
                      <Image
                        src={image}
                        alt={`${event.title}, foto ${i + 2} de ${event.images.length}`}
                        sizes="(max-width: 899px) 33vw, 210px"
                      />
                    </figure>
                  ))}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
