import Link from "next/link";

import { Icon } from "@/components/ui/Icon";
import { articleHref, recentArticles } from "@/content/articles";

/** Registro de artículos, del más reciente al más antiguo. */
export function ArticleLog() {
  return (
    <section className="sec sec-paper grain article-log" aria-label="Artículos">
      <div className="page">
        <ol className="log">
          {recentArticles().map((article) => (
            <li key={article.slug} id={`articulo-${article.slug}`} className="log-entry post">
              <div className="post-when">
                <time className="post-date num" dateTime={article.dateTime}>
                  {article.date}
                </time>
                <span className="post-read">{article.readTime}</span>
                <span className="post-cat">{article.category}</span>
              </div>
              <div className="post-body">
                <h2 className="post-title">
                  <Link href={articleHref(article.slug)}>{article.title}</Link>
                </h2>
                <p className="post-excerpt">{article.excerpt}</p>
              </div>
              <Link className="link-arrow post-link" href={articleHref(article.slug)} aria-hidden="true" tabIndex={-1}>
                Leer el artículo
                <Icon name="arrow-right" size={16} />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
