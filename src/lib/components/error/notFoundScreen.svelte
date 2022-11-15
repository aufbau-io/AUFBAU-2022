<script>
</script>

<svelte:head>
	<title>404 not found</title>
</svelte:head>
<section>
	<div class="message">
		<a href="/"><h3>404 ERROR</h3></a>
	</div>
</section>

<style>
	section {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 100;
		color: var(--primary);
	}

	a {
		cursor: pointer;
		display: block;
		color: var(--primary);
		background: var(--background);
		border: solid 1px var(--primary-50);
		text-decoration: none;
	}
</style>
