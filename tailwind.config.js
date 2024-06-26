/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			transitionTimingFunction: {
				DEFAULT: 'ease-linear',
			},
			transitionDuration: {
				DEFAULT: '400ms',
			},
			transitionProperty: {
        'margin': 'margin',
      }
		},
	},
	plugins: [],
}
