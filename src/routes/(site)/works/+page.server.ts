import type { WorkMetadata } from '$lib';

const modules = import.meta.glob('$lib/content/*.svx', {
	eager: true
});

export function load() {
	const works = Object.values(modules)
		.map((m: any) => m.metadata as WorkMetadata)
		.filter((work) => work.listed)
		.sort((a, b) => Number(b.date) - Number(a.date));

	return {
		works
	};
}
