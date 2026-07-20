<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>works - Alex Rennie</title>
</svelte:head>

<h1>selected works</h1>

<div class="my-8 flex flex-col">
	{#each data.works as work, i (work.slug)}
		<div class="flex gap-12 font-syne-mono lg:gap-16">
			<div class="flex w-12 flex-col items-center gap-0.5">
				{#if i > 0}
					{#if new Date(work.date).getFullYear() != new Date(data.works[i - 1].date).getFullYear()}
						<h2>{new Date(work.date).getFullYear()}</h2>
					{:else}
						<h2>&#8226;</h2>
					{/if}
				{:else}
					<h2>{new Date(work.date).getFullYear()}</h2>
				{/if}
				{#if i != data.works.length - 1}
					<div class="w-0 grow border"></div>
				{/if}
			</div>
			<div class="flex flex-col pb-4">
				{#if work.page}
					<a href="/works/{work.slug}" rel="external" class="">
						<h2 class="text-lg transition hover:translate-x-1">
							{work.title}
						</h2>
					</a>
				{:else}
					<h2 class="text-lg">
						{work.title}
					</h2>
				{/if}
				<!-- {#if work.caption}
					<p class="text-left text-sm leading-5 italic">{work.caption}</p>
				{/if} -->
				<div class="flex flex-wrap gap-x-4">
					<p class="text-left text-sm leading-4">{work.instrumentation}</p>
					<p class="text-left text-sm leading-4">/</p>
					<p class="text-left text-sm leading-4">{work.duration}</p>
				</div>
			</div>
		</div>
	{/each}
</div>
