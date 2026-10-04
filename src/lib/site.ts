// Fuente única de los datos de MC que se repiten en el sitio (contacto, nombre, URL).
// Antes estaban copiados en el pie, Contacto y cada botón flotante.

const phoneDigits = "51932432031";

export const site = {
  name: "MC Consultores",
  legalName: "MC Consultoría Estratégica SAC",
  url: "https://www.mc-consultoria.com",
  /** Mensaje del hero del sitio publicado. */
  tagline: "Optimizar decisiones en el ciclo minero",
  contact: {
    phone: { display: "+51 932 432 031", href: `tel:+${phoneDigits}` },
    whatsapp: {
      display: "+51 932 432 031",
      href: `https://wa.me/${phoneDigits}`,
      /** Mensajes precargados (rótulos de enlace, no afirmaciones sobre MC). */
      messages: {
        quote: "Hola, quisiera solicitar una cotización.",
        info: "Hola, quiero más información sobre sus servicios.",
      },
    },
    email: "ventas@mc-consultoria.com",
    linkedin: "https://www.linkedin.com/company/mc-consultoria-estrategica/",
    city: "Lima, Perú",
    hours: [
      { days: "Lunes a viernes", time: "8:00–18:00" },
      { days: "Sábado", time: "8:00–13:00" },
    ],
    // PENDIENTE(Marcos): dato de contacto de Camila Algarate, que pasa a ventas (30 sep).
  },
} as const;

/** Enlace de WhatsApp con un mensaje precargado. */
export function whatsappLink(message: string = site.contact.whatsapp.messages.info): string {
  return `${site.contact.whatsapp.href}?text=${encodeURIComponent(message)}`;
}

/** Acción principal del sitio: pedir una cotización por WhatsApp. */
export const WHATSAPP_QUOTE = whatsappLink(site.contact.whatsapp.messages.quote);
