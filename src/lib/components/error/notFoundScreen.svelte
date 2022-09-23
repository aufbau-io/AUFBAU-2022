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
		<h2>404 error</h2>
		<p class="mono">Country roads, take me...</p>
	</div>

	<div class="nav">
		<a href="/" class="top-border">
			<h2>A</h2>
			<h1>HOME</h1>
		</a>
		<a href="https://www.wv.gov/">
			<h2>B</h2>
			<h1>WEST VIRGINIA</h1>
		</a>
		<a href="/be-long">
			<h2>C</h2>
			<h1>THE PLACE I BELONG</h1>
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

	h1,
	h2 {
		font-family: nb-television-2d, sans-serif;
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
