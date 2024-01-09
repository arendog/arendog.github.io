/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			primary: '#2e16cc',
			accent: '#dcf538',
			white: '#fff',
			black: '#000',
			grey: '#777'
		},
		fontFamily: {
			sans: ['Finlandica', 'Helvetica', 'Arial', 'sans-serif']
		},
		extend: {
			gridTemplateColumns: {
				sidenav: '3rem auto'
			}
		}
	},
	plugins: []
};
