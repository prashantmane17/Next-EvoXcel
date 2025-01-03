/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        movePupil: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-10px, -10px)" },
          "50%": { transform: "translate(10px, 10px)" },
          "75%": { transform: "translate(-10px, 10px)" },
        },
      },
      animation: {
        "pupil-move": "movePupil 3s infinite ease-in-out",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
