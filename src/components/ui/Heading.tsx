import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

type HeadingSize = "xl" | "lg" | "md";

export default function Heading<TAs extends ElementType = "h2">({
  as,
  size = "lg",
  className,
  ...props
}: ComponentPropsWithoutRef<TAs> & {
  as?: TAs;
  size?: HeadingSize;
}) {
  const Comp = (as ?? "h2") as ElementType;
  return (
    <Comp
      className={cn(
        "font-[var(--font-display)] font-semibold tracking-tight",
        size === "xl" && "text-3xl sm:text-4xl",
        size === "lg" && "text-xl",
        size === "md" && "text-base",
        className,
      )}
      {...props}
    />
  );
}
