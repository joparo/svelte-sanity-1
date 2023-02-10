<script lang="ts">
	import type { Day } from '$lib/types';
	export let days: Day[];
</script>

<div class="container flex row-auto gap-2 mx-auto justify-between mb-8">
	{#each days as day}
		<div class="grow p-6 bg-white border border-gray-200 shadow">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{day.title}</h5>
			<p class="font-normal italic text-gray-700">{day.description}</p>
			<p class="font-normal text-sm text-gray-700">{day.date}</p>
		</div>
	{/each}
</div>
