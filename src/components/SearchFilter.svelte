<script lang="ts">
	interface Props {
		searchTerm: string;
	}

	let { searchTerm = $bindable() }: Props = $props();
</script>

<input
	bind:value={searchTerm}
	placeholder="Search..."
	class="h-8 rounded-sm border-2 px-2 text-base text-black placeholder-grey"
/>
