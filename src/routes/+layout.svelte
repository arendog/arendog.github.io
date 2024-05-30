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

<div class="md:content-left top-0 content-center md:fixed md:mx-10 lg:mx-20">
	<Sidenav />
</div>

<div class="mx-6 mt-4 md:ml-60 md:mr-0 md:mt-10 md:w-[42rem] lg:ml-80">
	<slot />
</div>

<!-- <div class="my-2 w-full text-center">
    <p class="text-sm">© Alex Rennie 2024</p>
</div> -->
