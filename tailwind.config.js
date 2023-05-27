/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				red: {
					650: 'hsl(0, 78%, 62%)',
				},
				cyan: {
					650: 'hsl(180, 62%, 55%)',
				},
				orange: {
					650: 'hsl(34, 97%, 64%)',
				},
				blue: {
					650: 'hsl(212, 86%, 64%)',
					850: 'hsl(232, 12%, 34%)',
					150: 'hsl(229, 6%, 66%)',
				},
				gray: {
					150: 'hsl(0, 0%, 98%)',
				},
			},
			fontFamily: {
				sans: ['var(--font-poppins)'],
			},
		},
	},
	plugins: [],
}
