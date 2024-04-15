/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'earthPic': "url('/assets/EarthPic.jpg')",
      }
    },
  },
  plugins: [],
}