<script lang="ts">
	let { fullWidth = false, maxWidthSizeClass = 'max-w-7xl' } = $props();
	let maxWidthClass = $derived(fullWidth ? 'max-w-full' : maxWidthSizeClass);
</script>

<nav
	class="fixed {maxWidthClass} top-2.5 right-4 left-4 z-50 mx-auto rounded-full bg-white/80 shadow-lg backdrop-blur-md md:right-8 md:left-8"
>
	<div class="px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<button
				aria-label="Toggle mobile menu"
				aria-controls="mobileMenu"
				aria-expanded="false"
				class="flex flex-col gap-1 p-2 md:hidden"
			>
				<span class="h-0.5 w-6 bg-gray-800 transition-all"></span>
				<span class="h-0.5 w-6 bg-gray-800 transition-all"></span>
				<span class="h-0.5 w-6 bg-gray-800 transition-all"></span>
			</button>

			<div class="text-2xl font-bold tracking-wider text-red-600">
				<img src="/logo.png" alt="Logo" class="h-16 w-auto" />
			</div>

			<div class="hidden gap-8 md:flex">
				<a href="#home" class="font-medium text-gray-800 transition-colors hover:text-red-600"
					>Home</a
				>
				<a href="#about" class="font-medium text-gray-800 transition-colors hover:text-red-600"
					>About Us</a
				>
				<a href="#history" class="font-medium text-gray-800 transition-colors hover:text-red-600"
					>History</a
				>
				<a href="#members" class="font-medium text-gray-800 transition-colors hover:text-red-600"
					>Members</a
				>
				<a href="#events" class="font-medium text-gray-800 transition-colors hover:text-red-600"
					>Events</a
				>
				<a href="#contact" class="font-medium text-gray-800 transition-colors hover:text-red-600"
					>Contact</a
				>
			</div>

			<div class="flex gap-4">
				<button aria-label="Search" class="p-2 text-gray-800 transition-colors hover:text-red-600">
					<svg
						class="h-5 w-5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<circle cx="11" cy="11" r="8"></circle>
						<path d="m21 21-4.35-4.35"></path>
					</svg>
				</button>
				<button aria-label="Account" class="p-2 text-gray-800 transition-colors hover:text-red-600">
					<svg
						class="h-5 w-5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
						<circle cx="12" cy="7" r="4"></circle>
					</svg>
				</button>
			</div>
		</div>
	</div>

	<div
		id="mobileMenu"
		class="hidden rounded-b-2xl border-t border-gray-200 bg-white/80 shadow-lg backdrop-blur-md md:hidden"
	>
		<div class="flex flex-col space-y-3 px-4 py-4">
			<a href="#home" class="py-2 font-medium text-gray-800 transition-colors hover:text-red-600"
				>Home</a
			>
			<a href="#about" class="py-2 font-medium text-gray-800 transition-colors hover:text-red-600"
				>About Us</a
			>
			<a href="#history" class="py-2 font-medium text-gray-800 transition-colors hover:text-red-600"
				>History</a
			>
			<a href="#members" class="py-2 font-medium text-gray-800 transition-colors hover:text-red-600"
				>Members</a
			>
			<a href="#events" class="py-2 font-medium text-gray-800 transition-colors hover:text-red-600"
				>Events</a
			>
			<a href="#contact" class="py-2 font-medium text-gray-800 transition-colors hover:text-red-600"
				>Contact</a
			>
		</div>
	</div>
</nav>
