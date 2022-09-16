<script>
	import Arrow from './arrow.svelte';

	function fuckOff() {
		console.log('here');
		alert("YOU'VE HAD TOO MUCH TO DRINK MATE");
	}
</script>

<svelte:head>
	<title>404 not found</title>
</svelte:head>
<section>
	<div class="message">
		<h2>404 error.&nbsp;<br />Bummer.</h2>
		<p class="mono">Take one of these exits to find your&nbsp;way&nbsp;back.</p>
	</div>

	<div class="nav">
		<a href="/" class="top-border">
			<h2>00</h2>
			<h1>MAIN ROOM</h1>
			<Arrow direction="up" />
		</a>
		<a href="/" class="top-border">
			<h2>01</h2>
			<h1>SMOKING AREA</h1>
			<Arrow direction="left" />
		</a>
		<a href="/" class="top-border">
			<h2>02</h2>
			<h1>BACKSTAGE</h1>
			<Arrow direction="down" />
		</a>
		<a on:click={fuckOff} href="https://www.nycyellowcabtaxi.com/">
			<h2>03</h2>
			<h1>TAXI</h1>
			<Arrow direction="right" />
		</a>
	</div>
</section>

<style>
	section {
		display: flex;
	}

	section div {
		height: 100vh;
		align-items: center;
	}

	.message {
		margin: auto auto;
		height: auto;
		width: auto;
	}

	section .message h2 {
		font-weight: 300;
	}

	section .message p {
		font-weight: 300;
		line-height: 150%;
		padding-top: 1em;
	}

	.nav {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 40px 40px 40px 0;
		min-width: 50vw;
	}

	.nav a {
		display: flex;
		width: 100%;
		height: 100%;
		margin: auto;
		border-bottom: solid var(--white) 2px;
		padding: 0 1rem;

		align-items: center;
		stroke: var(--white);
	}

	.nav h2 {
		font-size: 64px;
		width: 2em;
	}

	.nav h1 {
		font-size: 64px;
		margin-right: auto;
	}

	.nav a:hover {
		background: var(--white);
		color: var(--black);
		stroke: var(--black);
	}

	.nav a.top-border {
		border-top: solid var(--white) 2px;
	}

	@media only screen and (max-width: 976px) {
		section {
			flex-direction: column;
			height: 100vh;
		}

		section div {
			height: auto;
		}

		.nav {
			min-width: calc(100% - 40px);
			padding: 40px 20px;
			height: 60vh;
		}
	}

	@media only screen and (max-width: 768px) {
		.message {
			margin: auto auto;
			padding: 0 2rem;
		}

		.message h2 {
			font-size: 33px;
		}

		.nav a {
			height: 12vh;
		}

		.nav h2 {
			font-size: 32px;
		}

		.nav h1 {
			font-size: 40px;
		}
	}
</style>
