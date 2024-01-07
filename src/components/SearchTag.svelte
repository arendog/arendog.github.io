<script lang="ts">
    export let active = false;
    export let text = "";
</script>

{#if active}
    <button class="rounded-lg border-2 px-2 text-left text-white bg-primary border-primary" on:click={() => {active = !active}}>
        <p>× {text}</p>
    </button>
{:else}
    <button class="rounded-lg border-2 px-2 text-left text-primary hover:border-primary hover:bg-primary hover:text-white" on:click={() => {active = !active}}>
        <p>{text}</p>
    </button>
{/if}