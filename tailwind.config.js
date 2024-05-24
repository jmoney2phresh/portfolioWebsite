/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "800px",
    },
    extend: {
      colors: {
        prussian: "#18314F",
        cambridge: "#8BBEB2",
        russian: "#0D0630",
        yinmn: "#384E77",
        mindaro: "#e6f9af",
      },
    },
  },
  plugins: [],
};
