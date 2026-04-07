<script lang="ts">
	interface Props {
		id: string;
		name: string;
		label: string;
		displayLabel: boolean;
		min: number;
		max: number;
		value: number;
		step: number;
	}

	let {
		id,
		name,
		label,
		min = 0,
		max = 1,
		displayLabel,
		value = $bindable(0.75),
		step = 0.1
	}: Props = $props();
</script>

<div class="flex items-center gap-2">
	{#if displayLabel}
		<label class="text-sm text-darkgrey" for={id}>{label}</label>
		<input
			class="w-20 border-primary"
			type="range"
			{id}
			{name}
			{min}
			{max}
			bind:value
			{step}
			style="--val: {value * 100}%;"
		/>
	{:else}
		<input
			class="w-20 border-primary"
			aria-label={label}
			type="range"
			{id}
			{name}
			{min}
			{max}
			bind:value
			{step}
			style="--val: {value * 100}%;"
		/>
	{/if}
</div>
