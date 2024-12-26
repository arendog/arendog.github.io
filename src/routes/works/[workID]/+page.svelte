<script lang="ts">
	import works from '$lib/data/works.json';
	import Work from '../../../components/Work.svelte';

	interface Props { data: any }

	let { data }: Props = $props();
	const { params } = data;
	let work = $derived(works.find((w) => w.url == params.workID));
</script>

<svelte:head>
	<title>Works - Alex Rennie</title>
</svelte:head>

{#if work}
	<Work {work} />
{/if}
