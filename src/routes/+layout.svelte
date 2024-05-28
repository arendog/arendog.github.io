<script lang="ts">
	import '../app.postcss';
	import { navigating } from '$app/stores';

	import Sidenav from '../components/Sidenav.svelte';

	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';

	NProgress.configure({ showSpinner: false });

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>

<svelte:head>
	<meta name="description" content="Website of composer and saxophonist, Alex Rennie." />
	<meta name="keywords" content="composition, saxophone, piano" />
</svelte:head>

<div class="fixed top-0 mx-20 my-12">
	<Sidenav />
</div>

<div class="my-10 ml-80 w-[42rem]">
	<slot />
</div>

<!-- <div class="my-2 w-full text-center">
    <p class="text-sm">© Alex Rennie 2024</p>
</div> -->
