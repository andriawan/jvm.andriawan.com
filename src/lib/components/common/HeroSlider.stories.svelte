<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import HeroSlider from './HeroSlider.svelte';

	const { Story } = defineMeta({
		title: 'Landing Page/HeroSlider',
		component: HeroSlider,
		tags: ['autodocs'],
		parameters: {
			layout: 'fullscreen'
		},
		args: {
			isStatic: false,
			intervalTime: 1000
		}
	});
</script>

<Story name="Default">
	<HeroSlider />
</Story>
