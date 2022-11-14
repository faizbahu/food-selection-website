/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      spacing: {
        popup: "38px",
        input_height: "67px",
        input_width: "420px",
        button_width: "202px",
      },
      colors: {
        gray_dark: "#6C6F93",
        gray_primary: "#9496b8",
        gray_secondary: "#DEDFF7",
        green: "#058346",
        black: "#3d3d3d",
        gray_tertiary: "#5d7285",
      },
    },
  },
  plugins: [],
};
