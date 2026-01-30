"use client";

import type { CSSProperties, PointerEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { buttonClassName } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

/* ------------------------------------------------------------------ */
/*  Slide data                                                         */
/* ------------------------------------------------------------------ */

type Slide = {
  name: string;
  href: string;
  rightImage: string;
  leftImage: string;
};

const slides: Slide[] = [
  {
    name: "Музей вина Urban Wine",
    href: "/projects",
    rightImage: "/images/vineHeroR.jpg",
    leftImage: "/images/vineHeroL.jpg",
  },
  {
    name: "Бутик-отель Lancavatara",
    href: "/projects",
    rightImage: "",
    leftImage: "",
  },
  {
    name: "Квартал XXI века",
    href: "/projects",
    rightImage: "",
    leftImage: "",
  },
];

const RIGHT_W = 710;
const RIGHT_H = 654;
const LEFT_W = 710;
const LEFT_H = 392;
const IMG_GAP = 20;
const SLIDE_MS = 420;

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type HomeHeroProps = {
  title?: undefined;
  className?: string;
};

type PageHeroProps = {
  title: string;
  subtitle?: string;
  locationLabel?: string;
  metaLeft?: ReadonlyArray<string>;
  metaRight?: ReadonlyArray<string>;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
};

type HeroProps = HomeHeroProps | PageHeroProps;

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function PlaceholderImage({ label, className }: { label: string; className?: string }) {
  return (
    <div className={cn("flex items-center justify-center bg-black/[0.04] text-black/30 text-xs select-none", className)}>
      {label}
    </div>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg width="6" height="12" viewBox="0 0 6 12" fill="none" className={className}>
      <path d="M0.75 0.75L4.75 5.75L0.75 10.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Home slider                                                        */
/* ------------------------------------------------------------------ */

type AnimState = {
  dir: "left" | "right";
  from: number;
  to: number;
  phase: "enter" | "move";
};

function HomeHero({ className }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [anim, setAnim] = useState<AnimState | null>(null);
  const pointerStartRef = useRef<number | null>(null);
  const pointerIdRef = useRef<number | null>(null);

  const slide = slides[currentIndex];
  const animPhase = anim?.phase ?? null;
  const animTo = anim?.to ?? 0;

  /* ---- navigation ---- */
  const goTo = useCallback(
    (dir: "left" | "right") => {
      if (anim) return;
      const to =
        dir === "right"
          ? (currentIndex + 1) % slides.length
          : (currentIndex - 1 + slides.length) % slides.length;
      setAnim({ dir, from: currentIndex, to, phase: "enter" });
    },
    [anim, currentIndex],
  );
  const goNext = useCallback(() => goTo("right"), [goTo]);
  const goPrev = useCallback(() => goTo("left"), [goTo]);

  /* phase "enter" → mount strip off-screen, then kick "move" */
  useEffect(() => {
    if (animPhase !== "enter") return;
    let id: number;
    id = requestAnimationFrame(() => {
      id = requestAnimationFrame(() => {
        setAnim((prev) => (prev ? { ...prev, phase: "move" } : null));
      });
    });
    return () => cancelAnimationFrame(id);
  }, [animPhase]);

  /* phase "move" → after transition finishes, commit new index */
  useEffect(() => {
    if (animPhase !== "move") return;
    const t = setTimeout(() => {
      setCurrentIndex(animTo);
      setAnim(null);
    }, SLIDE_MS);
    return () => clearTimeout(t);
  }, [animPhase, animTo]);

  /* ---- pointer swipe (skip for buttons) ---- */
  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("button, a")) return;
    pointerStartRef.current = e.clientX;
    pointerIdRef.current = e.pointerId;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (pointerStartRef.current !== null) {
      const d = e.clientX - pointerStartRef.current;
      if (d > 40) goPrev();
      else if (d < -40) goNext();
      pointerStartRef.current = null;
    }
    if (pointerIdRef.current !== null) {
      e.currentTarget.releasePointerCapture(pointerIdRef.current);
      pointerIdRef.current = null;
    }
  };

  /* ---- slide strip rendering ---- */
  const isRight = anim?.dir === "right";

  function stripStyle(): CSSProperties {
    if (!anim) return { width: "100%", height: "100%" };
    const enterX = isRight ? "0%" : "-50%";
    const moveX = isRight ? "-50%" : "0%";
    return {
      display: "flex",
      width: "200%",
      height: "100%",
      transform: `translateX(${anim.phase === "enter" ? enterX : moveX})`,
      transition:
        anim.phase === "move"
          ? `transform ${SLIDE_MS}ms cubic-bezier(0.4,0,0.2,1)`
          : "none",
    };
  }

  function renderImage(s: Slide, which: "right" | "left", w: number, h: number) {
    const src = which === "right" ? s.rightImage : s.leftImage;
    return src ? (
      <img
        src={src}
        alt={s.name}
        className="h-full w-full object-cover"
        width={w}
        height={h}
      />
    ) : (
      <PlaceholderImage label={s.name} className="h-full w-full" />
    );
  }

  function renderSlot(which: "right" | "left", w: number, h: number) {
    if (!anim) return renderImage(slide, which, w, h);

    const fromSlide = slides[anim.from];
    const toSlide = slides[anim.to];
    const first = isRight ? fromSlide : toSlide;
    const second = isRight ? toSlide : fromSlide;

    return (
      <div style={stripStyle()}>
        <div style={{ width: "50%", height: "100%", flexShrink: 0 }}>
          {renderImage(first, which, w, h)}
        </div>
        <div style={{ width: "50%", height: "100%", flexShrink: 0 }}>
          {renderImage(second, which, w, h)}
        </div>
      </div>
    );
  }

  /* ---- slidebar: 1/N indicator slides across N positions ---- */
  const barIndex = anim?.phase === "move" ? anim.to : currentIndex;
  const barOffset = barIndex * 100;

  /* ---- displayed project name ---- */
  const displayedName = anim ? slides[anim.from].name : slide.name;
  const displayedHref = anim ? slides[anim.to].href : slide.href;

  const root: CSSProperties = {
    "--rl": `calc(100vw - ${RIGHT_W}px)`,
  } as CSSProperties;

  return (
    <div
      className={cn("relative min-h-screen overflow-hidden bg-beige", className)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      style={root}
    >
      {/* ---- logo lettering ---- */}
      <img
        src="/brand/logo_lettering.svg"
        alt="Kremnev atelier"
        className="pointer-events-none absolute"
        style={{
          left: 80,
          bottom: `${LEFT_H + IMG_GAP}px`,
        }}
        draggable={false}
      />

      {/* ---- right image ---- */}
      <div
        className="pointer-events-none absolute top-0 overflow-hidden border border-black/[0.06]"
        style={{ left: "var(--rl)", width: RIGHT_W, height: RIGHT_H }}
      >
        {renderSlot("right", RIGHT_W, RIGHT_H)}
      </div>

      {/* ---- left image ---- */}
      <div
        className="pointer-events-none absolute bottom-0 overflow-hidden border border-black/[0.06]"
        style={{
          left: `calc(var(--rl) - ${IMG_GAP}px - ${LEFT_W}px)`,
          width: LEFT_W,
          height: LEFT_H,
        }}
      >
        {renderSlot("left", LEFT_W, LEFT_H)}
      </div>

      {/* ---- project name + Подробнее ---- */}
      <div
        className="pointer-events-none absolute flex items-center justify-between"
        style={{
          left: "var(--rl)",
          right: "80px",
          top: `${RIGHT_H + IMG_GAP}px`,
        }}
      >
        <p
          className="font-[var(--font-display)] text-sm font-semibold text-black/60"
          style={{
            opacity: anim ? 0 : 1,
            transition: `opacity ${SLIDE_MS / 2}ms ease`,
          }}
        >
          {displayedName}
        </p>

        <Link
          href={displayedHref}
          className="pointer-events-auto inline-flex items-center gap-[6px] text-sm font-semibold text-black hover:text-blue transition-colors duration-150"
        >
          Подробнее
          <ArrowIcon className="h-[10px] w-[5px]" />
        </Link>
      </div>

      {/* ---- slider bar ---- */}
      <div
        className="pointer-events-auto absolute flex items-center gap-[7px]"
        style={{ left: "var(--rl)", right: "80px", bottom: "40px" }}
      >
        {/* left dot → prev */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Предыдущий слайд"
          className="flex items-center justify-center text-black"
        >
          <span className="h-[7px] w-[7px] rounded-full bg-current" />
        </button>

        {/* slidebar: 1/N indicator slides across N positions */}
        <div className="relative flex-1 h-[7px] rounded-full border border-black/[0.15] overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-black"
            style={{
              width: `${100 / slides.length}%`,
              transform: `translateX(${barOffset}%)`,
              transition: `transform ${SLIDE_MS}ms cubic-bezier(0.4,0,0.2,1)`,
            }}
          />
        </div>

        {/* two right dots → next */}
        <button
          type="button"
          onClick={goNext}
          aria-label="Следующий слайд"
          className="flex items-center gap-[4px] text-black"
        >
          <span className="h-[7px] w-[7px] rounded-full bg-current" />
          <span className="h-[7px] w-[7px] rounded-full bg-current" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Generic page hero                                                  */
/* ------------------------------------------------------------------ */

function PageHero(props: PageHeroProps) {
  return (
    <section className={cn("py-16", props.className)}>
      <Container>
        {props.locationLabel && (
          <div className="mb-4 text-xs font-medium uppercase tracking-[var(--tracking-caps)] text-[var(--text-muted)]">
            {props.locationLabel}
          </div>
        )}

        <Heading as="h1" size="xl">
          {props.title}
        </Heading>

        {props.subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-7 text-black/60">
            {props.subtitle}
          </p>
        )}

        {(props.metaLeft?.length || props.metaRight?.length) && (
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-black/50">
            {props.metaLeft?.map((m) => <span key={m}>{m}</span>)}
            {props.metaRight?.map((m) => <span key={m}>{m}</span>)}
          </div>
        )}

        {(props.primaryCta || props.secondaryCta) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {props.primaryCta && (
              <Link
                href={props.primaryCta.href}
                className={buttonClassName({ variant: "primary" })}
              >
                {props.primaryCta.label}
              </Link>
            )}
            {props.secondaryCta && (
              <Link
                href={props.secondaryCta.href}
                className={buttonClassName({ variant: "secondary" })}
              >
                {props.secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Export                                                              */
/* ------------------------------------------------------------------ */

export default function Hero(props: HeroProps) {
  if (props.title !== undefined) {
    return <PageHero {...props} />;
  }
  return <HomeHero className={props.className} />;
}
