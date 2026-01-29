# Kremnev Atelier (marketing site)

Next.js (App Router) + TypeScript + Tailwind. Content is hardcoded in TS (no DB/CMS).

## Dev

```bash
npm install
npm run dev
```

Local dev runs at `http://localhost:3010`.

## Environment

- `NEXT_PUBLIC_SITE_URL=` (optional)
  - Used for `metadataBase`, canonical host/https redirects, `robots.txt`, and `sitemap.xml`
  - In local dev we fall back to `http://localhost:3010`

Copy:

```bash
cp .env.example .env.local
```

## Where to edit content

- Home: `src/content/pages/home.ts`
- Legal copy:
  - `src/content/legal/privacy.ts`
  - `src/content/legal/terms.ts`
  - `src/content/legal/cookies.ts`
  - `src/content/legal/imprint.ts`
- Services slugs: `src/content/services/*.ts`
- Projects slugs: `src/content/projects/*.ts`
- Journal slugs: `src/content/journal/*.ts`
- SEO landings:
  - Work types: `src/content/seo/work-types/*.ts`
  - Niches: `src/content/seo/niches/*.ts`

## Site map (routes)

### Static pages
- `/` (Home long-scroll)
- `/about` (Про ателье)
- `/contacts` (Контакты)
- `/projects` (Проекты)
- `/journal` (Журнал)
- `/cooperation` (Сотрудничество)
- `/pricing`
- `/services`

### Legal
- `/privacy` (Privacy Policy)
- `/terms` (Terms of Use)
- `/cookies` (Cookies Policy)
- `/imprint` (Imprint / Legal Notice)

### Dynamic routes (SSG via hardcoded slugs)

**Projects** (`/projects/[slug]`)
- `/projects/loft-apartment`
- `/projects/wellness-club`

**Journal** (`/journal/[slug]`)
- `/journal/studio-notes`
- `/journal/material-palette`

**Services** (`/services/[slug]`)
- `/services/consulting`
- `/services/audit`

**Locations** (`/locations/[slug]`)
- `/locations/downtown`
- `/locations/suburb`

**SEO landing — work types** (`/seo/work-types/[slug]`)
- `/seo/work-types/consulting`
- `/seo/work-types/territory-planning`
- `/seo/work-types/architectural-design`
- `/seo/work-types/landscaping`
- `/seo/work-types/interior-design`
- `/seo/work-types/product-design`
- `/seo/work-types/branding`

**SEO landing — niches** (`/seo/niches/[slug]`)
- `/seo/niches/development`
- `/seo/niches/public-architecture`
- `/seo/niches/retail`
- `/seo/niches/healthcare`
- `/seo/niches/education`
- `/seo/niches/sport-wellness`
- `/seo/niches/horeca`
- `/seo/niches/offices`
- `/seo/niches/industrial`
- `/seo/niches/private`

## Technical pages

- `not-found`: `src/app/not-found.tsx`
- `error boundary`: `src/app/error.tsx`
- `loading`: `src/app/loading.tsx`
- `robots.txt`: `src/app/robots.ts`
- `sitemap.xml`: `src/app/sitemap.ts`
- `manifest`: `src/app/manifest.ts`
- `OG image`: `src/app/opengraph-image.tsx`
- `Twitter image`: `src/app/twitter-image.tsx`

More dev notes: `docs/dev.md`.

## Layout padding ranges

The shared `layout-padding` utility controls the left/right gutters for every page container.

- **0–600px**: `16px` padding-inline (base mobile).
- **600–1080px**: `24px` padding-inline.
- **1080–1440px**: `40px` padding-inline (first 1080–1920 range).
- **1440–1920px**: `60px` padding-inline (second 1080–1920 slice, via the 1440 breakpoint).
- **≥1920px**: still `80px` (container max-width is 1920px, so the gutter stays 80px even on larger viewports).
