<script lang="ts">
	import type { Member } from '$lib/contract/Member';
	import { Image } from '@unpic/svelte';

	interface Props {
		members: Member[];
	}
	const { members }: Props = $props();
</script>

<section class="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<h2 class="mb-12 text-center text-3xl font-bold sm:text-4xl">Our Founding Members</h2>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each members as member (member.name)}
				<div
					class="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:-translate-y-2 hover:shadow-xl"
				>
					<span
						class="absolute top-4 left-4 z-10 rounded bg-red-600 px-3 py-1 text-xs font-semibold text-white uppercase"
					>
						Since {member.since}
					</span>
					<div class="relative h-80 overflow-hidden sm:h-[350px]">
						<Image
							src={member.image}
							alt={member.name}
							layout="constrained"
							width={300}
							height={350}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
						/>
						<div
							class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100"
						>
							<button
								class="btn-profile bg-white px-6 py-2 text-sm font-semibold text-gray-800 uppercase transition-colors hover:bg-red-600 hover:text-white"
							>
								View Profile
							</button>
						</div>
					</div>
					<div class="p-6">
						<h3 class="mb-2 text-lg font-medium">{member.name}</h3>
						<p class="mb-4 text-xl font-bold text-red-600">{member.role}</p>
						<button
							class="btn-contact w-full rounded-full bg-gray-800 py-2 text-sm font-semibold text-white uppercase transition-colors hover:bg-red-600"
						>
							Contact
						</button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
