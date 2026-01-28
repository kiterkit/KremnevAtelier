import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#F4F3F1",
          color: "#1B1D25",
          padding: 80,
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: 20, letterSpacing: 2, textTransform: "uppercase" }}>
          Kremnev Atelier
        </div>
        <div style={{ fontSize: 72, fontWeight: 600, lineHeight: 1.05 }}>
          Architecture
          <br />
          &amp; Design Studio
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div
            style={{
              width: 14,
              height: 14,
              background: "#0047FF",
              borderRadius: 999,
            }}
          />
          <div style={{ fontSize: 26, color: "rgba(27,29,37,0.75)" }}>
            Placeholder OG image
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

