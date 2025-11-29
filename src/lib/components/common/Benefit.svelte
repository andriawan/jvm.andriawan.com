<script lang="ts">
	import { Image } from '@unpic/svelte';
</script>

<!-- Why Join Section -->
<section class="bg-gray-900 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
			<!-- Left Content -->
			<div class="fade-in-left">
				<div class="mb-6 inline-flex items-center gap-2 text-blue-400">
					<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
						<circle cx="12" cy="12" r="10"></circle>
						<path d="M9 12l2 2 4-4" stroke="white" stroke-width="2" fill="none"></path>
					</svg>
					<span class="text-sm font-medium">Why Choose Us?</span>
				</div>

				<h2 class="mb-6 text-4xl font-bold text-white sm:text-5xl">
					Kenapa Harus Bergabung dengan JVM Indonesia?
				</h2>

				<p class="mb-8 text-lg leading-relaxed text-gray-400">
					Kami menghadirkan komunitas Java developer berkualitas tinggi dengan pembelajaran
					berkelanjutan, networking profesional, dan kesempatan pengembangan karir. <span
						class="font-semibold text-red-600">JVM Indonesia</span
					> adalah solusi terpercaya untuk pengembangan skill dan karir Anda.
				</p>

				<!-- Benefits List -->
				<div class="mb-8 space-y-4">
					<div class="flex items-start gap-3 delay-100 fade-in">
						<svg
							class="mt-1 h-6 w-6 shrink-0 text-green-500"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
						<div>
							<h3 class="text-lg font-semibold text-white">Pembelajaran Berkualitas Premium</h3>
							<p class="text-sm text-gray-400">
								Akses ke workshop, webinar, dan training dari expert
							</p>
						</div>
					</div>

					<div class="flex items-start gap-3 delay-200 fade-in">
						<svg
							class="mt-1 h-6 w-6 shrink-0 text-green-500"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
						<div>
							<h3 class="text-lg font-semibold text-white">
								Networking dengan Developer Profesional
							</h3>
							<p class="text-sm text-gray-400">
								Bertemu dan berkolaborasi dengan Java developers dari berbagai perusahaan
							</p>
						</div>
					</div>

					<div class="flex items-start gap-3 delay-300 fade-in">
						<svg
							class="mt-1 h-6 w-6 shrink-0 text-green-500"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
						<div>
							<h3 class="text-lg font-semibold text-white">Event Regular dan Meetup</h3>
							<p class="text-sm text-gray-400">Ikuti event bulanan, tech talks, dan hackathon</p>
						</div>
					</div>

					<div class="flex items-start gap-3 delay-400 fade-in">
						<svg
							class="mt-1 h-6 w-6 shrink-0 text-green-500"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
						<div>
							<h3 class="text-lg font-semibold text-white">Kesempatan Karir dan Job Posting</h3>
							<p class="text-sm text-gray-400">
								Akses eksklusif ke lowongan pekerjaan dari perusahaan partner
							</p>
						</div>
					</div>

					<div class="flex items-start gap-3 delay-500 fade-in">
						<svg
							class="mt-1 h-6 w-6 shrink-0 text-green-500"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<polyline points="20 6 9 17 4 12"></polyline>
						</svg>
						<div>
							<h3 class="text-lg font-semibold text-white">Dukungan Komunitas dan Mentoring</h3>
							<p class="text-sm text-gray-400">
								Dapatkan bantuan dan bimbingan dari senior developers
							</p>
						</div>
					</div>
				</div>

				<!-- CTA Buttons -->
				<div class="flex flex-wrap gap-4">
					<button
						class="btn-hero rounded-full bg-blue-600 px-8 py-3 font-semibold text-white transition-all hover:bg-blue-700"
					>
						Hubungi Kami
					</button>
					<button
						class="btn-program flex items-center gap-2 rounded-full border-2 border-gray-700 px-8 py-3 font-semibold text-white transition-all hover:border-red-600"
					>
						Selengkapnya
						<svg
							class="h-4 w-4"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<polyline points="9 18 15 12 9 6"></polyline>
						</svg>
					</button>
				</div>
			</div>

			<!-- Right Image -->
			<div class="fade-in-right relative">
				<div class="relative overflow-hidden rounded-3xl shadow-2xl">
					<Image
						src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
						alt="Community collaboration"
						layout="constrained"
						width={600}
						height={450}
						loading="lazy"
						class="h-full w-full object-cover"
					/>
					<div class="absolute inset-0 bg-linear-to-t from-gray-900/50 to-transparent"></div>
				</div>
				<!-- Decorative elements -->
				<div
					class="absolute -right-6 -bottom-6 -z-10 h-72 w-72 rounded-full bg-red-600/20 blur-3xl"
				></div>
				<div
					class="absolute -top-6 -left-6 -z-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"
				></div>
			</div>
		</div>
	</div>
</section>
