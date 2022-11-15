<script>
</script>

<svelte:head>
	<title>AUFBAU WEB STUDIO</title>
</svelte:head>

<section>
	<div class="body">
		<!--img class="niels" alt="niels" src="/niels_bw.jpg" /-->

		<div class="grey top">
			<h1>aufbau.</h1>

			<p>CREATIVE WEB STUDIO</p>
			<!-- <p on:click={() => toggle()}>make web fun again</p> -->
			<p>ldn • ykt • nyc</p>
		</div>
		<div class="grey body__left">
			<h3>work</h3>
			<a href="https://iota.health" target="_blank">iota • app • WIP </a>

			<a href="https://www.conceptioncalculator2000.com" target="_blank"
				>conception calculator 2000 • web • WIP
			</a>
			<a href="https://replikamasterworks.com" target="_blank">replika • web • WIP </a>
			<!-- <a href="https://site.hhacker.space" target="_blank">hedron hackerspace • web • 2022</a> -->
		</div>
		<div class="grey body__right">
			<h3>systems</h3>
			<a href="/systems">modular system architecture • example</a>
		</div>
		<div class="grey hidden body__left">
			<p>bespoke websites, systems, apps</p>
			<p>lightweight and 3d specialist</p>
		</div>
		<div class="body__right">
			<h3>say hi</h3>

			<a target="_blank" href="/dan_humphries_cv.pdf">cv</a>
			<a href="mailto: dan@aufbau.io">email</a>
		</div>
		<br />
	</div>
</section>

<style>
	section {
		height: 100vh;
		height: calc(var(--vh, 1vh) * 100);
		display: flex;
		overflow: auto;
		max-width: 640px;
	}

	.body {
		position: relative;
		margin: auto 0;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		background: var(--background-50);
		border: solid 1px var(--primary-50);
		border-radius: 20px;
		padding: 40px;
	}

	.grey {
		margin: 16px 0;
	}

	.body__left {
		text-align: left;
	}

	.body__right {
		text-align: right;
	}

	@media (max-width: 800px) {
		.grey {
			margin: 8px;
		}
		.body {
			border-radius: 0;
			padding: 16px 24px;
			border-left: none;
			border-right: none;
		}
	}
</style>
