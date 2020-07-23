const BACKGROUND_COLOR = 0xAAAAAA;
var scene = new THREE.Scene();
scene.background = new THREE.Color(BACKGROUND_COLOR );

var camera = new THREE.PerspectiveCamera(  90, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.set( -25, 90, 30 );

var renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls( camera , renderer.domElement);

controls.maxPolarAngle = 1.24;
controls.minPolarAngle = 0;
controls.enableZoom = true;
controls.enablePan = false;
controls.minDistance = 20;
controls.maxDistance = 300;

const clock = new THREE.Clock();

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-25, 90, 50);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 1.0);
fillLight.position.set(-25, 90, 50);

var fillLight1 = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 1.0);
fillLight1.position.set(25, 90, 50);

var fillLight2 = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 1.0);
fillLight2.position.set(25, 90, 50);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(0, 90, -50).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(fillLight1);
scene.add(fillLight2);
scene.add(backLight);

var loader = new THREE.FBXLoader();
loader.load( './assets/building_2.FBX', function ( object ) {
  scene.add( object );
} );

function degrees_to_radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

var animate = function () {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render(scene, camera);
};

animate();
