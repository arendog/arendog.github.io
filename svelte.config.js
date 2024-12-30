import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').mdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.svx']
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.svx'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)]
};
export default config;
