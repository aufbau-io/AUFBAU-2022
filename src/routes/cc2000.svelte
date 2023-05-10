<script>
	import { onMount, onDestroy } from 'svelte';
	// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import * as THREE from 'three';

	// import AsciiRenderer from '$lib/components/effects/ascii-renderer.js';
	// console.log(AsciiRenderer);

	let container, pc, id;
	onDestroy(() => cancelAnimationFrame(id));

	// Setting up the scene
	let scene = new THREE.Scene();

	// let height = window.innerHeight;
	// let width = window.innerWidth;

	let height = window.innerHeight / 2 - 32;
	let width = window.innerWidth / 4 - 30;

	// Setting up a camera
	let camera = new THREE.PerspectiveCamera(30, width / height, 0.5, 400);
	camera.position.z = 100;

	let sperm, mac;

	var asciiRenderer;
	var charSet =
		'010001100110111101110010001d0d00d1000111011011110' +
		'1100100001d0d00d111001101101111001d0d00d110110001' +
		'101111011101100110010101100100001d0d00d1110100011' +
		'0100001100101001d0d00d111011101101111011100100110' +
		'110001100100001d0d00d1110100011010000110000101110' +
		'100001d0d00d110100001100101001d0d00d1100111011000' +
		'010111011001100101001d0d00d1101000011010010111001' +
		'1001d0d00d11011110110111001100101001d0d00d1100001' +
		'0110111001100100001d0d00d110111101101110011011000' +
		'1111001001d0d00d101001101101111011011100010110000' +
		'1d0d00d1110100011010000110000101110100001d0d00d11' +
		'1011101101000011011110110010101110110011001010111' +
		'0010001d0d00d110001001100101011011000110100101100' +
		'101011101100110010101110011001d0d00d1101001011011' +
		'10001d0d00d11010000110100101101101001d0d00d111001' +
		'101101000011000010110110001101100001d0d00d1101110' +
		'0110111101110100001d0d00d111000001100101011100100' +
		'11010010111001101101000001d0d00d11000100111010101' +
		'110100001d0d00d1101000011000010111011001100101001' +
		'd0d00d1100101011101000110010101110010011011100110' +
		'000101101100001d0d00d1101100011010010110011001100' +
		'10100100000';

	// Setting up the renderer. This will be called later to render scene with the camera setup above
	let renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
	renderer.setClearColor(0x232323, 1);

	// renderer.setPixelRatio(window.devicePixelRatio);
	// renderer.setSize(width, height);

	onMount(() => {
		container.appendChild(renderer.domElement);

		// asciiRenderer = new AsciiRenderer(renderer, {
		// 	charSet: charSet,
		// 	fontSize: 1,
		// 	opacity: 0.1
		// });

		// asciiRenderer.setSize(width, height);
		renderer.setSize(width, height);

		setTimeout(() => {
			window.dispatchEvent(new KeyboardEvent('keydown', { key: 's' }));
		}, '1000');
	});

	// let controls = new OrbitControls(camera, renderer.domElement);
	// controls.enablePan = false;
	// controls.enableZoom = false;
	// controls.minAzimuthAngle = -Math.PI / 4;
	// controls.maxAzimuthAngle = (Math.PI * 3) / 4;
	// controls.enableDamping = true;
	// controls.dampingFactor = 0.07;
	// controls.rotateSpeed = 0.05;
	// controls.update();

	{
		const color = 0x232323;
		const density = 0.009;
		scene.fog = new THREE.FogExp2(color, density);
	}

	// ---------------------------------------------------------------------------

	const size = 100;
	const divisions = 10;

	const gridHelper0 = new THREE.GridHelper(size, divisions, 0xf0f0f0, 0xf0f0f0);
	gridHelper0.rotation.x += Math.PI / 2;
	gridHelper0.position.z = -300;
	scene.add(gridHelper0);

	const gridHelper1 = new THREE.GridHelper(size, divisions, 0xf0f0f0, 0xf0f0f0);
	gridHelper1.rotation.x += Math.PI / 2;
	gridHelper1.position.z = -200;
	scene.add(gridHelper1);

	const gridHelper2 = new THREE.GridHelper(size, divisions, 0xf0f0f0, 0xf0f0f0);
	gridHelper2.rotation.x += Math.PI / 2;
	gridHelper2.position.z = -100;
	scene.add(gridHelper2);

	const gridHelper3 = new THREE.GridHelper(size, divisions, 0xf0f0f0, 0xf0f0f0);
	gridHelper3.rotation.x += Math.PI / 2;
	gridHelper3.position.z = 0;
	scene.add(gridHelper3);

	const sphere = new THREE.Mesh(
		new THREE.SphereGeometry(14, 32, 16),
		new THREE.MeshToonMaterial({ color: 0xd0d0d0 })
	);
	scene.add(sphere);

	const outerSphere = new THREE.Mesh(
		new THREE.SphereGeometry(22, 32, 16),
		// new THREE.MeshPhysicalMaterial({ roughness: 0.2, transmission: 0.8 })
		new THREE.MeshPhysicalMaterial({ color: 0xd0d0d0, transparent: true, opacity: 0.5 })
	);
	scene.add(outerSphere);

	sphere.position.z = -150;
	outerSphere.position.z = -150;

	const light = new THREE.HemisphereLight(0xd0d0d0, 0x232323, 1.5);
	scene.add(light);

	// ---------------------------------------------------------------------------

	const gltfLoader = new GLTFLoader();

	let spermGroup = new THREE.Group();
	gltfLoader.load('/sperm.glb', (glb) => {
		sperm = glb.scene.children[0];

		// sperm.position.z = 100;
		sperm.rotation.x += Math.PI;
		sperm.position.y -= 0.695;
		sperm.position.z += 4;

		sperm.scale.set(0.2, 0.4, 0.2);

		sperm.traverse(function (child) {
			if (child.material) {
				child.material = new THREE.MeshToonMaterial({
					color: 0xf0f0f0
				});
			}
		});

		spermGroup.add(sperm);
	});

	scene.add(spermGroup);
	spermGroup.position.y = -0.1;

	// ---------------------------------------------------------------------------

	let followCamera = () => {
		spermGroup.position.z = camera.position.z - 5.5;
	};

	const clock = new THREE.Clock();
	let previousTime = 0;

	let iteration = 0;

	let render = function () {
		console.log(asciiRenderer);

		renderer.render(scene, camera);
		id = requestAnimationFrame(render);
		// controls.update();

		const elapsedTime = clock.getElapsedTime();
		const deltaTime = elapsedTime - previousTime;
		previousTime = elapsedTime;

		//sphere.rotation.x += 0.01;
		// macGroup.position.z += 1;

		// if ($go) {
		// 	camera.position.z -= deltaTime * 20;
		// 	camera.rotation.z += deltaTime / 5;
		// }

		// camera.position.z -= deltaTime * 20;
		camera.position.z -= deltaTime * 12.725;
		gridHelper0.rotation.y -= deltaTime / 10;
		gridHelper1.rotation.y += deltaTime / 10;
		gridHelper2.rotation.y -= deltaTime / 10;
		gridHelper3.rotation.y += deltaTime / 10;

		// if (macGroup.rotation.y <= 0) {
		// 	macGroup.rotation.y += 0.003;
		// }

		// if (camera.position.z <= 10) {
		// 	renderer.setClearColor(0xd0d00d, 1);
		// }

		if (camera.position.z <= -200) {
			let even_iteration = iteration % 2 == 0;
			gridHelper1.rotation.y = even_iteration ? Math.PI / 4 : 0;
			gridHelper2.rotation.y = even_iteration ? Math.PI / 4 : 0;
			gridHelper3.rotation.y = even_iteration ? Math.PI / 4 : 0;

			camera.position.z = 100;
			iteration += 1;
			// macGroup.rotation.y = -Math.PI;
		}

		spermGroup.rotation.z = -elapsedTime * 10;

		// spermGroup.rotation.z -= (-spermGroup.rotation.z / Math.PI / 24 + 0.2) / 1.2;
		// if (spermGroup.rotation.z <= -2 * Math.PI) {
		// 	spermGroup.rotation.z = 0;
		// }

		followCamera();

		// if (firstLoad && camera.position.z >= 100) {
		// 	camera.fov = 160 - camera.position.z;
		// 	camera.updateProjectionMatrix();
		// } else {
		// 	firstLoad = false;
		// }

		// this block fixes a bug where the sperm is brielfy visible after entering the
		// if (camera.position.z <= 10.5) {
		// 	spermGroup.position.z = -160;
		// }
	};

	window.addEventListener(
		'resize',
		function () {
			let height = window.innerHeight;
			let width = window.innerWidth;
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
			// asciiRenderer.setSize(width, height);
		},
		false
	);

	render();
</script>

<div bind:this={container} class:geometry={true} />

<style>
	/* .geometry {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -10;
		overflow: hidden;

		width: 100vw;
		height: 100vh;
		height: calc(var(--vh, 1vh) * 100);

		opacity: 0;
		animation: fadein 3s 1s ease;
		animation-fill-mode: forwards;
	} */

	.geometry {
		overflow: hidden;
	}
</style>
