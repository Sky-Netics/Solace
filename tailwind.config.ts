import type { Config } from "tailwindcss";

export default {
  darkMode:"class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        transparent: "var(--transparent)",
        lightDark:"#151515",
        lightDarkTransparent:"#090909",
        lightLight:"#A5A5A5",
        lightWhite:"#F9F9F9"
      },
    },
  },
  plugins: [],
} satisfies Config;
