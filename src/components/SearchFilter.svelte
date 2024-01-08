<script lang="ts">
	export let searchTerm: string;
</script>

<input
	bind:value={searchTerm}
	placeholder="Search..."
	class="rounded-sm border-2 px-2 text-[1.125rem] text-black placeholder-grey"
/>
