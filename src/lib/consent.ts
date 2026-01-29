export type ConsentValue = "accepted" | "declined";

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));
  if (!match) return null;
  return decodeURIComponent(match.split("=").slice(1).join("="));
}

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem("cookie_consent");
  if (value === "accepted" || value === "declined") return value;
  const cookieValue = readCookie("site_consent");
  if (cookieValue === "accepted" || cookieValue === "declined") {
    window.localStorage.setItem("cookie_consent", cookieValue);
    return cookieValue;
  }
  return null;
}

export function hasAccepted(): boolean {
  return getConsent() === "accepted";
}
