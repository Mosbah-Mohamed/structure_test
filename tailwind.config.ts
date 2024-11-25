// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      primary: "#00ADF1",
      secondary: "#462514",
      third: "#27365C",
      lightGray: "#F9F9F9",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      mediumGray: "#4D28141A",
      grayDark: "#A7A8A9",
      description: "#697E95",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      active: "#FEC90C",
      transparent: "transparent",
      current: "currentColor",
      customRed: "#E70808",
      red: colors.red,
      black: colors.black,
      white: colors.white,
      emerald: colors.emerald,
      indigo: colors.indigo,
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    backgroundImage: {
      "points-bg": "url('@/assets/images/points-bg.png')",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    fontFamily: {
      'noto-kufi': ['Noto Kufi Arabic', 'sans-serif'],
    },
    extend: {
      // Add a global container class to mimic Bootstrap's container
      spacing: {
        "128": "32rem", // You can add custom spacing if necessary
      },
      maxWidth: {
        "screen-sm": "540px", // Custom max-width for small screens
        "screen-md": "720px", // Custom max-width for medium screens
        "screen-lg": "960px", // Custom max-width for large screens
        "screen-xl": "1140px", // Custom max-width for extra large screens
        "screen-2xl": "1320px", // Custom max-width for 2xl screens
      },
      // Custom utility class for .container
      container: {
        center: true, // Centers the container
        padding: "1rem", // Default padding for the container
      },
    },
  },
  plugins: [require("tailwindcss-primeui")],
};
