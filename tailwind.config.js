/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily:{
          'ubuntu': ["Ubuntu", "sans-serif"],
          'lato': [ "Lato", "sans-serif"],
        },
    },
  },
  plugins: [],
}