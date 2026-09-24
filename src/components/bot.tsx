"use client";

import { useState } from "react";
import {
  FaRobot,
  FaTimes,
  FaWhatsapp,
  FaArrowRight,
  FaBolt,
} from "react-icons/fa";

const questions = [
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
    answer:
      "Claro. Puedes comunicarte directamente con nuestro equipo mediante WhatsApp.",
    whatsapp: true,
  },
];

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(
    null
  );

  return (
    <div className="relative">
      {/* VENTANA DEL CHATBOT */}
      {isOpen && (
        <div
          className="
            absolute
            bottom-full
            right-0
            mb-4
            z-[10000]

            w-[390px]
            max-w-[calc(100vw-3rem)]

            overflow-hidden
            rounded-2xl

            border
            border-cyan-400/20

            bg-[#07111f]/95

            shadow-[0_20px_70px_rgba(0,0,0,0.55)]

            backdrop-blur-xl
          "
        >
          {/* Línea superior */}
          <div
            className="
              h-[2px]
              w-full
              bg-gradient-to-r
              from-transparent
              via-cyan-400
              to-transparent
            "
          />

          {/* HEADER */}
          <div className="relative border-b border-white/10 px-5 py-5">
            <div className="absolute right-12 top-3 h-20 w-20 rounded-full bg-cyan-400/10 blur-2xl" />

            <div className="relative flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-cyan-400/30
                    bg-cyan-400/10
                    text-cyan-300
                  "
                >
                  <FaRobot className="text-xl" />

                  <span
                    className="
                      absolute
                      -right-1
                      -top-1
                      h-3
                      w-3
                      rounded-full
                      border-2
                      border-[#07111f]
                      bg-emerald-400
                    "
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold tracking-wide text-white">
                      MC Assistant
                    </h3>

                    <FaBolt className="text-xs text-cyan-300" />
                  </div>

                  <p className="mt-1 text-xs text-slate-400">
                    Asistente virtual de MC Consultores
                  </p>

                  <div className="mt-2 flex items-center gap-2 text-[11px] text-emerald-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                    Disponible
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/10
                  text-slate-400
                  transition
                  hover:border-cyan-400/40
                  hover:bg-cyan-400/10
                  hover:text-white
                "
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* CONTENIDO */}
          <div className="max-h-[450px] overflow-y-auto p-5">
            <div
              className="
                mb-5
                rounded-xl
                border
                border-white/10
                bg-white/[0.04]
                p-4
              "
            >
              <p className="text-sm leading-relaxed text-slate-300">
                Hola, soy el asistente virtual de{" "}
                <span className="font-medium text-white">
                  MC Consultores
                </span>.
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Selecciona una consulta para ayudarte.
              </p>
            </div>

            {/* PREGUNTAS */}
            <div className="space-y-2.5">
              {questions.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedQuestion(index)}
                  className={`
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    border
                    px-4
                    py-3.5
                    text-left
                    text-sm
                    transition-all
                    duration-300

                    ${
                      selectedQuestion === index
                        ? "border-cyan-400/50 bg-cyan-400/10 text-white"
                        : "border-white/10 bg-white/[0.025] text-slate-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-white"
                    }
                  `}
                >
                  <span>{item.question}</span>

                  <FaArrowRight
                    className="
                      ml-3
                      shrink-0
                      text-xs
                      text-slate-600
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:text-cyan-300
                    "
                  />
                </button>
              ))}
            </div>

            {/* RESPUESTA */}
            {selectedQuestion !== null && (
              <div className="mt-5">
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-xl
                    border
                    border-cyan-400/20
                    bg-gradient-to-br
                    from-cyan-400/[0.08]
                    to-blue-500/[0.03]
                    p-4
                  "
                >
                  <div className="absolute left-0 top-0 h-full w-[2px] bg-cyan-400" />

                  <div className="mb-2 flex items-center gap-2">
                    <FaRobot className="text-xs text-cyan-300" />

                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-cyan-300">
                      MC Assistant
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-300">
                    {questions[selectedQuestion].answer}
                  </p>
                </div>

                {questions[selectedQuestion].whatsapp && (
                  <a
                    href="https://wa.me/51932432031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-3
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-emerald-500
                      px-4
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-emerald-400
                    "
                  >
                    <FaWhatsapp className="text-lg" />

                    Hablar con un asesor
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* BOTÓN DEL CHATBOT */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          group
          relative
          flex
          h-11
          w-11
          items-center
          justify-center
          gap-2
          overflow-hidden
          rounded-full

          border
          border-cyan-400/30

          bg-[#07111f]

          text-white

          shadow-[0_10px_40px_rgba(0,0,0,0.45)]

          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-cyan-400/60
          hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]

          sm:h-auto
          sm:w-auto
          sm:justify-start
          sm:px-3
          sm:py-2
        "
      >
        <div
          className="
            relative
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-lg
            border
            border-cyan-400/30
            bg-cyan-400/10
            text-cyan-300
          "
        >
          {isOpen ? (
            <FaTimes className="text-sm" />
          ) : (
            <FaRobot className="text-sm" />
          )}

          {!isOpen && (
            <span
              className="
                absolute
                -right-1
                -top-1
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-emerald-400
              "
            />
          )}
        </div>

        <div className="hidden text-left sm:block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-cyan-300">
            MC Assistant
          </p>

          <p className="mt-0.5 text-[11px] text-slate-400">
            ¿Necesitas ayuda?
          </p>
        </div>
      </button>
    </div>
  );
}