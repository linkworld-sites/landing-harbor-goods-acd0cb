import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gallery: "#FAFAF7",
        ink: "#1B1815",
        saddle: "#8B5A3C",
        brass: "#B8935F",
        hairline: "#D9D5CC",
        walnut: "#2B1B12",
        void: "#0F0D0B",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
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
