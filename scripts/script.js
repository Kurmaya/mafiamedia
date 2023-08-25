// import * as THREE from 'https://unpkg.com/three@0.139.1/build/three.module.js';
// import {OrbitControls} from 'https://unpkg.com/three@0.139.1/examples/jsm/controls/OrbitControls';
// import {GLTFLoader} from 'https://unpkg.com/three@0.139.1/examples/jsm/loaders/GLTFLoader.js';
// import { EffectComposer } from 'https://unpkg.com/three@0.139.1/examples/jsm/postprocessing/EffectComposer.js';
// import { RenderPass } from 'https://unpkg.com/three@0.139.1/examples/jsm/postprocessing/RenderPass.js';
// import { FilmPass } from 'https://unpkg.com/three@0.139.1/examples/jsm/postprocessing/FilmPass.js';
// // import { GlitchPass } from 'https://unpkg.com/three@0.139.1/examples/jsm/postprocessing/GlitchPass.js';
// import { ShaderPass } from 'https://unpkg.com/three@0.139.1/examples/jsm/postprocessing/ShaderPass.js';
// // import {LuminosityShader} from 'https://unpkg.com/three@0.139.1/examples/jsm/shaders/LuminosityShader.js';
// import {VignetteShader} from 'https://unpkg.com/three@0.139.1/examples/jsm/shaders/VignetteShader.js';
// import {FXAAShader} from 'https://unpkg.com/three@0.139.1/examples/jsm/shaders/FXAAShader.js';
// import {WaterRefractionShader} from 'https://unpkg.com/three@0.139.1/examples/jsm/shaders/WaterRefractionShader.js';
import * as dat from "https://cdn.skypack.dev/dat.gui";
// import * as THREE from '../modules/three.module.js';
// import * as dat from "https://cdn.skypack.dev/dat.gui";
// import {GLTFLoader} from '../modules/GLTFLoader.js'

import * as THREE from '../modules/three.module.js';
import {GLTFLoader} from '../modules/GLTFLoader.js';
import { EffectComposer } from '../modules/EffectComposer.js';
import { RenderPass } from '../modules/RenderPass.js';
import { FilmPass } from '../modules/FilmPass.js';
import { ShaderPass } from '../modules/ShaderPass.js';
import {VignetteShader} from '../modules/VignetteShader.js';
import {FXAAShader} from '../modules/FXAAShader.js';


// const gui = new dat.GUI();
const canvas = document.querySelector('canvas.webgl');
//AUX consts
let hat,h2,hatR,hat2R;
const mark = document.querySelectorAll('.mark h2');

//sizes
const sizes = {
  width:window.innerWidth,
  height:window.innerHeight
}

// textures

const textureLoader= new THREE.TextureLoader();
const hatTexture = textureLoader.load('./assets/textures/hat-hi-tex.jpg');
const hatTexture2 = textureLoader.load('./assets/textures/hat_tex2.jpg');
const cigTexture = textureLoader.load('./assets/textures/cigTexture2.png');
//smoke texture
const smokeTexture = textureLoader.load('./assets/textures/Smoke-Transparent.png');
// smokeTexture.encoding= THREE.sRGBEncoding;
// const smokeGeometry= new THREE.PlaneBufferGeometry(4,4);
//smoke material
// const smokeMaterial = new THREE.MeshLambertMaterial({
//   map:smokeTexture,
//   emissive:0x222222,
//   opacity:.02,
//   transparent:true
// });


//object
// const headGeometry = new THREE.SphereGeometry(1,200,200);
// const headMaterial = new THREE.MeshPhongMaterial({
//   color:0xececec,
//   transparent:true,
//   roughness:0,
//   metalness:2,
//   opacity:.4
// })
// const head = new THREE.Mesh(headGeometry,headMaterial);
// const cigGeometry = new THREE.CircleGeometry(.8,150);
const cigGeometry = new THREE.SphereGeometry(.2,200,150);
const cigMaterial =  new THREE.MeshBasicMaterial({
  color:0xff0000,
  transparent:true,
  map:cigTexture,
  opacity:1
});

const cig = new THREE.Mesh(cigGeometry,cigMaterial);
cig.position.set(0.8,-1.2,0);
cig.rotation.set(0,-1.2,0);
//scene

const scene = new THREE.Scene();

//camera

const camera= new THREE.PerspectiveCamera(75,sizes.width/sizes.height,0.1,1000);
scene.add(camera);
camera.position.set(0,.5,4);

// scene.fog = new THREE.Fog(0xc0f0ff, 1.5);
//smoke init
// let smokeParticles = [];
// for(let i=0;i<5;i++){
// const smokeElement = new THREE.Mesh(smokeGeometry,smokeMaterial);
//   smokeElement.scale.set(2,2,.08);
//
//   smokeElement.position.set(Math.random() * .5, Math.random()*-.1,
// Math.random()*1-5);
//   smokeElement.rotation.z=Math.random()*360;
//   scene.add(smokeElement);
//   smokeParticles.push(smokeElement);
// }

//renderer

const renderer= new THREE.WebGLRenderer({antialias:true,canvas:canvas});
renderer.setSize(sizes.width,sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
renderer.setClearColor(new THREE.Color('#000000'),1);
// renderer.setClearColor(new THREE.Color('#E55807'),1);
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.enabled=true;




//postprocessing
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene,camera);
composer.addPass(renderPass);
const filmPass = new FilmPass(
0.2, //noise intensity
.4, //scanline intensity
1808, //scaneline count
0, //grayscale
);
// const luminosityPass = new ShaderPass( LuminosityShader );
const vignette = new ShaderPass( VignetteShader );

// vignette.uniforms[ "resolution" ].value = new THREE.Vector2( window.innerWidth, window.innerHeight );
// vignette.uniforms[ "horizontal" ].value = true; // default is false
// vignette.uniforms[ "radius" ].value = .8; // default is 0.75
// vignette.uniforms[ "softness" ].value = .3; // default is 0.3
// vignette.uniforms[ "gain" ].value = .3; // default is 0.9
// const glitchPass= new GlitchPass();
const fxaa = new ShaderPass(FXAAShader);
// const water = new ShaderPass(WaterRefractionShader);
// composer.addPass(water);
// console.log(fxaa);

// glitchPass.uniforms.amount.value= 0.1;
// glitchPass.uniforms.angle.value= 5.1;
// glitchPass.uniforms.byp.value= 0;
// glitchPass.uniforms.seed.value=0.1;
// glitchPass.uniforms.seed_x.value=0.1;
// glitchPass.uniforms.seed_y.value=-0.001;
// glitchPass.uniforms.col_s.value =-0.001;
// glitchPass.uniforms.distortion_x.value=0.1005;
// glitchPass.uniforms.distortion_y.value=0.1005;
// glitchPass.uniforms.tDisp.value.center.x= 0;
// glitchPass.uniforms.tDisp.value.center.y= 1;
// glitchPass.uniforms.needsUpdate=true;
// glitchPass.goWild=true;
// console.log(glitchPass.goWild);
composer.addPass(filmPass);
// composer.addPass(glitchPass);
// fxaa.uniforms.resolution.value.Vector2.x= 1 / 1980;
// fxaa.uniforms.resolution.value.Vector2.y= 1 / 1080;
composer.addPass(fxaa);

// console.log(fxaa);
composer.addPass( vignette );
vignette.uniforms.darkness.value=4;
vignette.uniforms.offset.value=0.75;
// vignette.enabled=true;
// console.log(vignette);
// console.log(glitchPass.uniforms);
// console.log(glitchPass.uniforms.distortion_x);


//load glb models
const gLoader= new GLTFLoader();
gLoader.load('./assets/h1.glb',function(gltf){
scene.add(gltf.scene);
hat =gltf.scene.children[0];
hatR= gltf.scene;
console.log(hat);
hat.position.set(0.2,1,-1);
hat.scale.set(1,1,1);
// hat.rotation.x = .4;
// hat.rotation.y = -.3;
hat.rotation.set(-.1,-.2,0)
hat.material = new THREE.MeshLambertMaterial({color:0x444444,
  color:0xa0a0a0,

  map:hatTexture});
hat.castShadow=true;
hat.receiveShadow=true;
gltf.castShadow=true;
})

// scene.background=new THREE.Color(0x202020);
const gLoader1 = new GLTFLoader();
gLoader1.load('./assets/h2.glb',function(gltf){

  scene.add(gltf.scene);
  gltf.scene.children[0].position.set(0.2,1,-1);
  gltf.scene.scale.set(1,1,1);
  hat2R=gltf.scene;
  h2= gltf.scene.children[0];
  // h2.rotation.x = .4;
  // h2.rotation.y = .4;
  h2.rotation.set(-0.1,-.2,0);
  h2.castShadow=true;
  h2.receiveShadow=true;

h2.children[0].material= new THREE.MeshLambertMaterial({color:0xF4462B});
h2.children[2].material= new THREE.MeshLambertMaterial({color:0xF4462B});


  h2.children[1].material= new THREE.MeshLambertMaterial({color:0xF4462B});

// console.log(hat2R.rotation,hatR.rotation);
})
//lights
const pLight = new THREE.PointLight(0xff0000,.5);
pLight.position.set(0,5,-2);
// scene.add(pLight);
const ambient = new THREE.AmbientLight(0xffffff,.1);
// scene.add(ambient);
// const light1 =new THREE.DirectionalLight(0xaaaaaa,3);
const spotLight = new THREE.SpotLight( 0xffffff,1.5,20.8,.8,.2,1.2 );
spotLight.position.set(0,10,0);
spotLight.castShadow=true;
scene.add(spotLight);
const light1 =new THREE.DirectionalLight(0xaaaaaa,1);
// light1.castShadow=true;
light1.position.set(0,3,3);
const light2 = new THREE.PointLight(0x0000ff,2);
light2.position.set(0,0,-3);
scene.add(light1);
// scene.add(cig);
// scene.add(head);
// head.position.set(0,-.4,0);
//orbit controls
// const controls =new OrbitControls(camera,canvas);
// console.log(hatR);
let geom = new THREE.PlaneGeometry(30, 20, 200, 200);
let bendMat = new THREE.MeshPhongMaterial({color:0xF4462B,});
planeCurve(geom,.5);
let curved = new THREE.Mesh(geom,bendMat);
curved.castShadow=true;
// curved.receiveShadow=true;
scene.add(curved);
// let shadowPlaneGeo = new THREE.PlaneGeometry(5,5,50,50);
let shadowPlaneGeo =new THREE.CircleGeometry( 15, 32 );
let shadowPlaneMat = new THREE.MeshPhysicalMaterial({color:0xf4462b,opacity:.5,transparent:true,roughness:2,metalness:.2});
let shadowPlane = new THREE.Mesh(shadowPlaneGeo,shadowPlaneMat);
scene.add(shadowPlane);
shadowPlane.rotation.x=-1.7;
shadowPlane.position.y=-1.63;
shadowPlane.position.z=-1.52;
shadowPlane.receiveShadow=true;
// gui.add(shadowPlane.rotation,'x',-2,2).name('shadowPlane r x');
// gui.add(shadowPlane.rotation,'y',-2,2).name('shadowPlane r y');
// gui.add(shadowPlane.rotation,'z',-2,2).name('shadowPlane r z');
// gui.add(shadowPlane.position,'x',-5,5).name('shadowPlane p x');
// gui.add(shadowPlane.position,'y',-5,5).name('shadowPlane p y');
// gui.add(shadowPlane.position,'z',-5,5).name('shadowPlane p z');
// gui.add(spotLight.position,'y',3,10).name('slight p y');
// gui.add(spotLight.position,'z',-3,4).name('slight p z');


curved.position.set(0,0,-3.9);
// curved.rotation.set(-0.31,0,0);
curved.rotation.set(-0.18,0,0);
// gui.add(curved.position,'x',-2,2).name('curved p x');
// gui.add(curved.position,'y',-2,2).name('curved p y');
// gui.add(curved.position,'z',-5,3).name('curved p z');
// gui.add(curved.rotation,'x',-2,2).name('curved r x');
// gui.add(curved.rotation,'y',-1,2).name('curved r y');
// gui.add(curved.rotation,'z',-1,2).name('curved r z');
function planeCurve(g, z){

  let p = g.parameters;
  let hw = p.width * 0.5;

  let a = new THREE.Vector2(-hw, 0);
  let b = new THREE.Vector2(0, z);
  let c = new THREE.Vector2(hw, 0);

  let ab = new THREE.Vector2().subVectors(a, b);
  let bc = new THREE.Vector2().subVectors(b, c);
  let ac = new THREE.Vector2().subVectors(a, c);

  let r = (ab.length() * bc.length() * ac.length()) / (2 * Math.abs(ab.cross(ac)));

  let center = new THREE.Vector2(0, z - r);
  let baseV = new THREE.Vector2().subVectors(a, center);
  let baseAngle = baseV.angle() - (Math.PI * 0.5);
  let arc = baseAngle * 2;

  let uv = g.attributes.uv;
  let pos = g.attributes.position;
  let mainV = new THREE.Vector2();
  for (let i = 0; i < uv.count; i++){
  	let uvRatio = 1 - uv.getX(i);
    let y = pos.getY(i);
    mainV.copy(c).rotateAround(center, (arc * uvRatio));
    pos.setXYZ(i, mainV.x, y, -mainV.y);
  }

  pos.needsUpdate = true;

}
//sphere
// const sphereGeo = new THREE.SphereGeometry(15,32,16);
// const sphereMat = new THREE.MeshBasicMaterial({color:0xf4462b,side:THREE.DoubleSide})
// const sphere = new THREE.Mesh(sphereGeo,sphereMat);
// scene.add(sphere);
//resize

window.addEventListener('resize', () =>{
  //update sizes
  sizes.width=window.innerWidth;
  sizes.height=window.innerHeight;


  //Update camera
  camera.aspect= sizes.width/sizes.height;
  camera.updateProjectionMatrix();

  //Update renderer/ composer
  composer.setSize(sizes.width,sizes.height);
  resizes();
  // const pixelRatio = renderer.getPixelRatio();

	// fxaa.material.uniforms[ 'resolution' ].value.x = 1 / ( sizes.width * pixelRatio );
  // fxaa.material.uniforms[ 'resolution' ].value.y = 1 / ( sizes.height * pixelRatio );
  renderer.setSize(sizes.width,sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
})
//animate
// document.addEventListener('mousemove',onDocumentMouseMove)
let mouseX= 0;
let mouseY=0;

let targetX=0;
let targetY=0;
const windowX= window.innerWidth/ 2;
const windowY= window.innerHeight/2;

document.querySelector('.mark').addEventListener('mousemove',onDocumentMouseMove);
function onDocumentMouseMove(event){
  mouseX= (event.clientX - windowX);
  mouseY = (event.clientY-windowY);


}
const tl = gsap.timeline();
const tl2 =gsap.timeline();
const tl3 =gsap.timeline();
mark.forEach((m) => {
  m.addEventListener('click',tip)
});
// const obj = [
//   hatR.rotation,
//   hat2R.rotation,
//   cig.position
// ];
function tip() {
  // hatR.rotation.x = .3;
  // // hatR.rotation.x = .2;
  // hat2R.rotation.x = .3;
  // hat2R.rotation.x = .2;

  tl.to(hatR.rotation,{
    x:.1,

    duration:.2
  })
  tl.to(hatR.rotation,{
    x:0,
    duration:.2
  })

  tl2.to(hat2R.rotation,{
    x:.1,

    duration:.2
  })
  tl2.to(hat2R.rotation,{
    x:0,
    duration:.2
  })
  gsap.to(cig.position,{
    y:-1.28,
    duration:.15
  })
  gsap.to(cig.position,{
    y:-1.2,
    delay:.15,
    duration:.15
  })
  // console.log('clicked')
}
function resizes(){
  if(window.innerWidth<600){
    hatR.scale.set(.6,.6,.6);
    hat2R.scale.set(0.6,.6,.6);
  }
  else if (window.innerWidth>600){
    hatR.scale.set(1,1,1);
    hat2R.scale.set(1,1,1);
  }

}
// controls.update();
const clock = new THREE.Clock();
// console.log(cig.material);
function animate(){
  window.requestAnimationFrame(animate);
  let delta = clock.getDelta();
// for (let i=0; i<smokeParticles.length; i++){
// smokeParticles[i].position.x=(mouseX/220) *0.01;
//     smokeParticles[i].rotation.z+=(delta*0.04);
//       // smokeParticles[i].position.x=(mouseX/1.2) *0.009;
// }
  // console.log('x:'+mouseX +'y:'+ mouseY );
  // if(mouseX > -254 && mouseX<258 ){
    if(mouseX > -window.innerWidth/6 && mouseX<window.innerWidth/6 ){
    hatR.rotation.y =0.2 +(mouseX/1.2) *0.002;
    hat2R.rotation.y =0.2+ (mouseX/1.2) *0.002;
    cig.position.x = (mouseX+40) *0.005;

    // head.rotation.y = (mouseX/1.2) *0.001;
    // light1.position.x=(mouseX/1.2) *0.009;
    // light1.position.y=(mouseX/2.5) *0.005;
    // for (let i=0; i<smokeParticles.length; i++){
    //
    //
    // }
    // hatR.rotation.x = (mouseY/1.2) *0.001;
    // hat2R.rotation.x = (mouseY/1.2) *0.001;
    // cig.rotation.y = (mouseX+10) *0.001;
    // cig.material.opacity= (mouseX/100);
    // console.log((mouseX/2)/-100);
  }
  if(window.innerWidth<600){
    hatR.rotation.y =0.2 +(mouseX/1.5) *0.003;
    hat2R.rotation.y =0.2+ (mouseX/1.5) *0.003;


  }

// tip();
// controls.update();
  // renderer.render(scene,camera);
  composer.render();
  camera.updateProjectionMatrix();
}

animate();
