/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-green": "#287C6C",
        "custom-blue": "#04486D",
      },
      fontFamily: {
        recursive: ["var(--font-recursive)", "system-ui", "sans-serif"],
        rampart: ["var(--font-rampart-one)", "cursive", "sans-serif"],
      },
    },
  },
  plugins: [["@tailwindcss/postcss"]],
};
