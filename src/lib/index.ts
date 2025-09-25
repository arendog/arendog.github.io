// types to be imported through `$lib` alias.
export type WorkTags = {
	orchestral: boolean;
	chamber: boolean;
	solo: boolean;
	choral: boolean;
	vocal: boolean;
	opera: boolean;
	electronic: boolean;
};

export type WritingTags = {
	article: boolean;
	essay: boolean;
};

export type Work = {
	slug: string;
	title: string;
	year: number;
	date: string;
	premiere: string;
	dedication: string;
	movements: string[];
	instrumentation: string;
	duration: string;
	banner_img_url: string;
	banner_img_alt: string;
	banner_img_caption: string;
	perusal_score_url: string;
	audio_url: string;
	audio_peaks_url: string;
	audio_caption: string;
	listed: boolean;
	page: boolean;
	tags: WorkTags;
};

export type Writing = {
	slug: string;
	title: string;
	date: string;
	banner_img_url: string;
	banner_img_alt: string;
	banner_img_caption: string;
	listed: boolean;
	page: boolean;
	tags: WritingTags;
};
