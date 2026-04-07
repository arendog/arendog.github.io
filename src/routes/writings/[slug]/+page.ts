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
	'/src/lib/data/writings/*.svx'
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
	const path = `/src/lib/data/writings/${params.slug}.svx`;

	const loader = modules[path];

	if (!loader) {
		throw error(404, 'Page not found');
	}

	const writing = await loader();

	if (writing.metadata?.page) {
		return {
			content: writing.default,
			meta: writing.metadata
		};
	}

	throw error(404, 'Page not found');
}