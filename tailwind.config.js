/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: { black: "#232323" },
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {
      colors: {
        accent: {
          grey: "#F4F8F9",
          beige: "#FAF8F3"
        },
        red: "#AB2328",
        white: "#fff",
        black: "#231F20"
      },

      spacing: {
        15: "4rem"
      },
      fontSize: {
        xxs: ".625rem"
      },
      fontFamily: {
        roboto: ['"Barlow"', "sans-serif"],
        display: ["Cabinet Grotesk", "sans-serif"]
      }
    }
  },
  plugins: []
};
