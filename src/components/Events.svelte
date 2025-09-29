<script lang="ts">
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
		'January',
		'February'
	];

	const today = new Date();
	const currentMonthNumber = today.getMonth() + today.getFullYear() * 12;
	let monthNumber = $state(currentMonthNumber);
	let nextMonths = $derived(monthNames.slice(monthNumber % 12, (monthNumber % 12) + 3));
</script>

<h1>Upcoming events</h1>
<div class="mt-4 grid grid-cols-[2rem_auto_2rem] items-center justify-stretch gap-2">
	{#if monthNumber > currentMonthNumber}
		<button
			class="aspect-square w-min rounded-lg border-2 px-2 font-bold text-primary hover:border-primary hover:bg-primary hover:text-parchment"
			aria-label="Scroll back month"
			onclick={() => (monthNumber -= 1)}>&lt;</button
		>
	{:else}
		<div></div>
	{/if}
	<div class="grid-rows-[auto, auto] grid grid-cols-2 gap-2 text-center sm:grid-cols-3">
		<p class="m-0 font-semibold">{nextMonths[0]}</p>
		<p class="m-0 font-semibold">{nextMonths[1]}</p>
		<p class="m-0 hidden font-semibold sm:block">{nextMonths[2]}</p>
		<p class="mx-2 my-0 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
		<p class="mx-2 my-0 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
		<p class="m-0 mx-2 my-0 hidden text-sm sm:block">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit
		</p>
	</div>
	<button
		class="aspect-square w-min rounded-lg border-2 px-2 font-bold text-primary hover:border-primary hover:bg-primary hover:text-parchment"
		aria-label="Scroll forward month"
		onclick={() => (monthNumber += 1)}>&gt;</button
	>
</div>
