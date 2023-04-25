<script>
	import { active, screenType, demoSrc } from '$lib/store/store';

	let toggle = () => {
		active.update((val) => !val);
	};

	let setSrc = (val) => {
		demoSrc.set(val);
	};
</script>

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
				<p>ldn • ykt</p>
			</div>
			<div class="grey body__left">
				<h3>work</h3>
				<a
					on:mouseenter={() => setSrc('https://iota.health/')}
					on:mouseleave={() => setSrc(null)}
					href="https://iota.health/"
					target="_blank"
					>iota • app / landing • 2022
				</a>
				<a
					on:mouseenter={() => setSrc('https://hello.garrettmusar.work/')}
					on:mouseleave={() => setSrc(null)}
					href="https://hello.garrettmusar.work/"
					target="_blank"
					>garrett • landing • 2023
				</a>
				<!-- <a
					on:mouseenter={() => setSrc('https://sicovecas-demo-alt.netlify.app/')}
					on:mouseleave={() => setSrc(null)}
					href="https://sicovecas-demo-alt.netlify.app/"
					target="_blank"
					>sicovecas • web demo • WIP
				</a> -->
				<a
					on:mouseenter={() => setSrc('https://emmett-demo.netlify.app')}
					on:mouseleave={() => setSrc(null)}
					href="https://emmett-demo.netlify.app"
					target="_blank"
					>emmett • web demo • WIP
				</a>
				<!-- <a
					on:mouseenter={() => setSrc('https://www.conceptioncalculator2000.com')}
					on:mouseleave={() => setSrc(null)}
					href="https://www.conceptioncalculator2000.com"
					target="_blank"
					>conception calculator 2000 • web • WIP
				</a> -->

				<!-- <a href="https://site.hhacker.space" target="_blank">hedron hackerspace • web • 2022</a> -->
				<!--a href="https://iota.health" target="_blank">iota • research app • 2022</a-->
			</div>
			{#if $screenType != 2}
				<div class="grey body__right">
					<h3>systems</h3>
					<a href="/systems">modular system architecture • example</a>
				</div>
			{/if}
			<div class="grey hidden body__right">
				<p>bespoke websites, systems, apps</p>
				<p>lightweight and 3d specialist</p>

				<br />
				<a target="_blank" href="https://www.instagram.com/dn.niels/">insta</a>
				<a target="_blank" href="https://www.linkedin.com/in/dan-humphries">linkedin</a>
				<a href="mailto: dan@aufbau.io">email</a>
				<a target="_blank" href="/dan_humphries_cv.pdf">cv</a>
			</div>
		</div>
	{/if}
</section>

<style>
	section {
		height: 100%;
		width: 100%;
		margin: auto;
		display: flex;
		overflow: auto;
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

	.body {
		position: relative;
		margin: auto 0;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;

		max-width: 540px;
	}

	.grey {
		margin: 16px 0 16px 0;
		color: var(--white);
	}
	.grey.top {
		color: var(--white);
		margin-bottom: 0;
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
