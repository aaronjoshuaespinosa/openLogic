/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter'],
        'climate': ['Climate Crisis'],
        'poppins': ['Poppins']
      },
      colors: {
        blk: '#141414',
        wht: "#ffffff",
        gry: "#1c2227",
        accent: "#df9328"
      },
      boxShadow: {
        glow: "0 0 1000px 80px rgba(223,147,40,0.7)"
      }
    },
  },
  plugins: [],
}