import type { Writing } from '$lib';
import type { PageLoad } from '../works/$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('api/writings');
	const writings: Writing[] = await response.json();
	return { writings };
};
