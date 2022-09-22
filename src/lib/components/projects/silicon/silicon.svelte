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
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}

	.container {
		position: absolute;
		left: -32px;
		top: -90px;
		z-index: -10;
	}
	.item.flex {
		color: var(--white-50);
		display: flex;
		width: 140vw;
		gap: 0 8px;
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
		font-size: 60px;
		text-shadow: 4px 4px var(--white-30);
	}

	.title h1 {
		font-family: nb-television, sans-serif;
		color: var(--white-30);
	}
</style>
