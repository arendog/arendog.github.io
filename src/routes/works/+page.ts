import type { Work } from '$lib';
import type { PageLoad } from '../works/$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('api/works');
	const works: Work[] = await response.json();
	return { works };
};
