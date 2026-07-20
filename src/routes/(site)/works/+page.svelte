<script lang="ts">
	let { data } = $props();
</script>

<h1>Selected works</h1>

<div class="my-8 space-y-4">
	{#each data.works as work (work.slug)}
		<div class="flex w-80 items-baseline justify-between font-syne-mono">
			{#if work.page}
				<a href="/works/{work.slug}" rel="external" class="">
					<h2 class="text-lg transition hover:translate-x-1">
						{work.title}
					</h2>
				</a>
			{:else}
				<h2 class="ghover:translate-x-1 text-lg transition">
					{work.title}
				</h2>
			{/if}
			<span class="text-sm">
				{new Date(work.date).getFullYear()}
			</span>
		</div>
	{/each}
</div>
