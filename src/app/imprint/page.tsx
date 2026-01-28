import type { Metadata } from "next";
import ChromeShell from "@/lib/chrome";
import LegalPage from "@/components/sections/LegalPage";
import { imprintDoc } from "@/content/legal/imprint";
import { buildMetadata } from "@/lib/seo";

export function generateMetadata(): Metadata {
  return buildMetadata(imprintDoc.seo, "/imprint");
}

export default function ImprintPage() {
  return (
    <ChromeShell>
      <LegalPage doc={imprintDoc} />
    </ChromeShell>
  );
}

