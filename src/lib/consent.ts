export type ConsentValue = "accepted" | "declined";

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem("cookie_consent");
  if (value === "accepted" || value === "declined") return value;
  return null;
}

export function hasAccepted(): boolean {
  return getConsent() === "accepted";
}

