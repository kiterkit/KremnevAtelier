"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { getConsent, type ConsentValue } from "@/lib/consent";

function setConsent(value: ConsentValue) {
  localStorage.setItem("cookie_consent", value);
  document.cookie = `site_consent=${value}; path=/; max-age=31536000; samesite=lax`;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => getConsent() === null);

  const containerClassName = useMemo(
    () =>
      cn(
        "fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6",
        "motion-safe:transition-transform motion-safe:duration-200",
        "motion-reduce:transition-none",
        visible ? "translate-y-0" : "translate-y-full",
      ),
    [visible],
  );

  if (!visible) return null;

  return (
    <div className={containerClassName} role="dialog" aria-label="Cookie consent">
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-gray bg-white p-5 shadow-sm">
        <div className="grid gap-4 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <div className="text-sm font-medium text-black">
              Cookies preference
            </div>
            <p className="mt-1 text-sm leading-6 text-black/70">
              We use essential cookies to make this site work. Analytics are not
              enabled yet. Choose “Accept” or “Decline” to store your preference.
            </p>
          </div>
          <div className="flex gap-3 md:col-span-4 md:justify-end">
            <button
              className="h-11 rounded-full border border-gray bg-beige px-5 text-sm font-medium text-black hover:bg-white motion-reduce:transition-none motion-safe:transition-colors"
              onClick={() => {
                setConsent("declined");
                setVisible(false);
              }}
              type="button"
            >
              Decline
            </button>
            <button
              className="h-11 rounded-full bg-blue px-5 text-sm font-medium text-beige hover:bg-blue/90 motion-reduce:transition-none motion-safe:transition-colors"
              onClick={() => {
                setConsent("accepted");
                setVisible(false);
              }}
              type="button"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
