module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
    theme: {
        extend: {
            backgroundImage: {
                login_pattern: "url('/public/background-image/login-bg.jpg')",
                bg_pattern: "url('/public/background-image/bg.png')",
                logo_pattern: "url('/public/mecore-logos/main-logo/logo_v2.png')",
                abstract_pattern1: "url('/public/background-image/abstract-background2.png')",
            },
            border: ["focus"],
            colors: {
                primary: {
                    50: "#e8f1f9",   // илүү цайвар өнгө
                    100: "#cdddee",
                    200: "#9fbfde",
                    300: "#6e9fcb",
                    400: "#3e7fb5",
                    500: "#024384",  // үндсэн өнгө
                    600: "#023b75",
                    700: "#023165",
                    800: "#012853",
                    900: "#011d3f",
                    950: "#01142e",  // хамгийн бараан өнгө
                },
                body: "#fff",
                govblue: "#0047BE",
                govblue50: "#0047BE80",
            },
        },
    },

    plugins: [],
};
