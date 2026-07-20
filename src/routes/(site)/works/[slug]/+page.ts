import { error } from '@sveltejs/kit';
import type { WorkModule } from '$lib';

const modules = import.meta.glob('$lib/content/*.svx', {
	eager: true
}) satisfies Record<string, WorkModule>;

function slugFromPath(path: string) {
	return path.split('/').pop()!.replace('.svx', '');
}

const works = Object.fromEntries(
	Object.entries(modules).map(([path, module]) => [slugFromPath(path), module])
);

export function entries() {
	return Object.keys(works).map((slug) => ({
		slug
	}));
}

export function load({ params }) {
	const work = works[params.slug];

	if (!work) {
		throw error(404, 'Work not found');
	}
	return {
		metadata: work.metadata,
		Content: work.default
	};
}
