<script lang="ts">
	import { Image } from '@unpic/svelte';
</script>

<!-- Community Programs -->
<section class="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<h2 class="mb-12 text-center text-3xl font-bold fade-in sm:text-4xl">Our Programs</h2>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			<div
				class="group fade-in-scale relative h-96 cursor-pointer overflow-hidden rounded-lg sm:h-[400px]"
			>
				<Image
					src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=500&fit=crop"
					layout="constrained"
					width={300}
					height={400}
					alt="Youth Development"
					class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				<div
					class="group-hover:bg-red-900k/60 absolute inset-0 flex flex-col items-center justify-center bg-red-900/40 px-4 transition-colors"
				>
					<h3 class="mb-2 text-center text-2xl font-semibold text-white sm:text-3xl">
						Youth Development
					</h3>
					<p class="mb-4 text-center text-sm text-white">Empowering the next generation</p>
					<button
						class="btn-program rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-800 uppercase transition-colors hover:bg-red-600 hover:text-white"
					>
						Learn More
					</button>
				</div>
			</div>

			<div
				class="group fade-in-scale relative h-96 cursor-pointer overflow-hidden rounded-lg delay-100 sm:h-[400px]"
			>
				<Image
					src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=500&fit=crop"
					alt="Cultural Events"
					layout="constrained"
					width={300}
					height={400}
					class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				<div
					class="absolute inset-0 flex flex-col items-center justify-center bg-red-900/40 px-4 transition-colors group-hover:bg-red-900/60"
				>
					<h3 class="mb-2 text-center text-2xl font-semibold text-white sm:text-3xl">
						Cultural Events
					</h3>
					<p class="mb-4 text-center text-sm text-white">Celebrating our heritage</p>
					<button
						class="btn-program rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-800 uppercase transition-colors hover:bg-red-600 hover:text-white"
					>
						Learn More
					</button>
				</div>
			</div>

			<div
				class="group fade-in-scale relative h-96 cursor-pointer overflow-hidden rounded-lg delay-200 sm:h-[400px]"
			>
				<Image
					src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=500&fit=crop"
					alt="Community Service"
					layout="constrained"
					width={300}
					height={400}
					class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				<div
					class="absolute inset-0 flex flex-col items-center justify-center bg-red-900/40 px-4 transition-colors group-hover:bg-red-900/60"
				>
					<h3 class="mb-2 text-center text-2xl font-semibold text-white sm:text-3xl">
						Community Service
					</h3>
					<p class="mb-4 text-center text-sm text-white">Making a difference together</p>
					<button
						class="btn-program rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-800 uppercase transition-colors hover:bg-red-600 hover:text-white"
					>
						Learn More
					</button>
				</div>
			</div>

			<div
				class="group fade-in-scale relative h-96 cursor-pointer overflow-hidden rounded-lg delay-300 sm:h-[400px]"
			>
				<Image
					src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=500&fit=crop"
					alt="Education Programs"
					layout="constrained"
					width={300}
					height={400}
					class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				<div
					class="absolute inset-0 flex flex-col items-center justify-center bg-red-900/40 px-4 transition-colors group-hover:bg-red-900/60"
				>
					<h3 class="mb-2 text-center text-2xl font-semibold text-white sm:text-3xl">
						Education Programs
					</h3>
					<p class="mb-4 text-center text-sm text-white">Learning and growing</p>
					<button
						class="btn-program rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-800 uppercase transition-colors hover:bg-red-600 hover:text-white"
					>
						Learn More
					</button>
				</div>
			</div>
		</div>
	</div>
</section>
