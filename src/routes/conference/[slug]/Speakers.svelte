<script lang="ts">
	import type { Speaker } from '$lib/types';
	export let speakers: Speaker[];
</script>

<div class="mx-auto text-center">
	<h1
		class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
	>
		Speakers
	</h1>
</div>

<div class="flex flew-wrap justify-content row-auto gap-2 mb-8">
	{#each speakers as speaker}
		<div class="grow flex bg-white p-4">
			<div class="p-2">
				<img src={speaker.imageUrl} alt={speaker.name} />
			</div>
			<div class="p-2">
				<h2 class="font-bold">{speaker.name}</h2>
				<h3>{speaker.title}</h3>
			</div>
		</div>
	{/each}
</div>

<style>
	img {
		width: 100px;
		height: 100px;
		object-fit: cover;
		border-radius: 50%;
	}
</style>
