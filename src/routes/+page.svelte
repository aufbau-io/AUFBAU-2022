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
	<img class="niels" alt="niels" src="/niels_bw.jpg" />
	{#if !$active}
		<a href="/" class="centreButton alt" on:click={() => toggle()}
			>make&nbsp;web&nbsp;fun&nbsp;again</a
		>
	{:else}
		<div class="body">
			<div class="grey top">
				<h1 on:click={() => toggle()}>aufbau.</h1>

				<p>CREATIVE WEB THINGS</p>
				<a href="/playground">make web fun again</a>
				<p>ldn • ykt</p>
			</div>
			<div class="grey body__left">
				<h3>work</h3>

				<!-- <a
					on:mouseenter={() => setSrc('https://emmett-demo.netlify.app')}
					on:mouseleave={() => setSrc(null)}
					href="https://niels.aufbau.io"
					target="_blank"
					rel="noopener noreferrer"
					>niels • web page • 2023
				</a> -->
				<a
					on:mouseenter={() => setSrc('https://hello.garrettmusar.work')}
					on:mouseleave={() => setSrc(null)}
					href="https://hello.garrettmusar.work"
					target="_blank"
					rel="noopener noreferrer"
					>garrett • landing page • 2023
				</a>
				<a
					on:mouseenter={() => setSrc('https://replikamasterworks.com')}
					on:mouseleave={() => setSrc(null)}
					href="https://replika.netlify.app"
					target="_blank"
					rel="noopener noreferrer"
					>replika • web • 2022
				</a>
				<!-- <a
					on:mouseenter={() => setSrc('https://sicovecas-demo.netlify.app')}
					on:mouseleave={() => setSrc(null)}
					href="https://sicovecas-demo.netlify.app"
					target="_blank"
					rel="noopener noreferrer"
					>sicovecas • web demo • 2023
				</a> -->
				<a
					on:mouseenter={() => setSrc('https://nightfund-demo.netlify.app/')}
					on:mouseleave={() => setSrc(null)}
					href="https://nightfund-demo.netlify.app/"
					target="_blank"
					>nightfund • web demo • 2023
				</a>
				<a
					on:mouseenter={() => setSrc('scrt-throw-demo.netlify.app')}
					on:mouseleave={() => setSrc(null)}
					href="https://scrt-throw-demo.netlify.app/"
					target="_blank"
					>scrt • web demo • 2023
				</a>

				<a
					on:mouseenter={() => setSrc('https://site.hhacker.space')}
					on:mouseleave={() => setSrc(null)}
					href="https://site.hhacker.space"
					target="_blank"
					>hedron hackerspace • web • 2022
				</a>

				<a
					on:mouseenter={() => setSrc('https://zen.aufbau.io')}
					on:mouseleave={() => setSrc(null)}
					href="https://symmetry.netlify.app"
					target="_blank"
					>zen • 3d • 2022
				</a>

				<!-- 
				<a
					on:mouseenter={() => setSrc('https://www.conceptioncalculator2000.com')}
					on:mouseleave={() => setSrc(null)}
					href="https://www.conceptioncalculator2000.com"
					target="_blank"
					>cc2000 • web demo • WIP
				</a> -->
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
				<a rel="noopener noreferrer" href="https://aufbau.io">active site</a>
				<!-- <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/dn.niels"
					>insta</a
				> -->
				<!-- <a
					rel="noopener noreferrer"
					target="_blank"
					href="https://www.linkedin.com/in/dan-humphries">linkedin</a
				> -->
				<a rel="noopener noreferrer" href="mailto: dan@aufbau.io">email</a>
				<!-- <a
					rel="noopener noreferrer"
					target="_blank"
					href="https://aufbau.io/daniel_humphries_cv.pdf">cv</a
				> -->
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

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 1;
		width: 320px;
		border: var(--border);
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

	h1:hover {
		/* white outline, black fill */
		-webkit-text-stroke: 0.5px var(--white);
		color: var(--black);
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
		img {
			width: 80%;
			opacity: 0.75;
		}
		.grey {
			margin: 12px 0 12px 0;
		}

		p.toggle {
			color: var(--white);
		}
	}
</style>
