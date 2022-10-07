<script>
</script>

<main>
	<div class="top">
		<h2>CONTACT</h2>
		<h6 class="text">
			<a href="mailto: dan@aufbau.io">DAN@AUFBAU.IO</a>
		</h6>
	</div>
	<div class="bottom">
		<h2>AUFBAU</h2>
		<h6 class="text">
			Aufbau is the outlet of Dan Niels <a href="https://dan.aufbau.io" target="_blank"
				>[&nbsp;dan.aufbau.io&nbsp;]</a
			>. Dan has 5+ years experience working across a range of tech stacks, from data and machine
			learning engineering, to graphic design and 3d development. He has a preference for
			lightweight and performant code, and uses a combination of svelte.js, three.js, and supabase
			in most projects. A child of the early internet, dan believes websites should be playful and
			fun. if you're down to make magic, get in touch.
		</h6>
	</div>
</main>

<style>
	main {
		position: relative;
		overflow: hidden;
		width: calc(100vw - 100px);
		margin-left: 100px;
		padding: 20px 20px 0px 20px;
		overflow: auto;
		background: var(--white);
		color: var(--black);
	}

	.top {
		height: 160px;
		padding-bottom: 10px;
		margin-bottom: 20px;
		border-bottom: solid 1px var(--black);
	}

	.bottom {
		height: auto;
		overflow: auto;
		height: calc(100vh - 200px);
		padding-bottom: 10px;
	}

	.text {
		user-select: none;
		text-align: justify;
		font-family: untitled-sans, sans-serif;
		text-transform: uppercase;
	}

	h6 {
		font-size: 55px;
	}

	a {
		color: var(--black);
	}

	@media only screen and (max-width: 1000px) {
		h6 {
			font-size: 40px;
		}
	}

	@media only screen and (max-width: 768px) {
		h6 {
			font-size: 19px;
		}

		.top {
			height: 100px;
			margin-bottom: 30px;
		}

		.bottom {
			height: calc(100vh - 150px);
		}
	}
</style>
