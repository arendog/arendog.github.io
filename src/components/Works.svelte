<script lang="ts">
	import works from '$lib/data/works.json';
	import WorkList from './WorkList.svelte';
	import SearchFilter from './SearchFilter.svelte';
	import SearchTag from './SearchTag.svelte';

	interface SearchTags {
		orchestral: boolean;
		chamber: boolean;
		choral: boolean;
		vocal: boolean;
		opera: boolean;
		electronic: boolean;
	}

	let searchTags: SearchTags = $state({
		orchestral: false,
		chamber: false,
		choral: false,
		vocal: false,
		opera: false,
		electronic: false
	});
	let searchTerm = $state('');
	let archive = false;

	let searchWords = $derived(searchTerm.split(' ').filter((i) => i));

	let filteredWorks = $derived(works.filter((work) => {
		for (let i = 0; i < searchWords.length; i++) {
			if (!work.title.toLowerCase().includes(searchWords[i].toLowerCase())) {
				return false;
			}
		}

		for (let i = 0; i < Object.keys(searchTags).length; i++) {
			let key = Object.keys(searchTags)[i];
			if (searchTags[key as keyof SearchTags] && !work.tags[key as keyof SearchTags]) {
				return false;
			}
		}

		if (work.archive && !archive) {
			return false;
		}

		return true;
	}));

	// Slighty hacky way to collapse children when filteredWords updates
	let expandedChildren = $derived(filteredWorks.map((_) => false));
</script>

<div class="flex max-w-[42rem] flex-col gap-4 md:w-[42rem]">
	<div class="flex flex-col gap-2">
		<h1>Selected works</h1>

		<div class="flex flex-wrap gap-2">
			<SearchFilter bind:searchTerm />
			{#each Object.keys(searchTags) as key}
				{#if filteredWorks.filter((work) => {return work.tags[key as keyof SearchTags]}).length > 0}
					<SearchTag
						bind:active={searchTags[key as keyof SearchTags]}
						text={key.charAt(0).toUpperCase() + key.slice(1)}
					/>
				{/if}
			{/each}
		</div>
	</div>

	<div class="flex flex-col gap-3">
		{#each filteredWorks as work, i}
			<div class="flex gap-6 md:gap-12">
				<div class="w-12">
					{#if i > 0}
						{#if work.year != filteredWorks[i - 1].year}
							<h3>{work.year}</h3>
						{/if}
					{:else}
						<h3>{work.year}</h3>
					{/if}
				</div>
				<WorkList {work} {searchWords} />
			</div>
		{/each}
	</div>
	<!-- <div class="w-auto">
		<SearchTag
			bind:active={archive}
			text={(archive ? 'Hide ' : 'Display ') + 'archived works'}
			tag={false}
		/>
	</div> -->
</div>
