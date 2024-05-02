/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				'color-1': '#13151A',
				'color-2': '#6622E0',
				'color-3': '#2822E0',
				'color-4': '#2294E0',
				'color-5': '#A522E0',
			}
		},
	},
	plugins: [],
}
