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
        fall: "fall 3s ease-in-out infinite", // Loop the falling animation
        sparkle: "sparkle 3s ease-in-out infinite", // Continuous sparkle effect
      },
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-150px) rotate(-10deg)", opacity: String(0) },
          "50%": { transform: "translateY(10px) rotate(2deg)", opacity: String(0.7) },
          "100%": { transform: "translateY(0) rotate(0)", opacity: String(1) },
        },
        sparkle: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
      },      
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;
