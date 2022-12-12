<script>
	import { screenType, mouseOnLink } from '$lib/store/store';
	import { setMouseOnLink, setMouseOffLink } from '$lib/functions/mouse.js';
</script>

<main>
	<section>
		<h3>aufbau web studio</h3>
	</section>

	<body>
		<a href="https://dan.aufbau.io" class="title">PERSONAL WEBSITE</a>
		<iframe src="https://dan.aufbau.io" title="IOTA" />
		<a href="https://dan.aufbau.io" class="title">SILICON FM</a>
		<iframe src="https://silicon.fm" title="IOTA" />
		<a href="https://dan.aufbau.io" class="title">IOTA</a>
		<iframe src="https://iota.health" title="IOTA" />
		<!-- <iframe src="https://replikamasterworks.com" title="IOTA" /> -->
		<!-- <img src="system_diagram.png" alt="img" /> -->
		<!-- <iframe src="https://siiignal.netlify.app" title="IOTA" /> -->
		<!-- <iframe src="https://site.hhacker.space" title="IOTA" /> -->
		<a href="https://dan.aufbau.io" class="title">CONCEPTION CALCULATOR 2000</a>
		<iframe src="https://conceptioncalculator2000.com" title="IOTA" />
		<!-- <iframe src="https://zen.aufbau.io" title="IOTA" /> -->
		<!-- <iframe src="https://orange.aufbau.io" title="IOTA" /> -->
	</body>
</main>

<style>
	iframe,
	img {
		width: 25%;
		height: calc(100% - 40px);
	}

	main {
		height: 100vh;
		width: 100vw;
		height: calc(var(--vh, 1vh) * 100);

		display: flex;
		flex-flow: row wrap;
	}

	section {
		position: sticky;
		top: 0;
		background: var(--background);
		z-index: 10;

		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 16px;
		overflow: auto;
		width: 100vw;
		touch-action: manipulation;
	}

	.title {
		height: 40px;
		width: 25%;

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
		height: calc(100% - 40px);

		display: flex;
		flex-flow: column wrap;
		align-items: center;
		border: 1px solid var(--primary-50);
	}

	@media (max-width: 760px) {
		body {
			flex-flow: row wrap;
		}
		iframe,
		img {
			width: 100%;
			height: 25%;
		}

		.title {
			width: 100%;
			height: 20px;
		}
	}
</style>
