/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        lg: "992px",
        xl: "1358px",
      },
      container: {
        padding: {
          DEFAULT: "0px",
          md: "44px",
        },
      },
      boxShadow: {
        custom:
          "0 100px 140px -50px rgba(0,0,0,0.25), 0 0 20px 0 rgba(0,0,0,0.03)",
      },
      colors: {
        tomato: "hsl(4, 100%, 67%)",
        salmon: "#FFE8E6",
        "dark-slate": "hsl(234, 29%, 20%)",
        charcoal: "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
        "light-grey": "#D6D6D6",
      },
      fontFamily: {
        heading: ["Roboto-Bold", "sans-serif"],
        body: ["Roboto-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
