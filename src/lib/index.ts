import type { Component } from 'svelte';

export interface WorkMetadata {
	title: string;
	date: string;
	performances: string[];
	caption: string;
	movements: string[];
	instrumentation: string;
	duration: string;

	banner_img: {
		url: string;
		alt: string;
		caption: string;
	};

	audio: {
		url: string;
		peaks_url: string;
		caption: string;
	};

	score: {
		url: string;
		caption: string;
	};

	listed: boolean;
	page: boolean;
}

export interface WorkModule {
	metadata: WorkMetadata;
	default: Component;
}

export interface WorkSummary extends WorkMetadata {
	slug: string;
}