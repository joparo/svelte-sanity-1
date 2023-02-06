<script lang="ts">
	import type { Speaker } from '$lib/types';
	export let speakers: Speaker[];
</script>

<div class="container mx-auto bg-pink-500">
	<div class="text-center uppercase">Speakers</div>
	<ul>
		{#each speakers as speaker}
			<li>
				<h2>{speaker.name}</h2>
				<h3>{speaker.title}</h3>

				<img src={speaker.imageUrl} alt={speaker.name} />
			</li>
		{/each}
	</ul>
</div>

<style>
	img {
		width: 250px;
		height: 250px;
		object-fit: cover;
		border-radius: 50%;
	}
</style>
