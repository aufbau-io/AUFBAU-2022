<script>
	import { userType, screenType } from '$lib/store/store';

	let setUserType = (type) => {
		userType.set(type);
	};
</script>

<main>
	<section>
		<p class="no-click">aufbau web studio</p>
		<a href="mailto: dan@aufbau.io">contact</a>
	</section>

	<section class="userType">
		<p on:click={() => setUserType(1)}>
			[
			{#if $userType == 1}
				x
			{/if}
			] - work
		</p>

		<p on:click={() => setUserType(2)}>
			[
			{#if $userType == 2}
				x
			{/if}
			] - fun
		</p>
		<p on:click={() => setUserType(3)}>
			[
			{#if $userType == 3}
				x
			{/if}
			] - about
		</p>
	</section>

	{#if $screenType}
		<body>
			{#if !$userType}
				<div class="card s100" />
			{/if}
			{#if $userType == 1}
				<div class="card">
					<a href="https://165182-sustainable-digital-design-wonderland.vercel.app" class="title"
						>VISIT // SDD DEMO</a
					>
					<iframe
						src="https://165182-sustainable-digital-design-wonderland.vercel.app/"
						title="PERSONAL"
					/>
				</div>
				<div class="card">
					<a href="https://dan.aufbau.io" class="title">VISIT // PERSONAL WEBSITE</a>
					<iframe src="https://dan.aufbau.io" title="PERSONAL" />
				</div>

				<div class="card">
					<a href="https://iota.health" class="title">VISIT // IOTA</a>
					<iframe src="https://iota.health" title="IOTA" />
				</div>
				<div class="card">
					<a href="https://replikamasterworks.com" class="title">VISIT // REPLIKA MASTERWORKS</a>
					<iframe src="https://replikamasterworks.com" title="REPLIKA" />
				</div>
			{/if}
			{#if $userType == 2}
				<div class="card">
					<a href="https://zen.aufbau.io" class="title">VISIT // ZEN DEMO</a>
					<iframe src="https://zen.aufbau.io" title="SILICON" />
				</div>
				<div class="card">
					<a href="https://silicon.fm" class="title">VISIT // SILICON FM</a>
					<iframe src="https://silicon.fm" title="SILICON" />
				</div>
				<div class="card">
					<a href="https://site.hhacker.space" class="title">VISIT // HEDRON HACKERSPACE</a>
					<iframe src="https://site.hhacker.space" title="IOTA" />
				</div>
				<div class="card">
					<a href="https://conceptioncalculator2000.com" class="title"
						>VISIT // CONCEPTION CALCULATOR 2000</a
					>
					<iframe src="https://conceptioncalculator2000.com" title="CC2000" />
				</div>
			{/if}
			{#if $userType == 3}
				<div class="card s100">
					{#if $screenType == 1}
						<br />
						<p>this site works best on a desktop broswer</p>
					{/if}
					<br />
					<p>aufbau is a web studio</p>
					<p>run by dan humphries</p>
					<br />
					<p>a creative web engineer</p>
					<p>neuroscientist</p>
					<p>and book nerd</p>
					<br />
					<p>specialised in:</p>
					<p>- lightweight code</p>
					<p>- microservice systems</p>
					<p>- webgl // 3d</p>
					<p>- solving bespoke problems</p>
					<br />
					<p>my sites are fast, lightweight, and eco-friendly</p>
					<br />
					<p>they're so fast you can run multiple in the same browser at once</p>
					<p>( in case you were wondering about this site design )</p>

					<br />
					<!-- <p>I've built these:</p>
				<a href="https://dan.aufbau.io"><p>- dan.aufbau.io</p></a>
				<a href="https://165182-sustainable-digital-design-wonderland.vercel.app/"
					><p>- 165182-sustainable-digital-design-wonderland.vercel.app</p></a
				>
				<a href="https://iota.health"><p>- iota.health</p></a>
				<a href="https://replikamasterworks.com"><p>- replikamasterworks.com</p></a>
				<a href="https://zen.aufbau.io"><p>- zen.aufbau.io</p></a>
				<a href="https://silicon.fm"><p>- silicon.fm</p></a>
				<a href="https://site.hhacker.space"><p>- site.hhacker.space</p></a>
				<a href="https://conceptioncalculator2000.com"><p>- conceptioncalculator2000.com</p></a>
				<br /> -->

					<p>you can learn more about me here:</p>
					<a href="https://aufbai.io/dan_humphries_cv.pdf"><p>- cv</p></a>
					<a href="https://github.com/dnhmphrs"><p>- github</p></a>
					<a href="https://www.linkedin.com/in/dan-humphries/"><p>- linkedin</p></a>
					<a href="mailto: dan@aufbau.io"><p>- email</p></a>
				</div>
			{/if}
			<!-- <div class="card">
				<img src="system_diagram.png" alt="img" />
			</div> -->
			<!-- <img src="system_diagram.png" alt="img" /> -->
			<!-- <iframe src="https://siiignal.netlify.app" title="IOTA" /> -->
			<!-- <iframe src="https://site.hhacker.space" title="IOTA" /> -->
			<!-- <iframe src="https://zen.aufbau.io" title="IOTA" /> -->
			<!-- <iframe src="https://orange.aufbau.io" title="IOTA" /> -->
		</body>
	{/if}
</main>

<style>
	iframe {
		width: 100%;
		height: calc(100% - 20px);
	}

	main {
		height: 100vh;
		height: calc(var(--vh, 1vh) * 100);
		width: 100vw;
	}

	section {
		z-index: 10;
		position: relative;
		top: 0;
		gap: 4px;

		padding: 4px 8px 0 8px;

		overflow: auto;
		width: 100%;

		display: flex;
		justify-content: space-between;
		align-items: flex-start;

		touch-action: manipulation;
	}

	section.userType {
		padding-top: 0;
		padding-bottom: 6px;
	}

	section p {
		cursor: pointer;
	}

	section p.no-click {
		cursor: default;
	}

	.card {
		width: 25%;
		height: 100%;
		overflow: hidden;
	}

	.card.s100 {
		margin: 0 8px;
		width: 100%;
		line-height: 20px;
	}

	.card.nav {
		padding-left: 8px;
		margin-top: -4px;
		/* border-right: solid 1px var(--primary-50); */
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--background);
		background: var(--accent);
	}

	.title:hover {
		background: var(--background);
		color: var(--accent);
	}

	.title:active {
		background: var(--accent);
		color: var(--accent);
	}

	navbar {
		width: 25%;
		height: 100%;
	}

	body {
		height: calc(100% - 60px);

		display: flex;
		background: none;
		flex-flow: column wrap;

		overflow: hidden;
	}

	@media (max-width: 760px) {
		body {
			flex-flow: row wrap;
		}
		.title:hover,
		.title:active {
			border: none;
		}

		.title {
			padding: 0;
		}
		.card {
			width: 25%;
			height: 100%;
		}
		.card.s100 {
			height: 100%;
			padding-bottom: 20px;
			overflow-y: auto;
		}
	}
</style>
