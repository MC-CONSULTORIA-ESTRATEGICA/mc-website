import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Calendar, Users, CheckCircle, X } from "lucide-react";
import { newsItems, type NewsItem } from "../../data/news";

const categories = ["Todo", "Universidades", "Perumin", "AusIMM", "ProExplo"];

export default function NewsPage() {
  const location = useLocation();
  const [filter, setFilter] = useState<string>("Todo");
  const [selected, setSelected] = useState<NewsItem | null>(null);
  const [currentImage, setCurrentImage] = useState<number>(0);

  const filteredNews = newsItems.filter(
    (n) => filter === "Todo" || n.category === filter
  );

  // Permite abrir una noticia directamente al llegar desde el botón del Home
  useEffect(() => {
    const state = location.state as { openId?: number } | null;
    if (state?.openId) {
      const found = newsItems.find((n) => n.id === state.openId);
      if (found) setSelected(found);
    }
  }, [location.state]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-16 px-4 sm:px-6 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase font-semibold mb-3" style={{ color: "#3f9dc8" }}>
            Noticias
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-5">
            Fechas clave y participaciones
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ponencias, congresos, ferias y actividades del sector en las que participamos.
            Aquí registramos los hitos más relevantes de MC Consultores.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        {/* Filtros */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl shadow-sm border p-2 flex gap-2 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition ${
                  filter === cat ? "text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
                style={{ backgroundColor: filter === cat ? "#3f9dc8" : "transparent" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              onClick={() => {
                setSelected(item);
                setCurrentImage(0);
              }}
              className="cursor-pointer bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: "#3f9dc8" }}
                  >
                    {item.category}
                  </span>
                  {item.highlight && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-black/70 text-white">
                      Destacado
                    </span>
                  )}
                </div>

                {item.images.length > 1 && (
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.images.length} fotos
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <p className="text-sm text-gray-500 font-medium">
                    {item.date} • {item.city}
                  </p>
                  <span className="text-xs text-gray-500 border rounded-full px-3 py-1">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {item.summary}
                </p>

                {item.points?.length ? (
                  <ul className="mt-4 space-y-2">
                    {item.points.slice(0, 3).map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={18} style={{ color: "#3f9dc8" }} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users size={18} />
                    <span>{item.attendees} asistentes</span>
                  </div>

                  <span className="text-sm font-semibold" style={{ color: "#3f9dc8" }}>
                    Ver fotos →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal galería */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[10000] px-4 py-10 overflow-y-auto"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-4xl p-6 relative my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 text-gray-600 hover:text-black shadow transition-colors"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono mb-2">
              <Calendar size={13} /> {selected.date} • {selected.city}
            </div>

            <h3 className="text-2xl font-bold mb-4 text-gray-900">{selected.title}</h3>

            <img
              src={selected.images[currentImage]}
              alt={`${selected.title} - ${currentImage + 1}`}
              className="w-full h-[240px] sm:h-[400px] object-cover rounded-xl"
              loading="lazy"
            />

            <div className="flex items-center justify-between mt-4 gap-3">
              <button
                onClick={() =>
                  setCurrentImage((prev) =>
                    prev === 0 ? selected.images.length - 1 : prev - 1
                  )
                }
                className="px-4 py-2 rounded-xl border text-sm font-semibold hover:bg-gray-50"
              >
                ← Anterior
              </button>

              <span className="text-sm text-gray-500">
                {currentImage + 1} / {selected.images.length}
              </span>

              <button
                onClick={() =>
                  setCurrentImage((prev) =>
                    prev === selected.images.length - 1 ? 0 : prev + 1
                  )
                }
                className="px-4 py-2 rounded-xl border text-sm font-semibold hover:bg-gray-50"
              >
                Siguiente →
              </button>
            </div>

            <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
              {selected.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`shrink-0 rounded-lg border-2 ${
                    currentImage === i ? "border-[#3f9dc8]" : "border-transparent"
                  }`}
                  title={`Foto ${i + 1}`}
                >
                  <img
                    src={img}
                    alt={`thumb-${i}`}
                    className="h-20 w-28 object-cover rounded-lg"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            {selected.points?.length ? (
              <ul className="mt-5 space-y-2 border-t pt-5">
                {selected.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={18} style={{ color: "#3f9dc8" }} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
