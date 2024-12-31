import { json } from '@sveltejs/kit';
import { type Work } from '$lib';

async function getJSON() {
	let items: Work[] = [];

	const paths = import.meta.glob('$lib/data/works/*.svx', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.svx', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const meta = file.metadata as Omit<Work, 'slug'>;
			const item = { ...meta, slug } satisfies Work;
			item.listed && items.push(item);
		}
	}

	items = items.sort(
		(first, second) => new Date(second.premiere).getTime() - new Date(first.premiere).getTime()
	);

	return items;
}

export async function GET() {
	const items = await getJSON();
	return json(items);
}
