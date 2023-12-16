// Each Threejs project must have a scene, a camera, and a renderer.
// The scene is where all the objects are stored.
// The objects are the things you see in the scene called mesh
// The camera is what sees the scene.
// The renderer is what renders the scene to the screen.

// Create object
document.addEventListener('DOMContentLoaded', () => {
    const ASPECT_RATIO = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    // Create the scene.
    const scene = new THREE.Scene();
    const group = new THREE.Group()

    // Mesh
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({color: 'purple'});
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = -1;
    mesh.scale.x = 2;
    mesh.rotation.x = Math.PI * 0.25;
    mesh.rotation.y = Math.PI * 1.25;


    const geometry2 = new THREE.BoxGeometry(1, 1, 1);
    const material2 = new THREE.MeshBasicMaterial({color: 'green'});
    const mesh2 = new THREE.Mesh(geometry2, material2);
    mesh2.position.y = 2;

    group.add(mesh, mesh2);
    group.position.x = 1;
    scene.add(group);

    // AxesHelper
    const axesHelper = new THREE.AxesHelper(4);
    scene.add(axesHelper);


    // Camera
    const camera = new THREE.PerspectiveCamera(75, ASPECT_RATIO.width / ASPECT_RATIO.height);  // near value is 1 and far value is 2000 for default
    // x-axis is horizontal and y-axis is vertical and z-axis is depth
    camera.position.z = 5;
    camera.position.x = 1;
    camera.position.y = 1;
    scene.add(camera);



    // Renderer
    const canvas = document.getElementById('my-canvas');
    const renderer = new THREE.WebGLRenderer({canvas}); // canvas is the canvas element in the html file
    renderer.setSize(ASPECT_RATIO.width, ASPECT_RATIO.height); // set the size of the renderer to the size of the window
    renderer.render(scene, camera); // render the scene and the camera
});