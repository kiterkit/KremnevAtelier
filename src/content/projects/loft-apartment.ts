import type { Project } from "@/lib/content";

export const loftApartmentProject: Project = {
  slug: "loft-apartment",
  seo: {
    title: "Loft Apartment",
    description: "Типовой шаблон проекта. Замените реальным кейсом позже.",
  },
  hero: {
    title: "Loft Apartment",
    subtitle:
      "Короткое описание проекта (площадь, город, задачи). Пока это нейтральный плейсхолдер.",
    locationLabel: "Проект",
    metaLeft: ["120 м²", "Москва", "2025"],
    metaRight: ["Интерьер", "Авторский надзор", "Комплектация"],
    primaryCta: { label: "Обсудить проект", href: "/contacts" },
    secondaryCta: { label: "Все проекты", href: "/projects" },
  },
  description:
    "Здесь будет расширенное описание: контекст, задачи, подход, решения и результат.",
  tags: ["Интерьер", "Жилое"],
  details: [
    "Задача: оптимизация планировки и световых сценариев.",
    "Решение: материалы, мебель, деталировка узлов.",
  ],
};

