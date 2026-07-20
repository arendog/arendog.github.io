import { error } from '@sveltejs/kit';
import type { WorkModule } from '$lib';

const modules = import.meta.glob('$lib/content/*.svx', {
	eager: true
}) satisfies Record<string, WorkModule>;

export function load({ params }) {
	const work = Object.values(modules).find((module: WorkModule) => module.metadata.slug === params.slug);

	if (!work) {
		throw error(404);
	}

	return {
		metadata: work.metadata,
		Content: work.default
	};
}
