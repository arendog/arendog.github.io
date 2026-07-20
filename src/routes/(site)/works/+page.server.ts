import type { WorkMetadata, WorkModule } from '$lib';

const modules = import.meta.glob('$lib/content/*.svx', {
	eager: true
}) satisfies Record<string, WorkModule>;

export function load() {
	const works = Object.values(modules)
		.map((module) => module.metadata as WorkMetadata)
		.filter((work) => work.listed)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return {
		works
	};
}
