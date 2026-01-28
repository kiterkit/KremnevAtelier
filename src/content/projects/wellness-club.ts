import type { Project } from "@/lib/content";

export const wellnessClubProject: Project = {
  slug: "wellness-club",
  seo: {
    title: "Wellness Club",
    description: "Типовой шаблон проекта. Замените реальным кейсом позже.",
  },
  hero: {
    title: "Wellness Club",
    subtitle:
      "Коммерческий проект: архитектура и интерьер. Пока это нейтральный плейсхолдер.",
    locationLabel: "Проект",
    metaLeft: ["800 м²", "Санкт‑Петербург", "2024"],
    metaRight: ["Общественные пространства", "Брендинг", "Навигация"],
    primaryCta: { label: "Запросить консультацию", href: "/contacts" },
    secondaryCta: { label: "Все проекты", href: "/projects" },
  },
  description:
    "Здесь будет расширенное описание: концепция, функциональные зоны, визуальная система.",
  tags: ["Общественная архитектура", "Коммерческое"],
  details: [
    "Задача: объединить функциональные зоны в единую логичную схему.",
    "Решение: свет, навигация, материалы с высокой износостойкостью.",
  ],
};

