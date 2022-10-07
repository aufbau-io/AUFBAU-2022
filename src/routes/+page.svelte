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
			<a href="/playground">make web fun again</a>
			<p>ldn • ykt • pdx</p>
		</div>
		<div class="grey body__left">
			<h3>work</h3>
			<br />
			<a href="https://site.hhacker.space" target="_blank">hedron hackerspace • site • 2022</a>
			<a href="https://iota.health" target="_blank">iota • research app • 2022</a>
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
			<a href="mailto: dan@aufbau.io">email</a>
		</div>
		<br />
		<br />
	</div>
</section>

<style>
	section {
		height: 100%;
		display: flex;
		overflow: hidden;
	}
	h1 {
		font-family: 'dahlia', sans-serif;
		color: var(--black);
		margin-top: 16px;
		font-size: 48px;
		line-height: 62px;
		font-weight: 700;
		text-transform: lowercase;
	}

	h3 {
		margin-top: 10px;
		color: var(--black);
	}

	p {
		letter-spacing: 0.028em;
	}

	h3.hidden {
		color: var(--white);
	}

	.niels {
		z-index: -10;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	.body {
		position: relative;
		margin: auto 0;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
	}

	.grey {
		margin: 16px 0 16px 0;
		color: var(--black);
	}

	.grey.top {
		color: var(--black);
	}

	.body__left {
		text-align: left;
	}

	.body__right {
		text-align: right;
	}
</style>
