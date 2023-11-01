import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      fontFamily: { inter: ["Inter", "sans-serif"] },
      backgroundSize: {
        mobile: "100% 287px, cover, cover",
        desktop: "100% 172px, cover, cover",
      },

      backgroundPosition: {
        pos: "0 0, center, center",
      },

      screens: {
        sm: "320px",
        md: "768px",
        lg: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
