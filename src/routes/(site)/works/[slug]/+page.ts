import { error } from '@sveltejs/kit';
import type { WorkMetadata } from '$lib';

const modules = import.meta.glob('$lib/content/*.svx', {
	eager: true
});

export function load({ params }) {
	const work = Object.values(modules).find((m: any) => {
		const metadata = m.metadata as WorkMetadata;
		return metadata.slug === params.slug;
	}) as any;

	if (!work) {
		throw error(404);
	}

	return {
		metadata: work.metadata,
		Content: work.default
	};
}
