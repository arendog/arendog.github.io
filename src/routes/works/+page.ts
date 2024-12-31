import { type Work } from '$lib';

export async function load({ fetch }) {
	const response = await fetch('api/works');
	const works: Work[] = await response.json();
	return { works };
}
