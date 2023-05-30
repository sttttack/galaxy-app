/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      skyblue: "#D0D6F9",
      regwhite: "#FFFFFF",
      black: "#0B0D17",
      solidBlack: "#383B4B",
      customRgba: "rgba(255, 255, 255, 0.04)",
    },
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        condensed: ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "sans-serif"],
      },
      width: {
        450: "450px",
        830: "830px",
      },
      spacing: {
        sm: "2.36px",
      },
    },
  },
  plugins: [],
};
