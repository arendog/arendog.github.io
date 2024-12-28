<script lang="ts">
	import AudioPlayer from './AudioPlayer.svelte';

	interface Work {
		title: string;
		url: string;
		year: number;
		premiere: string;
		dedication: string;
		movements: string[];
		instrumentation: string;
		duration: string;
		descriptions: string[];
		imgURL: string;
		imgCaption: string;
		imgAlt: string;
		perusalScoreURL: string;
		embeddedMediaURL: string;
		embeddedMediaCaption: string;
		audioURL: string;
		audioPeaks: number[][];
		audioCaption: string;
		archive: boolean;
		tags: {
			orchestral: boolean;
			chamber: boolean;
			solo: boolean;
			choral: boolean;
			vocal: boolean;
			concerti: boolean;
			opera: boolean;
		};
	}

	interface Props {
		work: Work;
	}

	let { work }: Props = $props();
</script>

<div class="flex max-w-[42rem] flex-col gap-4 md:w-[42rem]">
	<div class="flex flex-col">
		<h1 class="font-bold] mb-2">
			{work.title}
			<div class="inline text-[1.8rem] font-normal">({work.year})</div>
		</h1>

		{#if work.dedication}
			<p class="italic">{work.dedication}</p>
		{/if}

		<p><em class="mr-4">{work.instrumentation}</em>|<em class="ml-4">{work.duration}</em></p>

		{#if work.premiere}
			<p class="italic">premièred {new Date(work.premiere).toDateString().slice(3)}</p>
		{/if}

		{#if work.movements.length}
			<ol class="mt-4 list-[upper-roman] pl-12">
				{#each work.movements as movement}
					<li><p class="italic">{movement}</p></li>
				{/each}
			</ol>
		{/if}

		{#if work.imgURL}
			<div class="mt-4 w-full">
				<img alt={work.imgAlt} class="" src={work.imgURL} />
				<p class="my-1 text-sm italic text-darkgrey">{work.imgCaption}</p>
			</div>
		{/if}

		{#if work.audioURL}
			<div class="my-4 flex w-full flex-col gap-2 rounded-lg bg-white p-2 text-darkgrey shadow-md">
				<AudioPlayer audio_url={work.audioURL} audio_peaks={work.audioPeaks} />
				<div class="flex items-center gap-2">
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
							d="M12 5a7 7 0 0 0-7 7v1.17c.313-.11.65-.17 1-.17h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-6a9 9 0 0 1 18 0v6a3 3 0 0 1-3 3h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h2c.35 0 .687.06 1 .17V12a7 7 0 0 0-7-7Z"
							clip-rule="evenodd"
						/>
					</svg>
					<p class="text-base italic">{work.audioCaption}</p>
				</div>
			</div>
		{/if}

		{#if work.embeddedMediaURL}
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
		{/if}

		{#each work.descriptions as description}
			<p class="my-4">{description}</p>
		{/each}

		{#if work.perusalScoreURL}
			<div
				class="mt-4 w-min rounded-lg border-2 px-2 text-left text-primary hover:border-primary hover:bg-primary hover:text-parchment"
			>
				<a href={work.perusalScoreURL} target="_blank">
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
						<p class="whitespace-nowrap text-base">Download perusal score (PDF)</p>
					</div>
				</a>
			</div>
		{/if}
	</div>
</div>
