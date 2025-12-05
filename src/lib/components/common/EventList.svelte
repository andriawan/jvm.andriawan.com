<script lang="ts">
	import type { Event } from '$lib/contract/Event';
	import { Image } from '@unpic/svelte';

	interface Props {
		events: Event[];
	}
	const { events }: Props = $props();
	const styles: Record<string, Record<string, string>> = {
		tags: {
			Workshop: 'bg-red-600/20 text-red-400',
			'Beginner Friendly': 'bg-purple-600/20 text-purple-400',
			Meetup: 'bg-green-600/20 text-green-400',
			Free: 'bg-blue-600/20 text-blue-400',
			Intermediate: 'bg-yellow-600/20 text-yellow-400',
			Advanced: 'bg-indigo-600/20 text-indigo-400'
		},
		chip: {
			upcoming: 'bg-green-500',
			past: 'bg-gray-600'
		},
		label: {
			upcoming: 'Upcoming',
			past: 'Past Event'
		}
	};
</script>

<!-- Events Grid -->
<section class="bg-gray-900 px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
			<!-- Event Card 1 -->
			{#each events as event (event.id)}
				<div
					class="event-card upcoming workshop fade-in-scale overflow-hidden rounded-2xl bg-gray-800 shadow-xl transition-all hover:shadow-2xl"
					data-category="upcoming workshop"
				>
					<div class="relative h-64 overflow-hidden">
						<Image
							src={event.image}
							alt={event.title}
							layout="constrained"
							class="h-full w-full object-cover"
						/>
						<div
							class="absolute top-4 right-4 rounded-full {styles.chip[
								event.status
							]}  px-4 py-2 text-sm font-semibold text-white"
						>
							{styles.label[event.status]}
						</div>
						<div
							class="absolute right-0 bottom-0 left-0 bg-linear-to-t from-gray-900 to-transparent p-6"
						>
							<div class="flex items-center gap-2 text-sm text-white">
								<svg
									class="h-4 w-4"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
									<line x1="16" y1="2" x2="16" y2="6"></line>
									<line x1="8" y1="2" x2="8" y2="6"></line>
									<line x1="3" y1="10" x2="21" y2="10"></line>
								</svg>
								<span>{event.date} • {event.time}</span>
							</div>
						</div>
					</div>
					<div class="p-6">
						<div class="mb-3 flex items-center gap-2">
							{#each event.tags as tags (tags)}
								<span class="rounded-full px-3 py-1 text-xs font-semibold {styles.tags[tags]}"
									>{tags}</span
								>
							{/each}
						</div>
						<h3 class="mb-3 text-2xl font-bold text-white">{event.title}</h3>
						<p class="mb-4 line-clamp-2 text-gray-400">
							{event.description}
						</p>

						<!-- Speaker -->
						<div class="mb-4 flex items-center gap-3 border-b border-gray-700 pb-4">
							<Image
								src={event.speaker.image}
								alt="Speaker"
								width={50}
								height={50}
								class="rounded-full object-cover"
							/>
							<div>
								<p class="font-semibold text-white">{event.speaker.name}</p>
								<p class="text-sm text-gray-400">{event.speaker.title}</p>
							</div>
						</div>

						<!-- Location -->
						<div class="mb-4 flex items-start gap-3">
							<svg
								class="mt-1 h-5 w-5 shrink-0 text-red-600"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
								<circle cx="12" cy="10" r="3"></circle>
							</svg>
							<div class="flex-1">
								<p class="font-medium text-white">{event.location.name}</p>
								<p class="mb-2 text-sm text-gray-400">{event.location.address}</p>
								<a
									href="https://www.google.com/maps/search/?api=1&query=Innovation+Hub+Jakarta+Jl+Sudirman+Jakarta+Pusat"
									target="_blank"
									class="inline-flex items-center gap-1 text-sm text-blue-400 transition-colors hover:text-blue-300"
								>
									<svg
										class="h-4 w-4"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
										<circle cx="12" cy="10" r="3"></circle>
									</svg>
									Open in Google Maps
								</a>
							</div>
						</div>

						<!-- Contact/Registration -->
						{#if event.status === 'upcoming'}
							<div class="flex flex-wrap gap-3">
								<a
									href={event.actions[0].url}
									target="_blank"
									class="btn-primary flex items-center gap-2"
								>
									<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
										<path
											d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
										/>
									</svg>
									WhatsApp
								</a>
								<a href={event.actions[1].url} class="btn-secondary flex items-center gap-2">
									<svg
										class="h-5 w-5"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<rect x="2" y="4" width="20" height="16" rx="2"></rect>
										<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
									</svg>
									Email
								</a>
							</div>
						{/if}
						{#if event.status === 'past'}
							<div class="flex flex-wrap gap-3">
								<button class="btn-secondary cursor-not-allowed opacity-50" disabled>
									Event Completed
								</button>
								<a href="#" class="btn-secondary flex items-center gap-2">
									<svg
										class="h-5 w-5"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
									>
										<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
										<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
									</svg>
									View Materials
								</a>
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
