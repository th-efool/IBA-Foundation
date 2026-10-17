import { ImageResponse } from "next/og";

export const alt = "IBA Foundation — Potential, put into practice.";

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
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0D0C0A",
          padding: "80px",
          position: "relative",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Subtle background glow */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(223, 177, 123, 0.15) 0%, transparent 70%)",
          }}
        />

        {/* Top Header: Logo Mark (03 / COMMON GROUND) */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <svg
            viewBox="0 0 294 139"
            width="118"
            height="56"
            fill="none"
          >
            <path
              d="M0 0 H38 L108 70 V105 H54 V98 L0 44 Z"
              fill="#3157BC"
            />
            <path
              d="M121 30 L176 0 V98 L166 105 H121 Z"
              fill="#CA6141"
            />
            <path
              d="M54 105 H166 Q178 94 190 78 L250 18 H294 V51 L239 106 V139 H54 Z"
              fill="#4E7873"
            />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 48,
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "0.04em",
                lineHeight: 1,
              }}
            >
              IBA
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.3em",
                color: "rgba(255, 255, 255, 0.85)",
                marginTop: "6px",
              }}
            >
              FOUNDATION
            </div>
          </div>
        </div>

        {/* Center: Mission Statement */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "900px" }}>
          <div
            style={{
              fontSize: 52,
              fontFamily: "Georgia, serif",
              color: "#F6F1E5",
              fontWeight: 500,
              lineHeight: 1.15,
            }}
          >
            Potential, put into practice.
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(255, 255, 255, 0.72)",
              lineHeight: 1.45,
            }}
          >
            An institutional platform for ambitious technical builders. Non-dilutive fellowship grants, multidisciplinary challenges, and real-world execution.
          </div>
        </div>

        {/* Bottom Bar: Key Metrics & Hubs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "28px",
            fontSize: 16,
            color: "rgba(255, 255, 255, 0.55)",
          }}
        >
          <div style={{ display: "flex", gap: "24px" }}>
            <span>$25,000 Fellowships</span>
            <span>&bull;</span>
            <span>$150,000 Open Challenges</span>
            <span>&bull;</span>
            <span>Zero Equity Taken</span>
          </div>

          <div style={{ display: "flex", color: "#DFB17B", fontWeight: 600 }}>
            ibafoundation.org
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
