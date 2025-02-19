<script lang="ts">
	import Writings from '../../components/Writings.svelte';
	import type { Writing } from '$lib';

	export let data: { writings: Writing[] };
</script>

<svelte:head>
	<title>Writings - Alex Rennie</title>
</svelte:head>

<Writings writings={data.writings} />
