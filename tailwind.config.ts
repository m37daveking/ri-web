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
        background: "#fbfbfa",
        foreground: "#1a1a1a",
        accent: "#3FD978",
        sand: "#FAF8F6",
        forest: {
          deep: "#1A4D2E",
          light: "#4A7C59",
        },
        charcoal: "#2A2A2A",
      },
      fontFamily: {
        sans: ['var(--font-heebo)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
