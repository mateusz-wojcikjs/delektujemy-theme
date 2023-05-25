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
          beige: "#FAF8F3",
          lime: "#F5F9F4"
        },
        grey: {
          main: "#BDBCBD"
        },
        red: "#AB2328",
        white: "#fff",
        black: "#231F20",
        orange: "#FFC690"
      },
      gridTemplateColumns: {
        search: "8rem 1fr",
        "search-mobile": "6rem 1fr",
        results: "repeat(auto-fill, minmax(380px, 1fr))"
      },
      gridTemplateRows: {
        search: "6.5rem 1.5rem"
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
