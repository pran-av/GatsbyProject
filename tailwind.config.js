/** @type {import('tailwindcss').Config} */
module.exports = {
  // Look for all css classes as template language is used in js files as well
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
}

