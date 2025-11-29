<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import FoundingMembers from './FoundingMembers.svelte';

	const { Story } = defineMeta({
		title: 'Landing Page/FoundingMembers',
		component: FoundingMembers,
		tags: ['autodocs'],
		parameters: {
			layout: 'fullscreen'
		}
	});
</script>

<Story
	name="Default"
	args={{
		members: [
			{
				name: 'Ahmad Suryanto',
				role: 'Founder & Chairman',
				since: 2015,
				image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop'
			},
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
></Story>
