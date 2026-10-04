import Link from "next/link";

import type { Article } from "@/content/articles";

import "./ArticleCard.css";

/** Artículo en una lista (`.article-row`): título angosto y, al pie, categoría, fecha y lectura. */
export function ArticleCard({ article }: { article: Article }) {
  return (
    // PENDIENTE(Blog): página propia por artículo (/blog/<slug>/)
    <Link className="article" href="/blog/">
      <span className="article-title">{article.title}</span>
      <span className="article-meta">
        <span className="article-cat">{article.category}</span> ·{" "}
        <time className="num" dateTime={article.dateTime}>
          {article.date}
        </time>{" "}
        · {article.readTime}
      </span>
    </Link>
  );
}
