/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-btn": "#635FC7",
        "hover-purple": "#A8A4FF",
        "dark-gray": "#20212C",
        "middle-gray": "#2B2C37",
        "light-gray": "#3E3F4E",
        "danger-btn": "#EA5555",
        "danger-hover": "#FF9898",
      },
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
    },
  },
  darkMode: "class",
  plugins: [],
};
