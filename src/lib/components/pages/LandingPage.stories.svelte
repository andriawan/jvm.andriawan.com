<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from 'storybook/test';
	import LandingPage from './LandingPage.svelte';

	const { Story } = defineMeta({
		title: 'Landing Page/Main',
		component: LandingPage,
		parameters: {
			layout: 'fullscreen'
		},
		tags: ['autodocs'],
		args: {
			onMenuClick: fn()
		}
	});
	
</script>
<Story name="Primary">
  	<LandingPage />
</Story>
