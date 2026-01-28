import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#1B1D25",
          color: "#F4F3F1",
          padding: 80,
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: 18, letterSpacing: 2, textTransform: "uppercase" }}>
          Kremnev Atelier
        </div>
        <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.08 }}>
          Studio notes
          <br />
          and projects
        </div>
        <div style={{ fontSize: 24, color: "rgba(244,243,241,0.8)" }}>
          Placeholder Twitter image
        </div>
      </div>
    ),
    { ...size },
  );
}

