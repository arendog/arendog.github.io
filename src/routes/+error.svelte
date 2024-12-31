<script lang="ts">
	import '../app.postcss';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.status} Error</title>
</svelte:head>

<div class="error">
	<h1 class="text-black">{$page.status}: {$page.error?.message} ☹</h1>
	<p class="text-black my-0">
		{#if $page.status == 404}
			Oh, no! This page doesn’t seem to exist.
		{:else if $page.status == 403}
			Oh, no! You probably shouldn’t be here.
		{/if}
		Return <a href="/" class="text-primary hover:underline">home</a>.
	</p>
</div>
