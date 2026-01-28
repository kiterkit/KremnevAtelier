import type { SeoLanding } from "@/lib/content";

export const retailNiche: SeoLanding = {
  slug: "retail",
  seo: {
    title: "Ритейл",
    description:
      "СЕО‑лендос (ниша): ритейл. Типовой шаблон, контент заменить позже.",
  },
  hero: {
    title: "Ритейл",
    subtitle:
      "Интерьеры и архитектура, которые поддерживают трафик, мерчандайзинг и бренд.",
    locationLabel: "СЕО‑лендос / Ниша",
    primaryCta: { label: "Обсудить", href: "/contacts" },
    secondaryCta: { label: "Проекты", href: "/projects" },
  },
  bullets: [
    "Зонирование под путь клиента.",
    "Материалы под износ и обслуживание.",
    "Брендинг, навигация, витрины.",
  ],
};

