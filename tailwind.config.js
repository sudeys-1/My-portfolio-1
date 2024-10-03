/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Header: ["Raleway", "sans-serif"],
        Body: ["Montserrat", "sans-serif"],
        
      },
    },
  },
  plugins: [],
}

