import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        term: "#0d1117",
        surface: "#161b22",
        fg: "#e6edf3",
        muted: "#8b949e",
        green: "#39ff14",
        amber: "#ffd60a",
        cyan: "#00e5ff",
        magenta: "#ff00ff",
        line: "rgba(230,237,243,0.14)",
        gallery: "#FAFAF7",
        galleryink: "#14130f",
      },
      fontFamily: {
        display: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-mono)", "monospace"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      animation: {
        "marquee-left": "marquee-left 22s linear infinite",
        "marquee-right": "marquee-right 26s linear infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;
