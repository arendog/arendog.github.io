/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			primary: '#2e16cc',
			accent: '#cc0e86',
			white: '#fff',
			black: '#000',
			grey: '#777',
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
			md: '900px',

			lg: '1100px'
		}
	},
	plugins: []
};
