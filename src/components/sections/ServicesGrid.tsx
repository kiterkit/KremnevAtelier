import Link from "next/link";
import Container from "@/components/ui/Container";
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

export default function ServicesGrid({
  label,
  subtitle,
  image,
  title,
  items,
  featured,
  className,
}: {
  label?: string;
  subtitle?: string;
  image?: { label: string; aspect: `${number}/${number}` };
  title: string;
  items: ReadonlyArray<{ title: string; description?: string; href?: string }>;
  featured?: { projectTitle: string; body: string; linkLabel: string };
  className?: string;
}) {
  return (
    <section className={cn("py-12", className)}>
      <Container>
        {label ? <div className="text-sm">{label}</div> : null}
        <div className="mt-4 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-6">
            <Heading as="h2" size="lg">
              {title}
            </Heading>
            {subtitle ? <div className="mt-2 text-sm">{subtitle}</div> : null}

            <div className="mt-6 space-y-2">
              {items.map((item) => (
                <div key={item.title} className="space-y-1">
                  <div className="text-sm whitespace-pre-line">{item.title}</div>
                  {item.description ? (
                    <div className="text-sm whitespace-pre-line">
                      {item.description}
                    </div>
                  ) : null}
                  {item.href ? (
                    <div className="text-sm">
                      <Link href={item.href} className="underline">
                        Подробнее →
                      </Link>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-6">
            {image ? (
              <ImagePlaceholder label={image.label} aspect={image.aspect} />
            ) : null}
          </div>
        </div>

        {featured ? (
          <div className="mt-10 space-y-3">
            <Heading as="h3" size="md" className="text-base">
              {featured.projectTitle}
            </Heading>
            <p className="text-sm whitespace-pre-line">{featured.body}</p>
            <div className="text-sm">
              <Link href="/services" className="underline">
                {featured.linkLabel} →
              </Link>
            </div>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
