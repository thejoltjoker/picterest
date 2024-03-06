/** @type {import(tailwindcss).Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", ...fontFamily.sans],
        sans: ["DM Sans", ...fontFamily.sans],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      colors: {
        theme: {
          50: "#FFBA08",
          100: "#FAA307",
          200: "#F48C06",
          300: "#E85D04",
          400: "#DC2F02",
          500: "#D00000",
          600: "#9D0208",
          700: "#6A040F",
          800: "#370617",
          900: "#03071E",
        },
        peach: {
          50: "#fff1f1",
          100: "#ffe1e2",
          200: "#ffc7c9",
          300: "#ffa0a3",
          400: "#ff595e",
          500: "#f83b41",
          600: "#e51d23",
          700: "#c11419",
          800: "#a01418",
          900: "#84181b",
          950: "#480709",
        },

        orange: {
          50: "#fff7ec",
          100: "#ffecd3",
          200: "#ffd5a7",
          300: "#ffb76f",
          400: "#ff8d35",
          500: "#ff6e0e",
          600: "#fb5607",
          700: "#c93a05",
          800: "#9f2f0d",
          900: "#80290e",
          950: "#451205",
        },
      },
    },
  },
  safelist: ["text-4xl"],
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
