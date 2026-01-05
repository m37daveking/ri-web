"use client";

import { useEffect, useState, useRef } from "react";

const asciiFrames = [
  `
                    ╭────────────────╮
                    │  ▓▓▓▓▓▓▓▓▓▓▓▓  │
                    │  ▓          ▓  │
                    │  ▓  NEURAL  ▓  │
                    │  ▓  NETWORK ▓  │
                    │  ▓          ▓  │
                    │  ▓▓▓▓▓▓▓▓▓▓▓▓  │
                    ╰────────────────╯
        ┌───────────────┼───────────────┐
        │               │               │
        ▼               ▼               ▼
    ┌───────┐       ┌───────┐       ┌───────┐
    │ AUDIT │       │ROADMAP│       │ BUILD │
    └───┬───┘       └───┬───┘       └───┬───┘
        │               │               │
        └───────────────┼───────────────┘
                        │
                        ▼
                ┌───────────────┐
                │  TRANSFORM    │
                └───────────────┘
`,
  `
                    ╭────────────────╮
                    │  ░▓░▓░▓░▓░▓░▓  │
                    │  ▓          ░  │
                    │  ░  NEURAL  ▓  │
                    │  ▓  NETWORK ░  │
                    │  ░          ▓  │
                    │  ▓░▓░▓░▓░▓░▓░  │
                    ╰────────────────╯
        ┌───────────────┼───────────────┐
        │               │               │
        ◆               ◆               ◆
    ┌───────┐       ┌───────┐       ┌───────┐
    │ AUDIT │       │ROADMAP│       │ BUILD │
    └───┬───┘       └───┬───┘       └───┬───┘
        │               │               │
        └───────────────┼───────────────┘
                        │
                        ◆
                ┌───────────────┐
                │  TRANSFORM    │
                └───────────────┘
`,
  `
                    ╭────────────────╮
                    │  ▓░▓░▓░▓░▓░▓░  │
                    │  ░          ▓  │
                    │  ▓  NEURAL  ░  │
                    │  ░  NETWORK ▓  │
                    │  ▓          ░  │
                    │  ░▓░▓░▓░▓░▓░▓  │
                    ╰────────────────╯
        ┌───────────────┼───────────────┐
        │               │               │
        ●               ●               ●
    ┌───────┐       ┌───────┐       ┌───────┐
    │ AUDIT │       │ROADMAP│       │ BUILD │
    └───┬───┘       └───┬───┘       └───┬───┘
        │               │               │
        └───────────────┼───────────────┘
                        │
                        ●
                ┌───────────────┐
                │  TRANSFORM    │
                └───────────────┘
`,
];

export default function AsciiArt() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % asciiFrames.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <pre
        ref={ref}
        className="text-[8px] sm:text-[10px] md:text-xs leading-tight font-mono text-[var(--foreground)] select-none whitespace-pre"
        style={{ fontFamily: 'monospace' }}
      >
        {asciiFrames[frameIndex]}
      </pre>
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-[var(--accent)]/5 to-transparent pointer-events-none" />
    </div>
  );
}
