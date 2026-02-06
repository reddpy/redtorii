import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Red Torii — The Anti-Impersonation Platform for Companies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  const channels = [
    { value: "+1-800-555-0142", type: "Phone", status: "Verified", color: "#22C55E" },
    { value: "@AcmeCorp", type: "X / Twitter", status: "Verified", color: "#22C55E" },
    { value: "j.park@acmecorp.com", type: "Email", status: "Verified", color: "#22C55E" },
    { value: "+1-800-555-0199", type: "Phone", status: "Retired", color: "#F59E0B" },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#1A1A1A",
          position: "relative",
        }}
      >
        {/* Red accent bar at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#C41E3A",
          }}
        />

        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.03,
            backgroundImage:
              "linear-gradient(#FAF7F2 1px, transparent 1px), linear-gradient(90deg, #FAF7F2 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 64px",
            flex: 1,
            gap: 24,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                background: "#C41E3A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              RT
            </div>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#C41E3A",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Red Torii
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span
              style={{
                fontSize: 52,
                fontWeight: 700,
                color: "#FAF7F2",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Help customers verify
            </span>
            <span
              style={{
                fontSize: 48,
                fontWeight: 800,
                color: "#C41E3A",
                lineHeight: 1.1,
              }}
            >
              it&apos;s really you.
            </span>
          </div>

          {/* Subtitle */}
          <span
            style={{
              fontSize: 18,
              color: "#9B9B9B",
              lineHeight: 1.5,
              maxWidth: 440,
            }}
          >
            The anti-impersonation platform for companies. Protect your customers from fraud across every channel.
          </span>
        </div>

        {/* Right side — mini Trust Gate */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingRight: 64,
            width: 420,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#2A2A2A",
              border: "1px solid #3A3A3A",
            }}
          >
            {/* Trust Gate header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 18px",
                borderBottom: "1px solid #3A3A3A",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    background: "#C41E3A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFF",
                    fontSize: 10,
                    fontWeight: 700,
                  }}
                >
                  AC
                </div>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#FAF7F2" }}>
                  Acme Corp
                </span>
              </div>
              <span style={{ fontSize: 10, color: "#22C55E" }}>
                Domain verified
              </span>
            </div>

            {/* Channel rows */}
            {channels.map((ch) => (
              <div
                key={ch.value}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 18px",
                  borderBottom: "1px solid #3A3A3A",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: ch.color,
                    }}
                  />
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontSize: 12, color: "#FAF7F2", fontWeight: 500 }}>
                      {ch.value}
                    </span>
                    <span style={{ fontSize: 10, color: "#6B6B6B" }}>
                      {ch.type}
                    </span>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: ch.color,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {ch.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 48,
            background: "#141414",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 64px",
            borderTop: "1px solid #2A2A2A",
          }}
        >
          <span style={{ fontSize: 12, color: "#6B6B6B" }}>
            redtorii.com
          </span>
          <span
            style={{
              fontSize: 11,
              color: "#6B6B6B",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            B2B Customer Protection Platform
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
