import type { Metadata } from "next";
import ChromeShell from "@/lib/chrome";
import LegalPage from "@/components/sections/LegalPage";
import { cookiesDoc } from "@/content/legal/cookies";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildMetadata(cookiesDoc.seo, "/cookies");
}

export default function CookiesPage() {
  return (
    <ChromeShell>
      <LegalPage doc={cookiesDoc} />
    </ChromeShell>
  );
}

