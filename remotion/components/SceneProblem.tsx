import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig, Easing } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";

const { fontFamily } = loadFont("normal", {
  weights: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

const ACCENT = "#27ef20";
const BACKGROUND = "#1a1a1a";
const FOREGROUND = "#FAF9F6";

export const SceneProblem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Main headline words
  const words = ["Possibility", "has", "outpaced", "adoption."];

  // Stagger word animations
  const wordAnimations = words.map((_, i) => {
    const startFrame = 20 + i * 12;
    const opacity = interpolate(frame, [startFrame, startFrame + 15], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    const y = interpolate(frame, [startFrame, startFrame + 20], [60, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.exp),
    });
    return { opacity, y };
  });

  // Subtext animation
  const subTextOpacity = interpolate(frame, [100, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const subTextY = interpolate(frame, [100, 130], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Gap visualization - two bars that separate
  const gapProgress = spring({
    frame: frame - 140,
    fps,
    config: { damping: 200 },
  });

  const gapWidth = interpolate(gapProgress, [0, 1], [0, 200]);

  // "We close the gap" text
  const closeTextOpacity = interpolate(frame, [180, 200], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Accent highlight animation
  const highlightWidth = interpolate(frame, [210, 250], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  // Exit animation
  const exitOpacity = interpolate(frame, [270, 300], [1, 0], {
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
      {/* Animated background gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, ${ACCENT}08 0%, transparent 60%)`,
          opacity: interpolate(frame, [0, 60], [0, 1], { extrapolateRight: "clamp" }),
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 50,
          width: "80%",
          maxWidth: 1400,
        }}
      >
        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0 24px",
          }}
        >
          {words.map((word, i) => (
            <span
              key={i}
              style={{
                fontSize: 100,
                fontWeight: 300,
                color: word === "outpaced" ? ACCENT : FOREGROUND,
                opacity: wordAnimations[i].opacity,
                transform: `translateY(${wordAnimations[i].y}px)`,
                display: "inline-block",
                textShadow: word === "outpaced" ? `0 0 40px ${ACCENT}60` : "none",
              }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Gap visualization */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: gapWidth,
            marginTop: 20,
          }}
        >
          <div
            style={{
              width: 150,
              height: 6,
              backgroundColor: FOREGROUND,
              borderRadius: 3,
              opacity: gapProgress,
            }}
          />
          <div
            style={{
              fontSize: 24,
              color: ACCENT,
              fontWeight: 600,
              opacity: closeTextOpacity,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            The AI Gap
          </div>
          <div
            style={{
              width: 150,
              height: 6,
              backgroundColor: FOREGROUND,
              borderRadius: 3,
              opacity: gapProgress,
            }}
          />
        </div>

        {/* Subtext */}
        <div
          style={{
            opacity: subTextOpacity,
            transform: `translateY(${subTextY}px)`,
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          <p
            style={{
              fontSize: 36,
              fontWeight: 400,
              color: "#8a8a8a",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            We help you close the gap across{" "}
            <span style={{ color: FOREGROUND, position: "relative" }}>
              people, process, and product
              <span
                style={{
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  height: 3,
                  width: `${highlightWidth}%`,
                  backgroundColor: ACCENT,
                  borderRadius: 2,
                }}
              />
            </span>
            .
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
