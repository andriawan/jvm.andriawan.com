<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Footer from './Footer.svelte';
	import version from '$lib/data/version.json';

	const { Story: FooterStory } = defineMeta({
		title: 'Common Components/Footer',
		component: Footer,
		tags: ['autodocs'],
		args: {
			showVersion: true,
			version: version
		}
	});
</script>

<FooterStory name="Default" />
