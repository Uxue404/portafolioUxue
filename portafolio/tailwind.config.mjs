/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				customGray: 'rgb(11, 10, 16)',
				customCard: 'rgb(28, 30,35)',
				customButton: 'rgb(5,104,254)',
				customShadowButton: ' rgb(104,169,254)',

			}
		},
	},
	plugins: [],
}
