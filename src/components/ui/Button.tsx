import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

export function buttonClassName({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-medium transition-colors",
    size === "sm" && "h-10 px-4 text-sm",
    size === "md" && "h-11 px-5 text-sm",
    variant === "primary" && "bg-blue text-beige hover:bg-blue/90",
    variant === "secondary" &&
      "border border-gray bg-white text-black hover:bg-beige",
    variant === "ghost" && "text-black hover:bg-beige",
    className,
  );
}

export default function Button({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  const { variant, size } = props;
  return (
    <button
      className={buttonClassName({ variant, size, className })}
      {...props}
    />
  );
}
