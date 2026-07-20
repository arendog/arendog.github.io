import type { WorkSummary, WorkModule } from '$lib';

const modules = import.meta.glob('$lib/content/*.svx', {
	eager: true
}) satisfies Record<string, WorkModule>;

function slugFromPath(path: string) {
	return path.split('/').pop()!.replace('.svx', '');
}

export function load() {
	const works: WorkSummary[] = (Object.entries(modules) as [string, WorkModule][])
		.map(([path, module]) => ({
			slug: slugFromPath(path),
			...module.metadata
		}))
		.filter((work) => work.listed)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return {
		works
	};
}
