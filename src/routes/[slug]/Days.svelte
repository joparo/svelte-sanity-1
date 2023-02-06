<script lang="ts">
	import type { Day } from '$lib/types';
	import Speakers from './Speakers.svelte';
	import Talks from './Talks.svelte';
	export let days: Day[];
</script>

<div class="container mx-auto bg-orange-400">
	<div class="text-center uppercase">Days</div>

	<ul>
		{#each days as day}
			<li>
				<h2>{day.title}</h2>
				<h3>{day.description}</h3>
				<h3><span class="font-bold">When: </span>{day.date}</h3>
				<Talks talks={day.talks} />
				<Speakers speakers={day.speakers} />
			</li>
		{/each}
	</ul>
</div>
