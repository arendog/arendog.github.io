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

	export let searchWords: string[];
	export let work: Work;

	$: regexSearch = new RegExp(searchWords.join('|'), 'gi');
	$: markedTitle = searchWords.length ? work.title.replace(regexSearch, '~$&~') : work.title;
	$: titleChunks = markedTitle.split('~').filter((i) => i);
</script>

<div class="flex flex-col">
	{#if work.url}
		<a href={"works/" + work.url} class="hover:underline text-primary">
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
			<p class="italic">{work.dedication}</p>
		{/if}

		
		<p><em class="mr-4">{work.instrumentation}</em>|<em class="ml-4">{work.duration}</em></p>
	</div>
</div>
