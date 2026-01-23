import { AbsoluteFill, Img, interpolate, spring, useCurrentFrame, useVideoConfig, staticFile } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", {
  weights: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

const ACCENT = "#27ef20";
const BACKGROUND = "#FAF9F6";
const FOREGROUND = "#1a1a1a";

export const SceneIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Logo animation - scales up with bounce
  const logoScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const logoOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Accent line animation - slides in from left
  const lineWidth = spring({
    frame: frame - 20,
    fps,
    config: { damping: 200 },
  });

  // Text reveal animation
  const textOpacity = interpolate(frame, [35, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const textY = interpolate(frame, [35, 55], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subtitle animation
  const subtitleOpacity = interpolate(frame, [60, 75], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subtitleY = interpolate(frame, [60, 80], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Particles/energy bursts
  const particles = Array.from({ length: 8 }, (_, i) => {
    const delay = 10 + i * 5;
    const angle = (i / 8) * Math.PI * 2;
    const distance = interpolate(frame - delay, [0, 40], [0, 300], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    const particleOpacity = interpolate(frame - delay, [0, 20, 40], [0, 1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      opacity: particleOpacity,
    };
  });

  // Exit animation
  const exitProgress = interpolate(frame, [150, 180], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const exitScale = interpolate(exitProgress, [0, 1], [1, 1.1]);
  const exitOpacity = interpolate(exitProgress, [0, 1], [1, 0]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BACKGROUND,
        fontFamily,
        opacity: exitOpacity,
        transform: `scale(${exitScale})`,
      }}
    >
      {/* Subtle grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(26, 26, 26, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26, 26, 26, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Energy particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: ACCENT,
            transform: `translate(${p.x}px, ${p.y}px)`,
            opacity: p.opacity,
            boxShadow: `0 0 20px ${ACCENT}`,
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
          gap: 30,
        }}
      >
        {/* Logo */}
        <div
          style={{
            transform: `scale(${logoScale})`,
            opacity: logoOpacity,
          }}
        >
          <Img
            src={staticFile("RI-logo3.png")}
            style={{
              width: 180,
              height: "auto",
            }}
          />
        </div>

        {/* Accent line */}
        <div
          style={{
            width: interpolate(lineWidth, [0, 1], [0, 200]),
            height: 3,
            backgroundColor: ACCENT,
            borderRadius: 2,
            boxShadow: `0 0 20px ${ACCENT}40`,
          }}
        />

        {/* Main text */}
        <div
          style={{
            opacity: textOpacity,
            transform: `translateY(${textY}px)`,
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: 90,
              fontWeight: 300,
              color: FOREGROUND,
              lineHeight: 1,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Radical Intelligence
          </h1>
        </div>

        {/* Subtitle */}
        <div
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
          }}
        >
          <p
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: "#4a4a4a",
              margin: 0,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            AI Transformation Consultancy
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
