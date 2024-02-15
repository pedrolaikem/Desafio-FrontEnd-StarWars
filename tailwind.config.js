/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: ["inter", "sans-serif"],
            },
        },
        screens: {
            "2xl": { max: "1600px" },
            xl: { max: "1280px" },
            lg: { max: "1024px" },
            md: { max: "768px" },
            sm: { max: "639px" },
            "xsm" : {max: "375px"},
            "2xsm" : {max: "320px"},
        },
    },
    plugins: [],
};
