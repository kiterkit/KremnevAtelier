import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

type DefaultVariant = {
  variant?: "default";
  title: string;
  body: string;
  imageSrc?: string;
  bullets?: ReadonlyArray<string>;
  className?: string;
};

type HomeVariant = {
  variant: "home";
  label: string;
  title: string;
  subtitle: string;
  bodyLines: ReadonlyArray<string>;
  ctaLine: string;
  team: {
    name: string;
    meta: string;
    quote: string;
    roles: ReadonlyArray<string>;
    portraits: ReadonlyArray<{ label: string; aspect: `${number}/${number}` }>;
  };
  className?: string;
};

type AboutTeamProps = DefaultVariant | HomeVariant;

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

export default function AboutTeam(props: AboutTeamProps) {
  if (props.variant === "home") {
    return (
      <section className={cn("py-12", props.className)}>
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-2">
              <div className="text-sm whitespace-pre-line">{props.label}</div>
            </div>
            <div className="lg:col-span-10 space-y-4">
              <Heading as="h2" size="lg">
                {props.title}
              </Heading>
              <div className="text-sm whitespace-pre-line">{props.subtitle}</div>
              <p className="text-sm whitespace-pre-line">
                {props.bodyLines.join("\n")}
              </p>
              <div className="text-sm whitespace-pre-line">{props.ctaLine}</div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4 space-y-2">
              <Heading as="h3" size="md" className="text-base">
                {props.team.name}
              </Heading>
              <div className="text-sm">{props.team.meta}</div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-sm whitespace-pre-line">{props.team.quote}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                {props.team.roles.map((r) => (
                  <span key={r}>{r}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {props.team.portraits.map((p) => (
              <ImagePlaceholder key={p.label} label={p.label} aspect={p.aspect} />
            ))}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={cn("py-12", props.className)}>
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Heading as="h2" size="lg">
              {props.title}
            </Heading>
            <p className="mt-4 max-w-2xl text-base leading-7 text-black/70">
              {props.body}
            </p>
            {props.bullets?.length ? (
              <ul className="mt-6 space-y-2 text-sm text-black/70">
                {props.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[2px] text-blue">•</span>
                    <span className="leading-6">{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-3xl border border-gray bg-white" />
            {props.imageSrc ? (
              <div className="mt-3 text-xs text-black/50">{props.imageSrc}</div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
