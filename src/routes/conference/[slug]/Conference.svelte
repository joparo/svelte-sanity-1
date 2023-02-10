<script lang="ts">
	import type { Conference } from '$lib/types';
	export let conference: Conference;
</script>

<div class="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12">
	<h1
		class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
	>
		{conference.title}
	</h1>
	<p class="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48">
		{conference.description}
	</p>
</div>

<div class="flex p-2 mb-4 gap-2 justify-between">
	<div>
		<p class="text-sm">
			<span class="font-bold">Where:</span>
			{conference.location}
			{conference.venue}
		</p>
		<p class="text-sm">
			<span class="font-bold">When:</span>
			{conference.startDate} - {conference.endDate}
		</p>
	</div>
	<div>
		<p class="text-sm"><span class="font-bold">Number of talks:</span> {conference.talkCount}</p>
		<p class="text-sm">
			<span class="font-bold">Number of speakers:</span>
			{conference.speakerCount}
		</p>
	</div>
</div>

<style>
</style>
