<script lang="ts">
	interface Props {
		searchTerm: string;
		label: string;
	}

	let { searchTerm = $bindable(), label }: Props = $props();
</script>

<input
	bind:value={searchTerm}
	aria-label={label}
	placeholder="Search..."
	class="h-8 rounded-sm border-2 px-2 text-base text-black placeholder-grey"
/>
