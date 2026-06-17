import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const runtime = "edge";

export const alt = `${siteConfig.name} Portfolio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#090C12", // dark mode --bg
          color: "#E8EAED", // dark mode --ink
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 20,
              color: "#E8EAED",
              textAlign: "center",
            }}
          >
            {siteConfig.name}
          </div>

          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#F2A65A", // dark mode --accent
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            {siteConfig.role}
          </div>

          <div
            style={{
              fontSize: 24,
              color: "#8E96A4", // dark mode --muted
              maxWidth: "800px",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            {siteConfig.headline}
          </div>
        </div>

        {/* Status indicator bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 60,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "#10151E", // dark mode --surface
            padding: "16px 24px",
            borderRadius: "100px",
            border: "1px solid #212936", // dark mode --border
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#4ADE80", // dark mode --signal
            }}
          />
          <div style={{ fontSize: 20, color: "#8E96A4" }}>
            {siteConfig.statusLabel}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
