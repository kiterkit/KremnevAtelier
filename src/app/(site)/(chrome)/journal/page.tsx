import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import JournalList from "@/components/sections/JournalList";
import { getAllArticles } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Журнал",
    description: "Статьи и заметки. Сейчас — типовые шаблоны.",
  }, "/journal");
}

export default function JournalPage() {
  const articles = getAllArticles();

  return (
    <>
      <Hero
        title="Журнал"
        subtitle="Публикации и заметки — пока плейсхолдеры, чтобы зафиксировать структуру."
        locationLabel="Статьи"
      />
      <JournalList
        title="Последние"
        items={articles.map((a) => ({
          title: a.seo.title,
          description: a.excerpt ?? a.seo.description,
          href: `/journal/${a.slug}`,
          tags: a.tags,
        }))}
      />
    </>
  );
}
