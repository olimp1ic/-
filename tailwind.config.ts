import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-outfit)", "sans-serif"],
      },
      colors: {
        graphite: {
          950: "#080808",
          900: "#0f0f0f",
          800: "#161616",
          700: "#1e1e1e",
          600: "#2a2a2a",
          500: "#3d3d3d",
          400: "#5a5a5a",
          300: "#7a7a7a",
          200: "#a0a0a0",
          100: "#c8c8c8",
          50:  "#e8e8e8",
        },
        gold: {
          DEFAULT: "#b8a070",
          light: "#d4ba8a",
          dark: "#8a6e42",
        },
      },
      letterSpacing: {
        widest2: "0.3em",
        widest3: "0.5em",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "line-grow": "lineGrow 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        lineGrow: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
