<script lang="ts">
	import Works from '../../components/Works.svelte';

	export let data
</script>

<svelte:head>
	<title>Works - Alex Rennie</title>
</svelte:head>


<Works works={data.works} />
