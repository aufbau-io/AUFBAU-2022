<script>
	let videoSource = null;
	let loading = false;
	const obtenerVideoCamara = async () => {
		try {
			loading = true;
			const stream = await navigator.mediaDevices.getUserMedia({
				video: true
			});
			videoSource.srcObject = stream;
			videoSource.play();
			loading = false;
		} catch (error) {
			console.log(error);
		}
	};
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video id="video" style="display:none" autoplay playsinline />

<div>
	<button on:click={obtenerVideoCamara}> BE-LONG</button>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video bind:this={videoSource} />
</div>

<style>
	button {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
	}
	video {
		height: 100vh;
		width: 100vw/4;
		transform: scaleX(4);
		-webkit-transform: scaleX(4);
		-moz-transform: scaleX(4);
	}

	h1 {
		font-family: nb-television-2d, sans-serif;
	}
</style>
