/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray' : '#383838',
        'white' : '#D9D9D9'
      },
    },
  },
  plugins: [],
}