<script>
	import { onMount } from 'svelte';

	let Geometry;

	onMount(async () => {
		const module = await import('./geometry.svelte');
		Geometry = module.default;
	});
</script>

<main>
	<svelte:component this={Geometry} />
	<div class="text">
		<h2>scroll ↓</h2>
	</div>
</main>

<style>
	main {
		position: relative;
		min-height: 100vh;
		max-height: 100vh;
	}

	.text {
		position: absolute;
		bottom: 0%;
		right: 5%;
		display: flex;
		justify-content: space-between;
		user-select: none;
		color: var(--white);
	}

	.text h2 {
		font-size: 70px;
		line-height: 150px;
		user-select: none;
		font-family: nb-television-2d, sans-serif;
	}
</style>
