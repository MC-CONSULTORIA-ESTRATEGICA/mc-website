import { SkeletonList } from "@/components/sections/Skeleton";
import { articles } from "@/content/articles";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Artículos técnicos de MC Consultores sobre reconciliación minera, QA/QC en bases de datos geológicas y estimación de recursos.",
  path: "/blog/",
});

export default function BlogPage() {
  return (
    <>
      <h1>Blog</h1>
      <SkeletonList
        title="Artículos"
        items={articles.map((article) => ({ key: article.slug, label: article.title, detail: article.date }))}
      />
    </>
  );
}
