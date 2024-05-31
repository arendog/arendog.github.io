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
		perusalScoreURL: string;
		embeddedMediaURL: string;
		embeddedMediaTitle: string;
		audioURL: string;
		audioTitle: string;
		archive: boolean;
		WIP: boolean;
		tags: {
			orchestral: boolean;
			chamber: boolean;
			choral: boolean;
			vocal: boolean;
			concerti: boolean;
			opera: boolean;
		};
	}

	export let work: Work;
</script>

<div class="flex max-w-[42rem] flex-col gap-4 md:w-[42rem]">
	<div class="flex flex-col">
		<h1 class="font-bold] mb-2">
			{work.title}
			<div class="inline text-[1.8rem] font-normal">({work.year})</div>
		</h1>

		<div class="ml-8">
			{#if work.dedication}
				<p class="italic">{work.dedication}</p>
			{/if}

			<p><em class="mr-4">{work.instrumentation}</em>|<em class="ml-4">{work.duration}</em></p>

			{#if work.premiere}
				<p class="italic">première: {new Date(work.premiere).toDateString().slice(3)}</p>
			{/if}

			{#if work.movements.length}
				<ol class="mt-4 list-[upper-roman] pl-12">
					{#each work.movements as movement}
						<li><p class="italic">{movement}</p></li>
					{/each}
				</ol>
			{/if}

			{#each work.descriptions as description}
				<p class="mt-4">{description}</p>
			{/each}

			{#if work.embeddedMediaURL}
				<div class="mt-4">
					<p class="text-base italic">{work.embeddedMediaTitle}</p>
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

			{#if work.perusalScoreURL}
				<div class="mt-4">
					<p class="text-base italic">Perusal score:</p>
					<div class="w-min">
						<a href={work.perusalScoreURL} target="_blank">
							<svg
								class="h-8 w-8 text-grey hover:text-primary"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 16 20"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M1 18a.969.969 0 0 0 .933 1h12.134A.97.97 0 0 0 15 18M1 7V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v5M6 1v4a1 1 0 0 1-1 1H1m0 9v-5h1.5a1.5 1.5 0 1 1 0 3H1m12 2v-5h2m-2 3h2m-8-3v5h1.375A1.626 1.626 0 0 0 10 13.375v-1.75A1.626 1.626 0 0 0 8.375 10H7Z"
								/>
							</svg>
						</a>
					</div>
				</div>
			{/if}

			{#if work.audioURL}
				<div class="mt-4 w-full">
					<div class="flex w-full">
						<svg
							class="h-6 w-6 align-middle text-grey"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								stroke="currentColor"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20 16v-4a8 8 0 1 0-16 0v4m16 0v2a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2ZM4 16v2c0 1.1.9 2 2 2h2v-6H6a2 2 0 0 0-2 2Z"
							/>
						</svg>
						<p class="ml-2 overflow-hidden truncate text-base italic">{work.audioTitle}</p>
					</div>
					<AudioPlayer sound_url={work.audioURL} />
				</div>
			{/if}
		</div>
	</div>
</div>
