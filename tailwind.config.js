/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        space: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        "cloudax-blue": "#2E28F3",
      },
    },
  },
  plugins: [],
};
