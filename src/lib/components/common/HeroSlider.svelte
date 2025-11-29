<script lang="ts">
	import { onMount } from 'svelte';
	import type { HeroSliderList } from '../../contract/HeroSliderList';

	let { isStatic = false, intervalTime = 5000 } = $props();

	let currentSlide = $state(0);
	const totalSlides = $state(3);
	let interval = $state<NodeJS.Timeout | null>(null);
	let sliderItem: HeroSliderList[] = [
		{
			id: 1,
			title: 'Welcome to JVM Indonesia',
			description: 'Building Together, Growing Together',
			imageUrl:
				'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1600&h=900&fit=crop',
			linkUrl: '#'
		},
		{
			id: 2,
			title: 'Our Story',
			description: 'A Legacy of Unity and Excellence',
			imageUrl:
				'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&h=900&fit=crop',
			linkUrl: '#'
		},
		{
			id: 3,
			title: 'Join Our Community',
			description: 'Be Part of Something Special',
			imageUrl:
				'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop',
			linkUrl: '#'
		}
	];

	onMount(() => {
		setNewInterval();
		return () => interval && clearInterval(interval);
	});

	$effect(() => {
		if (isStatic && interval) {
			clearInterval(interval);
			interval = null;
			return;
		} else {
			setTimeout(() => {
				setNewInterval();
			}, 0);
		}
	});

	function setNewInterval() {
		if (isStatic) return;
		if (interval) clearInterval(interval);
		interval = setInterval(() => {
			currentSlide = (currentSlide + 1) % totalSlides;
		}, intervalTime);
	}

	function goToSlide(index: number) {
		setNewInterval();
		currentSlide = index;
	}

	function nextSlide() {
		setNewInterval();
		currentSlide = (currentSlide + 1) % totalSlides;
	}

	function prevSlide() {
		setNewInterval();
		currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
	}
</script>

<!-- Hero Slider -->
<section class="relative h-[600px] overflow-hidden">
	<div class="relative h-full">
		{#each sliderItem as slider, i (slider.id)}
			<div
				id="slide-{slider.id}"
				class="absolute inset-0 transition-opacity duration-500"
				class:opacity-100={currentSlide === i}
				class:opacity-0={currentSlide !== i}
			>
				<img src={slider.imageUrl} alt="Slide {slider.id}" class="h-full w-full object-cover" />
				<div class="absolute inset-0 bg-black/30"></div>
				<div
					class="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white"
				>
					<h1 class="mb-4 text-4xl font-bold drop-shadow-lg sm:text-5xl md:text-6xl">
						{slider.title}
					</h1>
					<p class="mb-8 text-xl drop-shadow-md sm:text-2xl">
						{slider.description}
					</p>
				</div>
			</div>
		{/each}

		{#if !isStatic}
			<button
				aria-label="indicator previous slide"
				onclick={prevSlide}
				class="absolute top-1/2 left-4 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 transition-all hover:bg-white sm:left-8"
			>
				<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<polyline points="15 18 9 12 15 6"></polyline>
				</svg>
			</button>
			<button
				aria-label="indicator next slide"
				onclick={nextSlide}
				class="absolute top-1/2 right-4 z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/80 transition-all hover:bg-white sm:right-8"
			>
				<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<polyline points="9 18 15 12 9 6"></polyline>
				</svg>
			</button>
			<div class="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-4">
				{#each sliderItem as slider, i (slider.id)}
					<button
						aria-label="dot-{slider.id}"
						onclick={() => goToSlide(i)}
						class="h-3 cursor-pointer rounded-full transition-all {currentSlide === i
							? 'w-8'
							: 'w-3'} {currentSlide === i ? 'bg-white' : 'bg-white/50'}"
					>
					</button>
				{/each}
			</div>
		{/if}
	</div>
</section>
