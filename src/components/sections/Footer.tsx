import Link from "next/link";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";

export default function Footer({
  contacts,
  links,
  legal,
}: {
  contacts?: { addressLines?: ReadonlyArray<string> };
  links?: ReadonlyArray<{ label: string; href: string }>;
  legal?: {
    privacyHref?: string;
    termsHref?: string;
    cookiesHref?: string;
    imprintHref?: string;
  };
}) {
  return (
    <footer className="border-t border-gray bg-beige">
      <Container className="grid gap-8 py-12 md:grid-cols-3">
        <div className="space-y-2">
          <div className="font-[var(--font-display)] text-lg tracking-tight">
            Kremnev Atelier
          </div>
          <div className="text-sm text-black/70">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-medium text-black/80">Links</div>
          <div className="flex flex-col gap-2 text-sm">
            {(links ?? []).map((l) => (
              <Link
                key={l.href + l.label}
                href={l.href}
                className={cn("text-black/70 hover:text-black")}
              >
                {l.label}
              </Link>
            ))}
            {legal?.privacyHref ? (
              <Link
                href={legal.privacyHref}
                className={cn("text-black/70 hover:text-black")}
              >
                Privacy
              </Link>
            ) : null}
            {legal?.termsHref ? (
              <Link
                href={legal.termsHref}
                className={cn("text-black/70 hover:text-black")}
              >
                Terms
              </Link>
            ) : null}
            {legal?.cookiesHref ? (
              <Link
                href={legal.cookiesHref}
                className={cn("text-black/70 hover:text-black")}
              >
                Cookies
              </Link>
            ) : null}
            {legal?.imprintHref ? (
              <Link
                href={legal.imprintHref}
                className={cn("text-black/70 hover:text-black")}
              >
                Imprint
              </Link>
            ) : null}
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-medium text-black/80">Contacts</div>
          <div className="text-sm text-black/70">
            {(contacts?.addressLines ?? ["Address placeholder", "City, Country"]).map(
              (line) => (
                <div key={line}>{line}</div>
              ),
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
}
