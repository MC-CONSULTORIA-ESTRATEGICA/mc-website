import { useState } from "react";
import { FaHardHat, FaChartBar, FaLeaf } from "react-icons/fa";
import heroImage from "../../assets/about-team.webp";
import team1 from "../../assets/team1.webp";
import team2 from "../../assets/team2.webp";
import team3 from "../../assets/team3.webp";
import team4 from "../../assets/team4.webp";


const carouselImages = [
  team4,
  team2,
  team3,
  team1
];

const processSteps = [
  {
    title: "Identificamos la Necesidad",
    text: "Escuchamos a nuestros clientes y analizamos su contexto para entender sus desafíos reales.",
  },
  {
    title: "Diseñamos la Estrategia",
    text: "Creamos soluciones a medida con base en estudios técnicos, económicos y regulatorios.",
  },
  {
    title: "Implementamos la Solución",
    text: "Nuestro equipo acompaña cada fase del proyecto, asegurando calidad y cumplimiento normativo.",
  },
  {
    title: "Medimos y Optimizamos",
    text: "Monitoreamos resultados y ajustamos procesos para maximizar el impacto positivo.",
  },
];

export default function AboutPage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-[0_6px_8px_rgba(0,0,0,1)]">
            Expertos en Consultoría Minera
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
            Soluciones estratégicas para proyectos mineros sostenibles y
            rentables.
          </p>
        </div>
      </section>

      {/* Nosotros */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 items-center">
          {/* Texto alineado a la izquierda */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-black mb-4 text-justify leading-relaxed">
              En <strong>MC Consultores</strong>, reunimos a geólogos, ingenieros
              y especialistas en minería para crear estrategias innovadoras
              que impulsan el éxito de proyectos mineros.
            </p>
            <p className="text-lg text-black mb-6 text-justify leading-relaxed">
              Nuestro enfoque combina <span className="font-semibold">
                excelencia técnica
              </span>{" "}
              con <span className="font-semibold">conocimiento en los procesos mineros</span>,
              asegurando que cada solución sea excelente y eficiente.
            </p>
            <ul className="space-y-3 text-black text-lg ">
              <li className="flex items-center">
                <FaHardHat className="text-[#3f9dc8] text-2xl mr-2" />
                Equipo multidisciplinario altamente calificado
              </li>
              <li className="flex items-center">
                <FaChartBar className="text-[#3f9dc8] text-2xl mr-2" />
                Enfoque en la automatización
              </li>
              <li className="flex items-center">
                <FaLeaf className="text-[#3f9dc8] text-2xl mr-2" />
                Comprometidos con la excelencia
              </li>
            </ul>
          </div>

          {/* Carrusel más ancho y alto */}
          <div className="relative w-full h-[30rem] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={carouselImages[current]}
              alt="Imagen del equipo o proyecto"
              className="w-full h-full object-cover transition-all duration-700"
            />
            {/* Botones */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition"
            >
              ›
            </button>
            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i === current ? "bg-[#3f9dc8]" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo (sin cambios de antes, ya es dinámico y colorido) */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            Nuestro Proceso de Trabajo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border-t-4 border-[#3f9dc8] hover:bg-sky-50"
              >
                <div className="text-[#3f9dc8] text-5xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
