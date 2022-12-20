<script>
	import { userType, screenType } from '$lib/store/store';
	import { lazyLoad } from '$lib/functions/lazyLoad.js';

	let setUserType = (type) => {
		userType.set(type);
	};
</script>

{#key $screenType}
	{#if $screenType}
		<main>
			<section class="top">
				<p on:click={() => setUserType(null)} style={'color: var(--primary);'}>aufbau web studio</p>
				<a href="mailto: dan@aufbau.io" style={'color: var(--primary);'}>contact</a>
			</section>

			<section class="bottom">
				<p on:click={() => setUserType(1)} style={'color: var(--primary);'}>
					[
					{#if $userType == 1}
						x
					{:else}
						&nbsp;
					{/if}
					] - work
				</p>

				{#if $userType}
					<p on:click={() => setUserType(null)} class="return">RETURN</p>
				{/if}

				<p on:click={() => setUserType(3)} style={'color: var(--primary);'}>
					[
					{#if $userType == 3}
						x
					{:else}
						&nbsp;
					{/if}
					] - about
				</p>
			</section>

			{#key $userType}
				{#if $userType == 1}
					<body>
						<a href="https://dan.aufbau.io" target="_blank"><p>dan.aufbau.io</p></a>
						<a
							href="https://165182-sustainable-digital-design-wonderland.vercel.app/"
							target="_blank"><p>165182-sustainable-digital-design-wonderland.vercel.app</p></a
						>
						<a href="https://iota.health" target="_blank"><p>iota.health</p></a>
						<a href="https://replikamasterworks.com" target="_blank"
							><p>replikamasterworks.com</p></a
						>
						<!-- <a href="https://zen.aufbau.io" target="_blank"><p>zen.aufbau.io</p></a> -->
						<a href="https://silicon.fm" target="_blank"><p>silicon.fm</p></a>
						<a href="https://site.hhacker.space" target="_blank"><p>site.hhacker.space</p></a>
						<a href="https://conceptioncalculator2000.com" target="_blank"
							><p>conceptioncalculator2000.com</p></a
						>
					</body>
				{/if}
				{#if $userType == 3}
					<!-- {#if $screenType} -->
					<body>
						<br />
						<p>aufbau // dan humphries</p>

						<br />
						<p>lightweight code</p>
						<p>web-stores // portfolios</p>
						<p>microservice systems</p>

						<p>webgl // 3d</p>
						<br />
						<div>
							<a href="https://aufbau.io/dan_humphries_cv.pdf">cv</a>
							&nbsp;//&nbsp;
							<a href="https://github.com/dnhmphrs">github</a>
							&nbsp;//&nbsp;
							<a href="https://www.linkedin.com/in/dan-humphries/">linkedin</a>
							&nbsp;//&nbsp;
							<a href="mailto: dan@aufbau.io">email</a>
						</div>
					</body>
				{/if}
			{/key}
		</main>
	{/if}
{/key}

<style>
	main {
		height: calc(var(--vh, 1vh) * 100);
		width: 100%;
		pointer-events: none;

		display: flex;
		flex-flow: column wrap;
		justify-content: space-between;
	}

	.return {
		position: absolute;
		left: 50%;
		z-index: 100;
		bottom: 16px;
		transform: translateX(-50%);
		pointer-events: all;
		cursor: pointer;
	}

	section {
		z-index: 10;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		gap: 4px;

		padding: 16px;

		width: 100vw;
		max-width: 1200px;

		display: flex;
		justify-content: space-between;
		align-items: flex-start;

		pointer-events: all;
	}

	section.top {
		top: 0;
	}
	section.bottom {
		bottom: 0;
	}

	a,
	p {
		pointer-events: all;
		cursor: pointer;
		z-index: 1000;
		width: auto;
	}

	body {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100vw;
		max-width: 100vw;

		padding-left: 16px;

		z-index: 1;
		line-height: 2rem;

		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		text-align: center;
		justify-content: center;
		background: linear-gradient(115deg, #14141480, #232323f0, #141414);

		overflow: hidden;
	}

	@media (max-width: 760px) {
	}
</style>
