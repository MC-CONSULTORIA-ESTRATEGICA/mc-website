import Link from "next/link";

import { articleHref, type Article } from "@/content/articles";

import "./ArticleCard.css";

/** Artículo en una lista (`.article-row`): título angosto y, al pie, categoría, fecha y lectura. */
export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link className="article" href={articleHref(article.slug)}>
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
