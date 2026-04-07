import { error } from '@sveltejs/kit';

type WorkModule = {
	default: any;
	metadata: {
		page?: boolean;
		[key: string]: any;
	};
};

// strongly type the glob
const modules = import.meta.glob<WorkModule>('/src/lib/data/works/*.svx');

export const prerender = true;

// generate slugs
export async function entries() {
	const modules = import.meta.glob<WorkModule>('/src/lib/data/works/*.svx');

	const entries = [];

	for (const [path, loader] of Object.entries(modules)) {
		const mod = await loader();

		if (mod.metadata?.page) {
			const parts = path.split('/');
			const filename = parts[parts.length - 1];
			const slug = filename.replace('.svx', '');

			entries.push({ slug });
		}
	}

	return entries;
}

export async function load({ params }) {
	const path = `/src/lib/data/works/${params.slug}.svx`;

	const loader = modules[path];

	if (!loader) {
		throw error(404, 'Page not found');
	}

	const work = await loader();

	return {
		content: work.default,
		meta: work.metadata
	};

	throw error(404, 'Page not found');
}
