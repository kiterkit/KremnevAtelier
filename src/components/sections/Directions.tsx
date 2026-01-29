import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

type DefaultVariant = {
  variant?: "default";
  title: string;
  groups: ReadonlyArray<{
    title: string;
    items: ReadonlyArray<{ title: string; imageSrc?: string; href?: string }>;
  }>;
  className?: string;
};

type HomeVariant = {
  variant: "home";
  label: string;
  title: string;
  tags: ReadonlyArray<string>;
  ctaLabel: string;
  images: ReadonlyArray<{ label: string; caption?: string; aspect: `${number}/${number}` }>;
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
  className?: string;
};

type DirectionsProps = DefaultVariant | HomeVariant;

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

export default function Directions(props: DirectionsProps) {
  if (props.variant === "home") {
    return (
      <section className={cn("py-12", props.className)}>
        <Container className="space-y-10">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-2 text-sm">{props.label}</div>
            <div className="md:col-span-10 space-y-4">
              <Heading as="h2" size="lg" className="whitespace-pre-line">
                {props.title}
              </Heading>
              <div className="text-sm">
                {props.tags.map((t, idx) => (
                  <span key={t}>
                    {t}
                    {idx < props.tags.length - 1 ? " · " : ""}
                  </span>
                ))}
              </div>
              <div className="text-sm">{props.ctaLabel}</div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {props.images.map((img) => (
              <div key={img.label} className="space-y-2">
                <ImagePlaceholder label={img.label} aspect={img.aspect} />
                {img.caption ? <div className="text-sm">{img.caption}</div> : null}
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="text-sm">{props.principles.label}</div>
            <div className="space-y-2">
              <Heading as="h2" size="lg" className="whitespace-pre-line">
                {props.principles.title}
              </Heading>
              <div className="text-sm whitespace-pre-line">
                {props.principles.subtitle}
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {props.principles.cards.map((c) => (
                <div key={c.title} className="space-y-3">
                  <ImagePlaceholder label={c.image.label} aspect={c.image.aspect} />
                  <Heading as="h3" size="md" className="text-base whitespace-pre-line">
                    {c.title}
                  </Heading>
                  <p className="text-sm whitespace-pre-line">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={cn("py-12", props.className)}>
      <Container>
        <Heading as="h2" size="lg">
          {props.title}
        </Heading>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {props.groups.map((group) => (
            <div key={group.title} className="space-y-4">
              <Heading as="h3" size="md" className="text-base">
                {group.title}
              </Heading>
              <div className="grid gap-4 sm:grid-cols-2">
                {group.items.map((item) => {
                  const content = (
                    <>
                      <div className="aspect-[4/3] rounded-2xl border border-gray bg-beige" />
                      <div className="mt-3 text-sm font-medium">{item.title}</div>
                    </>
                  );

                  return item.href ? (
                    <Link key={item.title} href={item.href} className="block">
                      <Card className="h-full">{content}</Card>
                    </Link>
                  ) : (
                    <Card key={item.title} className="h-full">
                      {content}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
