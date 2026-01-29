import Link from "next/link";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type DefaultVariant = {
  variant?: "default";
  contacts?: { addressLines?: ReadonlyArray<string> };
  links?: ReadonlyArray<{ label: string; href: string }>;
  legal?: {
    privacyHref?: string;
    termsHref?: string;
    cookiesHref?: string;
    imprintHref?: string;
  };
};

type HomeVariant = {
  variant: "home";
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

type FooterProps = DefaultVariant | HomeVariant;

function ImagePlaceholder({
  label,
  aspect,
}: {
  label: string;
  aspect: `${number}/${number}`;
}) {
  return (
    <div
      className={cn(
        `aspect-[${aspect}]`,
        "bg-gray/10 flex items-center justify-center text-xs text-black/60",
      )}
    >
      IMAGE PLACEHOLDER: {label}
    </div>
  );
}

export default function Footer(props: FooterProps) {
  if (props.variant === "home") {
    return (
      <footer className="py-16">
        <Container className="space-y-16">
          <section className="space-y-6">
            <div className="text-sm">{props.journal.label}</div>
            <div className="space-y-2">
              <div className="text-lg whitespace-pre-line">{props.journal.title}</div>
              <div className="text-sm whitespace-pre-line">{props.journal.subtitle}</div>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              {props.journal.tabs.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-6 space-y-3">
                <ImagePlaceholder label="Journal article image" aspect="16/9" />
                {props.journal.items.map((it) => (
                  <div key={it.title} className="space-y-2">
                    <div className="text-sm whitespace-pre-line">{it.title}</div>
                    <div className="flex items-center justify-between gap-6 text-xs">
                      <span>{it.metaLeft}</span>
                      <span>{it.metaRight}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="lg:col-span-6 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <ImagePlaceholder label="Journal image (top right)" aspect="16/9" />
                  <ImagePlaceholder label="Journal image (bottom right)" aspect="3/4" />
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">{props.journal.telegramTitle}</div>
                  <div className="text-sm underline">{props.journal.telegramLinkLabel}</div>
                  <div className="text-sm whitespace-pre-line">{props.journal.telegramBody}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">{props.journal.questionsTitle}</div>
                  <div className="text-sm">{props.phone}</div>
                  <div className="text-sm">{props.email}</div>
                  <div className="text-sm underline">{props.journal.callLabel}</div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-lg">{props.newsletterTitle}</div>
              <div className="flex gap-3">
                <input
                  className="h-11 w-full rounded-xl border border-gray bg-white px-4 text-sm"
                  placeholder={props.newsletterPlaceholder}
                />
                <button className="h-11 rounded-xl border border-gray px-4 text-sm">
                  {props.newsletterSubmitLabel}
                </button>
              </div>
              <div className="text-xs whitespace-pre-line">{props.newsletterNote}</div>
              <div className="space-y-2 text-sm">
                {props.links.map((l) => (
                  <div key={l}>{l}</div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="text-sm">{props.mapLabel}</div>
              <ImagePlaceholder label="Map" aspect="16/9" />
              <div className="grid gap-2 text-sm md:grid-cols-2">
                <div className="whitespace-pre-line">{props.cityLabel}</div>
                <div className="text-right">
                  <div>{props.addressLine1}</div>
                  <div>{props.addressLine2}</div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 border-t border-gray pt-8 md:grid-cols-2">
            <div className="space-y-2 text-sm">
              {props.legalLinks.map((l) => (
                <div key={l}>{l}</div>
              ))}
              <div>{props.copyright}</div>
              <div>{props.madeBy}</div>
            </div>
            <div className="space-y-2 text-sm md:text-right">
              <div>{props.phone}</div>
              <div>{props.email}</div>
            </div>
          </section>
        </Container>
      </footer>
    );
  }

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
            {(props.links ?? []).map((l) => (
              <Link
                key={l.href + l.label}
                href={l.href}
                className={cn("text-black/70 hover:text-black")}
              >
                {l.label}
              </Link>
            ))}
            {props.legal?.privacyHref ? (
              <Link
                href={props.legal.privacyHref}
                className={cn("text-black/70 hover:text-black")}
              >
                Privacy
              </Link>
            ) : null}
            {props.legal?.termsHref ? (
              <Link
                href={props.legal.termsHref}
                className={cn("text-black/70 hover:text-black")}
              >
                Terms
              </Link>
            ) : null}
            {props.legal?.cookiesHref ? (
              <Link
                href={props.legal.cookiesHref}
                className={cn("text-black/70 hover:text-black")}
              >
                Cookies
              </Link>
            ) : null}
            {props.legal?.imprintHref ? (
              <Link
                href={props.legal.imprintHref}
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
            {(
              props.contacts?.addressLines ?? ["Address placeholder", "City, Country"]
            ).map(
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
