"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function DebugLayoutToggle() {
  const searchParams = useSearchParams();
  const debug = searchParams.get("debug") === "1";

  useEffect(() => {
    const body = document.body;
    if (!body) return;
    if (debug) body.classList.add("debug-layout");
    else body.classList.remove("debug-layout");
  }, [debug]);

  return null;
}
