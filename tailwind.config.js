const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class", "class"],
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
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		function addVariablesForColors({ addBase, theme }) {
			const allColors = theme("colors");

			const newVars = Object.entries(allColors).reduce((acc, [key, value]) => {
				if (typeof value === "string") {
					acc[`--${key}`] = value;
				} else {
					Object.entries(value).forEach(
						([shade, hex]) => (acc[`--${key}-${shade}`] = hex)
					);
				}
				return acc;
			}, {});

			addBase({
				":root": newVars,
			});
		},
	],
};
