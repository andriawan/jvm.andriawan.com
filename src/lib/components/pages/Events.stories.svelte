<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from 'storybook/test';
	import Events from './Events.svelte';

	const { Story: EventsPageStory } = defineMeta({
		title: 'Events Page/Main',
		component: Events,
		parameters: {
			layout: 'fullscreen'
		},
		tags: ['autodocs'],
		args: {
			onMenuClick: fn()
		}
	});
</script>

<EventsPageStory
	name="Default"
	args={{
		members: [
			{
				name: 'Siti Nurhaliza',
				role: 'Co-Founder',
				since: 2015,
				image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop'
			},
			{
				name: 'Budi Santoso',
				role: 'Secretary General',
				since: 2016,
				image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop'
			},
			{
				name: 'Dewi Lestari',
				role: 'Treasurer',
				since: 2016,
				image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop'
			}
		]
	}}
/>
