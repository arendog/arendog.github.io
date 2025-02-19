import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const writing = await import(`$lib/data/writings/${params.slug}.svx`);

		if (writing.metadata.page) {
			return {
				content: writing.default,
				meta: writing.metadata
			};
		} else {
			throw error(404, 'Page not found');
		}
	} catch (e) {
		console.log(e);
		throw error(404, 'Page not found');
	}
}
