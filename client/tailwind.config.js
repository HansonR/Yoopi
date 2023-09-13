/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    fontFamily: {
      sans: ["Ubuntu"],
    },
    container: {
      center: true,
      padding: "2rem",
      maxWidth: {
        default: "800px",
      },
    },
  },
  plugins: [],
};
