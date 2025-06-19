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
      textShadow: {
        title: "2px 4px 4px rgba(0,0,0,0.25)",
      },
      boxShadow: {
        "inner-wide":
          "inset 10px 0 8px -8px rgba(0,0,0,0.3), inset -10px 0 8px -8px rgba(0,0,0,0.3), inset 0 10px 8px -8px rgba(0,0,0,0.3), inset 0 -10px 8px -8px rgba(0,0,0,0.3)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
