import {
  Mail,
  Phone,
  Users,
  Award,
  Briefcase,
  TrendingUp,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  ArrowRight,
  Terminal,
  Hash,
} from "lucide-react";
import videoBg from "../../assets/video3.mp4";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { articles } from "../../data/articles";
import { newsItems } from "../../data/news";
import about1 from "../../assets/team2.webp";
import about2 from "../../assets/about-team.webp";
import section3 from "../../assets/section3.webp";
import service1 from "../../assets/service-1.webp";
import service2 from "../../assets/service-2.webp";
import service3 from "../../assets/service-3.webp";

import project1 from "../../assets/project-1.webp";
import project2 from "../../assets/project-2.webp";
import project3 from "../../assets/project-3.webp";
import geologia_estructural from "../../assets/geologia_estructural.webp";

import mc1 from "../../assets/mc1.webp";
import team2 from "../../assets/mc2.webp";
import team3 from "../../assets/mc3.webp";
import team4 from "../../assets/mc4.webp";
import team5 from "../../assets/team5.webp";
import team6 from "../../assets/team6.webp";
import team7 from "../../assets/team7.webp";
import team8 from "../../assets/team8.webp";
import team9 from "../../assets/team9.webp";
import team10 from "../../assets/team10.webp";
import team12 from "../../assets/team12.webp";
import team13 from "../../assets/team13.webp";

import empresa1 from "../../assets/empresa1.webp";
import empresa2 from "../../assets/empresa2.webp";
import empresa3 from "../../assets/empresa3.webp";
import empresa4 from "../../assets/empresa4.webp";
import empresa5 from "../../assets/empresa5.webp";
import empresa6 from "../../assets/empresa6.webp";
import empresa7 from "../../assets/empresa7.webp";
import empresa8 from "../../assets/empresa8.webp";
import empresa9 from "../../assets/empresa9.webp";
import empresa10 from "../../assets/empresa10.webp";
import empresa11 from "../../assets/empresa11.webp";

import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

/** ✅ TIPOS (evita "never", "implicit any" y fallos en build) */
type FactItem = {
  icon: React.ComponentType<{ size?: number; color?: string }>;
  value: number;
  label: string;
  prefix?: string;
};

type Project = {
  title: string;
  tag: string;
  accent: string;
  image: string;
  excerpt: string;
  description: string;
  client?: string;
  clientLogo?: string;
};

type TeamCard = {
  img: string;
  name: string;
  role: string;
  linkedin?: string;
  imgPosition?: string;
};

function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  const projects: Project[] = [
    {
      title: "Curso de Código S-K 1300",
      tag: "capacitación",
      accent: "#3f9dc8",
      client: "Southern Peru Copper Corporation",
      clientLogo: empresa1,
      image: project1,
      excerpt:
        "Capacitación especializada en el Código S-K 1300 para el equipo de Exploraciones, con alcance regional en Perú, Chile y Argentina.",
      description:
        "Diseñamos y dictamos una capacitación especializada en el Código S-K 1300 para el equipo de Exploraciones de Southern Peru Copper Corporation. La sesión fue conducida por nuestro Consultor Asociado, el Dr. Armando Simón, PhD, PGeo, y reunió a los responsables de Exploraciones de sus proyectos en Perú, Chile y Argentina en un espacio de aprendizaje, análisis técnico y colaboración regional.",
    },
    {
      title: "Servicio de Reconciliación Minera",
      tag: "reconciliación",
      accent: "#3f9dc8",
      client: "Compañía Minera Condestable S.A.",
      clientLogo: empresa2,
      image: project2,
      excerpt:
        "Análisis y validación de datos de producción y recursos para fortalecer la toma de decisiones estratégicas.",
      description:
        "Implementamos un servicio de reconciliación minera para Compañía Minera Condestable S.A., analizando y validando datos críticos de producción y recursos a lo largo de la cadena mina-planta. El resultado fue información confiable y trazable que permitió optimizar procesos operativos y fortalecer la toma de decisiones estratégicas.",
    },
    {
      title: "Automatización y Analítica en BD Geológica",
      tag: "analítica",
      accent: "#3f9dc8",
      client: "Minera Titán del Perú S.R.L.",
      clientLogo: empresa3,
      image: project3,
      excerpt:
        "Automatización de la integración de datos geológicos para acelerar su carga en el software de modelamiento.",
      description:
        "Desarrollamos una solución de automatización y analítica para la base de datos geológica de Minera Titán del Perú. Integramos y depuramos los datos de exploración para identificar puntos de mejora en el flujo de trabajo, habilitando su importación automática hacia el software de modelamiento y reduciendo los tiempos de procesamiento manual.",
    },
    {
      title: "Geología Estructural",
      tag: "geología-estructural",
      accent: "#3f9dc8",
      image: geologia_estructural,
      excerpt:
        "Mapeo y modelamiento 3D de estructuras geológicas para optimizar la exploración y evaluación de yacimientos.",
      description:
        "Realizamos un análisis estructural detallado orientado a optimizar la exploración y evaluación de yacimientos. Aplicamos técnicas avanzadas de mapeo de campo y modelamiento 3D para caracterizar la arquitectura geológica de depósitos mineros, brindando una base técnica sólida para la planificación de futuras campañas de exploración.",
    },
  ];

  // Detectar cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsPerPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  // Auto-play
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5500);
    return () => clearInterval(interval);
  }, [autoPlay, totalPages]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerPage]);

  const goToPrevious = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const goToPage = (page: number) => {
    setAutoPlay(false);
    setCurrentIndex(page);
  };

  const visibleProjects = projects.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="bg-[#01395c] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="uppercase font-semibold text-[#3f9dc8] mb-2">Nuestros Proyectos</p>
        <h2 className="text-4xl font-bold text-white">
          Conozca Nuestros Proyectos Recientes
        </h2>
        <p className="text-blue-100/70 mt-3 max-w-xl mx-auto">
          Convertimos datos complejos en decisiones claras y confiables. Así impulsamos
          resultados reales para nuestros clientes en cada etapa del ciclo minero, y así
          podemos impulsar el tuyo.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Botón anterior */}
        <button
          onClick={goToPrevious}
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
          className="absolute left-0 top-1/3 z-10 p-2.5 rounded-full bg-white/10 border border-white/25 backdrop-blur text-white hover:bg-[#3f9dc8] hover:border-[#3f9dc8] transition-all -translate-y-1/2"
          aria-label="Proyecto anterior"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Carrusel */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`grid grid-cols-1 ${
            itemsPerPage === 2 ? "md:grid-cols-2" : ""
          } gap-8 px-4 md:px-16`}
        >
          {visibleProjects.map((proj, index) => (
            <article
              key={index}
              onClick={() => setSelected(proj)}
              className="group cursor-pointer relative bg-white rounded-2xl overflow-hidden shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
              style={{ boxShadow: "0 20px 45px rgba(0,0,0,0.35)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] z-10"
                style={{ backgroundColor: proj.accent }}
              />

              <div className="relative h-52 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/0" />

                <span
                  className="absolute top-3 left-3 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wide text-white px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: proj.accent }}
                >
                  <Hash size={11} /> {proj.tag}
                </span>

                {/* Insignia de cliente / capacidad */}
                <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2 h-12">
                  {proj.clientLogo ? (
                    <img
                      src={proj.clientLogo}
                      alt={proj.client}
                      className="h-7 w-auto max-w-[130px] object-contain"
                    />
                  ) : (
                    <span className="flex items-center gap-2 text-[#01395c] px-1">
                      <Briefcase size={18} />
                      <span className="text-xs font-semibold">Servicio propio MC</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 pt-10">
                {proj.client && (
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-2"
                    style={{ color: proj.accent }}
                  >
                    {proj.client}
                  </p>
                )}
                <h3 className="text-xl font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#01395c] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{proj.excerpt}</p>
                <span
                  className="inline-flex items-center gap-1 mt-5 text-sm font-semibold group-hover:gap-2 transition-all"
                  style={{ color: proj.accent }}
                >
                  Ver caso completo →
                </span>
              </div>
            </article>
          ))}
        </motion.div>

        {/* Botón siguiente */}
        <button
          onClick={goToNext}
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
          className="absolute right-0 top-1/3 z-10 p-2.5 rounded-full bg-white/10 border border-white/25 backdrop-blur text-white hover:bg-[#3f9dc8] hover:border-[#3f9dc8] transition-all -translate-y-1/2"
          aria-label="Siguiente proyecto"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Indicadores */}
      <div className="relative flex justify-center items-center gap-4 mt-10">
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-[#3f9dc8]" : "w-2.5 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Ir a página ${index + 1}`}
            />
          ))}
        </div>
        <span className="font-mono text-xs text-blue-100/60">
          {(currentIndex + 1).toString().padStart(2, "0")} / {totalPages.toString().padStart(2, "0")}
        </span>
      </div>

      {/* CTA de cierre */}
      <div className="relative text-center mt-14">
        <p className="text-white text-lg font-semibold mb-4">
          ¿Tienes un desafío similar en tu operación?
        </p>
        <a
          href="https://wa.me/51932432031?text=Hola%2C%20quiero%20más%20información%20sobre%20sus%20servicios."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-8 py-3 rounded-full font-semibold text-[#01395c] bg-white hover:bg-blue-50 transition-colors">
            Conversemos sobre tu proyecto
          </button>
        </a>
      </div>

      {/* Modal Detalle del Proyecto */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[10000] px-4 py-10 overflow-y-auto"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-auto transform scale-95 animate-fadeIn overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-64 sm:h-80 object-cover"
                loading="lazy"
              />
              <span
                className="absolute top-4 left-4 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-white px-3 py-1 rounded-full"
                style={{ backgroundColor: selected.accent }}
              >
                <Hash size={12} /> {selected.tag}
              </span>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-5">
                {selected.clientLogo ? (
                  <img
                    src={selected.clientLogo}
                    alt={selected.client}
                    className="h-10 w-auto max-w-[160px] object-contain"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-[#01395c]/10 flex items-center justify-center shrink-0">
                    <Briefcase size={18} className="text-[#01395c]" />
                  </div>
                )}
                <div>
                  {selected.client && (
                    <p
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{ color: selected.accent }}
                    >
                      {selected.client}
                    </p>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900">{selected.title}</h3>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{selected.description}</p>
              <button
                className="mt-6 px-6 py-2 bg-[#01395c] text-white rounded-md hover:bg-[#02507f] transition"
                onClick={() => setSelected(null)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>
    </section>
  );
}

function TeamSection() {
  const [showAll, setShowAll] = useState<boolean>(false);

  const cards: TeamCard[] = [
    {
      img: mc1,
      name: "Marcos Calderon",
      role: "CEO & Founder",
      linkedin: "https://www.linkedin.com/in/marcos-s-calder%C3%B3n-aran%C3%ADbar-a07283140/",
      imgPosition: "4%",
    },
    {
      img: team2,
      name: "Armando Simón",
      role: "Ph.D. Ing. Geólogo y Geofísico",
      linkedin: "https://www.linkedin.com/in/armando-sim%C3%B3n-phd-pgeo-5781513b/",
      imgPosition: "50%",
    },
    {
      img: team5,
      name: "Adalberto Rivadeneira",
      role: "Consultor Senior Procesos Metalúrgicos",
      linkedin: "https://www.linkedin.com/in/adalberto-rivadeneira-48ab24b8/",
      imgPosition: "64%",
    },
    {
      img: team3,
      name: "Astrid Flores",
      role: "Ing. Geóloga Mina QAQC y Desarrollo Corporativo",
      linkedin: "https://www.linkedin.com/in/carmen-astrid-flores-ramirez-87086339/",
      imgPosition: "52%",
    },
    {
      img: team4,
      name: "Cecilia Ildefonso",
      role: "Ing. Geóloga, Consultora en Modelamiento Geológico",
      linkedin: "https://pe.linkedin.com/in/cecilia-i-40a36355",
      imgPosition: "47%",
    },
    {
      img: team6,
      name: "Luis Maldonado",
      role: "Ing. Geólogo, Consultor Senior de Geotecnia",
      linkedin: "https://www.linkedin.com/in/luis-maldonado-zorrilla-a7b34322/",
      imgPosition: "71%",
    },
    {
      img: team7,
      name: "Juan Rondinel",
      role: "Ing. de Minas, Consultor Senior de Planeamiento, CP MAusIMM 3000013",
      linkedin: "https://www.linkedin.com/in/juandavidrondinel/",
      imgPosition: "58%",
    },
    {
      img: team8,
      name: "Arnold Chávez",
      role: "Ing. de Minas, Consultor Senior de Planeamiento",
      linkedin: "https://www.linkedin.com/in/arnold-chavez-atalaya-928302121/",
      imgPosition: "53%",
    },
  ];

  const Card = ({ c }: { c: TeamCard }) => (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={c.img}
          alt={c.name}
          className="w-full h-44 sm:h-52 md:h-64 object-cover"
          style={{ objectPosition: c.imgPosition ? `50% ${c.imgPosition}` : "center" }}
          loading="lazy"
        />
        {/* Insignia LinkedIn: móvil/tablet, siempre visible y centrada */}
        {c.linkedin && (
          <a
            href={c.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${c.name}`}
            className="md:hidden absolute top-2 right-2 w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center shadow-md"
          >
            <FaLinkedinIn className="text-white text-sm" />
          </a>
        )}
      </div>

      <div className="flex items-center bg-gray-100 p-3 sm:p-4 relative group overflow-hidden">
        <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#01395c] flex items-center justify-center relative z-10 rounded-md">
          <FaEnvelope className="text-white text-xl sm:text-2xl" />
        </div>
        <div className="flex-1 pl-3 sm:pl-4 relative z-10">
          <h5 className="font-bold text-base sm:text-lg">{c.name}</h5>
          <span className="text-[#3f9dc8] text-xs sm:text-sm">{c.role}</span>
        </div>

        {/* Panel deslizante con LinkedIn: solo en desktop (hover) */}
        {c.linkedin && (
          <div className="hidden md:flex absolute inset-0 bg-[#0A66C2]/50 items-center md:-translate-x-full md:group-hover:translate-x-0 transition-transform duration-500 ease-out z-20">
            <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center ml-[20px]">
              <a
                href={c.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center"
              >
                <FaLinkedinIn className="text-white text-lg" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
        <p className="uppercase font-semibold text-[#3f9dc8] mb-2">Nuestros Asociados</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Conoce a nuestros Asociados
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {cards.slice(0, 3).map((c: TeamCard, i: number) => (
          <Card key={`team-top-${i}`} c={c} />
        ))}
      </div>

      <div
        className={`${showAll ? "grid" : "hidden"} grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mt-6 md:mt-8`}
      >
        {cards.slice(3).map((c: TeamCard, i: number) => (
          <Card key={`team-rest-${i}`} c={c} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAll((v: boolean) => !v)}
          className="px-5 py-2.5 rounded-md bg-[#01395c] text-white text-sm md:text-base hover:bg-[#02507f] transition"
          aria-expanded={showAll}
        >
          {showAll ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </section>

    //Conoce a nuestro equipo estrategico
    
  );
}

function ClientsCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);

  // Array de logos de empresas que confían en nosotros
  const companies = [
    { id: 1, name: "Empresa 1", logo: empresa1 },
    { id: 2, name: "Empresa 2", logo: empresa7 },
    { id: 3, name: "Empresa 3", logo: empresa9 },
    { id: 4, name: "Empresa 4", logo: empresa4 },
    { id: 5, name: "Empresa 5", logo: empresa5 },
    { id: 6, name: "Empresa 6", logo: empresa6 },
    { id: 7, name: "Empresa 7", logo: empresa2 },
    { id: 8, name: "Empresa 8", logo: empresa8 },
    { id: 9, name: "Empresa 9", logo: empresa3 },
    { id: 10, name: "Empresa 10", logo: empresa10 },
    { id: 11, name: "Empresa 11", logo: empresa11 },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(companies.length / itemsPerPage);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [autoPlay, totalPages]);

  const goToPrevious = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const goToPage = (page: number) => {
    setAutoPlay(false);
    setCurrentIndex(page);
  };

  const visibleCompanies = companies.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="uppercase font-semibold mb-2" style={{ color: "#3f9dc8" }}>
            Nuestros Clientes
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Empresas que confían en nosotros
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Trabajamos con las empresas mineras más importantes del país
          </p>
        </div>

        <div className="relative">
          {/* Botón anterior */}
          <button
            onClick={goToPrevious}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="absolute left-0 top-1/3 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition -translate-y-1/2"
          >
            <ChevronLeft size={24} style={{ color: "#3f9dc8" }} />
          </button>

          {/* Carrusel principal - 3 logos */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 px-12"
          >
            {visibleCompanies.map((company) => (
              <div
                key={company.id}
                className="flex items-center justify-center bg-white rounded-2xl shadow-lg border border-gray-200 p-6 h-48 hover:shadow-xl transition"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>

          {/* Botón siguiente */}
          <button
            onClick={goToNext}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="absolute right-0 top-1/3 z-10 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition -translate-y-1/2"
          >
            <ChevronRight size={24} style={{ color: "#3f9dc8" }} />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-[#3f9dc8]"
                  : "w-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir a página ${index + 1}`}
            />
          ))}
        </div>

        {/* Contador */}
        <div className="text-center mt-6">
          <p className="text-gray-600 font-medium">
            {currentIndex + 1} / {totalPages}
          </p>
        </div>
      </div>
    </section>
  );
}

function TeamSection2() {
  const [showAll, setShowAll] = useState<boolean>(false);

  const cards: TeamCard[] = [
    {
      img: mc1,
      name: "Marcos Calderon",
      role: "CEO & Founder",
      linkedin: "https://www.linkedin.com/in/marcos-s-calder%C3%B3n-aran%C3%ADbar-a07283140/",
      imgPosition: "4%",
    },
    {
      img: team10,
      name: "Claudio Moncada",
      role: "Ing. Geológica - Consultor de Geología",
      linkedin: "https://www.linkedin.com/in/claudio-moncada-romani-003150168/",
      imgPosition: "54%",
    },
    /*{
      img: team10,
      name: "Edu Andia",
      role: "Consultor Senior Procesos Metalúrgicos",
      linkedin: "https://www.linkedin.com/in/edu-andia-carpio-19b19a255/",
    },*/
    {
      img: team9,
      name: "Sofia Quispe",
      role: "Ing. de Sistemas, Análitica de Datos y Automatización de Procesos",
      linkedin: "https://www.linkedin.com/in/sofia-quispe-salas/",
      imgPosition: "31%",
    },
    {
      img: team12,
      name: "Salim Ramirez",
      role: "Ing. Software - Consultor de Software",
      linkedin: "https://www.linkedin.com/in/salimramirezm/",
      imgPosition: "55%",
    },
    {
      img: team13,
      name: "Camila Algarate",
      role: "Administración & Marketing",
      linkedin: "https://www.linkedin.com/in/camila-algarate-espino-33b948308/",
      imgPosition: "35%",
    },
  ];

  const Card = ({ c }: { c: TeamCard }) => (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={c.img}
          alt={c.name}
          className="w-full h-44 sm:h-52 md:h-64 object-cover"
          style={{ objectPosition: c.imgPosition ? `50% ${c.imgPosition}` : "center" }}
          loading="lazy"
        />
        {/* Insignia LinkedIn: móvil/tablet, siempre visible y centrada */}
        {c.linkedin && (
          <a
            href={c.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${c.name}`}
            className="md:hidden absolute top-2 right-2 w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center shadow-md"
          >
            <FaLinkedinIn className="text-white text-sm" />
          </a>
        )}
      </div>

      <div className="flex items-center bg-gray-100 p-3 sm:p-4 relative group overflow-hidden">
        <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#01395c] flex items-center justify-center relative z-10 rounded-md">
          <FaEnvelope className="text-white text-xl sm:text-2xl" />
        </div>
        <div className="flex-1 pl-3 sm:pl-4 relative z-10">
          <h5 className="font-bold text-base sm:text-lg">{c.name}</h5>
          <span className="text-[#3f9dc8] text-xs sm:text-sm">{c.role}</span>
        </div>

        {/* Panel deslizante con LinkedIn: solo en desktop (hover) */}
        {c.linkedin && (
          <div className="hidden md:flex absolute inset-0 bg-[#0A66C2]/50 items-center md:-translate-x-full md:group-hover:translate-x-0 transition-transform duration-500 ease-out z-20">
            <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center ml-[20px]">
              <a
                href={c.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center"
              >
                <FaLinkedinIn className="text-white text-lg" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
        <p className="uppercase font-semibold text-[#3f9dc8] mb-2">Nuestro Equipo</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Nuestro Equipo de Profesionales
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {cards.slice(0, 3).map((c: TeamCard, i: number) => (
          <Card key={`team-top-${i}`} c={c} />
        ))}
      </div>

      <div
        className={`${showAll ? "grid" : "hidden"} grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mt-6 md:mt-8`}
      >
        {cards.slice(3).map((c: TeamCard, i: number) => (
          <Card key={`team-rest-${i}`} c={c} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAll((v: boolean) => !v)}
          className="px-5 py-2.5 rounded-md bg-[#01395c] text-white text-sm md:text-base hover:bg-[#02507f] transition"
          aria-expanded={showAll}
        >
          {showAll ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </section>

    //Conoce a nuestro equipo estrategico
    
  );
}


export default function HomePage() {
  const facts: FactItem[] = [
    { icon: Award, value: 10, label: "Especialidades" },
    { icon: Users, value: 15, label: "Miembros del Equipo" },
    { icon: Briefcase, value: 3, label: "Alianzas Estratégicas" },
    { icon: TrendingUp, value: 10, prefix: "+", label: "Proyectos en Marcha" },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const newsPreview = newsItems.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoBg} type="video/mp4" />
          Tu navegador no soporta el video en HTML5.
        </video>

        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

        <div className="relative z-10 max-w-7xl px-6 sm:px-12 text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-snug">
            Optimizar decisiones <br /> en el ciclo minero
          </h1>
          <a
            href="https://wa.me/51932432031?text=Hola%2C%20quiero%20más%20información%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="mt-6 px-8 py-3 font-semibold text-white transition-colors rounded-full text-lg"
              style={{ backgroundColor: "#3f9dc8" }}
            >
              Agendar reunión
            </button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 md:gap-8 w-full">
              <motion.img
                src={about1}
                alt="About 1"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg shadow-lg object-cover"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                loading="lazy"
              />
              <motion.img
                src={about2}
                alt="About 2"
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-lg shadow-lg object-cover"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                loading="lazy"
              />
            </div>

            <div>
              <p className="uppercase font-semibold mb-2" style={{ color: "#3f9dc8" }}>
                Nosotros
              </p>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">MC CONSULTORES</h2>
              <p className="text-lg text-gray-700 mb-6 text-justify">
                Somos una consultora <b>especializada en el sector minero</b> Enfocada en
                brindar soluciones técnicas, estratégicas y operativas para optimizar la
                toma de decisiones a lo largo del ciclo operativo minero. Ponemos toda
                nuestra experiencia a su disposición mediante servicios que ayudarán a
                mejorar el control de sus proyectos de exploración y los procesos de la
                mina. Estamos alineados a los estándares internacionales y nos
                posicionamos como su aliado estratégico.
              </p>

              <div className="flex items-start mb-8">
                <div className="text-white p-4 text-center" style={{ backgroundColor: "#3f9dc8" }}>
                  <h5 className="font-bold">Conoce</h5>
                  <h5 className="font-bold">Nuestras</h5>
                  <br />
                  <h5 className="text-white font-bold">Especialidades</h5>
                </div>
                <div className="ml-6 text-gray-700 text-lg">
                  {[
                    "Reconciliación Minera",
                    "Consultoría",
                    "Base de datos QA-QC",
                    "Estimación de recursos y reservas",
                    "Capacitación en Códigos Mineros y Control de Calidad",
                  ].map((t: string) => (
                    <p key={t} className="flex items-center mb-2">
                      <CheckCircle className="mr-2" size={20} style={{ color: "#3f9dc8" }} />
                      {t}
                    </p>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#3f9dc8" }}
                  >
                    <Mail className="text-white" size={22} />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-500 text-sm">Email</p>
                    <h5 className="text-lg text-gray-900 font-semibold">
                      ventas@mc-consultoria.com
                    </h5>
                  </div>
                </div>

                <div className="flex items-center">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#3f9dc8" }}
                  >
                    <Phone className="text-white" size={22} />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-500 text-sm">Cel</p>
                    <h5 className="text-lg text-gray-900 font-semibold">+51 932432031</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Noticias - preview compacto */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="uppercase font-semibold mb-2" style={{ color: "#3f9dc8" }}>
                Noticias
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Fechas clave y participaciones
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl">
                Ponencias, congresos, ferias y actividades del sector en las que participamos.
              </p>
            </div>

            <Link to="/noticias" className="w-full md:w-auto">
              <button
                className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-colors"
                style={{ backgroundColor: "#01395c" }}
              >
                Ver todas las noticias
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsPreview.map((item) => (
              <Link
                key={item.id}
                to="/noticias"
                state={{ openId: item.id }}
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all"
              >
                <div className="relative h-32 sm:h-36 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span
                    className="absolute top-2 left-2 text-[11px] font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: "#3f9dc8" }}
                  >
                    {item.category}
                  </span>
                  {item.highlight && (
                    <span className="absolute top-2 right-2 text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/70 text-white">
                      Destacado
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <p className="text-xs text-gray-500 font-medium mb-1">
                    {item.date} • {item.city}
                  </p>
                  <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#01395c] transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Facts Section */}
      <section className="w-full py-20" style={{ backgroundColor: "#01395C" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facts.map((item: FactItem, idx: number) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="text-center border border-gray-300 rounded-2xl p-12 flex flex-col justify-center min-h-[350px] bg-transparent"
                >
                  <div className="flex justify-center mb-6">
                    <Icon size={56} color="white" />
                  </div>
                  <p className="text-7xl font-extrabold mb-4" style={{ color: "#5fa8d3" }}>
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                      prefix={item.prefix || ""}
                    />
                  </p>
                  <p className="text-2xl font-semibold text-white">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Start */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center">
              <img src={section3} alt="Sección 3" className="w-5/6 rounded-lg shadow-lg" />
              <button
                onClick={() => setIsOpen(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-6 shadow-lg hover:scale-105 transition"
              >
                <span className="block w-0 h-0 border-l-[20px] border-l-[#3f9dc8] border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent"></span>
              </button>
            </div>

            <div>
              <p className="uppercase font-semibold mb-2" style={{ color: "#3f9dc8" }}>
                ¿Por qué elegirnos?
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                ¡Algunas razones por las que las empresas nos eligen!
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-justify">
                En un sector tan dinámico y retador como el minero, las decisiones deben ser
                rápidas, precisas y respaldadas por <b>experiencia especializada</b>. Nuestra
                consultora combina conocimiento técnico con visión estratégica para acompañar
                a las compañías en cada etapa del ciclo operativo minero, ofreciendo soluciones
                que generan valor real y sostenible.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Especialistas en el sector minero", desc: "Entendemos los desafíos y oportunidades de la industria." },
                  { title: "Respuestas ágiles", desc: "Capacidad de adaptación y entrega en tiempos cortos." },
                  { title: "Enfoque en la optimización", desc: "Ayudamos a mejorar procesos, reducir costos y potenciar." },
                  { title: "Acompañamiento cercano", desc: "Comunicación clara y compromiso con cada cliente." },
                  { title: "Soporte técnico y estratégico", desc: "Soluciones integrales que abarcan lo operativo y lo gerencial." },
                ].map((item: { title: string; desc: string }, i: number) => (
                  <div key={i} className="flex items-start">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#3f9dc8" }}
                    >
                      <CheckCircle className="text-white" size={24} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
                      <span className="text-gray-600">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Start */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-lg overflow-hidden w-11/12 md:w-3/4 lg:w-1/2">
            <div className="flex justify-between items-center px-4 py-2 border-b">
              <h3 className="text-lg font-semibold">Video</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-600">
                ✕
              </button>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                title="Video"
                className="w-full h-96"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Service Start */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mx-auto pb-12 max-w-2xl">
            <p className="uppercase font-semibold mb-2" style={{ color: "#3f9dc8" }}>
              Nuestros Servicios
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Priorizamos un Servicio Cercano y con Innovación
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="relative group overflow-hidden shadow-lg border border-gray-300 rounded-2xl md:rounded-none">
              <img
                src={service1}
                alt="Reconciliación Minera"
                className="w-full h-56 sm:h-72 md:h-[480px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500
                flex flex-col justify-end items-center text-center p-5 sm:p-8"
                style={{
                  background: "rgba(1, 57, 92, 0.7)",
                  clipPath: "polygon(0 12%, 100% 0, 100% 100%, 0% 100%)",
                }}
              >
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">Reconciliación Minera</h3>
                <p className="text-white text-xs sm:text-sm mb-2 sm:mb-6">
                  Integra mina, planta y despacho con reconciliación de tonelaje, ley y recuperación desde
                  planificación hasta embarque.
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden shadow-lg border border-gray-300 rounded-2xl md:rounded-none">
              <img
                src={service2}
                alt="Estimación de Recursos y Reservas"
                className="w-full h-56 sm:h-72 md:h-[480px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500
                flex flex-col justify-end items-center text-center p-5 sm:p-8"
                style={{
                  background: "rgba(1, 57, 92, 0.7)",
                  clipPath: "polygon(0 12%, 100% 0, 100% 100%, 0% 100%)",
                }}
              >
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">Estimación de Recursos y Reservas</h3>
                <p className="text-white text-xs sm:text-sm mb-2 sm:mb-6">
                  Desarrolla modelos geológicos y de ley combinando geoestadística para mejorar la precisión. Los modelos
                  quedan versionados y documentados para su revisión técnica.
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden shadow-lg border border-gray-300 rounded-2xl md:rounded-none">
              <img
                src={service3}
                alt="Analítica y BD QAQC"
                className="w-full h-56 sm:h-72 md:h-[480px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500
                flex flex-col justify-end items-center text-center p-5 sm:p-8"
                style={{
                  background: "rgba(1, 57, 92, 0.7)",
                  clipPath: "polygon(0 12%, 100% 0, 100% 100%, 0% 100%)",
                }}
              >
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">Analítica y BD QAQC</h3>
                <p className="text-white text-xs sm:text-sm mb-2 sm:mb-6">
                  Centraliza y asegura la calidad de datos de exploración y operación. Implementa reglas automáticas para
                  ensayes, duplicados, blancos y estándares; generando alertas ante anomalías.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <Link to="/servicios">
              <button
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-colors"
                style={{ backgroundColor: "#01395c" }}
              >
                Ver todos los servicios
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Técnico - Artículos Técnicos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-sky-700 bg-sky-100 border border-sky-200 rounded-full px-4 py-1.5 mb-4">
                <Terminal size={13} />
                blog técnico
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Artículos Técnicos
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl">
                Conocimiento especializado del sector minero: reconciliación, QA/QC,
                estimación de recursos y sostenibilidad.
              </p>
            </div>

            <Link to="/blog" className="w-full md:w-auto">
              <button
                className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-colors"
                style={{ backgroundColor: "#01395c" }}
              >
                Ver todos los artículos
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to="/blog"
                state={{ openSlug: article.slug }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all block"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] z-10"
                  style={{ backgroundColor: article.accent }}
                />
                <div className="relative overflow-hidden h-36">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span
                    className="absolute bottom-3 left-3 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wide text-white px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: article.accent }}
                  >
                    <Hash size={11} /> {article.tag}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-3 font-mono text-xs text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} /> {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 leading-snug mb-2 line-clamp-2 group-hover:text-[#01395c] transition-colors">
                    {article.title}
                  </h3>

                  <span
                    className="inline-flex items-center gap-1 text-sm font-semibold"
                    style={{ color: article.accent }}
                  >
                    Leer más <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Clients Carousel */}
      <ClientsCarouselSection />

      {/* ✅ Projects (sin hooks dentro de IIFE) */}
      <ProjectsSection />

      {/* ✅ Team (sin hooks dentro de IIFE + tipado) */}
      <TeamSection />
      <TeamSection2 />
      {/* CTA Section */}
      <section className="py-20 text-white" style={{ backgroundColor: "#3f9dc8" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para iniciar tu proyecto minero?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos
          </p>
          <a
            href="https://wa.me/51932432031?text=Hola%2C%20quiero%20más%20información%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors text-lg">
              Contactar Ahora
            </button>
          </a>
        </div>
      </section>
    </>
  );
}