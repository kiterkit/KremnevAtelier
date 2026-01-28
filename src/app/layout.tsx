import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bodyStyle = {
  // Prefer Google Sans if you later add it as a licensed webfont.
  // Fall back to self-hosted Inter.
  ["--font-body"]: `"Google Sans", var(--font-inter), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, "Noto Sans", "Helvetica Neue", sans-serif`,
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
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} antialiased font-[var(--font-body)]`}
        style={bodyStyle}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
