/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "my-blue": "#08376B",
        "my-green": "#9AEBA6",
        "my-light-blue": "#35C0ED",
        // "my-dark": "#24252D",
        "my-dark": "#000000",
        "my-light": "#FFFFFF",
        "my-gray-1": "#E4E5E2",
        // "my-gray-1": "#A9A9A9",
        "my-gray-2": "#888888",
        "my-gray-3": "#4F4F4F",
        "my-black-1": "#191919",
        // "my-black-1": "#2D2E36",
        "my-black-2": "#1B1A21",
        "my-black-3": "#2A2D3A",
        "my-black-4": "#24252D",
        "overlay-black": "rgba(0, 0, 0, 0.8)",
      },
      width: {
        215: "215px",
        357: "357px",
        557: "557px",
      },
      minWidth: {
        155: "155px",
        190: "190px",
        215: "215px",
        240: "240px",
        256: "256px",
        327: "327px",
      },
      height: {
        300: "300px",
        557: "557px",
      },
      inset: {
        45: "45%",
        65: "65px",
      },
      spacing: {
        65: "65px",
      },
      flex: {
        2: "2 2 0%",
      },
      lineHeight: {
        70: "70px",
      },
      zIndex: {
        "-5": "-5",
        0: "0",
      },
    },
    screens: {
      lg: { max: "1800px" },
      lgm: { max: "1100px" },
      md: { max: "990px" },
      sm: { max: "600px" },
      xs: { max: "400px" },
      minmd: "1700px",
      minlg: "2100px",
    },
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      hel: ["Helvetica", "Arial", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
