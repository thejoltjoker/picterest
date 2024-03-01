/** @type {import(tailwindcss).Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
