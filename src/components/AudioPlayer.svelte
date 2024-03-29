<script lang="ts">
	import { onMount } from 'svelte';
	import WaveSurfer from 'wavesurfer.js';

	export let sound_url: string;
	let wavesurfer: WaveSurfer;

	let playing = false;
	let formattedDuration = '';
	let formattedTime = 'Loading...';

	onMount(() => {
		wavesurfer = WaveSurfer.create({
			container: '#waveform',
			waveColor: '#ccc',
			progressColor: '#2E16CC',
			url: sound_url,
			height: 40,
			barWidth: 2
		});

		wavesurfer.on('pause', () => {
			playing = wavesurfer.isPlaying();
		});

		wavesurfer.on('loading', (percent) => {
			formattedTime = percent == 100 ? 'Decoding...' : 'Loading: ' + percent + '%';
		});

		wavesurfer.on('decode', (duration) => {
			formattedDuration = formatTime(duration);
			formattedTime = formatTime(0);
		});

		wavesurfer.on('timeupdate', (currentTime) => {
			formattedTime = formatTime(currentTime);
		});
	});

	function pauseButton(): void {
		// Uses slightly hacky short circuit evaluation to trigger play if the duration has been set, i.e. audio decoded
		wavesurfer.isPlaying() ? wavesurfer.pause() : formattedDuration != '' && wavesurfer.play();
		playing = wavesurfer.isPlaying();
	}

	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		const secondsRemainder = Math.round(seconds) % 60;
		const paddedSeconds = `0${secondsRemainder}`.slice(-2);
		return `${minutes}:${paddedSeconds}`;
	};
</script>

<div class="flex gap-4">
	<button on:click={pauseButton} class="my-4">
		{#if playing}
			<svg
				class="h-4 w-4 text-primary"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 12 16"
			>
				<path
					d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"
				/>
			</svg>
		{:else}
			<svg
				class="h-4 w-4 text-primary"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 14 16"
			>
				<path
					d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z"
				/>
			</svg>
		{/if}
	</button>
	<div id="waveform" class="relative w-full py-1">
		<div
			id="time"
			class="pointer-events-none absolute inset-y-2/4 left-0 z-10 size-min whitespace-nowrap bg-white/70 px-1 text-sm"
		>
			{formattedTime}
		</div>
		<div
			id="duration"
			class="pointer-events-none absolute inset-y-2/4 right-0 z-10 size-min bg-white/70 px-1 text-sm"
		>
			{formattedDuration}
		</div>
	</div>
</div>
