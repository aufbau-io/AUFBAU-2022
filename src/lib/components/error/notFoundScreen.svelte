<script>
</script>

<svelte:head>
	<title>404 not found</title>
</svelte:head>
<section>
	<div class="message">
		<a href="/"><h2>404 ERROR</h2></a>
	</div>
</section>

<style>
	section {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 100;
		color: var(--black);
	}

	a {
		cursor: pointer;
	}
</style>
