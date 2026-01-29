import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export default function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("layout-padding mx-auto w-full max-w-[1920px]", className)}
      {...props}
    />
  );
}
