<script>
</script>

<main>
	<div class="text">
		<h2>Contact us by Email at: <a href="mailto: hi@aufbau.io">hi@aufbau.io</a></h2>
		<h2>Drop us a line, don't be shy xx</h2>
	</div>
</main>

<style>
	main {
		position: relative;
		min-height: 100vh;
		max-height: 100vh;
		inline-size: calc(100%);
		background: var(--black);
	}

	.text {
		position: absolute;
		top: 100px;
		left: 5%;
		user-select: none;
		color: var(--white);
		inline-size: calc(100% - 20px);
	}

	.text h2 {
		font-size: 150px;
		line-height: 150px;
		user-select: none;
		font-family: nb-architekt, sans-serif;
		overflow-wrap: break-word;
		inline-size: calc(100% - 20px);
		line-height: 105%;
		opacity: 0.9;
		color: var(--black);
		text-shadow: 4px 2px var(--white);
		text-align: left;
	}

	a {
		text-shadow: 4px 2px var(--error);
	}
</style>
