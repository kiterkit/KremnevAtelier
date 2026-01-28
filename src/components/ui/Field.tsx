import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export default function Field({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-xl border border-gray bg-white px-4 text-sm outline-none ring-gray placeholder:text-gray focus:ring-2",
        className,
      )}
      {...props}
    />
  );
}
