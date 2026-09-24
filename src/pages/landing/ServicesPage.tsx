import { useState, useEffect } from "react";
import {
  FaChartBar,
  FaDatabase,
  FaHammer,
  FaIndustry,
  FaProjectDiagram,
} from "react-icons/fa";
import servicio1 from "../../assets/servicio1.webp";
import servicio2 from "../../assets/servicio2.webp";
import servicio3 from "../../assets/servicio3.webp";
import servicio4 from "../../assets/servicio4.webp";
import servicio5 from "../../assets/servicio5.webp";

const services = [
  {
    title: "Reconciliación Minera",
    description:
      "Aseguramos la coherencia entre el plan de mina y la producción real. Con nuestras metodologías ayudamos a reducir pérdidas y mejorar la eficiencia operativa.",
    image: servicio1,
    icon: <FaHammer />,
  },
  {
    title: "Consultoría",
    description:
      "Ofrecemos asesoría integral en todas las etapas del proyecto minero: desde exploración, estudios de factibilidad, permisos ambientales hasta cierre de mina.",
    image: servicio2,
    icon: <FaChartBar />,
  },
  {
    title: "Base de datos QA-QC",
    description:
      "Diseñamos y auditamos bases de datos geológicas, asegurando integridad y confiabilidad para respaldar decisiones estratégicas.",
    image: servicio3,
    icon: <FaDatabase />,
  },
  {
    title: "Estimación de Recursos y Reservas",
    description:
      "Creamos modelos geológicos precisos y realizamos estimaciones bajo estándares internacionales (JORC, NI 43-101).",
    image: servicio4,
    icon: <FaProjectDiagram />,
  },
  {
    title: "Capacitación en Códigos Mineros y Control de Calidad",
    description:
       "Brindamos formación especializada en códigos mineros y sistemas de control de calidad, asegurando el cumplimiento normativo y la mejora continua de los procesos operativos.",
    image: servicio5,
    icon: <FaIndustry />,
  },
];

export default function ServicesPage() {
 
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            
            const index = (entry.target as HTMLElement).dataset.index ?? "";
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".service-card")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  const toggleService = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="relative text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 relative z-10 mb-4">
            Conoce <span className="text-sky-600">Nuestros</span> Servicios
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto relative z-10">
            Soluciones técnicas y estratégicas diseñadas para optimizar tus
            proyectos mineros y generar un impacto positivo.
          </p>
        </div>

        {/* Servicios */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index.toString()}
              className={`service-card bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-700 hover:shadow-xl ${
                visibleItems.includes(index.toString())
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {/* Header*/}
              <div
                className="flex items-center justify-between p-6 cursor-pointer hover:bg-blue-50 transition-colors"
                onClick={() => toggleService(index)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 text-2xl shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <span className="text-gray-500 text-3xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {/* Contenido expandido */}
              <div
                className={`grid transition-all duration-700 ease-in-out ${
                  activeIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gradient-to-r from-blue-50 to-white items-center">
                    <div className="overflow-hidden rounded-xl shadow-md transform hover:scale-105 transition-transform duration-700">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed text-justify">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Texto "Más de 15 años" */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-sky-600 mb-4">
            Liderando proyectos que marcan la diferencia en la minería
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Nuestra trayectoria y compromiso nos convierten en un aliado confiable
            para proyectos mineros en Latinoamérica, siempre enfocados en la calidad
            y la excelencia.
          </p>
        </div>
      </div>
    </section>
  );
}
