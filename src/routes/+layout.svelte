<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/src/lib/assets/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/src/lib/assets/favicon.svg" />
	<link rel="shortcut icon" href="/src/lib/assets/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/src/lib/assets/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="MyWebSite" />
	<link rel="manifest" href="/src/lib/assets/site.webmanifest" />
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
