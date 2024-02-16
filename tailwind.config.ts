import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "serif-display": "var(--font-dm-serif-display)", // Heading text
        "comforter": "var(--font-comforter)", // T1 highly hilted text
        "krylon": "var(--font-krylon)", // T2 hilted text
        "kantumruy": "var(--font-kantumruy)", // regular body text
        "emoji": "var(--font-noto-color-emoji)", // Emoji
      }
    },
  },
  plugins: [],
};
export default config;
