<script lang="ts">
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
		searchWords: string[];
		work: Work;
	}

	let { searchWords, work }: Props = $props();

	let regexSearch = $derived(new RegExp(searchWords.join('|'), 'gi'));
	let markedTitle = $derived(
		searchWords.length ? work.title.replace(regexSearch, '~$&~') : work.title
	);
	let titleChunks = $derived(markedTitle.split('~').filter((i) => i));
</script>

<div class="flex flex-col">
	{#if work.url}
		<a href={'works/' + work.url}>
			<div class="flex items-center text-primary hover:underline">
				<svg
					class="h-6 w-6"
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
						d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
					/>
				</svg>
				<h3 class="font-[600]">
					<!-- TODO: fix highlighting problem when consecutive selection, per char basis? -->
					{#each titleChunks as chunk, i}
						{#if (markedTitle[0] == '~') == (i % 2 == 1)}
							{chunk}
						{:else}
							<div class="inline w-min rounded-sm bg-accent">{chunk}</div>
						{/if}
					{/each}
				</h3>
			</div>
		</a>
	{:else}
		<h3 class="font-[600]">
			<!-- TODO: fix highlighting problem when consecutive selection, per char basis? -->
			{#each titleChunks as chunk, i}
				{#if (markedTitle[0] == '~') == (i % 2 == 1)}
					{chunk}
				{:else}
					<div class="inline w-min rounded-sm bg-accent">{chunk}</div>
				{/if}
			{/each}
		</h3>
	{/if}

	<div class="ml-8">
		{#if work.dedication}
			<p class="my-0 italic">{work.dedication}</p>
		{/if}

		<p class="my-0">
			<em class="mr-4">{work.instrumentation}</em>|<em class="ml-4">{work.duration}</em>
		</p>
	</div>
</div>
