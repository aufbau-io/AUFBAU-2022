<script>
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
	import TWEEN from '@tweenjs/tween.js';

	let container, id;
	onDestroy(() => cancelAnimationFrame(id));

	// Setting up the scene
	let scene = new THREE.Scene();

	let spotLight, pointLight;

	let height = window.innerHeight;
	let width = window.innerWidth;

	// Setting up a camera
	let camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 200);
	camera.position.z = 50;

	// Setting up the renderer. This will be called later to render scene with the camera setup above
	let renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);
	renderer.setClearColor(0x0b0b0b, 1);

	const controls = new OrbitControls(camera, renderer.domElement);
	controls.maxDistance = 50;
	controls.minDistance = 50;

	onMount(() => {
		container.appendChild(renderer.domElement);
	});

	// BUILD SCENE
	// ---------------------------------------------------------------------

	spotLight = new THREE.PointLight(0x0b0b0b, 1, 100);
	spotLight.position.set(5, 5, 5);
	scene.add(spotLight);

	pointLight = new THREE.PointLight(0x00bbaa, 1, 100);
	pointLight.position.set(-20, -20, 20);
	scene.add(pointLight);

	// ADD MAN
	// ---------------------------------------------------------------------

	const gltfLoader = new GLTFLoader();
	gltfLoader.load('/man.glb', (glb) => {
		let obj = glb.scene.children[0];
		obj.position.y -= 66;
		obj.position.z -= 6;
		obj.scale.set(5, 5, 5);
		scene.add(obj);
	});

	// ADD MAPS
	// ---------------------------------------------------------------------

	let boxGeometry = new THREE.BoxGeometry(18, 12, 4);
	let texture = new THREE.TextureLoader().load('/map.svg');
	let material = new THREE.MeshBasicMaterial({ map: texture });

	let box1 = new THREE.Mesh(boxGeometry, material);
	let box2 = new THREE.Mesh(boxGeometry, material);
	let box3 = new THREE.Mesh(boxGeometry, material);

	box1.translateZ(-22);
	box2.translateZ(6);
	box3.translateZ(22);

	scene.add(box1);
	scene.add(box2);
	scene.add(box3);

	// ADD LINES
	// ---------------------------------------------------------------------

	let line = new THREE.BoxGeometry(0.1, 0.1, 1000);
	let blackMaterial = new THREE.MeshToonMaterial({ color: 0x141414 });

	let lineLeft = new THREE.Mesh(line, blackMaterial);
	let lineRight = new THREE.Mesh(line, blackMaterial);

	lineLeft.translateX(-4);
	lineRight.translateX(4);

	scene.add(lineLeft);
	scene.add(lineRight);

	// ADD BALLS
	// ---------------------------------------------------------------------

	let quanta = new THREE.SphereGeometry(1.8, 32, 32);

	let quantaLeft = [];
	let quantaRight = [];

	for (let i = 0; i < 11; i++) {
		quantaLeft[i] = new THREE.Mesh(quanta, blackMaterial);
		scene.add(quantaLeft[i]);
		quantaLeft[i].translateX(-4);
		quantaLeft[i].translateZ(22 - i * 4);

		let leftTween = new TWEEN.Tween(quantaLeft[i].position)
			.to({ z: quantaLeft[i].position.z - 4 }, 1500)
			.start();
		leftTween.repeat(Infinity);
	}

	for (let i = 0; i < 11; i++) {
		quantaRight[i] = new THREE.Mesh(quanta, blackMaterial);
		scene.add(quantaRight[i]);
		quantaRight[i].translateX(4);
		quantaRight[i].translateZ(22 - i * 4 - 4);

		let rightTween = new TWEEN.Tween(quantaRight[i].position)
			.to({ z: quantaLeft[i].position.z }, 1500)
			.start();
		rightTween.repeat(Infinity);
	}

	// RENDER
	// ---------------------------------------------------------------------

	let render = function () {
		renderer.render(scene, camera);
		scene.rotation.y += 0.0005;
		TWEEN.update();
		id = requestAnimationFrame(render);
	};

	window.addEventListener(
		'resize',
		function () {
			let height = window.innerHeight;
			let width = window.innerWidth;
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
		},
		false
	);

	render();
</script>

<div bind:this={container} class:geometry={true} />

<style>
	.geometry {
		overflow: hidden;
		opacity: 0.7;
	}
</style>
