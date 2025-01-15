/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        ivory: '#EFE9E1',
        silver: '#D9D9D9',
        taupe: '#D1C7BD',
        mocha: '#AC9C8D',
        mahogany: '#72383D',
        espresso: '#322D29',
      },
    },
  },
  plugins: [],
}