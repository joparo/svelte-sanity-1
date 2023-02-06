export type Conference = {
	title: string;
	description: string;
	location: string;
	venue: string;
	startDate: string;
	endDate: string;
	talkCount: number;
	speakerCount: number;
	days: Day[];
};

export type Day = {
	_id: string;
	title: string;
	description: string;
	date: string;
	talks: Talk[];
	speakers: Speaker[];
};

export type Talk = {
	title: string;
	time: string;
	speaker: Speaker;
};

export type Speaker = {
	name: string;
	title: string;
	imageUrl: string;
};
