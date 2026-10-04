import { SkeletonList } from "@/components/sections/Skeleton";
import { newsItems } from "@/content/news";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Noticias",
  description:
    "Participación de MC Consultores en PERUMIN, universidades y eventos del sector minero.",
  path: "/noticias/",
});

export default function NewsPage() {
  return (
    <>
      <h1>Noticias</h1>
      <SkeletonList
        title="Eventos"
        items={newsItems.map((item) => ({ key: String(item.id), label: item.title, detail: item.date }))}
      />
    </>
  );
}
