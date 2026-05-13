import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Premium navy/anthracite as primary
        primary: {
          50: "#f3f5f8",
          100: "#e1e7ee",
          200: "#bdcadb",
          300: "#8ea4be",
          400: "#5d7a9d",
          500: "#3e5d82",
          600: "#2f486a",
          700: "#243a57",
          800: "#1a2a3f",
          900: "#0f1c2e",
          950: "#070f1a",
        },
        // Warm gold / copper accent
        accent: {
          50: "#fbf7ed",
          100: "#f5ebcd",
          200: "#ecd698",
          300: "#e0bb63",
          400: "#d5a23f",
          500: "#c08a2d",
          600: "#9e6c24",
          700: "#7e5320",
          800: "#664220",
          900: "#56371f",
        },
        cream: "#fbf9f4",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
