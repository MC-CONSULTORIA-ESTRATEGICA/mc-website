// Textos del Inicio. Salen del sitio actual o se arman con sus frases; ninguno agrega una
// afirmación nueva sobre MC.

export const inicio = {
  hero: {
    // Frase armada con el texto "MC Consultores" del sitio actual. BORRADOR hasta que la apruebe Marcos.
    lead: "Consultora especializada en el sector minero, con soluciones técnicas, estratégicas y operativas. Lima, Perú.",
  },
  services: {
    // Intro de la página de Servicios actual, pasada a "usted".
    lead: "Soluciones técnicas y estratégicas diseñadas para optimizar sus proyectos mineros y generar un impacto positivo.",
  },
  about: {
    // BORRADOR: condensado del texto "MC Consultores" del sitio actual.
    text: "Somos una consultora especializada en el sector minero, enfocada en brindar soluciones técnicas, estratégicas y operativas para optimizar la toma de decisiones a lo largo del ciclo operativo minero. Estamos alineados a los estándares internacionales y nos posicionamos como su aliado estratégico.",
    photoAlt: "Integrantes de MC Consultores en un evento de la empresa",
  },
  clients: {
    // INGEMMET es un instituto del Estado y Yura no es minera: no se dice "empresas mineras".
    lead: "Empresas e instituciones con las que hemos trabajado.",
  },
  presence: {
    // Marcos (30 sep): resaltar Perú y Ecuador. Solo el país; sin proyectos ni clientes en Ecuador por ahora.
    title: "Perú y Ecuador",
    // BORRADOR: lo que dijo Marcos, sin agregar proyectos ni clientes.
    lead: "Presencia en Perú y Ecuador, con oficina en Lima.",
  },
  contact: {
    // Cierre del sitio actual, pasado a "usted".
    title: "Conversemos sobre su proyecto",
    lead: "Contáctenos y descubra cómo podemos ayudarle a alcanzar sus objetivos.",
  },
} as const;
