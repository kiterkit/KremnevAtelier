# Development

## Install
`npm install`

## Run
`npm run dev`

Local dev runs at `http://localhost:3010` (or the port configured in `package.json`).

## Site URL (sitemap/robots/canonical redirects)
Set `NEXT_PUBLIC_SITE_URL` for production:

1. Copy `.env.example` to `.env.local`
2. Set `NEXT_PUBLIC_SITE_URL=https://your-domain.com`

Middleware will only enforce canonical host + HTTPS when `NEXT_PUBLIC_SITE_URL` is set to a non-local URL.

## Legal copy
Edit the legal documents here:
- `src/content/legal/privacy.ts`
- `src/content/legal/terms.ts`
- `src/content/legal/cookies.ts`
- `src/content/legal/imprint.ts`

