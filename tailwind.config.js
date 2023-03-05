/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        nav: "1200px",
        ham: "400px",
      },
      fontFamily: {
        Poppins: "Poppins",
        PermanentMarker: "Permanent Marker",
      }
    },
  },
  plugins: [],
}
