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
                box_gap: "337px",
            },
            colors: {
                gray_dark: "#6C6F93",
                gray_primary: "#9496b8",
                gray_secondary: "#DEDFF7",
                gray_light: "#BFBFBF",
                vibrant_gray: "#D9D9D9",
                red: "#D13131",
                primary_red: "#F9CBCB",
                secondary_red: "#830505",
                green: "#058346",
                dark_green: "#3f7545",
                light_green: "#CAFAC3",
                primary_green: "#BFFFC6",

                black: "#3d3d3d",
                gray_tertiary: "#5d7285",
                bold_text: "#565656",
                purple: "#694E4E",
                gray_border: "#9496B8",
                green_border: "#058346",
            },
        },
    },
    plugins: [],
};
