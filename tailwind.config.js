/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "surface-black": "#101010",
        "text-light-primary": "#FAFAFA",
        "text-light-secondary": "#FAFAFAB2",
        "text-light-tertiary": "#FAFAFA4D",
      },
      fontFamily: {
        inter: ["Inter"],
        neuePro: ["Neue Haas Grotesk Text Pro", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
