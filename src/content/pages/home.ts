import type { Seo } from "@/lib/content";

export type HomePageContent = {
  seo: Seo;
  header: {
    navItems: ReadonlyArray<{ label: string; href: string }>;
    contacts: ReadonlyArray<string>;
    cta: { label: string; href: string };
  };
  hero: {
    wordmark: string;
    metaLine: ReadonlyArray<string>;
    images: ReadonlyArray<{
      label: string;
      aspect: `${number}/${number}`;
    }>;
  };
  featuredProjects: {
    items: ReadonlyArray<{
      title: string;
      ctaLabel: string;
      href: string;
      image: { label: string; aspect: `${number}/${number}` };
    }>;
    trust: {
      label: string;
      title: string;
      subtitle: string;
      body: string;
      logos: ReadonlyArray<string>;
    };
  };
  services: {
    label: string;
    title: string;
    subtitle: string;
    image: { label: string; aspect: `${number}/${number}` };
    items: ReadonlyArray<{ title: string }>;
    featured: {
      projectTitle: string;
      body: string;
      linkLabel: string;
    };
  };
  aboutTeam: {
    label: string;
    title: string;
    subtitle: string;
    bodyLines: ReadonlyArray<string>;
    ctaLine: string;
    team: {
      name: string;
      meta: string;
      quote: string;
      roles: ReadonlyArray<string>;
      portraits: ReadonlyArray<{ label: string; aspect: `${number}/${number}` }>;
    };
  };
  directions: {
    label: string;
    title: string;
    tags: ReadonlyArray<string>;
    ctaLabel: string;
    images: ReadonlyArray<{
      label: string;
      caption?: string;
      aspect: `${number}/${number}`;
    }>;
    principles: {
      label: string;
      title: string;
      subtitle: string;
      cards: ReadonlyArray<{
        title: string;
        body: string;
        image: { label: string; aspect: `${number}/${number}` };
      }>;
    };
  };
  stages: {
    label: string;
    title: string;
    subtitle: string;
    items: ReadonlyArray<{ title: string }>;
    detail: {
      indexLabel: string;
      title: string;
      body: string;
      duration: string;
      image: { label: string; aspect: `${number}/${number}` };
    };
  };
  contactForm: {
    title: string;
    subtitle: string;
    fields: ReadonlyArray<{ label: string; required?: boolean }>;
    messageLabel: string;
    consentLabel: string;
    briefLinkLabel: string;
    submitLabel: string;
    email: string;
    phone: string;
    image: { label: string; aspect: `${number}/${number}` };
  };
  footer: {
    journal: {
      label: string;
      title: string;
      subtitle: string;
      tabs: ReadonlyArray<string>;
      items: ReadonlyArray<{
        title: string;
        metaLeft: string;
        metaRight: string;
      }>;
      telegramTitle: string;
      telegramLinkLabel: string;
      telegramBody: string;
      questionsTitle: string;
      callLabel: string;
    };
    newsletterTitle: string;
    newsletterPlaceholder: string;
    newsletterSubmitLabel: string;
    newsletterNote: string;
    links: ReadonlyArray<string>;
    mapLabel: string;
    cityLabel: string;
    addressLine1: string;
    addressLine2: string;
    legalLinks: ReadonlyArray<string>;
    copyright: string;
    madeBy: string;
    phone: string;
    email: string;
  };
};

export const homePage: HomePageContent = {
  seo: {
    title: "Kremnev atelier",
    description: "TODO: description from reference (not visible on screenshots).",
  },
  header: {
    navItems: [
      { label: "Услуги", href: "/services" },
      { label: "Проекты", href: "/projects" },
      { label: "О бюро", href: "/about" },
      { label: "Вакансии", href: "/vacancies" },
    ],
    contacts: ["mail@kremnevatelier.ru", "+7 495 799-08-81"],
    cta: { label: "Консультация", href: "/contacts" },
  },
  hero: {
    wordmark: "Kremnev atelier",
    metaLine: [
      "Архитектурное бюро полного цикла",
      "Ярославль",
      "55°47′27″ N",
      "49°06′52″ E",
    ],
    images: [
      { label: "Hero project image (wide)", aspect: "16/9" },
      { label: "Hero project image (tall)", aspect: "4/5" },
    ],
  },
  featuredProjects: {
    items: [
      {
        title: "музей вина Urban Wine",
        ctaLabel: "Подробнее о проекте",
        href: "/projects",
        image: { label: "Project cover", aspect: "16/9" },
      },
    ],
    trust: {
      label: "[ нам доверяют ]",
      title: "Шьем городскую ткань, моделируем пространство",
      subtitle: "в балансе авторского видения, экономики и технологий",
      body:
        "Мы работаем с городской средой как с живым материалом —\nаккуратно, точно и осмысленно. Проектируем пространства, где\nархитектура, экономика и технологии усиливают друг друга,\nсохраняя авторский характер и уважение к контексту.",
      logos: ["РФ", "Strelka КБ", "Ярославль", "SMINEX", "MARS", "ПИК", "Гордо", "Минстрой"],
    },
  },
  services: {
    label: "[ дисциплины ]",
    title: "Создаем среду, которая работает",
    subtitle: "— для заказчика, для города и для человека",
    image: { label: "Service section photo", aspect: "16/9" },
    items: [
      { title: "Архитектурное проектирование" },
      { title: "Комплексное развитие территорий" },
      { title: "Интерьерный и предметный дизайн" },
      { title: "Благоустройство\nи ландшафтный дизайн" },
      { title: "Консалтинг и аудит\nпроекта" },
      { title: "Брендинг, графика\nи визуализация" },
    ],
    featured: {
      projectTitle: "Бутик-отель Lancavatara Ocean Retreat",
      body:
        "Проектируем здания от концепции до рабочей документации. Формируем функциональные,\nконструктивно обоснованные и выразительные решения с учетом контекста, нормативов и задач\nзаказчика.",
      linkLabel: "Архитектурное проектирование",
    },
  },
  aboutTeam: {
    label: "[ наша\nкоманда ]",
    title: "Мы команда архитекторов, стратегов и инноваторов",
    subtitle: "с широкой экспертизой в креативных, технических и управленческих направлениях",
    bodyLines: [
      "Сочетаем архитектурное мышление, стратегический подход и",
      "практический опыт реализации. Работаем на стыке идей,",
      "технологий и управления проектами.",
    ],
    ctaLine: "Да, да, а еще мы шьем\nкрестиком >",
    team: {
      name: "Кремнев Сергей",
      meta: "Мархи · Магистр архитектуры",
      quote:
        "“От идеи до ввода проекта в эксплуатацию все работает\nна прибыль — бесшовно, в BIM-среде, под контролем\nкоманды”",
      roles: ["Сооснователь бюро", "Управляющий партнер"],
      portraits: [
        { label: "Team portrait (selected)", aspect: "3/4" },
        { label: "Team portrait", aspect: "3/4" },
        { label: "Team portrait", aspect: "3/4" },
        { label: "Team portrait", aspect: "3/4" },
        { label: "Team portrait", aspect: "3/4" },
        { label: "Team portrait", aspect: "3/4" },
      ],
    },
  },
  directions: {
    label: "[ направления ]",
    title: "Девелопмент и\nжилая застройка",
    tags: [
      "жилые кластеры",
      "многоэтажная застройка",
      "коттеджные поселки",
      "комплексное освоение территорий",
      "профильные хабы и кампусы",
      "ревитализация территорий",
      "производства",
    ],
    ctaLabel: "Подробнее",
    images: [
      { label: "Direction image left", caption: "Квартал XXI века", aspect: "4/3" },
      { label: "Direction image right", aspect: "16/9" },
    ],
    principles: {
      label: "[ принципы ]",
      title: "Работаем в разных типологиях и масштабах по всему\nмиру,",
      subtitle: "оптимизируем проекты под прибыль, опираясь на спрос\nи рынок",
      cards: [
        {
          title: "Архитектура\nhaute couture",
          body: "Работаем над проектом по\nиндивидуальным меркам,\nвыражая авторское видение,\nдух места и смысл",
          image: { label: "Principle card image (left)", aspect: "16/9" },
        },
        {
          title: "TODO: unreadable title",
          body: "TODO: unreadable body",
          image: { label: "Principle card image (middle)", aspect: "1/1" },
        },
        {
          title: "TODO: unreadable title",
          body: "TODO: unreadable body",
          image: { label: "Principle card image (right)", aspect: "16/9" },
        },
      ],
    },
  },
  stages: {
    label: "[ этапы работ ]",
    title: "Выполняем полный цикл работ в BIM-среде",
    subtitle: "с базой доверенных партнеров и экспертов",
    items: [
      { title: "Предпроектный анализ" },
      { title: "Креативные концепции" },
      { title: "Эскизные проекты" },
      { title: "Проектная и рабочая\nдокументация" },
      { title: "Авторский надзор" },
    ],
    detail: {
      indexLabel: "01",
      title: "Предпроектный анализ",
      body:
        "Погружаемся в контекст: участок, окружение, ограничения, цели проекта. Формируем\nтехническое задание, сценарии использования и основу для дальнейших решений. На этом\nэтапе закладывается логика, экономическая целесообразность и архитектурная идея.",
      duration: "TODO: duration text (hard to read on screenshot)",
      image: { label: "Stage visual (dotted sphere)", aspect: "1/1" },
    },
  },
  contactForm: {
    title: "Консультация",
    subtitle:
      "Обсудим архитектуру и маркетинг, сформируем\nрекомендации и коммерческое предложение",
    fields: [
      { label: "Ваше имя" },
      { label: "Номер*", required: true },
      { label: "Предпочтительный способ связи" },
      { label: "Email" },
    ],
    messageLabel: "Комментарий",
    consentLabel: "Согласен с политикой обработки данных",
    briefLinkLabel: "Подробный бриф",
    submitLabel: "Отправить заявку",
    email: "mail@kremnevatelier.ru",
    phone: "+7 495 799-08-81",
    image: { label: "Office photo", aspect: "16/9" },
  },
  footer: {
    journal: {
      label: "TODO: journal label (left bracket text unreadable)",
      title: "Держите руку на пульсе, делимся новостями:",
      subtitle:
        "регулярно\nпубликуем материалы о проектах, архитектуре, жизни\nателье, бизнесе",
      tabs: ["Все статьи", "Новости", "Календарь"],
      items: [
        {
          title: "Маленькие шаги, большие\nперемены: ревитализация\nзабытых мест",
          metaLeft: "Андрей Кремнев",
          metaRight: "время прочтения: 12 минут",
        },
      ],
      telegramTitle: "Телеграм-канал",
      telegramLinkLabel: "Телеграм-канал",
      telegramBody: "Будни мастерской и команды:\nэксклюзивные материалы\nи сообщество",
      questionsTitle: "Остались вопросы?",
      callLabel: "Заказать звонок",
    },
    newsletterTitle: "Новости Kremnev atelier",
    newsletterPlaceholder: "email",
    newsletterSubmitLabel: "Подписаться",
    newsletterNote:
      "* Подписываясь, вы подтверждаете согласие\nс политикой обработки данных",
    links: ["Контакты", "Открытые вакансии"],
    mapLabel: "Яндекс.Карты ↑",
    cityLabel: "Мастерская\nЯрославль",
    addressLine1: "53/14",
    addressLine2: "Республиканская",
    legalLinks: ["Политика обработки данных", "Политика конфиденциальности"],
    copyright: "© Kremnev atelier 2025",
    madeBy: "Сделано в tapki.digital",
    phone: "+7 495 799-08-81",
    email: "mail@kremnevatelier.ru",
  },
};
