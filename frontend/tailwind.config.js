/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#7152F3",
      primary900: "#250C92",
      primary800: "#3517B4",
      primary700: "#4F31D0",
      primary600: "#5D3DE7",
      primary400: "#9178FA",
      primary300: "#B2A2F9",
      primary200: "#ebb3d4",
      primary100: "#e6e2f8",
      dark: "#16151C",
      light: "#D9E1E1",
    },
    fontFamily: {
      ZenMaru: ["Zen Maru Gothic", "sans-serif", "serif"],
    },
  },
  plugins: [],
};
