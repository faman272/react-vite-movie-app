/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow : {
        'card-shadow' : '0 3px 10px 0 #141414'
      }
    },
  },
  plugins: [require("daisyui")],
}

