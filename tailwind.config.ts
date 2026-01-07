import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core
        background: {
          DEFAULT: "#ffffff",
          warm: "#f3f3f0",
          cream: "#faf9f6",
          beige: "#eadcce",
          sage: "#aec2b8",
          blue: "#d9ecee",
          dark: "#1a1a1a",
        },
        foreground: {
          DEFAULT: "#1a1a1a",
          muted: "rgba(26, 26, 26, 0.63)",
          subtle: "rgba(26, 26, 26, 0.4)",
          light: "rgba(255, 255, 255, 0.6)",
        },
        accent: {
          DEFAULT: "#fe6033",
          light: "#ff7a52",
          dim: "rgba(254, 96, 51, 0.1)",
        },
        border: {
          DEFAULT: "rgba(26, 26, 26, 0.1)",
          light: "rgba(255, 255, 255, 0.2)",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'pill': '9999px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        'display': ['clamp(48px, 10vw, 120px)', { lineHeight: '1', letterSpacing: '-0.025em' }],
        'display-sm': ['clamp(32px, 6vw, 84px)', { lineHeight: '1', letterSpacing: '-0.025em' }],
        'headline': ['clamp(24px, 4vw, 56px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'headline-sm': ['clamp(20px, 3vw, 42px)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '200ms',
        'slow': '300ms',
      },
    },
  },
  plugins: [],
};

export default config;
