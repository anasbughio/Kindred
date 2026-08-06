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
        // This overrides the default serif font with the Google Font we set up in layout.tsx
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;