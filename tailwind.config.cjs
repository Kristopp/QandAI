/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "white": "#FFFFFF",
          "black": "#000000",
        },
        background: {
        "primary": "#28293D",
        "section": "#2D2F45",
        "cards": "#373951",
        "cardSection": "#3E405B",
        },
        mint: {
          "main": "#3EEBBE",
          "light": "#68FCD6",
          "dark": "#32D4AA",
        }

    },
  },
  plugins: [],
  },
};

module.exports = config;
