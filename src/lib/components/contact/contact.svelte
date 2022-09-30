<script>
	import Footer from '$lib/components/footer/footer.svelte';
</script>

<main>
	<div class="text">
		<h2>NO MORE DEAD WEB / EMAIL:<br /><a href="mailto: hi@aufbau.io">HI[at]<br />AUFBAU.IO</a></h2>
	</div>
	<Footer />
</main>

<style>
	main {
		position: relative;
		min-height: 100vh;
	}

	.text {
		top: 100px;
		left: 5%;
		user-select: none;
		color: var(--white);
		padding: 80px 20px;
	}

	.text h2 {
		padding: 20px;
		color: var(--white);
		height: calc(100vh - 140px);
		font-size: 150px;
		line-height: calc((100vh - 140px) / 4);
		user-select: none;
		font-family: nb-television, sans-serif;
		overflow-wrap: break-word;
		opacity: 0.9;
		text-align: right;
	}
</style>
