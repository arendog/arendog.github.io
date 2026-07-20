<script lang="ts">
	let { data } = $props();

	const Content = data.Content;
	const work = data.metadata;
</script>

<div class="mt-12 lg:grid lg:grid-cols-2 lg:gap-20">
	<div class="flex flex-col items-center gap-4">
		{#if work.banner_img.url}
			<div>
				<img
					class="mt-4 aspect-video object-cover"
					src={work.banner_img.url}
					alt={work.banner_img.alt}
				/>
				<p class="my-1 italic">{work.banner_img.caption}</p>
			</div>
		{/if}

		{#if work.score.url}
			<!-- <embed type="application/pdf" class="w-full aspect-[0.8]" src={work.score.url + "#toolbar=0&navpanes=0"}> -->
			<a
				class="no-wrap link-button"
				rel="external"
				target="_blank"
				href={work.score.url}
				title="Open .pdf in new tab"
			>
				<h3>{work.score.caption}</h3>
			</a>
		{/if}
	</div>
	<div class="mt-16 flex flex-col gap-6 lg:mt-30">
		<div>
			<h1 class="mb-1 leading-8">{work.title} ({new Date(work.date).getFullYear()})</h1>
			<p class="text-base italic">{work.caption}</p>

			<p class="text-sm">{work.instrumentation} / {work.duration}</p>
		</div>
		<Content />
	</div>
</div>
