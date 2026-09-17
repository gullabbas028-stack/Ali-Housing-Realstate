/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0E2038",
          900: "#0A1626",
          800: "#0E2038",
          700: "#13294B",
          600: "#1B3660",
        },
        gold: {
          DEFAULT: "#C79A3E",
          light: "#E1BD6E",
          dark: "#A67D2B",
        },
        sand: {
          DEFAULT: "#F6F3EC",
          50: "#FBFAF6",
          100: "#F6F3EC",
          200: "#ECE6D6",
        },
        ink: "#1A1D22",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        card: "0 1px 0 rgba(14,32,56,0.06), 0 12px 24px -12px rgba(14,32,56,0.18)",
      },
    },
  },
  plugins: [],
};
