import "./style.css";
import * as THREE from "three";
import {
  MapControls,
  OrbitControls,
} from "three/examples/jsm/controls/OrbitControls";

//Scene
const scene = new THREE.Scene();

// Lights
const ambientLight = new THREE.AmbientLight(0xffffff, .5)
const pointLight = new THREE.PointLight(0xffffff, .5)
pointLight.position.set(2,2,2)
scene.add(ambientLight, pointLight)


// TextureLoader
const textureLoader = new THREE.TextureLoader();
const bumpTexture = textureLoader.load("/texture/bump.jpg");
const colorTexture = textureLoader.load("/texture/color.jpg");
const displacementTexture = textureLoader.load("/texture/displacementMap.jpg");

// CubeTextureLoader

const cubeTextureLoader = new THREE.CubeTextureLoader();
const envTexture = cubeTextureLoader.load([
    "/texture/env/px.png",
    "/texture/env/nx.png",
    "/texture/env/py.png",
    "/texture/env/ny.png",
    "/texture/env/pz.png",
    "/texture/env/nz.png",
])

scene.background = envTexture;
//Resizing
window.addEventListener("resize", () => {
  //Update Size
  aspect.width = window.innerWidth;
  aspect.height = window.innerHeight;

  //New Aspect Ratio
  camera.aspect = aspect.width / aspect.height;
  camera.updateProjectionMatrix();

  //New RendererSize
  renderer.setSize(aspect.width, aspect.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//Mesh
const geometry = new THREE.SphereGeometry(0.5,32,32);
const material = new THREE.MeshStandardMaterial();
// material.map = colorTexture;
// material.bumpMap = bumpTexture;
// material.displacementMap = displacementTexture;

// material.shininess = 200;
material.roughness = .1
material.metalness = .9;
material.envMap = envTexture;
// material.specular = new THREE.Color(0x1188ff);
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);









//Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 1;
scene.add(camera);

//Renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);

//OrbitControls
const orbitControls = new OrbitControls(camera, canvas);
orbitControls.enableDamping = true;

//Clock Class
const clock = new THREE.Clock();

const animate = () => {
  //GetElapsedTime
  const elapsedTime = clock.getElapsedTime();

  //Update Controls
  orbitControls.update();

  //Renderer
  renderer.render(scene, camera);

  //RequestAnimationFrame
  window.requestAnimationFrame(animate);
};
animate();
