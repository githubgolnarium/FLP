import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            spacing: {
                '13': '3.25rem',
                '15': '3.75rem',
                '128': '32rem',
                '144': '36rem',
            }
        },
    },
    plugins: [
        // require('@tailwindcss/typography')({
        //     className: 'wysiwyg',
        // }),
        require('@tailwindcss/typography'),
        require("@tailwindcss/forms")({
            strategy: 'class', // only generate classes
        }),
        require('@tailwindcss/container-queries'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
export default config;
