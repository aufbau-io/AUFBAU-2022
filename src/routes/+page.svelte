<script>
	import { active, screenType } from '$lib/store/store';

	let toggle = () => {
		active.update((val) => !val);
	};
</script>

<svelte:head>
	<title>AUFBAU DIGITAL</title>
</svelte:head>

<section>
	{#if !$active}
		<a href="/" class="centreButton alt" on:click={() => toggle()}
			>make&nbsp;web&nbsp;fun&nbsp;again</a
		>
	{:else}
		<div class="body">
			<!--img class="niels" alt="niels" src="/niels_bw.jpg" /-->

			<div class="grey top">
				<h1 on:click={() => toggle()}>aufbau.</h1>

				<p>CREATIVE WEB THINGS</p>
				<a href="/playground">make web fun again</a>
				<p>ldn • ykt • nyc</p>
			</div>
			<div class="grey body__left">
				<h3>work</h3>

				<a href="https://replikamasterworks.com" target="_blank">replika • web • WIP </a>
				<a href="https://emmett-demo.netlify.app" target="_blank">emmett • web • WIP </a>
				<a href="https://garrett-demo.netlify.app" target="_blank">garrett • web • WIP </a>
				<a href="https://www.conceptioncalculator2000.com" target="_blank"
					>conception calculator 2000 • web • WIP
				</a>

				<!-- <a href="https://site.hhacker.space" target="_blank">hedron hackerspace • web • 2022</a> -->
				<!--a href="https://iota.health" target="_blank">iota • research app • 2022</a-->
			</div>
			{#if $screenType != 2}
				<div class="grey body__right">
					<h3>systems</h3>
					<a href="/systems">modular system architecture • example</a>
				</div>
			{/if}
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
			<br />
		</div>
	{/if}
</section>

<style>
	section {
		height: 100%;
		display: flex;
		overflow: auto;
		max-width: 800px;
	}
	h1 {
		font-family: 'dahlia', sans-serif;
		color: var(--white);
		font-size: 44px;
		line-height: 44px;
		font-weight: 700;
		text-transform: lowercase;
		cursor: pointer;
		letter-spacing: 1.1px;
	}

	h3 {
		margin-top: 10px;
		color: var(--white);
	}

	p {
		letter-spacing: 0.028em;
	}

	p.toggle {
		color: var(--black);
		background: var(--black);
		border: solid 1px var(--white);
		padding: 2px 6px;
		cursor: pointer;

		text-decoration: none;
	}

	p.toggle:hover {
		color: var(--white);
	}

	h3.hidden {
		color: var(--black);
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

		max-width: 600px;
	}

	.grey {
		margin: 16px 0 16px 0;
		color: var(--white);
	}
	.grey.top {
		color: var(--white);
	}

	.body__left {
		text-align: left;
	}

	.body__right {
		text-align: right;
	}

	@media (max-width: 800px) {
		.grey {
			margin: 12px 0 12px 0;
		}

		p.toggle {
			color: var(--white);
		}
	}
</style>
