<script lang="ts">
	import Works from '../../components/Works.svelte';
	import type { Work } from '$lib';

	export let data: { works: Work[] };
</script>

<svelte:head>
	<title>Works - Alex Rennie</title>
</svelte:head>

<Works works={data.works} />
