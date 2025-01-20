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
      screens: {
        '1311px': '1311px', 
        '1024px' : '1024px'
      },
      animation: {
        loopLeft: 'loopLeft 20s linear infinite',
      },
      keyframes: {
        loopLeft: {
          '0%': { transform: 'translateX(0)' },          // Start from the left
          '100%': { transform: 'translateX(-100%)' },    // Move to the left edge
        },
      },
    },
  },
  plugins: [],
};
export default config;
