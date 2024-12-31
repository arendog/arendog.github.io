<script lang="ts">
	import AudioPlayer from './AudioPlayer.svelte';

	interface Props {
		meta: any;
		content: any;
	}

	let { meta, content }: Props = $props();
	const Content = content;

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
	if (meta.audio_peaks_url) {
		peaksPromise = loadPeaks(meta.audio_peaks_url);
	}
</script>

<div class="flex max-w-[42rem] flex-col gap-4 md:w-[42rem]">
	<div class="flex flex-col">
		<h1>
			{meta.title}
			<div class="inline text-[1.8rem] font-normal">({meta.year})</div>
		</h1>

		{#if meta.dedication}
			<p class="my-0 italic">{meta.dedication}</p>
		{/if}

		<p class="my-0">
			<em class="mr-4">{meta.instrumentation}</em>|<em class="ml-4">{meta.duration}</em>
		</p>

		{#if meta.premiere}
			<p class="my-0 italic">premièred {new Date(meta.premiere).toDateString().slice(3)}</p>
		{/if}

		{#if meta.movements.length}
			<ol class="mt-4 list-[upper-roman] pl-12">
				{#each meta.movements as movement}
					<li><p class="my-0 italic">{movement}</p></li>
				{/each}
			</ol>
		{/if}

		{#if meta.banner_img_url}
			<div class="mt-4 w-full">
				<img alt={meta.banner_img_alt} class="" src={meta.banner_img_url} />
				<p class="my-1 text-sm italic text-darkgrey">{meta.banner_img_caption}</p>
			</div>
		{/if}

		{#if meta.audio_url}
			{#if meta.audio_peaks_url}
				{#await peaksPromise}
					<p class="my-1 text-sm italic text-darkgrey">Loading audio peaks...</p>
				{:then peaks}
					<AudioPlayer
						audio_url={meta.audio_url}
						audio_peaks={peaks || undefined}
						audio_caption={meta.audio_caption}
					/>
				{:catch error}
					console.log(Error loading audio data: {error.message});
				{/await}
			{:else}
				<AudioPlayer
					audio_url={meta.audio_url}
					audio_peaks={undefined}
					audio_caption={meta.audio_caption}
				/>
			{/if}
		{/if}

		<!-- {#if work.embeddedMediaURL}
			<div class="mt-4">
				<p class="text-base italic">{work.embeddedMediaCaption}</p>
				<iframe
					class="md:h-[315px] md:w-[560px]"
					src={work.embeddedMediaURL}
					title="Video player"
					frameborder="0"
					allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
					allowfullscreen
				></iframe>
			</div>
		{/if} -->
		<Content />

		{#if meta.perusal_score_url}
			<div
				class="mt-4	 w-min rounded-lg border-2 px-2 text-left text-primary hover:border-primary hover:bg-primary hover:text-parchment"
			>
				<a href={meta.perusal_score_url} target="_blank">
					<div class="flex items-center gap-1">
						<svg
							class="h-4 w-4"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z"
								clip-rule="evenodd"
							/>
							<path
								fill-rule="evenodd"
								d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
								clip-rule="evenodd"
							/>
						</svg>
						<p class="my-0 whitespace-nowrap">Download perusal score (PDF)</p>
					</div>
				</a>
			</div>
		{/if}
	</div>
</div>
