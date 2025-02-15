// place files you want to import through the `$lib` alias in this folder.
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
	premiere: Date;
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
	date: Date;
	subtitle: string;
	banner_img_url: string;
	banner_img_alt: string;
	banner_img_caption: string;
	listed: boolean;
	page: boolean;
	tags: WritingTags;
};
