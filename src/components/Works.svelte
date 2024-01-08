<script lang="ts">
	import works from '$lib/data/works.json';
	import Work from './Work.svelte';
	import SearchFilter from './SearchFilter.svelte';
	import SearchTag from './SearchTag.svelte';

	interface SearchTags {
		orchestral: boolean;
		chamber: boolean;
		choral: boolean;
		vocal: boolean;
		concerti: boolean;
	}

	let searchTags: SearchTags = {
		orchestral: false,
		chamber: false,
		choral: false,
		vocal: false,
		concerti: false
	};
	let searchTerm = '';

	$: searchWords = searchTerm.split(' ').filter((i) => i);

	$: filteredWorks = works.filter((work) => {
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

		return true;
	});
</script>

<div class="flex w-[42rem] flex-col gap-4">
	<h1>Works</h1>

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

	<div class="flex flex-col gap-4">
		{#each filteredWorks as work, i}
			<div class="flex gap-12">
				<div class="w-12">
					{#if i > 0}
						{#if work.year != filteredWorks[i - 1].year}
							<h3>{work.year}</h3>
						{/if}
					{:else}
						<h3>{work.year}</h3>
					{/if}
				</div>
				<Work {work} {searchWords} />
			</div>
		{/each}
	</div>
</div>
