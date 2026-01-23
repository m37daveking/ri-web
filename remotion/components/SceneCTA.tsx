import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig, staticFile, Easing } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", {
  weights: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

const ACCENT = "#27ef20";
const BACKGROUND = "#1a1a1a";
const FOREGROUND = "#FAF9F6";

export const SceneCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Logo animation
  const logoScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12, stiffness: 80 },
  });

  const logoOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Main headline animation
  const headlineOpacity = interpolate(frame, [40, 60], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const headlineY = interpolate(frame, [40, 70], [50, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.exp),
  });

  // Accent underline
  const underlineWidth = interpolate(frame, [80, 120], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  // CTA button animation
  const buttonScale = spring({
    frame: frame - 130,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const buttonOpacity = interpolate(frame, [130, 150], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Contact info
  const contactOpacity = interpolate(frame, [180, 200], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Pulsing glow on CTA
  const pulseProgress = Math.sin((frame - 150) / 20) * 0.5 + 0.5;
  const glowOpacity = interpolate(pulseProgress, [0, 1], [0.3, 0.6]);

  // Floating particles
  const particles = Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    const radius = 400 + Math.sin(frame / 30 + i) * 50;
    const x = Math.cos(angle + frame / 100) * radius;
    const y = Math.sin(angle + frame / 100) * radius;
    const opacity = interpolate(frame, [0, 40], [0, 0.4], { extrapolateRight: "clamp" });
    return { x, y, opacity };
  });

  // Final fade (stay visible at end)
  const finalOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BACKGROUND,
        fontFamily,
        opacity: finalOpacity,
      }}
    >
      {/* Radial gradient background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, ${ACCENT}12 0%, transparent 50%)`,
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: ACCENT,
            transform: `translate(${p.x}px, ${p.y}px)`,
            opacity: p.opacity,
          }}
        />
      ))}

      {/* Center content */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 40,
        }}
      >
        {/* Logo */}
        <div
          style={{
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
          }}
        >
          <Img
            src={staticFile("RI-logo3.png")}
            style={{
              width: 120,
              height: "auto",
              filter: "brightness(0) invert(1)",
            }}
          />
        </div>

        {/* Main headline */}
        <div
          style={{
            opacity: headlineOpacity,
            transform: `translateY(${headlineY}px)`,
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: 80,
              fontWeight: 300,
              color: FOREGROUND,
              lineHeight: 1.1,
              margin: 0,
              position: "relative",
              display: "inline-block",
            }}
          >
            We Build
            <br />
            <span style={{ fontWeight: 600 }}>
              AI Capability
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  height: 4,
                  width: `${underlineWidth}%`,
                  backgroundColor: ACCENT,
                  borderRadius: 2,
                  boxShadow: `0 0 20px ${ACCENT}60`,
                }}
              />
            </span>
          </h1>
        </div>

        {/* CTA Button */}
        <div
          style={{
            opacity: buttonOpacity,
            transform: `scale(${buttonScale})`,
            position: "relative",
          }}
        >
          {/* Glow effect */}
          <div
            style={{
              position: "absolute",
              inset: -20,
              borderRadius: 60,
              background: ACCENT,
              filter: "blur(30px)",
              opacity: glowOpacity,
            }}
          />
          <div
            style={{
              position: "relative",
              padding: "24px 60px",
              backgroundColor: ACCENT,
              borderRadius: 50,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: BACKGROUND,
              }}
            >
              Get in touch
            </span>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke={BACKGROUND}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Contact info */}
        <div
          style={{
            opacity: contactOpacity,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: 22,
              color: "#8a8a8a",
              margin: 0,
            }}
          >
            hello@radicalintelligence.com
          </p>
        </div>
      </div>

      {/* Bottom tagline */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: contactOpacity,
        }}
      >
        <p
          style={{
            fontSize: 16,
            color: "#4a4a4a",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          AI Transformation Consultancy
        </p>
      </div>
    </AbsoluteFill>
  );
};
