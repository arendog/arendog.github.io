/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			primary: '#2e16cc',
			accent: '#c40e81',
			parchment: '#f2e7d3',
			// old white #fff1d9
			white: '#fff',
			black: '#000',
			grey: '#777',
			darkgrey: '#4A4A4A',
			transparent: 'transparent'
		},
		fontFamily: {
			sans: ['Finlandica', 'Helvetica', 'Arial', 'sans-serif']
		},
		extend: {
			gridTemplateColumns: {
				sidenav: '3rem auto'
			}
		},
		screens: {
			md: '950px',

			lg: '1100px'
		}
	},
	plugins: []
};
