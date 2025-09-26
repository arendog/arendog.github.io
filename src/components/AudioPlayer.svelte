<script lang="ts">
	import { onMount } from 'svelte';
	import WaveSurfer from 'wavesurfer.js';
	import Slider from './Slider.svelte';

	interface Props {
		audio_url: string;
		audio_peaks: number[][] | undefined;
		audio_caption: string;
	}

	let { audio_url, audio_peaks, audio_caption }: Props = $props();
	let wavesurfer: WaveSurfer;

	let playing = $state(false);
	let formattedDuration = $state('');
	let formattedTime = $state('Loading...');
	let volume = $state(0.75);

	onMount(() => {
		wavesurfer = WaveSurfer.create({
			container: '#waveform',
			// backend: 'WebAudio',
			waveColor: '#aaa',
			progressColor: '#2E16CC',
			url: audio_url,
			peaks: audio_peaks,
			height: 40,
			barWidth: 2
		});

		// wavesurfer.on('ready', function () {
		// 	console.log(wavesurfer.exportPeaks({ maxLength: 512 }));
		// });

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
		const secondsRemainder = Math.floor(seconds) % 60;
		const paddedSeconds = `0${secondsRemainder}`.slice(-2);
		return `${minutes}:${paddedSeconds}`;
	};

	$effect(() => {
		if (wavesurfer) {
			wavesurfer.setVolume(volume);
		}
	});
</script>

<div class="my-4 flex w-full flex-col gap-3 rounded-md bg-white px-3 py-2 text-darkgrey shadow-md">
	<div class="flex gap-2">
		<button title={playing ? 'Pause audio' : 'Play audio'} onclick={pauseButton} class="my-4">
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
				class="pointer-events-none absolute inset-y-2/3 left-0 z-10 size-min w-[2.25rem] whitespace-nowrap rounded-tr-md bg-white/90 px-1 text-sm"
			>
				{formattedTime}
			</div>
			<div
				id="duration"
				class="pointer-events-none absolute inset-y-2/3 right-0 z-10 size-min w-[2.25rem] rounded-tl-md bg-white/90 px-1 text-sm"
			>
				{formattedDuration}
			</div>
		</div>
	</div>

	<div class="flex items-center gap-2">
		<div class="flex items-center gap-1">
			{#if volume >= 0.5}
				<svg
					class="h-5 w-5 text-darkgrey"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z"
					/>
					<path
						fill-rule="evenodd"
						d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z"
						clip-rule="evenodd"
					/>
					<path
						fill-rule="evenodd"
						d="M17.657 4.811a.988.988 0 0 1 1.414 0A10.224 10.224 0 0 1 22 12c0 2.807-1.12 5.35-2.929 7.189a.988.988 0 0 1-1.414 0 1.029 1.029 0 0 1 0-1.438A8.173 8.173 0 0 0 20 12a8.173 8.173 0 0 0-2.343-5.751 1.029 1.029 0 0 1 0-1.438Z"
						clip-rule="evenodd"
					/>
				</svg>
			{:else if volume > 0}
				<svg
					class="h-5 w-5 text-darkgrey"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M13 6.037c0-1.724-1.978-2.665-3.28-1.562L5.638 7.933H4c-1.105 0-2 .91-2 2.034v4.066c0 1.123.895 2.034 2 2.034h1.638l4.082 3.458c1.302 1.104 3.28.162 3.28-1.562V6.037Z"
					/>
					<path
						fill-rule="evenodd"
						d="M14.786 7.658a.988.988 0 0 1 1.414-.014A6.135 6.135 0 0 1 18 12c0 1.662-.655 3.17-1.715 4.27a.989.989 0 0 1-1.414.014 1.029 1.029 0 0 1-.014-1.437A4.085 4.085 0 0 0 16 12a4.085 4.085 0 0 0-1.2-2.904 1.029 1.029 0 0 1-.014-1.438Z"
						clip-rule="evenodd"
					/>
				</svg>
			{:else}
				<svg
					class="h-5 w-5 text-darkgrey"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						d="M5.707 4.293a1 1 0 0 0-1.414 1.414l14 14a1 1 0 0 0 1.414-1.414l-.004-.005C21.57 16.498 22 13.938 22 12a9.972 9.972 0 0 0-2.929-7.071 1 1 0 1 0-1.414 1.414A7.972 7.972 0 0 1 20 12c0 1.752-.403 3.636-1.712 4.873l-1.433-1.433C17.616 14.37 18 13.107 18 12c0-1.678-.69-3.197-1.8-4.285a1 1 0 1 0-1.4 1.428A3.985 3.985 0 0 1 16 12c0 .606-.195 1.335-.59 1.996L13 11.586V6.135c0-1.696-1.978-2.622-3.28-1.536L7.698 6.284l-1.99-1.991ZM4 8h.586L13 16.414v1.451c0 1.696-1.978 2.622-3.28 1.536L5.638 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z"
					/>
				</svg>
			{/if}
			<Slider id="volume" name="volume" label="" min={0} max={1} bind:value={volume} step={0.05} />
		</div>

		{#if audio_caption}
			<p class="my-0 text-sm italic">{audio_caption}</p>
		{/if}
	</div>
</div>
