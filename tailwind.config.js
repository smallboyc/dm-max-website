/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
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
      colors: {
        primary: "#0F172A",
        variation: "#31EBA1",
        dark: "#374866",
        gray: { DEFAULT: "#6B7280", light: "#f9fafb" },
      },
      fontSize: {
        xxs: "0.563rem", // 9px
        xs: "0.688rem", // 11px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        md: "1.125rem", // 18px
        lg: "1.25rem", // 20px
        xl: "1.5rem", // 24px
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
