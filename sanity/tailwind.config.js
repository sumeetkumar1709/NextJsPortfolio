/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        color:{
          'greytext':'#9CA4B2',
        },
      },
    },
    plugins: [ require('tailwind-scrollbar'),],
  }