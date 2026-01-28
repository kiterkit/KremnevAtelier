import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { cn } from "@/lib/cn";

export default function AboutTeam({
  title,
  body,
  imageSrc,
  bullets,
  className,
}: {
  title: string;
  body: string;
  imageSrc?: string;
  bullets?: ReadonlyArray<string>;
  className?: string;
}) {
  return (
    <section className={cn("py-12", className)}>
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Heading as="h2" size="lg">
              {title}
            </Heading>
            <p className="mt-4 max-w-2xl text-base leading-7 text-black/70">
              {body}
            </p>
            {bullets?.length ? (
              <ul className="mt-6 space-y-2 text-sm text-black/70">
                {bullets.map((b) => (
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
            {imageSrc ? (
              <div className="mt-3 text-xs text-black/50">{imageSrc}</div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
