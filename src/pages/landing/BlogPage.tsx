import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Calendar, Clock, Terminal, ArrowUpRight, X, Hash } from "lucide-react";
import { articles, type Article } from "../../data/articles";

function ArticleMeta({ article }: { article: Article }) {
  return (
    <div className="flex items-center gap-4 font-mono text-xs text-gray-500">
      <span className="flex items-center gap-1.5">
        <Calendar size={13} /> {article.date}
      </span>
      <span className="flex items-center gap-1.5">
        <Clock size={13} /> {article.readTime}
      </span>
    </div>
  );
}

export default function BlogPage() {
  const location = useLocation();
  const [filter, setFilter] = useState<string>("Todo");
  const [selected, setSelected] = useState<Article | null>(null);

  const categories = ["Todo", ...Array.from(new Set(articles.map((a) => a.category)))];

  const filteredArticles = articles.filter(
    (a) => filter === "Todo" || a.category === filter
  );
  const [featured, ...rest] = filteredArticles;

  // Permite abrir un artículo directamente al llegar desde el botón "Blog" del Home
  useEffect(() => {
    const state = location.state as { openSlug?: string } | null;
    if (state?.openSlug) {
      const found = articles.find((a) => a.slug === state.openSlug);
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
          <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-sky-700 bg-sky-100 border border-sky-200 rounded-full px-4 py-1.5 mb-6">
            <Terminal size={14} />
            /blog/articulos-tecnicos
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-5">
            Blog{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01395c] to-[#3f9dc8]">
              Técnico
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Conocimiento aplicado del sector minero: reconciliación, QA/QC, estimación
            de recursos y sostenibilidad, escrito por nuestro equipo de consultores.
          </p>

          <div className="flex items-center justify-center gap-6 mt-8 font-mono text-xs text-gray-500">
            <span>
              <span className="text-sky-600 font-semibold">
                {articles.length.toString().padStart(2, "0")}
              </span>{" "}
              artículos
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300" />
            <span>
              <span className="text-sky-600 font-semibold">{categories.length - 1}</span>{" "}
              categorías
            </span>
          </div>
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
                className={`font-mono text-xs px-4 py-2 rounded-xl whitespace-nowrap transition ${
                  filter === cat ? "text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
                style={{ backgroundColor: filter === cat ? "#3f9dc8" : "transparent" }}
              >
                {cat === "Todo" ? "todo" : `#${cat.toLowerCase().replace(/\s+/g, "-")}`}
              </button>
            ))}
          </div>
        </div>

        {/* Artículo destacado */}
        {featured && (
          <article
            onClick={() => setSelected(featured)}
            className="group cursor-pointer relative grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all mb-10"
          >
            <div className="relative h-64 lg:h-full overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <span
                className="absolute top-4 left-4 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-white px-3 py-1 rounded-full"
                style={{ backgroundColor: featured.accent }}
              >
                <Hash size={12} /> destacado
              </span>
            </div>

            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <span
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide mb-4 w-fit"
                style={{ color: featured.accent }}
              >
                <Hash size={12} /> {featured.tag}
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-4 group-hover:text-[#01395c] transition-colors">
                {featured.title}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>

              <div className="flex items-center justify-between">
                <ArticleMeta article={featured} />
                <span
                  className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                  style={{ color: featured.accent }}
                >
                  Leer <ArrowUpRight size={16} />
                </span>
              </div>
            </div>
          </article>
        )}

        {/* Grid de artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article) => (
            <article
              key={article.slug}
              onClick={() => setSelected(article)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all hover:-translate-y-1.5"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] z-10"
                style={{ backgroundColor: article.accent }}
              />

              <div className="relative h-40 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  className="absolute bottom-3 left-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wide text-white px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: article.accent }}
                >
                  <Hash size={11} /> {article.tag}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3 group-hover:text-[#01395c] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <ArticleMeta article={article} />
                  <ArrowUpRight
                    size={16}
                    className="text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal de lectura */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[10000] px-4 py-10 overflow-y-auto"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white rounded-2xl w-full max-w-3xl my-auto overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 text-gray-600 hover:text-black shadow transition-colors"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <div className="relative h-52 sm:h-64">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div
              className="border-l-[3px] px-6 sm:px-10 py-8"
              style={{ borderColor: selected.accent }}
            >
              <span
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide mb-4"
                style={{ color: selected.accent }}
              >
                <Hash size={12} /> {selected.tag}
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                {selected.title}
              </h2>

              <div className="mb-7">
                <ArticleMeta article={selected} />
              </div>

              <div className="space-y-4">
                {selected.content.map((paragraph, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
