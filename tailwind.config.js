/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // Add this
  ],
}

