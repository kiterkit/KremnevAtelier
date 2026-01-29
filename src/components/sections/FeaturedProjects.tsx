import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

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

export default function FeaturedProjects({
  items,
  trust,
  className,
}: {
  items: ReadonlyArray<{
    title: string;
    ctaLabel: string;
    href: string;
    image: { label: string; aspect: `${number}/${number}` };
  }>;
  trust?: {
    label: string;
    title: string;
    subtitle: string;
    body: string;
    logos: ReadonlyArray<string>;
  };
  className?: string;
}) {
  return (
    <section className={cn("py-12", className)}>
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <Card key={item.title}>
              <ImagePlaceholder
                label={item.image.label}
                aspect={item.image.aspect}
              />
              <div className="mt-3 flex items-center justify-between gap-4">
                <div className="text-sm">{item.title}</div>
                <Link href={item.href} className="text-sm">
                  {item.ctaLabel} →
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {trust ? (
          <div className="mt-16 space-y-6">
            <div className="text-sm">{trust.label}</div>
            <div className="space-y-2">
              <Heading as="h2" size="lg">
                {trust.title}
              </Heading>
              <div className="text-sm">{trust.subtitle}</div>
            </div>
            <p className="text-sm whitespace-pre-line">{trust.body}</p>
            <p className="text-sm">
              {trust.logos.map((l) => (
                <span key={l} className="mr-6 inline-block">
                  {l}
                </span>
              ))}
            </p>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
