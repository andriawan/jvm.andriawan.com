<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from 'storybook/test';

	import Navbar from './Navbar.svelte';

	const { Story } = defineMeta({
		title: 'Landing Page/Navbar',
		component: Navbar,
		tags: ['autodocs'],
		args: {
			onMenuClick: fn()
		}
	});
	
</script>
<Story name="Primary">
  	<Navbar />
</Story>
