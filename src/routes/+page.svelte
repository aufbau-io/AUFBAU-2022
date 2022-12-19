<script>
	import { userType, screenType } from '$lib/store/store';
	import { lazyLoad } from '$lib/functions/lazyLoad.js';

	let setUserType = (type) => {
		userType.set(type);
	};
</script>

{#if $screenType}
	<main>
		<section class="top">
			<p on:click={() => setUserType(null)}>aufbau web studio</p>
			<a href="mailto: dan@aufbau.io">contact</a>
		</section>

		<section>
			<p on:click={() => setUserType(1)}>
				[
				{#if $userType == 1}
					x
				{/if}
				] - work
			</p>

			{#if $userType}
				<p on:click={() => setUserType(null)} class="return">RETURN</p>
			{/if}

			<!-- {#if $screenType != 1}
			<p on:click={() => setUserType(2)}>
				[
				{#if $userType == 2}
					x
				{/if}
				] - systems
			</p>
		{/if} -->

			<p on:click={() => setUserType(3)}>
				[
				{#if $userType == 3}
					x
				{/if}
				] - about
			</p>
		</section>

		{#key $userType}
			{#if $userType == 1}
				<body>
					<a href="https://dan.aufbau.io" target="_blank"><p>dan.aufbau.io</p></a>
					<a href="https://165182-sustainable-digital-design-wonderland.vercel.app/" target="_blank"
						><p>165182-sustainable-digital-design-wonderland.vercel.app</p></a
					>
					<a href="https://iota.health" target="_blank"><p>iota.health</p></a>
					<a href="https://replikamasterworks.com" target="_blank"><p>replikamasterworks.com</p></a>
					<!-- <a href="https://zen.aufbau.io" target="_blank"><p>zen.aufbau.io</p></a> -->
					<a href="https://silicon.fm" target="_blank"><p>silicon.fm</p></a>
					<a href="https://site.hhacker.space" target="_blank"><p>site.hhacker.space</p></a>
					<a href="https://conceptioncalculator2000.com" target="_blank"
						><p>conceptioncalculator2000.com</p></a
					>
				</body>
			{/if}
			{#if $userType == 2}
				<body>
					<img use:lazyLoad={'/system_diagram.png'} alt={'modular system diagram'} class="img" />
				</body>
			{/if}
			{#if $userType == 3}
				<!-- {#if $screenType} -->
				<body>
					<br />
					<p>aufbau // dan humphries</p>

					<br />
					<p>lightweight code</p>
					<p>payments // web-stores</p>
					<p>microservice systems</p>

					<p>webgl // 3d</p>
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

<style>
	main {
		height: 100vh;
		height: calc(var(--vh, 1vh) * 100);
		position: relative;
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
		position: relative;
		top: 0;
		gap: 4px;

		padding: 16px;

		width: 100vw;

		display: flex;
		justify-content: space-between;
		align-items: flex-start;

		pointer-events: all;
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
		height: 100%;
		width: 100%;

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

	img {
		opacity: 0;
		max-height: 100vh;
		max-width: 100vw;

		border-left: solid 1px var(--primary-50);
		border-right: solid 1px var(--primary-50);
	}

	@media (max-width: 760px) {
		img {
			border-left: none;
			border-right: none;
			border-top: solid 1px var(--primary-50);
			border-bottom: solid 1px var(--primary-50);
		}
	}
</style>
