/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'Helvetica', 'sans-serif'],
        mulish: ["Mulish", 'serif'],
      },
      colors: {
         darkBg: '#000000', // Add custom dark background
        lightText: '#ffffff'
      },
    },
  },
  plugins: [],
}






