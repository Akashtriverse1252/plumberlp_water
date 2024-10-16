/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "playfair-display": ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        Averta: ["AvertaStd", "sans-serif"],
        GaramondPro: ["Adobe Garamond Pro", "serif"],
      },
      screens: {
        "4xl": "1700px",
        "3xl": "1600px",
        s: "681px",
        m: "581px",
        xxs: "421px",
      },
    },
  },
  plugins: [],
};
