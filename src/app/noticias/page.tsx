import { Contact } from "@/components/sections/Contact";
import { EventLog } from "@/components/sections/noticias/EventLog";
import { PageHead } from "@/components/ui/PageHead";
import { PageIndex } from "@/components/ui/PageIndex";
import { newsLead, recentNews } from "@/content/news";
import { pageMetadata } from "@/lib/metadata";

import "@/components/sections/noticias/noticias.css";

export const metadata = pageMetadata({
  title: "Noticias y eventos",
  description:
    "Participación de MC Consultores en PERUMIN, universidades y eventos del sector minero.",
  path: "/noticias/",
});

export default function NewsPage() {
  return (
    <>
      <PageHead title="Noticias" lead={newsLead}>
        <PageIndex
          label="Eventos en esta página"
          items={recentNews().map((event) => ({
            href: `#evento-${event.id}`,
            label: event.shortTitle,
            meta: (
              <time dateTime={event.dateTime} className="num">
                {event.date}
              </time>
            ),
          }))}
        />
      </PageHead>
      <EventLog />
      <Contact />
    </>
  );
}
