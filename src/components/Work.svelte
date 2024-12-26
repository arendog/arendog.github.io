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
		imgURL: string,
		imgCaption: string,
		imgAlt: string,
		perusalScoreURL: string;
		perusalScoreSize: string;
		embeddedMediaURL: string;
		embeddedMediaCaption: string;
		audioURL: string;
		audioCaption: string;
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

<div class="flex max-w-[42rem] flex-col gap-4 md:w-[42rem] mb-[16rem]">
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
				<img alt={work.imgAlt} class="" src={work.imgURL}>
				<p class="text-sm text-grey italic my-1">{work.imgCaption}</p>
			</div>
		{/if}

		{#if work.audioURL}
			<div class="mt-4 w-full">
				<AudioPlayer sound_url={work.audioURL} />
				<p class="text-base italic my-2">{work.audioCaption}</p>
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
			<div class="mt-4 rounded-lg border-2 px-2 text-left text-primary hover:border-primary hover:bg-primary hover:text-white w-min">
				<a href={work.perusalScoreURL} target="_blank">
					<p class="text-base whitespace-nowrap">&darr; Download perusal score ({work.perusalScoreSize})</p>
				</a>
			</div>
		{/if}
		
	</div>
</div>
