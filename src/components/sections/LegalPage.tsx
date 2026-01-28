import Link from "next/link";
import Hero from "@/components/sections/Hero";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { cn } from "@/lib/cn";
import type { LegalDoc } from "@/content/legal/types";

export default function LegalPage({
  doc,
  className,
}: {
  doc: LegalDoc;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <Hero
        title={doc.h1}
        subtitle={doc.seo.description}
        locationLabel="Legal"
        metaLeft={[`Last updated: ${doc.lastUpdated}`]}
      />

      <section className="py-8">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <div className="sticky top-24 rounded-2xl border border-gray bg-white p-4">
                <div className="text-sm font-medium text-black/80">Legal</div>
                <nav className="mt-3 flex flex-col gap-2 text-sm">
                  {doc.relatedLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="text-black/70 hover:text-black"
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="lg:col-span-9">
              <div className="space-y-10 rounded-3xl border border-gray bg-white p-6 sm:p-8">
                {doc.sections.map((section) => (
                  <section key={section.title} className="space-y-3">
                    <Heading as="h2" size="lg">
                      {section.title}
                    </Heading>
                    <div className="space-y-3 text-sm leading-6 text-black/70">
                      {section.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

