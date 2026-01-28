import type { Metadata } from "next";
import ChromeShell from "@/lib/chrome";
import LegalPage from "@/components/sections/LegalPage";
import { privacyDoc } from "@/content/legal/privacy";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildMetadata(privacyDoc.seo, "/privacy");
}

export default function PrivacyPage() {
  return (
    <ChromeShell>
      <LegalPage doc={privacyDoc} />
    </ChromeShell>
  );
}

