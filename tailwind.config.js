/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        linen: "#F4ECDC",
        "linen-deep": "#ECE0C9",
        ink: "#3A2A1F",
        "ink-soft": "#5C4A3B",
        marigold: "#E0A93A",
        "marigold-dark": "#C28A22",
        moss: "#6B7858",
        "moss-dark": "#48512F",
        cocoa: "#2B2017",
        "cocoa-soft": "#3A2C20",
        chalk: "#EDE6D6",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        hand: ["Caveat", "cursive"],
        body: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
}
