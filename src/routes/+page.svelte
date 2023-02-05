<script>
	export let data;
	let { conference } = data;
</script>

<header>
	<h1 class="text-3xl font-bold underline">Sanity + SvelteKit</h1>
</header>
<main>
	<div class="bg-indigo-900">
		<h1>{conference?.title}</h1>
		<h2>{conference?.description}</h2>
		<h3>{conference?.location}</h3>
		<h3>{conference?.venue}</h3>
		<h3>{conference?.startDate}</h3>
		<h3>{conference?.endDate}</h3>
		<h3>{conference?.talkCount}</h3>
		<h3>{conference?.speakerCount}</h3>
		<ul>
			{#each conference?.days as day}
				<li key={day._id}>
					<h2>{day.title}</h2>
					<h3>{day.description}</h3>
					<h3>{day.date}</h3>
					<ul>
						{#each day?.talks as talk}
							<li key={talk._id}>
								<h2>{talk.title}</h2>
								<h3>{talk.time}</h3>
								<h3>{talk.speaker}</h3>
							</li>
						{/each}
					</ul>
					<ul>
						{#each day?.speakers as speaker}
							<li key={speaker._id}>
								<h2>{speaker.name}</h2>
								<h3>{speaker.title}</h3>
								<img src={speaker.imageUrl} alt={speaker.name} />
							</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</div>
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
