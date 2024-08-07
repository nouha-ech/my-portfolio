/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
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
    },
    colors: {
      ...colors,
      sky: "#0ea5e9", // Replace with the color code you used for lightBlue
      stone: "#d6d3d1", // Replace with the color code you used for warmGray
      neutral: "#d0d5dd", // Replace with the color code you used for trueGray
      gray: "#d1d5db", // Replace with the color code you used for coolGray
      slate: "#64748b", // Replace with the color code you used for blueGray
      primary: colors.purple,
      secondary: colors.pink,
    },
  },
  plugins: [],
};
