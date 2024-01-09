<script>
	import '../app.postcss';
	import Sidenav from '../components/Sidenav.svelte';
</script>

<svelte:head>
	<meta name="description" content="Website of composer and saxophonist, Alex Rennie." />
	<meta name="keywords" content="composition, saxophone, piano" />
</svelte:head>

<div class="fixed top-0 mx-20 my-12">
	<Sidenav />
</div>

<div class="my-12 ml-80 w-[42rem]">
	<slot />
</div>

<!-- <div class="my-2 w-full text-center">
    <p class="text-sm">© Alex Rennie 2024</p>
</div> -->
