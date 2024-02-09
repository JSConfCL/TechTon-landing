const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '568px',
        '3xs': '400px',
      },
      animation: {
        flip: "flip 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        flip: {
          from: { transform: "rotateX(0deg)", transformOrigin: "50% bottom " },
          to: { transform: "rotateX(180deg)", transformOrigin: "50% bottom " },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#4ac9b4",
        primaryLight: "#33B6A1",
        secondary: "#2a5851",
        "custom-gray": "#232121",
        twitch: "#9052F4",
      },
    },
  },
  plugins: [],
};
