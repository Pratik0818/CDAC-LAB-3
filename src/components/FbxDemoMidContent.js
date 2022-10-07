import React from 'react'
import { useEffect } from 'react'
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import cube from "../model/Cube-section-Transperant.fbx";
import BackNextBar from './MajorComponents/BackNextBar';



const FbxDemoMidContent = () => {
  var container;
  var camera, scene, renderer, controls;
  var sides = [];
  var clock = new THREE.Clock();
  var SCREEN_WIDTH = 305, SCREEN_HEIGHT = 350;

  var VIEW_ANGLE = 55, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
  var controls;
  var mixer;
  let modelReady = false;
  let nClip = null;



  useEffect(() => {
    container = document.getElementById("container");
    //alert(document.getElementById("container"))
    if (container == null) {
    } else {
      fbinit();
      animate();
    }

  }, []);

  function fbinit() {
    scene = new THREE.Scene();
    const light = new THREE.PointLight()
    light.position.set(100, 140, 100)
    scene.add(light)
    const ambientLight = new THREE.AmbientLight()
    scene.add(ambientLight)
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    //camera.position.set(-0.9,4.5, -1.5)
    camera.position.set(-300, 90, -200);
    //camera.position.set(1,4,1);

    renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setSize(1100, 420);
    renderer.setClearColor(0xffffff, 0);
     //renderer.setClearColor(0xeeeeee, 1);
    container.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.target.set(0, 1, 0)
    const fbxLoader = new FBXLoader()

    fbxLoader.load(
      cube,
      (object) => {


        mixer = new THREE.AnimationMixer(object);
        const action = mixer.clipAction(object.animations[0])

        action.play();

        modelReady = true;

        object.scale.set(0.15, 0.15, 0.15) //for scaling 3d model
        scene.add(object)
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
      },
      (error) => {
        console.log(error)
      }
    )

  }



  window.addEventListener('resize', onWindowResize, false)
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
  }

  clock = new THREE.Clock();

  function animate() {

    requestAnimationFrame(animate)

    controls.update()

    setTimeout(
      function () {
        modelReady = false;
      }, 8000);

    if (modelReady) mixer.update(clock.getDelta())
    render()
  }

  function render() {
    renderer.render(scene, camera)
  }

  return (

    <div className="" style={{ height: "100%" }}>

      <div
        className=""
        style={{ height: "90%" }}
      >


        <div className="" style={{ height: "50%" }} id="container" >
        </div>
      </div>

      <BackNextBar
        backvisible="visible"
        nextvisible="hidden"
        submitvisible="hidden"
       
      />
    </div>
  )

}

export default FbxDemoMidContent