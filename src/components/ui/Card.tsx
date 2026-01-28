import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type CardVariant = "default" | "muted";

export default function Card({
  variant = "default",
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { variant?: CardVariant }) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6",
        variant === "default" && "border-gray bg-white",
        variant === "muted" && "border-gray bg-beige",
        className,
      )}
      {...props}
    />
  );
}
