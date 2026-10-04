import { About } from "@/components/sections/inicio/About";
import { Articles } from "@/components/sections/inicio/Articles";
import { Clients } from "@/components/sections/inicio/Clients";
import { Contact } from "@/components/sections/inicio/Contact";
import { Events } from "@/components/sections/inicio/Events";
import { Hero } from "@/components/sections/inicio/Hero";
import { Presence } from "@/components/sections/inicio/Presence";
import { Projects } from "@/components/sections/inicio/Projects";
import { Services } from "@/components/sections/inicio/Services";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

import "@/components/sections/inicio/inicio.css";

export const metadata = {
  ...pageMetadata({
    title: site.tagline,
    description:
      "Consultoría minera: reconciliación, bases de datos QA-QC, estimación de recursos y reservas, y capacitación en códigos mineros.",
    path: "/",
  }),
  // La plantilla de título del layout no se aplica a la página de su mismo segmento.
  title: { absolute: `${site.name} | ${site.tagline}` },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Clients />
      <Presence />
      <Events />
      <Articles />
      <Contact />
    </>
  );
}
