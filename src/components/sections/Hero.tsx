"use client";

import type { CSSProperties, PointerEvent } from "react";
import { useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Slide = {
  name: string;
  rightImage: string;
  leftImage: string;
};

const slides: Slide[] = [
  {
    name: "Project Mirage",
    rightImage: "/images/vineHeroR.jpg",
    leftImage: "/images/vineHeroL.jpg",
  },
  {
    name: "Studio Terrace",
    rightImage: "/images/vineHeroR.jpg",
    leftImage: "/images/vineHeroL.jpg",
  },
  {
    name: "Field Atelier",
    rightImage: "/images/vineHeroR.jpg",
    leftImage: "/images/vineHeroL.jpg",
  },
];

const RIGHT_IMAGE_WIDTH = 710;
const RIGHT_IMAGE_HEIGHT = 654;
const LEFT_IMAGE_WIDTH = 710;
const LEFT_IMAGE_HEIGHT = 392;

export default function Hero({ className }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pointerStartRef = useRef<number | null>(null);
  const pointerIdRef = useRef<number | null>(null);

  const currentSlide = slides[currentIndex];
  const progress = useMemo(
    () => ((currentIndex + 1) / slides.length) * 100,
    [currentIndex],
  );

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerStartRef.current = event.clientX;
    pointerIdRef.current = event.pointerId;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStartRef.current !== null) {
      const delta = event.clientX - pointerStartRef.current;
      if (delta > 40) {
        goPrev();
      } else if (delta < -40) {
        goNext();
      }
      pointerStartRef.current = null;
    }
    if (pointerIdRef.current !== null) {
      event.currentTarget.releasePointerCapture(pointerIdRef.current);
      pointerIdRef.current = null;
    }
  };

  const baseStyle: CSSProperties = {
    "--hero-right-image-left": `calc(100vw - ${RIGHT_IMAGE_WIDTH}px)`,
  };

  return (
    <div
      className={cn("relative min-h-screen overflow-hidden bg-[var(--background)]", className)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      style={baseStyle}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/0" />

      <div
        className="pointer-events-none absolute top-0 h-[654px] w-[710px] overflow-hidden border border-[rgba(27,29,37,0.08)] bg-white/60 shadow-[0_20px_60px_rgba(27,29,37,0.08)]"
        style={{ left: "var(--hero-right-image-left)" }}
      >
        <img
          src={currentSlide.rightImage}
          alt={`${currentSlide.name} — правая версия`}
          className="h-full w-full object-cover"
          width={RIGHT_IMAGE_WIDTH}
          height={RIGHT_IMAGE_HEIGHT}
        />
      </div>

      <div
        className="pointer-events-none absolute bottom-0 h-[392px] w-[710px] overflow-hidden border border-[rgba(27,29,37,0.08)] bg-white/50 shadow-[0_16px_40px_rgba(27,29,37,0.06)]"
        style={{
          left: `calc(var(--hero-right-image-left) - 20px - ${LEFT_IMAGE_WIDTH}px)`,
        }}
      >
        <img
          src={currentSlide.leftImage}
          alt={`${currentSlide.name} — левая версия`}
          className="h-full w-full object-cover"
          width={LEFT_IMAGE_WIDTH}
          height={LEFT_IMAGE_HEIGHT}
        />
      </div>

      <div
        className="pointer-events-none absolute flex flex-col gap-2"
        style={{
          left: "var(--hero-right-image-left)",
          right: "80px",
          top: `calc(${RIGHT_IMAGE_HEIGHT}px + 20px)`,
        }}
      >
        <div className="flex justify-between">
          <p className="text-sm font-semibold text-[var(--text-secondary)]">
            {currentSlide.name}
          </p>
          <button
            className="text-sm font-semibold text-[var(--text-primary)] underline-offset-8 hover:underline hover:text-blue"
            type="button"
          >
            Подробнее
          </button>
        </div>
      </div>

      <div
        className="pointer-events-auto absolute flex items-center justify-between gap-[7px]"
        style={{
          left: "var(--hero-right-image-left)",
          right: "80px",
          bottom: "40px",
        }}
      >
        <button
          type="button"
          onClick={goPrev}
          aria-label="Предыдущий слайд"
          className="flex items-center justify-center text-[var(--text-secondary)] hover:text-blue"
        >
          <span className="h-[7px] w-[7px] rounded-full bg-[var(--text-secondary)]" />
        </button>

        <div className="flex-1 h-[7px] rounded-full border border-[rgba(27,29,37,0.25)] overflow-hidden">
          <div
            className="h-full rounded-full bg-[var(--text-primary)] transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Следующий слайд"
          className="flex items-center gap-[4px] text-[var(--text-secondary)] hover:text-blue"
        >
          <span className="h-[7px] w-[7px] rounded-full bg-[var(--text-secondary)]" />
          <span className="h-[7px] w-[7px] rounded-full bg-[var(--text-secondary)]" />
        </button>
      </div>
    </div>
  );
}
