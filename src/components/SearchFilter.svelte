<script lang="ts">
    export let searchTerm: string;
</script>

<input bind:value={searchTerm} placeholder="Search..." class="text-[1.125rem] px-2 border-2 text-black placeholder-grey rounded-sm" />