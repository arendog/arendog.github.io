<script lang="ts">
	import { page } from '$app/state';

	function currentPageCircle(urlTest: string): string {
		return page.url.pathname == urlTest ? 'link-circle' : 'hover:link-circle';
	}
</script>

<div class="navi my-8 flex flex-col items-center justify-between gap-4 lg:flex-row">
	<a href="/" rel="external" class="cap-2 flex flex-col items-center link-no-decoration">
		<h1 class="font-syne-tactile text-[28px] leading-none">alex rennie</h1>
		<h1 class="leading-none">composer</h1>
	</a>
	<div class="flex w-full max-w-92 min-w-64 grow content-center items-center justify-between">
		<a
			rel="external"
			href="/about"
			class="w-min py-1 text-center font-syne-tactile text-2xl link-no-decoration {currentPageCircle(
				'/about'
			)}">about</a
		>
		<a
			rel="external"
			href="/works"
			class="w-min py-1 text-center font-syne-tactile text-2xl link-no-decoration {currentPageCircle(
				'/works'
			)}">works</a
		>
		<a
			rel="external"
			href="/contact"
			class="w-min py-1 text-center font-syne-tactile text-2xl link-no-decoration {currentPageCircle(
				'/contact'
			)}">contact</a
		>
	</div>
</div>
