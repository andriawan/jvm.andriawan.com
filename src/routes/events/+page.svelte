<script lang="ts">
	import Events from '$lib/components/pages/Events.svelte';
	import type { Event as EventType } from '$lib/contract/Event';
	import eventsJson from '$lib/data/events.json';
	const events: EventType[] = eventsJson as EventType[];
</script>

<Events {events} />
