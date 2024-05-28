<script lang="ts">
	import works from '$lib/data/works.json';
	import Work from '../../../components/Work.svelte';

	export let data;
	const { params } = data;
	$: work = works.find((w) => w.url == params.workID);
</script>

<svelte:head>
	<title>Works - Alex Rennie</title>
</svelte:head>

{#if work}
	<Work {work} />
{/if}
