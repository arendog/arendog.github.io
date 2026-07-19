<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="description" content="Website of composer and saxophonist Alex Rennie." />
	<meta name="keywords" content="composition, saxophone, piano, jazz, classical" />
</svelte:head>


{@render children()}

