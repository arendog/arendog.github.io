<script lang="ts">
	let menuOpen: boolean = $state(false);
</script>

<div
	class="inset-x-0 flex flex-col justify-center gap-6 border-b-2 bg-parchment py-1 md:gap-16 md:border-0 md:bg-transparent md:py-12"
>
	<div class="flex items-center justify-center gap-2 md:w-auto md:flex-none">
		<button
			class="items-center rounded-md p-2 text-black focus:ring-2 focus:ring-primary md:hidden"
			onclick={() => {
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
			<h2 class="p-2 pr-0 text-left leading-none md:text-right">
				<b>Alex Rennie</b><br />Composer
			</h2>
		</a>
	</div>
	<div class:show={menuOpen} class="flex hidden flex-col text-center md:block md:text-right">
		<!-- switch to biography when written -->
		<a href="/" class="hover:underline">
			<h3>About</h3>
		</a>
		<a href="/works" class="hover:underline">
			<h3>Works</h3>
		</a>
		<!-- <a href="/writings" class="hover:underline">
			<h3>Writings</h3>
		</a> -->
		<!-- <a href="jazz" class="hover:underline">
            <h3>Jazz</h3>
        </a> -->
		<a href="/contact" class="hover:underline">
			<h3>Contact</h3>
		</a>
		<div class="my-1 flex justify-center gap-2 md:justify-end">
			<a href="/contact" aria-label="Instagram">
				<svg
					class="h-6 w-6 text-black"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="22"
					height="22"
					fill="none"
					viewBox="0 0 22 22"
				>
					<path
						fill="currentColor"
						fill-rule="evenodd"
						d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>

			<a href="/contact" aria-label="Youtube">
				<svg
					class="h-6 w-6 text-black"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="22"
					height="22"
					fill="currentColor"
					viewBox="0 0 22 22"
				>
					<path
						fill-rule="evenodd"
						d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</div>
	</div>
</div>
