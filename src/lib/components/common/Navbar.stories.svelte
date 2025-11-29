<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';

	import Navbar from './Navbar.svelte';

	const { Story } = defineMeta({
		title: 'Landing Page/Navbar',
		component: Navbar,
		tags: ['autodocs'],
		args: {
			fullWidth: true,
			maxWidthSizeClass: 'max-w-8xl'
		}
	});
</script>

<Story name="Default" args={{ fullWidth: false, maxWidthSizeClass: 'max-w-7xl' }}>
	<Navbar />
</Story>
<Story name="Full Width" args={{ fullWidth: true }}>
	<Navbar />
</Story>
