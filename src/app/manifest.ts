import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kremnev Atelier",
    short_name: "Kremnev",
    description: "Kremnev Atelier — architecture and design studio.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F3F1",
    theme_color: "#1B1D25",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

