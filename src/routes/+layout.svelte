<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	import '../app.postcss';
	import { beforeNavigate, afterNavigate } from '$app/navigation';

	import Sidenav from '../components/Sidenav.svelte';

	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';

	NProgress.configure({ showSpinner: false });

	beforeNavigate(() => {
		NProgress.start();
	});

	afterNavigate(() => {
		NProgress.done();
	});
</script>

<svelte:head>
	<meta name="description" content="Website of composer and saxophonist, Alex Rennie." />
	<meta name="keywords" content="composition, saxophone, piano" />
</svelte:head>

<div class="md:content-left top-0 content-center md:fixed md:mx-10 lg:mx-20">
	<nav>
		<Sidenav />
	</nav>
</div>

<div class="mx-6 mb-16 mt-4 md:ml-64 md:mr-0 md:mt-8 md:w-[42rem] lg:ml-80">
	<main>
		{@render children?.()}
	</main>
</div>

<!-- <div class="my-2 w-full text-center">
    <p class="text-sm">© Alex Rennie 2024</p>
</div> -->
