import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Easing } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", {
  weights: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

const ACCENT = "#27ef20";
const BACKGROUND = "#FAF9F6";
const FOREGROUND = "#1a1a1a";

const DOMAINS = [
  {
    name: "People",
    description: "Workforce transformation",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
  },
  {
    name: "Process",
    description: "Operations & workflows",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
  },
  {
    name: "Product",
    description: "Systems & technology",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  },
];

const MOVEMENTS = [
  { name: "Sight", tagline: "See what should exist", duration: "2-4 weeks" },
  { name: "Capability", tagline: "Build your ability to build", duration: "6-16 weeks" },
  { name: "Sustenance", tagline: "Stay with you as it evolves", duration: "Ongoing" },
];

export const SceneFramework: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Section title animation
  const titleOpacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [0, 40], [40, 0], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.exp),
  });

  // Domain cards animation (staggered)
  const domainAnimations = DOMAINS.map((_, i) => {
    const startFrame = 60 + i * 25;
    const scale = spring({
      frame: frame - startFrame,
      fps,
      config: { damping: 15, stiffness: 100 },
    });
    const opacity = interpolate(frame, [startFrame, startFrame + 20], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return { scale, opacity };
  });

  // Connector lines animation
  const lineProgress = interpolate(frame, [140, 200], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  // Movement badges animation (staggered)
  const movementAnimations = MOVEMENTS.map((_, i) => {
    const startFrame = 220 + i * 40;
    const scale = spring({
      frame: frame - startFrame,
      fps,
      config: { damping: 12 },
    });
    const opacity = interpolate(frame, [startFrame, startFrame + 20], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    // Highlight effect
    const highlightOpacity = interpolate(
      frame,
      [startFrame + 30, startFrame + 50, startFrame + 70],
      [0, 1, 0.3],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
    return { scale, opacity, highlightOpacity };
  });

  // Final tagline
  const taglineOpacity = interpolate(frame, [450, 480], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Exit
  const exitOpacity = interpolate(frame, [530, 570], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BACKGROUND,
        fontFamily,
        opacity: exitOpacity,
      }}
    >
      {/* Grid background */}
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

      {/* Section title */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: titleOpacity,
        }}
      >
        <h2
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: ACCENT,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            margin: 0,
            transform: `translateY(${titleY}px)`,
          }}
        >
          Our Framework
        </h2>
      </div>

      {/* Domain cards */}
      <div
        style={{
          position: "absolute",
          top: 200,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 60,
        }}
      >
        {DOMAINS.map((domain, i) => (
          <div
            key={domain.name}
            style={{
              width: 320,
              padding: 40,
              backgroundColor: "#fff",
              borderRadius: 20,
              boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
              opacity: domainAnimations[i].opacity,
              transform: `scale(${domainAnimations[i].scale})`,
              textAlign: "center",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: "50%",
                backgroundColor: `${ACCENT}15`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke={ACCENT}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={domain.icon} />
              </svg>
            </div>
            <h3
              style={{
                fontSize: 36,
                fontWeight: 600,
                color: FOREGROUND,
                margin: "0 0 10px",
              }}
            >
              {domain.name}
            </h3>
            <p
              style={{
                fontSize: 18,
                color: "#4a4a4a",
                margin: 0,
              }}
            >
              {domain.description}
            </p>
          </div>
        ))}
      </div>

      {/* Connector line */}
      <div
        style={{
          position: "absolute",
          top: 480,
          left: "50%",
          transform: "translateX(-50%)",
          width: interpolate(lineProgress, [0, 1], [0, 800]),
          height: 3,
          backgroundColor: `${ACCENT}40`,
          borderRadius: 2,
        }}
      />

      {/* Movement badges */}
      <div
        style={{
          position: "absolute",
          top: 540,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 100,
        }}
      >
        {MOVEMENTS.map((movement, i) => (
          <div
            key={movement.name}
            style={{
              textAlign: "center",
              opacity: movementAnimations[i].opacity,
              transform: `scale(${movementAnimations[i].scale})`,
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-block",
                padding: "16px 36px",
                backgroundColor: FOREGROUND,
                borderRadius: 50,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Highlight sweep */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(90deg, transparent, ${ACCENT}40, transparent)`,
                  opacity: movementAnimations[i].highlightOpacity,
                }}
              />
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 600,
                  color: ACCENT,
                  position: "relative",
                }}
              >
                {movement.name}
              </span>
            </div>
            {/* Tagline */}
            <p
              style={{
                fontSize: 18,
                color: "#4a4a4a",
                margin: "16px 0 8px",
                fontStyle: "italic",
              }}
            >
              {movement.tagline}
            </p>
            {/* Duration */}
            <span
              style={{
                fontSize: 14,
                color: "#8a8a8a",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {movement.duration}
            </span>
          </div>
        ))}
      </div>

      {/* Final tagline */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: taglineOpacity,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 32,
            fontWeight: 300,
            color: FOREGROUND,
            margin: 0,
          }}
        >
          A complete system for{" "}
          <span style={{ color: ACCENT, fontWeight: 600 }}>AI transformation</span>
        </p>
      </div>
    </AbsoluteFill>
  );
};
