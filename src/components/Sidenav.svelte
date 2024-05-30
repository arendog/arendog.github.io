<script lang="ts">
	let menuOpen: boolean = false;
</script>

<div
	class="inset-x-0 flex flex-col justify-center gap-6 bg-white py-2 md:gap-16 md:bg-transparent md:py-12"
>
	<div class="flex items-center justify-center gap-4 md:w-auto md:flex-none">
		<button
			class="items-center rounded-md p-2 text-black focus:ring-2 focus:ring-accent md:hidden"
			on:click={() => {
				menuOpen = !menuOpen;
			}}
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class:show={!menuOpen}
				class="hidden h-6 w-6"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-width="2"
					d="M5 7h14M5 12h14M5 17h14"
				/>
			</svg>

			<svg
				class:show={menuOpen}
				class="hidden h-6 w-6"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18 17.94 6M18 18 6.06 6"
				/>
			</svg>
		</button>
		<a href="/">
			<h2 class="text-left leading-none md:text-right"><b>Alex Rennie</b><br />Composer</h2>
		</a>
	</div>
	<div class:show={menuOpen} class="flex hidden flex-col text-center md:block md:text-right">
		<a href="/bio" class="hover:underline">
			<h3>Biography</h3>
		</a>
		<a href="/works" class="hover:underline">
			<h3>Works</h3>
		</a>
		<!-- <a href="jazz">
            <h3>Jazz</h3>
        </a> -->
		<a href="/contact" class="hover:underline">
			<h3>Contact</h3>
		</a>
	</div>
</div>
