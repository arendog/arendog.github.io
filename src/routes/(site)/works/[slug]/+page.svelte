<script lang="ts">
	import AudioPlayer from '$lib/components/AudioPlayer.svelte';

	let { data } = $props();

	// svelte-ignore state_referenced_locally
	const Content = data.Content;
	// svelte-ignore state_referenced_locally
	const work = data.metadata;
	const year = new Date(work.date).getFullYear();

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

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

	function formatDate(date: string) {
		const d = new Date(date);
		return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
	}
</script>

<svelte:head>
	<title>{data.metadata.title} - Alex Rennie</title>
</svelte:head>

<div class="mt-8 flex flex-col gap-6 lg:mt-12 lg:grid lg:grid-cols-2 lg:gap-16">
	<div class="contents items-center lg:flex lg:flex-col lg:gap-6">
		{#if work.banner_img.url}
			<div class="space-y-1">
				<img src={work.banner_img.url} alt={work.banner_img.alt} />
				<p class="text-left italic">{work.banner_img.caption}</p>
			</div>
		{/if}
		<div class="order-last flex flex-col items-center gap-6">
			{#if work.performances.length}
				<div class="w-full space-y-2">
					<h2 class="leading-8">performances</h2>
					{#each work.performances as performance (performance.date)}
						<div class="space-y-1">
							<p class="text-left text-sm font-bold">
								{formatDate(performance.date)}
							</p>
							<p class="ml-3 text-left leading-4">
								{performance.performers}; {performance.location}
							</p>
						</div>
					{/each}
				</div>
			{/if}

			{#if work.audio.url}
				{#if peaksPromise}
					{#await peaksPromise}
						<p class="text-darkgrey my-1 text-sm italic">Loading audio peaks...</p>
					{:then peaks}
						<AudioPlayer
							audio_url={work.audio.url}
							audio_peaks={peaks}
							audio_caption={work.audio.caption}
						/>
					{/await}
				{:else}
					<AudioPlayer
						audio_url={work.audio.url}
						audio_peaks={undefined}
						audio_caption={work.audio.caption}
					/>
				{/if}
			{/if}

			{#if work.score.url}
				<a
					class="flex justify-center gap-2 link-button px-4"
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
		</div>
	</div>

	<div class="mt-8 contents gap-6 lg:mt-30 lg:flex lg:flex-col">
		<div class="order-first">
			<h1 class="mb-1 leading-8">{work.title} ({year})</h1>
			{#if work.caption}
				<p class="mb-1 text-left text-base leading-5 italic">{work.caption}</p>
			{/if}
			<div class="flex flex-wrap gap-x-4">
				<p class="text-left text-sm leading-4">{work.instrumentation}</p>
				<p class="text-left text-sm leading-4">/</p>
				<p class="text-left text-sm leading-4">{work.duration}</p>
			</div>
		</div>
		<Content />
	</div>
</div>
