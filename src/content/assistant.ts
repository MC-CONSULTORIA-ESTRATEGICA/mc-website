// Preguntas fijas del asistente (sin IA); cada respuesta termina en WhatsApp.
// Textos del sitio actual (bot.tsx), pasados a "usted". Se quitó "digitales" de la primera
// respuesta: no se promociona software.
// PENDIENTE(Marcos): la segunda dice "para profesionales"; no está confirmado que haya cursos
// abiertos.
export type AssistantQuestion = {
  question: string;
  answer: string;
};

export const assistantQuestions: AssistantQuestion[] = [
  {
    question: "¿Qué servicios ofrecen?",
    answer:
      "Brindamos servicios de consultoría especializada para el sector minero, desarrollando soluciones técnicas y estratégicas orientadas a las necesidades de cada proyecto.",
  },
  {
    question: "¿Realizan capacitaciones?",
    answer:
      "Sí. Desarrollamos cursos y capacitaciones especializadas para profesionales y empresas del sector minero.",
  },
  {
    question: "¿Cómo puedo solicitar una cotización?",
    answer:
      "Puede comunicarse directamente con nuestro equipo para contarnos sobre su proyecto y solicitar una cotización personalizada.",
  },
  {
    question: "¿Puedo hablar con un asesor?",
    answer: "Claro. Puede comunicarse directamente con nuestro equipo mediante WhatsApp.",
  },
];
