/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bodybackground:"#B88D8D",
        textcolor:"#4D1818"
      }
    },
    screens:{
      sm:"480px",
      md:"968px",
      lg:"990px"
    }
  },
  plugins: [],
}
