import { json } from '@sveltejs/kit';
import { type Writing } from '$lib';

async function getJSON() {
	let items: Writing[] = [];

	const paths = import.meta.glob('$lib/data/writings/*.svx', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.svx', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const meta = file.metadata as Omit<Writing, 'slug'>;
			const item = { ...meta, slug } satisfies Writing;
			item.listed && items.push(item);
		}
	}

	items = items.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return items;
}

export async function GET() {
	const items = await getJSON();
	return json(items);
}
