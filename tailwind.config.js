/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundSize: {
      "100": "100% 100%"
    },
    extend: {
      colors: {
        "prim-color": "var(--prime-color)",
        "second-color": "var(--second-color)"
      },
      borderRadius: {
        "border-100": "var(--border-bottom-right-radius)",
      },
      gridTemplateColumns: {
        "grid-260": "repeat(auto-fit, minmax(260px, 1fr))"
      },
    },
  },
  plugins: [],
}

