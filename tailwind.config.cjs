/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: "#e1dfd8",
        "verge-black": "#131313",
      },
    },
  },
  plugins: [],
}
