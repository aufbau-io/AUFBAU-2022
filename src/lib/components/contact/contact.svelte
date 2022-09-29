<script>
	import Footer from '$lib/components/footer/footer.svelte';
</script>

<main>
	<div class="text">
		<a href="mailto: hi@aufbau.io">
			<h2>NO MORE DULL WEB / EMAIL:<br />HI[at]<br />AUFBAU.IO<br /></h2>
		</a>
	</div>
	<Footer />
</main>

<style>
	main {
		position: relative;
		min-height: calc(100vh);
	}

	.text {
		top: 100px;
		left: 5%;
		user-select: none;
		color: var(--white);
		padding: 80px;
	}

	.text h2 {
		padding: 20px;
		background: #d0d0d0;
		font-size: 150px;
		line-height: 150px;
		user-select: none;
		font-family: nb-television, sans-serif;
		overflow-wrap: break-word;
		line-height: 105%;
		opacity: 0.9;
		color: var(--black);
		text-shadow: 4px 2px var(--white);
		text-align: right;
	}
</style>
