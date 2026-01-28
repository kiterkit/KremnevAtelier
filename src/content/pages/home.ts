export const homePage = {
  seo: {
    title: "Kremnev Atelier",
    description:
      "Architecture-first scaffolding for a marketing site. Content is hardcoded in TypeScript for now.",
  },
  header: {
    navItems: [
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "About", href: "/about" },
      { label: "Vacancies", href: "/vacancies" },
    ],
    cta: { label: "Consultation", href: "/contacts" },
    contact: { label: "+1 (000) 000-00-00", href: "/contacts" },
    lang: "ru",
    langHref: { ru: "#", en: "#" },
  },
  hero: {
    title: "Kremnev Atelier",
    subtitle:
      "Neutral placeholders today. A clean, scalable structure for a serious marketing site tomorrow.",
    locationLabel: "Architecture / Interiors",
    metaLeft: ["Full-cycle design", "Author supervision", "Concept → build"],
    metaRight: ["Residential", "Commercial", "Public spaces"],
    primaryCta: { label: "Get consultation", href: "/contacts" },
    secondaryCta: { label: "See services", href: "/services" },
  },
  featuredProjects: {
    title: "Featured projects",
    items: [
      {
        title: "Project One",
        description: "Short description placeholder for the featured project.",
        tags: ["Concept", "Interior"],
        href: "/projects",
      },
      {
        title: "Project Two",
        description: "Short description placeholder for the featured project.",
        tags: ["Architecture", "Build"],
        href: "/projects",
      },
    ],
  },
  clientLogos: {
    title: "Trusted by",
    logos: [
      { name: "Client A" },
      { name: "Client B" },
      { name: "Client C" },
      { name: "Client D" },
      { name: "Client E" },
      { name: "Client F" },
      { name: "Client G" },
      { name: "Client H" },
    ],
  },
  services: {
    title: "Services",
    items: [
      { title: "Concept", description: "Moodboards, planning, visual direction." },
      { title: "Architecture", description: "Layouts, drawings, coordination." },
      { title: "Interiors", description: "Material selection, specs, details." },
      { title: "Author supervision", description: "On-site reviews and support." },
      { title: "Procurement", description: "Vendor selection and ordering." },
      { title: "Turnkey delivery", description: "From brief to handover." },
    ],
  },
  aboutTeam: {
    title: "About / Team",
    body: "Short studio intro placeholder. Replace with your positioning, experience, and approach.",
    bullets: [
      "Small senior team, high signal.",
      "Clear process and milestones.",
      "Design that survives implementation.",
    ],
  },
  directions: {
    title: "Directions",
    groups: [
      {
        title: "Architecture",
        items: [
          { title: "Private houses", href: "/projects" },
          { title: "Public spaces", href: "/projects" },
          { title: "Commercial", href: "/projects" },
          { title: "Reconstruction", href: "/projects" },
        ],
      },
      {
        title: "Interiors",
        items: [
          { title: "Apartments", href: "/projects" },
          { title: "Restaurants", href: "/projects" },
          { title: "Offices", href: "/projects" },
          { title: "Retail", href: "/projects" },
        ],
      },
    ],
  },
  contactForm: {
    title: "Consultation",
    submitLabel: "Send",
    policyHref: "/privacy",
  },
  stages: {
    title: "Process",
    items: [
      {
        indexLabel: "01",
        title: "Brief",
        body: "We align goals, constraints, and references.",
        duration: "1–2 days",
      },
      {
        indexLabel: "02",
        title: "Concept",
        body: "We define planning, style, and key decisions.",
        duration: "1–2 weeks",
      },
      {
        indexLabel: "03",
        title: "Documentation",
        body: "We produce drawings/specs ready for implementation.",
        duration: "2–4 weeks",
      },
      {
        indexLabel: "04",
        title: "Implementation",
        body: "We support build with reviews and adjustments.",
        duration: "by scope",
      },
      {
        indexLabel: "05",
        title: "Handover",
        body: "We finalize and deliver a consistent result.",
        duration: "1 week",
      },
    ],
  },
  journalCta: {
    title: "Journal / Social",
    body: "Placeholder block for posts, updates, or social links.",
    actions: [
      { label: "Instagram", href: "#" },
      { label: "Telegram", href: "#" },
    ],
    questionBlock: {
      title: "Have a project in mind?",
      body: "Send a short brief — we’ll reply with next steps.",
      action: { label: "Contact", href: "/contacts" },
    },
  },
  footer: {
    contacts: {
      addressLines: ["Address placeholder", "City, Country"],
    },
    links: [
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Contacts", href: "/contacts" },
    ],
    legal: {
      privacyHref: "/privacy",
      termsHref: "/terms",
      cookiesHref: "/cookies",
      imprintHref: "/imprint",
    },
  },
} as const;
