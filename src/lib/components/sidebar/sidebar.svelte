<script>
</script>

<main>
	<div class="head">
		<h4 class="left">aufbau</h4>
		<h4 class="right">a London-Based<br />Future-Focussed<br />Web Studio</h4>
	</div>

	<div class="sub">
		<p class="left">we trade in →</p>
		<p class="right">performance. style. freedom.</p>
	</div>

	<div class="color" />
	<!--div class="text">
		<p>
			<b>aufbau</b> - Lorem sit amet, consectetur adipiscing elit. Mauris at nisi bibendum,
			scelerisque orci quis, tincidunt urna. Vestibulum pretium porttitor tristique. Phasellus
			consequat massa lorem, eu ultrices turpis venenatis eget. Phasellus Dip.
			<br /><br />
			<b>performance</b> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at nisi
			bibendum, scelerisque orci quis, tincidunt urna. Vestibulum pretium porttitor tristique.
			Phasellus consequat massa lorem, eu ultrices turpis v.
			<br /><br />
			<b>style</b> - dolor sit amet, consectetur adipiscing elit. Mauris at nisi bibendum,
			scelerisque orci quis, tincidunt urna. Vestibulum pretium porttitor tristique. Phasellus
			consequat massa lorem, eu ultrices turpis venenatis eget. Pha.
			<br /><br />
			<b>freedom</b> - dolor sit amet, consectetur adipiscing elit. Mauris at nisi bibendum, scelerisque
			orci quis, tincidunt urna. Vestibulum pretium porttitor tristique. Phasellus consequat massa lorem,
			eu ultrices turpis venenatis eget. Phasellus Dip.
		</p>
	</div-->
</main>

<style>
	main {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		border-right: solid 1px var(--white-50);
		user-select: none;
		width: 490px;
		height: 100%;
		padding: 8px 20px 8px 16px;
		overflow: hidden;
	}

	.right {
		text-align: right;
	}

	.left {
		text-align: left;
	}

	.head {
		width: 100%;
		height: 180px;
		display: flex;
		justify-content: space-between;
	}

	.head h4 {
		font-size: 40px;
		height: 100px;
	}

	.sub {
		border-bottom: solid 1px var(--white-50);
		height: 24px;
		margin-bottom: 8px;
		width: 100%;

		display: flex;
		justify-content: space-between;
	}

	.sub p {
		font-size: 12px;
		letter-spacing: 1.15px;
	}

	.color {
		width: calc(50% - 20px);
		height: calc(100% - 260px);
		overflow: hidden;
		margin-right: 20px;
		border: solid 1px var(--error-30);
	}

	.text {
		width: 50%;
		height: calc(100% - 260px);
		display: flex;
		justify-content: space-between;

		text-align: justify;
		overflow-y: auto;
	}

	.text p {
		font-size: 10px;
		line-height: 16px;
		letter-spacing: 4px;
	}
</style>
