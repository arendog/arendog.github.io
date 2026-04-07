import { error } from '@sveltejs/kit';

type WorkModule = {
	default: any;
	metadata: {
		page?: boolean;
		[key: string]: any;
	};
};

// strongly type the glob
const modules = import.meta.glob<WorkModule>(
	'/src/lib/data/works/*.svx'
);

export const prerender = true;

// generate slugs
export function entries() {
	return Object.keys(modules).map((path) => {
		const slug = path.split('/').pop()!.replace('.svx', '');
		return { slug };
	});
}

export async function load({ params }) {
	const path = `/src/lib/data/works/${params.slug}.svx`;

	const loader = modules[path];

	if (!loader) {
		throw error(404, 'Page not found');
	}

	const work = await loader();

	if (work.metadata?.page) {
		return {
			content: work.default,
			meta: work.metadata
		};
	}

	throw error(404, 'Page not found');
}