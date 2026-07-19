<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	import Nav from '../components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="description" content="Website of composer and saxophonist Alex Rennie." />
	<meta name="keywords" content="composition, saxophone, piano, jazz, classical" />
</svelte:head>

{#if page.url.pathname == '/'}
	{@render children()}
{:else}
	<div class="mb-8 ml-[calc(50%-400px)] max-w-200">
		<Nav />
		{@render children()}
	</div>
{/if}
