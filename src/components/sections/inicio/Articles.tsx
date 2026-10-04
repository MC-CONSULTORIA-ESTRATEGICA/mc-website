import Link from "next/link";

import { ArticleCard } from "@/components/ui/ArticleCard";
import { Contours } from "@/components/ui/Contours";
import { Icon } from "@/components/ui/Icon";
import { SectionHead } from "@/components/ui/SectionHead";
import { recentArticles } from "@/content/articles";

export function Articles() {
  return (
    <section id="articulos" className="sec sec-paper grain sec-articles" aria-labelledby="articulos-title">
      <Contours
        className="earth-rings articles-rings"
        viewBox={{ width: 420, height: 320 }}
        center={{ x: 400, y: 20 }}
        rings={8}
        radius={30}
        step={22}
        stretch={1.2}
        indexEvery={4}
        phase={0.4}
      />
      <div className="page">
        <SectionHead id="articulos-title" title="Artículos técnicos" />
        <ul className="article-row">
          {recentArticles(3).map((article) => (
            <li key={article.slug}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
        <Link className="link-arrow" href="/blog/">
          Ir al Blog
          <Icon name="arrow-right" size={16} />
        </Link>
      </div>
    </section>
  );
}
