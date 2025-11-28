<script lang="ts">
	import { onMount } from 'svelte';

	function animateCounter(element: HTMLElement) {
		const targetAttr = element.getAttribute('data-target') ?? '0';
		const target = parseInt(targetAttr, 10);
		const duration = 2000; // 2 seconds
		const fps = 60;
		const stepTime = 1000 / fps;
		const increment = target / (duration / stepTime);
		let current = 0;

		const updateCounter = () => {
			current += increment;
			if (current < target) {
				element.textContent = String(Math.floor(current));
				requestAnimationFrame(updateCounter);
			} else {
				element.textContent = String(target);
			}
		};

		updateCounter();
	}

	onMount(() => {
		const counters = document.querySelectorAll<HTMLElement>('.counter');
		counters.forEach((el) => animateCounter(el));
	});
</script>

<!-- Stats Counter Section -->
<section class="bg-gray-900 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
			<!-- Members Counter -->
			<div class="fade-in-scale text-center">
				<div class="mb-4">
					<svg
						class="mx-auto h-16 w-16 text-red-600"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
						<circle cx="9" cy="7" r="4"></circle>
						<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
						<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
					</svg>
				</div>
				<div class="mb-2 text-5xl font-bold text-white sm:text-6xl">
					<span class="counter" data-target="2000">0</span>+
				</div>
				<div class="text-xl font-medium text-gray-400">Members</div>
			</div>

			<!-- Events Counter -->
			<div class="fade-in-scale text-center delay-200">
				<div class="mb-4">
					<svg
						class="mx-auto h-16 w-16 text-red-600"
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
				</div>
				<div class="mb-2 text-5xl font-bold text-white sm:text-6xl">
					<span class="counter" data-target="50">0</span>+
				</div>
				<div class="text-xl font-medium text-gray-400">Events</div>
			</div>

			<!-- Speakers Counter -->
			<div class="fade-in-scale text-center delay-400">
				<div class="mb-4">
					<svg
						class="mx-auto h-16 w-16 text-red-600"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
						<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
						<line x1="12" y1="19" x2="12" y2="23"></line>
						<line x1="8" y1="23" x2="16" y2="23"></line>
					</svg>
				</div>
				<div class="mb-2 text-5xl font-bold text-white sm:text-6xl">
					<span class="counter" data-target="20">0</span>+
				</div>
				<div class="text-xl font-medium text-gray-400">Speakers</div>
			</div>
		</div>
	</div>
</section>
