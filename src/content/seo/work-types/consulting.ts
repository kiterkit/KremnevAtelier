import type { SeoLanding } from "@/lib/content";

export const consultingWorkType: SeoLanding = {
  slug: "consulting",
  seo: {
    title: "Консалтинг",
    description:
      "СЕО‑лендос (тип работ): консалтинг. Типовой шаблон, контент заменить позже.",
  },
  hero: {
    title: "Консалтинг",
    subtitle:
      "Помогаем быстро прояснить задачу, собрать вводные и сформировать план действий.",
    locationLabel: "СЕО‑лендос / Тип работ",
    primaryCta: { label: "Консультация", href: "/contacts" },
    secondaryCta: { label: "Проекты", href: "/projects" },
  },
  bullets: [
    "Быстрый аудит и рекомендации по приоритетам.",
    "Сценарии решения и оценка рисков.",
    "План работ и чек‑лист следующего шага.",
  ],
};

