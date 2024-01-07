<script lang="ts">
	import AudioPlayer from './AudioPlayer.svelte';

	interface Work {
		title: string;
		year: number;
        premiere: string;
		dedication: string;
		instrumentation: string;
		instrumentationFull: string;
		duration: string;
		descriptions: string[];
		perusalScoreURL: string;
		embeddedMediaURL: string;
		embeddedMediaTitle: string;
		audioURL: string;
		audioTitle: string;
		expandable: boolean;
        WIP: boolean;
		tags: {
			orchestral: boolean,
			chamber: boolean,
			choral: boolean,
			vocal: boolean,
			concerti: boolean
		};
	}

	let expanded = false;
	export let work: Work;
</script>

<div class="flex w-[36rem] flex-col">
	<h3 class="font-bold">{work.title}</h3>

	<div class="ml-8">
		{#if expanded}
			{#if work.dedication}
				<p class="italic">{work.dedication}</p>
			{/if}

			<p class="italic">{work.instrumentationFull}</p>

			<p class="mb-4 italic">{work.duration}</p>

			{#each work.descriptions as description}
				<p class="mb-4">{description}</p>
			{/each}

			{#if work.embeddedMediaURL}
				<div class="mb-4">
					<p class="text-base italic">{work.embeddedMediaTitle}</p>
					<iframe
						class="h-[315px] w-[560px]"
						src={work.embeddedMediaURL}
						title="Video player"
						frameborder="0"
						allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</div>
			{/if}

			{#if work.perusalScoreURL}
				<div class="mb-4">
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
				<div class="mb-4">
					<p class="text-base italic">{work.audioTitle}</p>
					<AudioPlayer sound_url={work.audioURL} />
				</div>
			{/if}

			<button
				class="my-2 rounded-lg border-2 px-2 text-left text-white bg-primary border-primary hover:bg-white hover:text-primary"
				on:click={() => (expanded = false)}
			>
				<p>Collapse</p>
			</button>
		{:else}
			{#if work.dedication}
				<p class="italic">{work.dedication}</p>
			{/if}

			<p><em class="mr-4">{work.instrumentation}</em>|<em class="ml-4">{work.duration}</em></p>

			{#if work.expandable}
				<button
					class="my-2 rounded-lg border-2 px-2 text-left text-primary hover:border-primary hover:bg-primary hover:text-white"
					on:click={() => (expanded = true)}
				>
					<p>Expand</p>
				</button>
			{/if}
		{/if}
	</div>
</div>
