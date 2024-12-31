import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const work = await import(`$lib/data/works/${params.slug}.svx`);

		return {
			content: work.default,
			meta: work.metadata
		};
	} catch (e) {
		console.log(e);
		throw error(404, 'Slug is invalid');
	}
}

// export const load = ({ fetch, params }) => {
// 	return { params };
// };
