<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let container, pc;
	// Setting up the scene
	let scene = new THREE.Scene();

	let height = window.innerHeight;
	let width = window.innerWidth - 490;

	// Setting up a camera
	let camera = new THREE.PerspectiveCamera(100, width / height, 0.1, 50);
	camera.position.z = 30;

	// Setting up the renderer. This will be called later to render scene with the camera setup above
	let renderer = new THREE.WebGLRenderer({ antialias: false });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);
	renderer.setClearColor(0x141414, 1);
	onMount(() => {
		container.appendChild(renderer.domElement);
	});

	// Setting up a group to hold the items we will be creating together
	let group = new THREE.Group();

	// Array curve holds the positions of points generated from a lorenz equation; lorenz function below generates the points and returns an array of points
	let arrayCurve = lorenz();

	// Generating the geometry
	let curve = new THREE.CatmullRomCurve3(arrayCurve);
	let vertices = curve.getPoints(100000);
	let geometry = new THREE.BufferGeometry().setFromPoints(vertices);

	// Generating a cloud of point
	let pcMat = new THREE.PointsMaterial();
	pcMat.color = new THREE.Color(0x5ca755);
	pcMat.transparent = true;
	pcMat.size = 0.1;
	pcMat.blending = THREE.AdditiveBlending;
	pc = new THREE.Points(geometry, pcMat);
	pc.sizeAttenuation = true;
	pc.sortPoints = true;

	group.add(pc);

	scene.add(group);

	let prevFog = true;

	group.rotation.y += Math.PI / 2;

	let step = 0;

	let render = function () {
		renderer.render(scene, camera);
		requestAnimationFrame(render);

		//Varying the points on each frame
		step += 0.00001;
		let count = 0;
		let geometry = pc.geometry;
		let a = 0.9 + Math.random() * 6;
		let b = 3.4 + Math.random() * 7;
		let f = 9.9 + Math.random() * 8;
		let g = 1 + Math.random();
		let t = 0.0008;

		// geometry.vertices.forEach(function (v) {
		// 	v.x = v.x - t * a * v.x + t * v.y * v.y - t * v.z * v.z + t * a * f;
		// 	v.y = v.y - t * v.y + t * v.x * v.y - t * b * v.x * v.z + t * g;
		// 	v.z = v.z - t * v.z + t * b * v.x * v.y + t * v.x * v.z;
		// });
		// geometry.verticesNeedUpdate = true;

		const positions = geometry.attributes.position.array;
		for (let i = 0; i < positions.length; i += 3) {
			let v = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]);
			positions[i] = v.x - t * a * v.x + t * v.y * v.y - t * v.z * v.z + t * a * f;
			positions[i + 1] = v.y - t * v.y + t * v.x * v.y - t * b * v.x * v.z + t * g;
			positions[i + 2] = v.z - t * v.z + t * b * v.x * v.y + t * v.x * v.z;
		}

		geometry.attributes.position.needsUpdate = true;

		// group.rotation.x += 0.001;
		// group.rotation.y += 0.001;
		// group.rotation.z += 0.001;
	};

	window.addEventListener(
		'resize',
		function () {
			let height = window.innerHeight;
			let width = window.innerWidth - 490;
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
		},
		false
	);

	render();

	function lorenz() {
		let arrayCurve = [];

		let x = 0.01,
			y = 0.01,
			z = 0.01;
		let a = 0.9;
		let b = 3.4;
		let f = 9.9;
		let g = 1;
		let t = 0.0001;
		for (let i = 0; i < 100000; i++) {
			let x1 = x;
			let y1 = y;
			let z1 = z;
			x = x - t * a * x + t * y * y - t * z * z + t * a * f;
			y = y - t * y + t * x * y - t * b * x * z + t * g;
			z = z - t * z + t * b * x * y + t * x * z;
			arrayCurve.push(new THREE.Vector3(x, y, z).multiplyScalar(1));
		}
		return arrayCurve;
	}
</script>

<div bind:this={container} class:geometry={true} />

<style>
	.geometry {
		overflow: hidden;
		opacity: 0.9;
	}
</style>
