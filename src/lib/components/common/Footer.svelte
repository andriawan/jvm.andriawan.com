<script lang="ts">
	import type { AppVersion } from '$lib/contract/AppVersion';
	import dataVersion from '$lib/data/version.json';

	interface Props {
		showVersion?: boolean;
		version?: AppVersion;
	}
	let { showVersion = true, version = dataVersion }: Props = $props();
</script>

<!-- Footer -->
<footer class="bg-gray-900 px-4 pt-12 pb-4 text-white sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			<div>
				<div class="flex items-center gap-2">
					<img src="/logo.png" alt="Logo" class="h-12 w-auto" />
					<h3 class="text-2xl font-bold text-red-600">JVM INDONESIA</h3>
				</div>
				<p class="leading-relaxed text-gray-400">
					Building a stronger, united community through collaboration and shared values.
				</p>
			</div>
			<div>
				<h4 class="mb-4 text-lg font-semibold text-red-600">Quick Links</h4>
				<ul class="space-y-2">
					<li>
						<a href="/about-us" class="text-gray-400 transition-colors hover:text-red-600"
							>About Us</a
						>
					</li>
					<li>
						<a href="/history" class="text-gray-400 transition-colors hover:text-red-600"
							>Our History</a
						>
					</li>
					<li>
						<a href="/members" class="text-gray-400 transition-colors hover:text-red-600">Members</a
						>
					</li>
					<li>
						<a href="/events" class="text-gray-400 transition-colors hover:text-red-600">Events</a>
					</li>
				</ul>
			</div>
			<div>
				<h4 class="mb-4 text-lg font-semibold text-red-600">Get Involved</h4>
				<ul class="space-y-2">
					<li>
						<a href="#join" class="text-gray-400 transition-colors hover:text-red-600"
							>Become a Member</a
						>
					</li>
					<li>
						<a href="#volunteer" class="text-gray-400 transition-colors hover:text-red-600"
							>Volunteer</a
						>
					</li>
					<li>
						<a href="#donate" class="text-gray-400 transition-colors hover:text-red-600"
							>Support Us</a
						>
					</li>
					<li>
						<a href="#contact" class="text-gray-400 transition-colors hover:text-red-600">Contact</a
						>
					</li>
				</ul>
			</div>
			<div>
				<h4 class="mb-4 text-lg font-semibold text-red-600">Follow Us</h4>
				<div class="flex flex-col space-y-2">
					<a
						href="https://github.com/jvmdeveloperid"
						target="_blank"
						class="text-gray-400 transition-colors hover:text-red-600">Github</a
					>
					<a
						href="https://t.me/JVMIndonesia"
						target="_blank"
						class="text-gray-400 transition-colors hover:text-red-600">Telegram</a
					>
					<a
						href="https://www.instagram.com/jvmindonesia"
						target="_blank"
						class="text-gray-400 transition-colors hover:text-red-600">Instagram</a
					>
				</div>
			</div>
		</div>
		<div class="border-t border-gray-800 pt-8 text-center text-gray-500">
			<p>&copy; 2025 JVM Indonesia. All rights reserved.</p>
		</div>
		{#if showVersion && version}
			<div class="mt-4 pt-1 text-center text-xs text-gray-500">
				<p>
					Version: {version.version} | Commit: {version.commit.sha}
				</p>
				<p>
					Last update: {new Date(version.timestamp).toLocaleString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric',
						hour: '2-digit',
						minute: '2-digit',
						timeZoneName: 'short'
					})}
				</p>
			</div>
		{/if}
	</div>
</footer>
