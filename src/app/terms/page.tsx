import type { Metadata } from "next";
import ChromeShell from "@/lib/chrome";
import LegalPage from "@/components/sections/LegalPage";
import { termsDoc } from "@/content/legal/terms";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildMetadata(termsDoc.seo, "/terms");
}

export default function TermsPage() {
  return (
    <ChromeShell>
      <LegalPage doc={termsDoc} />
    </ChromeShell>
  );
}

