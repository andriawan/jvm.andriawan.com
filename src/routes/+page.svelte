<script lang="ts">
	import LandingPage from '$lib/components/pages/LandingPage.svelte';
	import membersJson from '$lib/data/founding-members.json';
	import type { Member } from '$lib/contract/Member';
	const members: Member[] = membersJson as Member[];
</script>

<LandingPage {members} />
