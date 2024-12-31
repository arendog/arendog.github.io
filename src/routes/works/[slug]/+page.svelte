<script lang="ts">
	import Work from '../../../components/Work.svelte';

	interface Props {
		data: any;
	}

	let { data }: Props = $props();
	// const { params } = data;

	// let work = works.find((w) => w.url === params.slug);
</script>

<svelte:head>
	<title>{data.meta.title} - Alex Rennie</title>
</svelte:head>

<Work meta={data.meta} content={data.content} />
