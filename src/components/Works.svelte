<script lang="ts">
	import WorkList from './WorkList.svelte';
	import SearchFilter from './SearchFilter.svelte';
	import SearchTag from './SearchTag.svelte';
	import { type Tags, type Work } from '$lib';

	interface Props {
		works: Work[];
	}

	let { works }: Props = $props()

	let searchTags: Tags = $state({
		orchestral: false,
		chamber: false,
		solo: false,
		choral: false,
		vocal: false,
		opera: false,
		electronic: false
	});

	let searchTerm = $state('');

	let searchWords = $derived(searchTerm.split(' ').filter((i) => i));



	let filteredWorks = $derived(
		works.filter((work) => {
			for (let i = 0; i < searchWords.length; i++) {
				if (!work.title.toLowerCase().includes(searchWords[i].toLowerCase())) {
					return false;
				}
			}

			for (let i = 0; i < Object.keys(searchTags).length; i++) {
				let key = Object.keys(searchTags)[i];
				if (searchTags[key as keyof Tags] && !work.tags[key as keyof Tags]) {
					return false;
				}
			}

			return true;
		})
	);
</script>

<div class="flex max-w-[42rem] flex-col gap-4 md:w-[42rem]">
	<div class="flex flex-col gap-2">
		<h1>Selected works</h1>

		<div class="flex flex-wrap gap-2">
			<SearchFilter bind:searchTerm />
			{#each Object.keys(searchTags) as key}
				{#if filteredWorks.filter((work) => {
					return work.tags[key as keyof Tags];
				}).length > 0}
					<SearchTag
						bind:active={searchTags[key as keyof Tags]}
						text={key.charAt(0).toUpperCase() + key.slice(1)}
					/>
				{/if}
			{/each}
		</div>
	</div>

	<div class="flex flex-col">
		{#if filteredWorks.length == 0}
			<p class="my-0">No results found.</p>
		{/if}
		{#each filteredWorks as work, i}
			<div class="flex gap-6 md:gap-12">
				<div class="flex min-w-12 flex-col items-center">
					{#if i > 0}
						{#if work.year != filteredWorks[i - 1].year}
							<h3>{work.year}</h3>
						{:else}
							<h3>&#8226;</h3>
						{/if}
					{:else}
						<h3>{work.year}</h3>
					{/if}
					{#if i != filteredWorks.length - 1}
						<div class="h-full w-[1px] bg-grey"></div>
					{/if}
				</div>
				<div class="pb-3">
					<WorkList {work} {searchWords} />
				</div>
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
