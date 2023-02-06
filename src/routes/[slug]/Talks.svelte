<script lang="ts">
	import type { Talk } from '$lib/types';
	export let talks: Talk[];
</script>

<div class="container mx-auto bg-green-500">
	<div class="text-center uppercase">Talks</div>
	<ul>
		{#each talks as talk}
			<li>
				<h2>{talk.title}</h2>
				<h3>{talk.time}</h3>
				<h3>{talk.speaker}</h3>
			</li>
		{/each}
	</ul>
</div>
