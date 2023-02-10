<script lang="ts">
	import Conference from './Conference.svelte';
	import Days from './Days.svelte';
	import type { Conference as ConferenceType } from '$lib/types';
	import Talks from './Talks.svelte';
	import Speakers from './Speakers.svelte';

	export let data;
	let { conference }: { conference: ConferenceType } = data;
</script>

<div>
	<Conference {conference} />
	<Days days={conference.days} />
	<Talks talks={conference.days.flatMap((d) => d.talks)} />
	<Speakers speakers={conference.days.flatMap((d) => d.speakers)} />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.red.100);
	}
</style>
