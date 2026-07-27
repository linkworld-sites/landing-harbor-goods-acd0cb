import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F4F1EA",
        ink: "#14130F",
        steel: "#4A4E52",
        orange: "#D9531E",
        blueprint: "#1E3A5F",
        line: "#D6D2C6",
        "line-dark": "rgba(244,241,234,0.16)",
      },
      fontFamily: {
        display: ["var(--font-condensed)", "sans-serif"],
        sans: ["var(--font-condensed)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      animation: {
        "marquee-left": "marquee-left 22s linear infinite",
        "marquee-right": "marquee-right 26s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
