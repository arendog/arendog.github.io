<script lang="ts">
	interface Props {
		active?: boolean;
		text?: string;
		tag?: boolean;
	}

	let { active = $bindable(false), text = '', tag = true }: Props = $props();
</script>

{#if tag}
	{#if active}
		<button
			class="rounded-lg border-2 border-accent bg-accent px-2 text-left text-parchment"
			onclick={() => {
				active = !active;
			}}
		>
			<p class="my-0">&times; {text}</p>
		</button>
	{:else}
		<button
			class="rounded-lg border-2 px-2 text-left text-accent hover:border-accent hover:bg-accent hover:text-parchment"
			onclick={() => {
				active = !active;
			}}
		>
			<p class="my-0">{text}</p>
		</button>
	{/if}
{:else}
	<button
		class="text-left text-accent hover:underline"
		onclick={() => {
			active = !active;
		}}
	>
		<p class="my-0">{text}</p>
	</button>
{/if}
