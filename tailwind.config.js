/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: ["light", "dark"],
        base: true,
        utils: true,
        logs: false,
        rtl: false,
        prefix: "",
        darkTheme: "dark",
    },
}
