<script lang="ts">
	import type { Talk } from '$lib/types';
	export let talks: Talk[];
</script>

<div class="mx-auto text-center">
	<h1
		class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl"
	>
		Talks
	</h1>
</div>

<div class="flex-col justify-between row-auto gap-2 mb-8">
	{#each talks as talk}
		<div class="grow p-6 bg-white shadow mb-4">
			<h2 class="font-bold">{talk.title}</h2>
			<h3>{talk.time}</h3>
			<h3>{talk.speaker}</h3>
		</div>
	{/each}
</div>
