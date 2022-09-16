<script>
	import Smoker from './smoker.svelte';
</script>

<main>
	<Smoker />

	<div class="container">
		<div class="item flex">
			{#each Array(300) as _, i}
				<h1>SEARCHING</h1>
			{/each}
		</div>
	</div>

	<div class="title" />
</main>

<style>
	main {
		position: relative;
		height: 100%;
		max-width: calc(100vw - 490px);
		overflow: hidden;
	}

	.container {
		position: absolute;
		left: -20px;
		top: 20px;
		z-index: -10;
	}
	.item.flex {
		color: var(--white-20);
		display: flex;
		width: 140vw;
		gap: 0 20px;
		flex-flow: row wrap;
		padding: 0 40px;
		user-select: none;
	}

	.title {
		display: flex;
		flex-flow: column nowrap;
		position: absolute;
		padding: 20px;
		display: flex;
		align-items: baseline;
		justify-content: left;
		height: 110px;
		width: calc(100vw);
	}

	h1 {
		font-family: nb-television-2d, sans-serif;
		letter-spacing: -4px;
		font-size: 70px;
		text-shadow: 4px 4px var(--white-10);
	}

	.title h1 {
		font-family: nb-television, sans-serif;
		color: var(--white-30);
	}
</style>
