<script lang="ts">
	import type { Conference } from '$lib/types';
	export let conference: Conference;
</script>

<div class="container mx-auto bg-yellow-400 m-4">
	<h1 class="text-2xl uppercase text-center m-3">{conference.title}</h1>
	<h2>{conference.description}</h2>
	<h3><span class="font-bold">Where:</span> {conference.location} {conference.venue}</h3>
	<h3><span class="font-bold">When:</span> {conference.startDate} - {conference.endDate}</h3>

	<h3><span class="font-bold">Number of talks:</span> {conference.talkCount}</h3>
	<h3><span class="font-bold">Number of speakers:</span> {conference.speakerCount}</h3>
</div>
