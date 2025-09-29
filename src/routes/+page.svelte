<script lang="ts">
	import Biography from '$lib/data/biography.svx';
</script>

<svelte:head>
	<title>Alex Rennie - composer</title>
</svelte:head>

<div class="flex min-w-[16rem] max-w-[40rem] flex-col">
	<img
		src="https://picsum.photos/600/400/?blur"
		class="aspect-video w-full object-cover"
		alt="Placeholder"
	/>
	<p class="m-0 mt-1 text-sm italic text-darkgrey">Randomly selected placeholder image. I am not responsible for content of image.</p>
	<Biography />
	<h1>Upcoming events</h1>
</div>
