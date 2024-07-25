/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      bgColor: "#E3FEF7",
      green: {
        100: "#77B0AA",
        200: "#135D66",
        300: "#003C43",
      },
      transparent: "#ffffff00",
      white:'#fff'
    },
    fontFamily:{
      Roboto: ['Roboto,sans-serif']
    }
  },
  plugins: [],
};
