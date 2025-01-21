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
        fallDown: 'fallDown 2s ease-out infinite',
        bounceRain: 'bounceRain 1s ease-out infinite',
      },
      keyframes: {
        fallDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { transform: 'translateY(50%)', opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
        bounceRain: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '20%': { transform: 'translateY(-10px)', opacity: '0.9' },
          '40%': { transform: 'translateY(0)', opacity: '1' },
          '60%': { transform: 'translateY(-10px)', opacity: '0.9' },
          '80%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-10px)', opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
