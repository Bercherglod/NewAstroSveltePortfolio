/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			xs: '360px',
			xm: '640px',
			sm: '1000px',
			lg: '1280px',
			xl: '1600px',
			xl2: '1900px'
		},
		fontFamily: {
			sans: [
				'Segoe UI',
				'Roboto',
				'-apple-system',
				'BlinkMacSystemFont',
				'Oxygen',
				'Ubuntu',
				'Cantarell',
				'Fira Sans',
				'Droid Sans',
				'Helvetica Neue',
				'sans-serif'
			]
		},
		extend: {}
	},
	plugins: []
}
