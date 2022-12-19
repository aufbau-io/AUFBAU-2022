<script>
	import { screenType } from '$lib/store/store';
	import { onMount, onDestroy } from 'svelte';
	import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
	import * as THREE from 'three';
	import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

	let container, css, pc, id;
	onDestroy(() => cancelAnimationFrame(id));

	// Setting up the scene
	let scene = new THREE.Scene();
	let scene2 = new THREE.Scene();

	{
		const color = 0x232323;
		const density = 0.00015;
		scene.fog = new THREE.FogExp2(color, density);
	}

	// axis lines

	//create a blue LineBasicMaterial
	const xmaterial = new THREE.LineBasicMaterial({ color: 0x6494aa });
	const ymaterial = new THREE.LineBasicMaterial({ color: 0x90a959 });

	const xpoints = [];
	xpoints.push(new THREE.Vector3(-10000, 0, 0));
	xpoints.push(new THREE.Vector3(10000, 0, 0));

	const ypoints = [];
	ypoints.push(new THREE.Vector3(0, -10000, 0));
	ypoints.push(new THREE.Vector3(0, 10000, 0));

	const zpoints = [];
	xpoints.push(new THREE.Vector3(0, 0, -10000));
	xpoints.push(new THREE.Vector3(0, 0, 10000));

	const xgeometry = new THREE.BufferGeometry().setFromPoints(xpoints);
	const xline = new THREE.Line(xgeometry, xmaterial);
	scene.add(xline);

	const ygeometry = new THREE.BufferGeometry().setFromPoints(ypoints);
	const yline = new THREE.Line(ygeometry, ymaterial);
	scene.add(yline);

	const zgeometry = new THREE.BufferGeometry().setFromPoints(zpoints);
	const zline = new THREE.Line(zgeometry, xmaterial);
	scene.add(zline);

	// const axesHelper = new THREE.AxesHelper(2000);
	// axesHelper.setColors(0xa63d40, 0x90a959, 0xa63d40);
	// scene.add(axesHelper);

	// helpers

	const size = 1600;
	const divisions = 10;

	const gridHelper = new THREE.GridHelper(size, divisions, 0x6494aa, 0xe9b872);
	scene.add(gridHelper);

	// const gridHelper2 = new THREE.GridHelper(size, divisions, 0x000000, 0x000000);
	// gridHelper2.rotateX(Math.PI / 2);
	// scene.add(gridHelper2);

	// const gridHelper3 = new THREE.GridHelper(size, divisions, 0x000000, 0x000000);
	// gridHelper3.rotateZ(Math.PI / 2);
	// scene.add(gridHelper3);

	const sphere = new THREE.SphereGeometry(480);
	const object = new THREE.Mesh(sphere, new THREE.MeshBasicMaterial(0xff0000));
	const box = new THREE.BoxHelper(object, 0xa63d40);
	scene.add(box);

	const light = new THREE.AmbientLight(0x171717);
	scene.add(light);

	// setting up the iframes

	// 1

	var element1 = document.createElement('iframe');
	element1.style.width = `800px`;
	element1.style.height = `800px`;
	element1.style.opacity = 1;
	element1.src = 'https://165182-sustainable-digital-design-wonderland.vercel.app';

	var domObject1 = new CSS3DObject(element1);
	domObject1.position.z = 400;
	// domObject.rotateX(Math.PI / 2);
	scene2.add(domObject1);

	// 2

	var element2 = document.createElement('iframe');
	element2.style.width = `800px`;
	element2.style.height = `800px`;
	element2.style.opacity = 1;
	element2.src = 'https://silicon.fm';
	var domObject2 = new CSS3DObject(element2);
	domObject2.position.z = -400;
	domObject2.rotateY(Math.PI);
	scene2.add(domObject2);

	// 3

	var element3 = document.createElement('iframe');
	element3.style.width = `800px`;
	element3.style.height = `800px`;
	element3.style.opacity = 1;
	element3.src = 'https://dan.aufbau.io';

	var domObject3 = new CSS3DObject(element3);
	domObject3.position.x = 400;
	domObject3.rotateY(Math.PI / 2);
	scene2.add(domObject3);

	// 4

	var element4 = document.createElement('iframe');
	element4.style.width = `800px`;
	element4.style.height = `800px`;
	element4.style.opacity = 1;
	element4.src = 'https://iota.health';

	var domObject4 = new CSS3DObject(element4);
	domObject4.position.x = -400;
	domObject4.rotateY(-Math.PI / 2);
	scene2.add(domObject4);

	// 5

	// var element5 = document.createElement('iframe');
	// element5.style.width = `800px`;
	// element5.style.height = `800px`;
	// element5.style.opacity = 1;
	// element5.src = 'https://dan.aufbau.io';

	// var domObject5 = new CSS3DObject(element5);
	// domObject5.position.y = 400;
	// domObject5.rotateX(-Math.PI / 2);
	// scene2.add(domObject5);

	// // 6

	// var element6 = document.createElement('iframe');
	// element6.style.width = `800px`;
	// element6.style.height = `800px`;
	// element6.style.opacity = 1;
	// element6.src = 'https://site.hhacker.space';

	// var domObject6 = new CSS3DObject(element6);
	// domObject6.position.y = -400;
	// domObject6.rotateX(Math.PI / 2);
	// scene2.add(domObject6);

	// add box for center

	var material = new THREE.MeshToonMaterial({
		opacity: 0,
		color: new THREE.Color('0x232323'),
		side: THREE.DoubleSide
	});
	var geometry_plane = new THREE.BoxGeometry(799, 799, 799);
	var mesh = new THREE.Mesh(geometry_plane, material);

	//mesh.scale.copy( domObject.scale );
	mesh.castShadow = false;
	mesh.receiveShadow = true;
	scene.add(mesh);

	let height = window.innerHeight;
	let width = window.innerWidth;

	// Setting up a camera
	let camera = new THREE.PerspectiveCamera(20, width / height, 0.1, 10000);
	camera.position.x = 2800;
	camera.position.y = 1400;
	camera.position.z = 2800;

	// Setting up the renderer. This will be called later to render scene with the camera setup above
	let renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);
	renderer.setClearColor(0x000000, 0);

	let renderer2 = new CSS3DRenderer();
	renderer2.setSize(width, height);
	renderer2.domElement.style.position = 'absolute';
	renderer2.domElement.style.top = '0%';
	renderer2.domElement.style.left = '0%';

	onMount(() => {
		container.appendChild(renderer.domElement);
		container.appendChild(renderer2.domElement);
	});

	let controls = new OrbitControls(camera, renderer.domElement);
	let controls2 = new OrbitControls(camera, renderer2.domElement);
	// controls.maxDistance = 800;
	// controls.minDistance = 50;
	controls.enablePan = false;
	controls2.enablePan = false;

	scene2.rotation.y += Math.PI;

	let render = function () {
		renderer.render(scene, camera);
		renderer2.render(scene2, camera);

		id = requestAnimationFrame(render);

		// group.rotation.x += 0.002;
		// group.rotation.y += 0.002;
		// group.rotation.z += 0.002;
	};

	window.addEventListener(
		'resize',
		function () {
			let height = window.innerHeight;
			let width = window.innerWidth;
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
			renderer2.setSize(width, height);
		},
		false
	);

	render();
</script>

<div bind:this={container} class:geometry={true} />

<style>
	.geometry {
		position: fixed;
		top: 0;
		left: 0;
		overflow: hidden;
	}
</style>
