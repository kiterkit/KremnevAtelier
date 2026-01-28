import type { Article } from "@/lib/content";

export const studioNotesArticle: Article = {
  slug: "studio-notes",
  seo: {
    title: "Заметки ателье",
    description: "Типовой шаблон статьи. Замените на реальный текст позже.",
  },
  hero: {
    title: "Заметки ателье",
    subtitle:
      "Короткий лид статьи. Здесь будет объяснение темы и зачем читать.",
    locationLabel: "Журнал",
    primaryCta: { label: "Все статьи", href: "/journal" },
  },
  excerpt: "Короткий анонс для списка статей.",
  paragraphs: [
    "Абзац 1 (плейсхолдер).",
    "Абзац 2 (плейсхолдер).",
    "Абзац 3 (плейсхолдер).",
  ],
  tags: ["Процесс", "Практика"],
};

