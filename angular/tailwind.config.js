/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        orange: "var(--orange)",
        dwhite: "var(--d-white)",
      },
    },
  },
  plugins: [],
};
