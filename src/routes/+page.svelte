<script lang="ts">
	import Biography from '$lib/data/biography.svx';
	import Events from '../components/Events.svelte';
</script>

<svelte:head>
	<title>Alex Rennie - composer</title>
</svelte:head>

<div class="flex min-w-[16rem] max-w-[40rem] flex-col">
	<img
		src="/images/antipodesbanner.jpg"
		class="aspect-video w-full object-cover blur-sm"
		alt="Placeholder"
	/>
	<p class="m-0 mt-1 text-sm italic text-darkgrey">Placeholder image</p>
	<Biography />
	<Events />
</div>
