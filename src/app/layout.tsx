import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import DebugLayoutToggle from "@/app/DebugLayoutToggle";

const bodyStyle = {
  ["--font-body"]: `"Google Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, "Noto Sans", "Helvetica Neue", sans-serif`,
} as React.CSSProperties;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3010";

export const metadata: Metadata = {
  title: {
    template: "%s | Kremnev Atelier",
    default: "Kremnev Atelier",
  },
  description: "Kremnev Atelier — architecture and design studio.",
  metadataBase: new URL(siteUrl),
  applicationName: "Kremnev Atelier",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Kremnev Atelier",
    title: "Kremnev Atelier",
    description: "Kremnev Atelier — architecture and design studio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kremnev Atelier",
    description: "Kremnev Atelier — architecture and design studio.",
  },
  icons: {
    icon: [{ url: "/brand/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const debugLayout = process.env.NEXT_PUBLIC_DEBUG_LAYOUT === "1";
  return (
    <html lang="ru">
      <body
        className={`antialiased font-[var(--font-body)]${debugLayout ? " debug-layout" : ""}`}
        style={bodyStyle}
      >
        <DebugLayoutToggle />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
