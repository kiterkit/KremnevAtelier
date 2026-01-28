Add font files here (not committed).

Installed from this Mac (Font Book):
- `public/fonts/gros-ventre-*.ttf` (headings)

Body font:
- Uses `Inter` (self-hosted via `next/font/google`) as fallback.
- If you later add a licensed `Google Sans` webfont, update `src/app/layout.tsx` to prefer it.

The site uses:
- `--font-display` for headings (see `src/components/ui/Heading.tsx`)
- `--font-body` for body text (see `src/app/layout.tsx`)
