<script lang="ts">
	import AudioPlayer from '$lib/components/AudioPlayer.svelte';

	let { data } = $props();

	// svelte-ignore state_referenced_locally
	const Content = data.Content;
	// svelte-ignore state_referenced_locally
	const work = data.metadata;

	async function loadPeaks(url: string) {
		if (url) {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Failed to fetch audio data: ${response.statusText}`);
			}
			return response.json();
		}
	}

	let peaksPromise: Promise<number[][]> | null = $state(null);
	if (work.audio.peaks_url) {
		peaksPromise = loadPeaks(work.audio.peaks_url);
	}
</script>

<div class="mt-12 lg:grid lg:grid-cols-2 lg:gap-20">
	<div class="flex flex-col items-center gap-8">
		{#if work.banner_img.url}
			<div>
				<img src={work.banner_img.url} alt={work.banner_img.alt} />
				<p class="my-1 text-left italic">{work.banner_img.caption}</p>
			</div>
		{/if}

		{#if work.score.url}
			<a
				class="flex items-center gap-2 link-button"
				rel="external"
				target="_blank"
				href={work.score.url}
				title="Open .pdf in new tab"
			>
				<h3>{work.score.caption}</h3>
				<svg
					class="h-5 w-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
					/>
				</svg>
			</a>
			<!-- <embed type="application/pdf" class="w-full aspect-[1]" src={work.score.url + "#toolbar=0&navpanes=0"}> -->
		{/if}

		{#if work.audio.url}
			{#if work.audio.peaks_url}
				{#await peaksPromise}
					<p class="text-darkgrey my-1 text-sm italic">Loading audio peaks...</p>
				{:then peaks}
					<AudioPlayer
						audio_url={work.audio.url}
						audio_peaks={peaks || undefined}
						audio_caption={work.audio.caption}
					/>
				{:catch error}
					console.log(Error loading audio data: {error.message});
				{/await}
			{:else}
				<AudioPlayer
					audio_url={work.audio.url}
					audio_peaks={undefined}
					audio_caption={work.audio.caption}
				/>
			{/if}
		{/if}
	</div>

	<div class="mt-8 flex flex-col gap-6 lg:mt-30">
		<div class="flex flex-col gap-1">
			<h1 class="mb-1 leading-8">{work.title} ({new Date(work.date).getFullYear()})</h1>
			{#if work.caption}
				<p class="text-left text-base leading-5 italic">{work.caption}</p>
			{/if}
			<p class="text-left text-sm leading-4">{work.instrumentation} / {work.duration}</p>
		</div>
		<Content />
	</div>
</div>
