<script>
</script>

<main>
	<img src={'/system_diagram.png'} class="img" alt="modular system diagram" />
</main>

<style>
	main {
		position: relative;
		height: 100vh;
		height: calc(var(--vh, 1vh) * 100);
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.img {
		max-height: 100vh;
		max-width: 100vw;
		border: solid 1px var(--primary-50);
	}

	@media (max-width: 800px) {
		.img {
			background: var(--background);
			border-left: none;
			border-right: none;
		}
	}
</style>
