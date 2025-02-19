<script lang="ts">
	interface Props {
		meta: any;
		content: any;
	}

	let { meta, content }: Props = $props();
	const Content = content;
</script>

<div class="flex max-w-[42rem] flex-col gap-4 md:w-[42rem]">
	<div class="flex flex-col">
		<h1 class="my-2 leading-[3rem]">
			{meta.title}
		</h1>

		{#if meta.date}
			<p class="my-0 text-base">{new Date(meta.date).toDateString().slice(3)}</p>
		{/if}

		{#if meta.banner_img_url}
			<div class="mt-4 w-full">
				<img
					alt={meta.banner_img_alt}
					class="aspect-video w-full object-cover"
					src={meta.banner_img_url}
				/>
				<p class="my-1 text-sm italic text-darkgrey">{meta.banner_img_caption}</p>
			</div>
		{/if}

		<Content />
	</div>
</div>
