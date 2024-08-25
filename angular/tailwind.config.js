/** @type {import('tailwindcss').Config} */
module.exports = {
  // just in time ( build time much faster )
  mode: "jit",
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
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
  ],
};
