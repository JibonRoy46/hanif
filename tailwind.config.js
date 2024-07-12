/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': "#2A2A2A",
        'secondary': "#F97316",
        'tertiary': "#54D6BB",
      }
    },
    screens: {
      'lg': { 'max': '2023px' },

      'sm': { 'max': '1000px' },

    },
  },
  plugins: [],
}