import { notFound } from "next/navigation";

import { Contact } from "@/components/sections/Contact";
import { ArticleBody } from "@/components/sections/blog/ArticleBody";
import { PageFacts } from "@/components/ui/PageFacts";
import { PageHead } from "@/components/ui/PageHead";
import { articleHref, articles } from "@/content/articles";
import { pageMetadata } from "@/lib/metadata";

import "@/components/sections/blog/blog.css";

// Exportación estática: una página por artículo y ninguna más.
export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

type ArticlePageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return pageMetadata({ title: article.title, description: article.excerpt, path: articleHref(article.slug) });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  return (
    <>
      <PageHead title={article.title} lead={article.excerpt}>
        <PageFacts
          facts={[
            { label: "Categoría", value: article.category },
            {
              label: "Fecha",
              value: <time dateTime={article.dateTime}>{article.date}</time>,
            },
            { label: "Lectura", value: article.readTime },
          ]}
        />
      </PageHead>
      <ArticleBody article={article} />
      <Contact />
    </>
  );
}
