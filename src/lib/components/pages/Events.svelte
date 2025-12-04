<script lang="ts">
	import type { Event } from '$lib/contract/Event';
	import EventContact from '../common/EventContact.svelte';
	import EventList from '../common/EventList.svelte';
	import FilterTabsEvents from '../common/FilterTabsEvents.svelte';
	import Footer from '../common/Footer.svelte';
	import HeroEvents from '../common/HeroEvents.svelte';
	import Navbar from '../common/Navbar.svelte';

	interface Props {
		events: Event[];
	}
	const { events }: Props = $props();
</script>

<Navbar />
<HeroEvents />
<FilterTabsEvents />
<EventList {events} />
<EventContact />
<Footer />
