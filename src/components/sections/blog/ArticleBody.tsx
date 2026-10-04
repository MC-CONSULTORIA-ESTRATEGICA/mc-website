import Link from "next/link";

import { Icon } from "@/components/ui/Icon";
import { articleHref, recentArticles, type Article } from "@/content/articles";

/** Lámina de lectura del artículo, con los demás artículos al lado. */
export function ArticleBody({ article }: { article: Article }) {
  const others = recentArticles().filter((other) => other.slug !== article.slug);
  return (
    <section className="sec sec-paper grain article-body" aria-label="Artículo">
      <div className="page article-grid">
        <div className="prose">
          {article.content.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <aside className="article-aside" aria-labelledby="otros-title">
          <h2 id="otros-title" className="article-aside-title">
            Otros artículos
          </h2>
          <ul className="article-others">
            {others.map((other) => (
              <li key={other.slug}>
                <Link href={articleHref(other.slug)}>
                  <span className="article-other-title">{other.title}</span>
                  <span className="article-other-meta">
                    <time className="num" dateTime={other.dateTime}>
                      {other.date}
                    </time>{" "}
                    · <span className="article-other-cat">{other.category}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link className="link-arrow" href="/blog/">
            Ver todos los artículos
            <Icon name="arrow-right" size={16} />
          </Link>
        </aside>
      </div>
    </section>
  );
}
