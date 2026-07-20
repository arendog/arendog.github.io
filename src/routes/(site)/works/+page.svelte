<script lang="ts">
	let { data } = $props();
</script>

<h1>Selected works</h1>

<div class="space-y-2">
	{#each data.works as work (work.slug)}
		<a
			href="/works/{work.slug}"
			rel="external"
			class="group flex w-80 items-baseline justify-between py-3 font-syne-mono"
		>
			<h2 class="text-lg transition group-hover:translate-x-1">
				{work.title}
			</h2>

			<span class="text-sm text-zinc-500">
				{new Date(work.date).getFullYear()}
			</span>
		</a>
	{/each}
</div>
