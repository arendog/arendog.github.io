<script lang="ts">
	import WritingList from './WritingList.svelte';
	import SearchFilter from './SearchFilter.svelte';
	import SearchTag from './SearchTag.svelte';
	import { type WritingTags, type Writing } from '$lib';

	interface Props {
		writings: Writing[];
	}

	let { writings }: Props = $props();

	let searchTags: WritingTags = $state({
		article: false,
		essay: false
	});

	let searchTerm = $state('');

	let searchWords = $derived(searchTerm.split(' ').filter((i) => i));

	let filteredWritings = $derived(
		writings.filter((writing) => {
			for (let i = 0; i < searchWords.length; i++) {
				if (!writing.title.toLowerCase().includes(searchWords[i].toLowerCase())) {
					return false;
				}
			}

			for (let i = 0; i < Object.keys(searchTags).length; i++) {
				let key = Object.keys(searchTags)[i];
				if (searchTags[key as keyof WritingTags] && !writing.tags[key as keyof WritingTags]) {
					return false;
				}
			}

			return true;
		})
	);
</script>

<div class="flex max-w-[40rem] flex-col gap-4 md:w-[40rem]">
	<div class="flex flex-col gap-2">
		<h1>Writings</h1>

		<div class="flex flex-wrap gap-2">
			<SearchFilter bind:searchTerm label="Filter writings by title" />
			{#each Object.keys(searchTags) as key}
				{#if filteredWritings.filter((writing) => {
					return writing.tags[key as keyof WritingTags];
				}).length > 0}
					<SearchTag
						bind:active={searchTags[key as keyof WritingTags]}
						text={key.charAt(0).toUpperCase() + key.slice(1)}
					/>
				{/if}
			{/each}
		</div>
	</div>

	<div class="flex flex-col">
		{#if filteredWritings.length == 0}
			<p class="my-0">No results found.</p>
		{/if}
		{#each filteredWritings as writing, i}
			<div class="flex gap-6 md:gap-12">
				<div class="flex min-w-12 flex-col items-center">
					{#if i > 0}
						{#if writing.date.substring(0, 4) != filteredWritings[i - 1].date.substring(0, 4)}
							<h3>{writing.date.substring(0, 4)}</h3>
						{:else}
							<h3>&#8226;</h3>
						{/if}
					{:else}
						<h3>{writing.date.substring(0, 4)}</h3>
					{/if}
					{#if i != filteredWritings.length - 1}
						<div class="h-full w-[1px] bg-grey"></div>
					{/if}
				</div>
				<div class="pb-3">
					<WritingList {writing} {searchWords} />
				</div>
			</div>
		{/each}
	</div>
</div>
