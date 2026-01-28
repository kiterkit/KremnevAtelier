import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SectionVariant = "default" | "muted" | "dark";

export default function Section({
  variant = "default",
  className,
  ...props
}: HTMLAttributes<HTMLElement> & { variant?: SectionVariant }) {
  return (
    <section
      className={cn(
        "rounded-3xl border p-8 sm:p-10",
        variant === "default" && "border-gray bg-white text-black",
        variant === "muted" && "border-gray bg-beige text-black",
        variant === "dark" && "border-black bg-black text-beige",
        className,
      )}
      {...props}
    />
  );
}
