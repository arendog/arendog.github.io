import { error } from '@sveltejs/kit';

type WritingModule = {
	default: any;
	metadata: {
		page?: boolean;
		[key: string]: any;
	};
};

// strongly type the glob
const modules = import.meta.glob<WritingModule>('/src/lib/data/writings/*.svx');

export const prerender = true;

// generate slugs
export async function entries() {
	const modules = import.meta.glob<WritingModule>('/src/lib/data/works/*.svx');

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
	const path = `/src/lib/data/writings/${params.slug}.svx`;

	const loader = modules[path];

	if (!loader) {
		throw error(404, 'Page not found');
	}

	const writing = await loader();

	
	return {
		content: writing.default,
		meta: writing.metadata
	};
	

	throw error(404, 'Page not found');
}
