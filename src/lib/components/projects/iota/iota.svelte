<script>
	import { fade } from 'svelte/transition';
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
		position: sticky;
		bottom: 10%;
		transform: translateY(-50%);
		height: 0;
		float: right;
		right: 3%;
		display: flex;
		justify-content: space-between;
		user-select: none;
		color: var(--white);
	}

	.text h2 {
		font-size: 70px;
		opacity: 0;
		user-select: none;
		font-family: nb-television-2d, sans-serif;
		animation: fadeIn ease-out 1s 1s;
		animation-fill-mode: forwards;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
