<script lang="ts">
	import Writing from '../../../components/Writing.svelte';

	interface Props {
		data: any;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>{data.meta.title} - Alex Rennie</title>
</svelte:head>

<Writing meta={data.meta} content={data.content} />
