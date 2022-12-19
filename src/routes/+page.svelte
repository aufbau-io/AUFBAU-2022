<script>
	import { userType, screenType } from '$lib/store/store';

	let setUserType = (type) => {
		userType.set(type);
	};
</script>

<main>
	<section>
		<p on:click={() => setUserType(null)}>
			[
			{#if $userType == null}
				x
			{/if}
			] aufbau web studio
		</p>
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
		{#if $userType == 3}
			<!-- {#if $screenType} -->
			<body>
				<br />
				<p>aufbau // dan humphries</p>

				<br />
				<p>lightweight code</p>
				<p>microservice systems</p>
				<p>stripe // shopify</p>
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

				<a href="https://aufbau.io/dan_humphries_cv.pdf">cv</a>
				<a href="https://github.com/dnhmphrs">github</a>
				<a href="https://www.linkedin.com/in/dan-humphries/">linkedin</a>
				<a href="mailto: dan@aufbau.io">email</a>
			</body>
		{/if}
	{/key}
</main>

<style>
	main {
		height: 100vh;
		height: calc(var(--vh, 1vh) * 100);
		width: 100;
		pointer-events: none;

		display: flex;
		flex-flow: column wrap;
		justify-content: space-between;
	}

	section {
		z-index: 10;
		position: relative;
		top: 0;
		gap: 4px;

		padding: 8px 16px;

		width: 100vw;

		display: flex;
		justify-content: space-between;
		align-items: flex-start;

		pointer-events: all;
	}

	a {
		pointer-events: all;
	}
	section p {
		cursor: pointer;
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
		background: linear-gradient(115deg, #17171780, #232323f0, #171717);

		overflow: hidden;
	}

	@media (max-width: 760px) {
	}
</style>
