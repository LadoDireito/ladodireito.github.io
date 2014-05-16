var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(3,3,3);
var texture = THREE.ImageUtils.loadTexture( 'img/rubikscube.gif' );
texture.anisotropy = renderer.getMaxAnisotropy();
var material = new THREE.MeshBasicMaterial( { map: texture } );
var cube = new THREE.Mesh(geometry, material);
cube.rotation.x += 0.5;
scene.add(cube);
camera.position.z = 5;
var render = function () {
  cube.rotation.y += 0.01;
  requestAnimationFrame(render);
  renderer.render(scene, camera);
};
render();