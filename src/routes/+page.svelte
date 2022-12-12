<script>
	import { screenType, mouseOnLink } from '$lib/store/store';
	import { setMouseOnLink, setMouseOffLink } from '$lib/functions/mouse.js';
</script>

<main>
	<section>
		<h4>aufbau web studio</h4>
	</section>

	<body>
		<div class="card">
			<a href="https://dan.aufbau.io" class="title">VISIT // PERSONAL WEBSITE</a>
			<iframe src="https://dan.aufbau.io" title="PERSONAL" />
		</div>
		<div class="card">
			<a href="https://silicon.fm" class="title">VISIT // SILICON FM</a>
			<iframe src="https://silicon.fm" title="SILICON" />
		</div>
		<div class="card">
			<a href="https://iota.health" class="title">VISIT // IOTA</a>
			<iframe src="https://iota.health" title="IOTA" />
		</div>
		<div class="card">
			<a href="https://conceptioncalculator2000.com" class="title"
				>VISIT CONCEPTION CALCULATOR 2000</a
			>
			<iframe src="https://conceptioncalculator2000.com" title="CC2000" />
		</div>
		<!-- <iframe src="https://replikamasterworks.com" title="IOTA" /> -->
		<!-- <img src="system_diagram.png" alt="img" /> -->
		<!-- <iframe src="https://siiignal.netlify.app" title="IOTA" /> -->
		<!-- <iframe src="https://site.hhacker.space" title="IOTA" /> -->
		<!-- <iframe src="https://zen.aufbau.io" title="IOTA" /> -->
		<!-- <iframe src="https://orange.aufbau.io" title="IOTA" /> -->
	</body>
</main>

<style>
	iframe,
	img {
		width: 100%;
		height: calc(100% - 40px);
	}

	main {
		height: 100vh;
		height: calc(var(--vh, 1vh) * 100);
		width: 100vw;
	}

	section {
		background: var(--background);
		z-index: 10;

		padding: 0px 16px;
		padding-top: 4px;
		overflow: auto;

		display: flex;
		align-items: center;

		touch-action: manipulation;
	}

	.card {
		width: 25%;
		height: calc(100% - 8px);
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--accent);
		color: var(--background);
		background: var(--accent);
	}

	.title:hover {
		background: var(--background);
		border: 1px solid var(--primary);
		color: var(--primary);
	}

	.title:active {
		background: var(--background);
		border: 1px solid var(--accent);
		color: var(--accent);
	}

	navbar {
		width: 25%;
		height: 100%;
	}

	body {
		height: 100%;

		display: flex;
		flex-flow: column wrap;
		align-items: center;
		overflow: hidden;
	}

	@media (max-width: 760px) {
		body {
			flex-flow: row wrap;
			overflow: auto;
		}
		.card {
			width: 100%;
			height: 25%;
		}

		.title {
			padding: 0;
		}
	}
</style>
