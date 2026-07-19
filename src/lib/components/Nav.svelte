<script lang="ts">
	import { page } from '$app/state';

	function currentPageCircle(urlTest: string): string {
		return page.url.pathname == urlTest
			? 'link-circle'
			: 'hover:link-circle'
	}
</script>

<div class="navi my-8 flex items-center justify-between gap-25">
	<div class="cap-2 flex flex-col items-center">
		<h1 class="font-syne-tactile text-[28px] leading-none">alex rennie</h1>
		<h1 class="leading-none">composer</h1>
	</div>
	<div class="grid grid-cols-3 items-center gap-20">
		<a
			rel="external"
			href="./about"
			class="py-1 text-center font-syne-tactile text-2xl {currentPageCircle('/about')}">about</a
		>
		<a
			rel="external"
			href="./works"
			class="py-1 text-center font-syne-tactile text-2xl {currentPageCircle('/works')}">works</a
		>
		<a
			rel="external"
			href="./contact"
			class="py-1 text-center font-syne-tactile text-2xl {currentPageCircle('/contact')}">contact</a
		>
	</div>
</div>
