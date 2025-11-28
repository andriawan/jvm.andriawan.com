<script lang="ts">
	import { onMount } from 'svelte';

	let currentSlide = 0;
	const totalSlides = 3;

	onMount(() => {
		const interval = setInterval(() => {
			currentSlide = (currentSlide + 1) % totalSlides;
		}, 5000);

		return () => clearInterval(interval);
	});

	function goToSlide(index: number) {
		currentSlide = index;
	}

	function nextSlide() {
		currentSlide = (currentSlide + 1) % totalSlides;
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
	}
</script>

<!-- Hero Slider -->
<section class="relative h-[600px] overflow-hidden">
	<div class="relative h-full">
		{#each Array(totalSlides) as _, i}
			<div
				id="slide-{i}"
				class="absolute inset-0 transition-opacity duration-500"
				class:opacity-100={currentSlide === i}
				class:opacity-0={currentSlide !== i}
			>
				<img
					src={[
						'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&h=900&fit=crop',
						'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&h=900&fit=crop',
						'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop'
					][i]}
					alt="Slide {i}"
					class="h-full w-full object-cover"
				/>
				<div class="absolute inset-0 bg-black/30"></div>
				<div
					class="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white"
				>
					<h1 class="mb-4 text-4xl font-bold drop-shadow-lg sm:text-5xl md:text-6xl">
						{['Welcome to JVM Indonesia', 'Our Story', 'Join Our Community'][i]}
					</h1>
					<p class="mb-8 text-xl drop-shadow-md sm:text-2xl">
						{[
							'Building Together, Growing Together',
							'A Legacy of Unity and Excellence',
							'Be Part of Something Special'
						][i]}
					</p>
					<button
						class="btn-hero px-8 py-3 font-semibold tracking-wider text-white uppercase transition-all hover:-translate-y-1"
					>
						Learn More
					</button>
				</div>
			</div>
		{/each}

		<button
			aria-label="indicator previous slide"
			on:click={prevSlide}
			class="absolute top-1/2 left-4 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 transition-all hover:bg-white sm:left-8"
		>
			<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<polyline points="15 18 9 12 15 6"></polyline>
			</svg>
		</button>
		<button
			aria-label="indicator next slide"
			on:click={nextSlide}
			class="absolute top-1/2 right-4 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 transition-all hover:bg-white sm:right-8"
		>
			<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<polyline points="9 18 15 12 9 6"></polyline>
			</svg>
		</button>

		<div class="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-4">
			{#each Array(totalSlides) as _, i}
				<button
					aria-label="dot-{i}"
					on:click={() => goToSlide(i)}
					class="h-3 rounded-full transition-all {currentSlide === i
						? 'w-8'
						: 'w-3'} {currentSlide === i ? 'bg-white' : 'bg-white/50'}"
				>
				</button>
			{/each}
		</div>
	</div>
</section>
