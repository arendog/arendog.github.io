<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	import Nav from '$lib/components/Nav.svelte';

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
	<div
		class="mx-[max(calc(50%-200px),16px)] mb-8 max-w-100 min-w-60 lg:mx-[calc(50%-400px)] lg:max-w-200"
	>
		<Nav />
		{@render children()}
	</div>
{/if}
