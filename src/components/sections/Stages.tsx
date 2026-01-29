import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

type DefaultVariant = {
  variant?: "default";
  title: string;
  items: ReadonlyArray<{
    indexLabel: string;
    title: string;
    body: string;
    duration?: string;
  }>;
  className?: string;
};

type HomeVariant = {
  variant: "home";
  label: string;
  title: string;
  subtitle: string;
  items: ReadonlyArray<{ title: string }>;
  detail: {
    indexLabel: string;
    title: string;
    body: string;
    duration: string;
    image: { label: string; aspect: `${number}/${number}` };
  };
  className?: string;
};

type StagesProps = DefaultVariant | HomeVariant;

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

export default function Stages(props: StagesProps) {
  if (props.variant === "home") {
    return (
      <section className={cn("py-12", props.className)}>
        <Container className="space-y-8">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-2 text-sm">{props.label}</div>
            <div className="md:col-span-10 space-y-2">
              <Heading as="h2" size="lg">
                {props.title}
              </Heading>
              <div className="text-sm">{props.subtitle}</div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4 space-y-3">
              {props.items.map((it) => (
                <div key={it.title} className="text-sm whitespace-pre-line">
                  {it.title}
                </div>
              ))}
            </div>
            <div className="lg:col-span-8 space-y-4">
              <div className="text-sm">{props.detail.indexLabel}</div>
              <ImagePlaceholder
                label={props.detail.image.label}
                aspect={props.detail.image.aspect}
              />
              <Heading as="h3" size="md" className="text-base">
                {props.detail.title}
              </Heading>
              <p className="text-sm whitespace-pre-line">{props.detail.body}</p>
              <div className="text-sm">{props.detail.duration}</div>
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

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {props.items.map((item) => (
            <Card key={item.indexLabel + item.title} className="h-full">
              <div className="flex items-baseline justify-between gap-4">
                <div className="text-xs font-medium uppercase tracking-wider text-black/60">
                  {item.indexLabel}
                </div>
                {item.duration ? (
                  <div className="text-xs text-black/50">{item.duration}</div>
                ) : null}
              </div>
              <Heading as="h3" size="md" className="mt-3 text-base">
                {item.title}
              </Heading>
              <p className="mt-2 text-sm leading-6 text-black/70">{item.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
