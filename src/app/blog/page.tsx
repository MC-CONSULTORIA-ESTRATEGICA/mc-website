import { Contact } from "@/components/sections/Contact";
import { ArticleLog } from "@/components/sections/blog/ArticleLog";
import { PageHead } from "@/components/ui/PageHead";
import { PageIndex } from "@/components/ui/PageIndex";
import { blogLead, recentArticles } from "@/content/articles";
import { pageMetadata } from "@/lib/metadata";

import "@/components/sections/blog/blog.css";

export const metadata = pageMetadata({
  title: "Artículos técnicos",
  description:
    "Artículos técnicos de MC Consultores sobre reconciliación minera, QA/QC en bases de datos geológicas, estimación de recursos y gestión de relaves.",
  path: "/blog/",
});

export default function BlogPage() {
  return (
    <>
      <PageHead title="Blog" lead={blogLead}>
        <PageIndex
          label="Artículos en esta página"
          items={recentArticles().map((article) => ({
            href: `#articulo-${article.slug}`,
            label: article.category,
            meta: (
              <time dateTime={article.dateTime} className="num">
                {article.date}
              </time>
            ),
          }))}
        />
      </PageHead>
      <ArticleLog />
      <Contact />
    </>
  );
}
