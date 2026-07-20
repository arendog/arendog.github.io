<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Layout from '../+layout.svelte';

	let { children } = $props();
</script>

<div
	class="mx-[max(calc(50%-200px),16px)] mb-8 max-w-100 min-w-60 lg:mx-[calc(50%-400px)] lg:max-w-200"
>
	<Nav />
	<Layout>{@render children()}</Layout>
</div>
