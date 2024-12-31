import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const work = await import(`$lib/data/works/${params.slug}.svx`);

		if (work.metadata.page) {
		return {
			content: work.default,
			meta: work.metadata
		};
		} else {
			throw error(404, 'Page not found');
		}
	} catch (e) {
		console.log(e);
		throw error(404, 'Page not found');
	}
}
