<script>
</script>

<svelte:head>
	<link rel="preload" href="/system_diagram.png" />
</svelte:head>

<main>
	<img src={'/system_diagram.png'} class="img" alt="modular system diagram" />
</main>

<style>
	main {
		position: relative;
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.img {
		max-height: 100vh;
		max-width: 100vw;
	}
	@media (max-width: 800px) {
		main {
			background: var(--black);
		}
	}
</style>
