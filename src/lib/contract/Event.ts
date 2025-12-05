export interface Event {
	id: string;
	title: string;
	description: string;
	image: string;
	date: string;
	time: string;
	status: 'upcoming' | 'past';
	type: 'workshop' | 'meetup';
	difficulty: string;
	speaker: {
		name: string;
		title: string;
		image: string;
	};
	location: {
		name: string;
		address: string;
		mapsUrl: string;
		isOnline: boolean;
	};
	tags: string[];
	actions: {
		label: string;
		url: string;
		icon: string;
		disabled?: boolean;
	}[];
}
