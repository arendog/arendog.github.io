import { error } from '@sveltejs/kit';
import type { WorkModule } from '$lib';

const modules = import.meta.glob('$lib/content/*.svx', {
	eager: true
}) satisfies Record<string, WorkModule>;



export function load({ params }) {
	const entry = Object.entries(modules).find(
		([path]) => path.split('/').pop()!.replace('.svx', '') === params.slug
	);

	

	if (!entry) {
		throw error(404, 'Work not found');
	} else if (!entry[1].metadata.page) {
		throw error(404, 'Work not found');
	}

	const [, work] = entry;

	return {
		metadata: work.metadata,
		Content: work.default
	};
}
