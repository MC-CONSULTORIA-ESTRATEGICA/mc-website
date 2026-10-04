// Preguntas fijas del asistente (sin IA); la última termina en WhatsApp.
// Los textos tutean; la voz de la web es de usted: se revisan al rehacer el asistente (paso 3).
export type AssistantQuestion = {
  question: string;
  answer: string;
  whatsapp?: boolean;
};

export const assistantQuestions: AssistantQuestion[] = [
  {
    question: "¿Qué servicios ofrecen?",
    answer:
      "Brindamos servicios de consultoría especializada para el sector minero, desarrollando soluciones técnicas, digitales y estratégicas orientadas a las necesidades de cada proyecto.",
  },
  {
    question: "¿Realizan capacitaciones?",
    answer:
      "Sí. Desarrollamos cursos y capacitaciones especializadas para profesionales y empresas del sector minero.",
  },
  {
    question: "¿Cómo puedo solicitar una cotización?",
    answer:
      "Puedes comunicarte directamente con nuestro equipo para contarnos sobre tu proyecto y solicitar una cotización personalizada.",
  },
  {
    question: "¿Puedo hablar con un asesor?",
    answer: "Claro. Puedes comunicarte directamente con nuestro equipo mediante WhatsApp.",
    whatsapp: true,
  },
];
