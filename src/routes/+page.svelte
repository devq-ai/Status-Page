<style lang="postcss">
	.header {
		height: 100%;
		background: linear-gradient(180deg, #FF10F0 60%, transparent 40%);
	}
</style>

<div class="w-full bg-accent header min-h-[20vh] lg:min-h-[25vh] flex items-end justify-center">
	<div class="h-full w-full mx-2 md:mx-12">
		<System systems={data.statusLog} />
	</div>
</div>
<main class="text-center mx-4 md:mx-12 py-4">
	<div class="max-w-3xl min-w-[50vw] mx-auto">
		{#each data.statusLog as [name, siteStatus]}
			<Status {name} statuses={siteStatus} />
		{/each}
		{#if data.incidents?.length > 0}
			<div class="divider" />
			<Incidents incidents={data.incidents} />
		{/if}
	</div>
</main>

<style lang="postcss">
	.header {
		height: 100%;
		background: linear-gradient(180deg, theme('colors.accent') 60%, transparent 40%);
	}
</style>
