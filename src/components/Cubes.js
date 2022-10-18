import React, { useEffect } from "react";
import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import { angleToRadians } from "./Services.js";
import { useRef, useState } from "react";
import * as THREE from "three";
import { DoubleSide } from "three";


const Cubes = () => {

  // User input values
  let firstInput = parseInt(localStorage.getItem("val1"));

  const orbitControlsRef = useRef(null);

  // check whether object is dragging or not
  var [isMoving, setIsMoving] = useState(false);

  const [cubeA, setCubeA] = useState([0, 1.5, 0]); // origine position for cubeA 
  const [cubeB, setCubeB] = useState([4, 1.5, 1]); // origine position for cubeB 


  useEffect(
    (event) => {
      if (!!orbitControlsRef.current) {
        //console.log(orbitControlsRef.current + "useEffect");
      }
    },
    [orbitControlsRef.current]
  );


  return (
    <>

      {/* Camera perspective */}

      <PerspectiveCamera makeDefault position={[0, 2, firstInput === 3 ? 11 : 9]}>
        <OrbitControls
          ref={orbitControlsRef}
          minPolarAngle={angleToRadians(70)}
          maxPolarAngle={angleToRadians(88)}
          enableRotate={!isMoving}
          enableZoom={false}
        />
      </PerspectiveCamera>

      {/* Axis helper */}
      <primitive object={new THREE.AxesHelper(30)} />

      {/* floor */}
      <mesh receiveShadow rotation={[-angleToRadians(90), 0, 0]}>
        <planeGeometry args={[60, 60]} />
        <meshStandardMaterial color="#5b87a8" side={DoubleSide} />
      </mesh>

      {/* cube A geometry */}
      <group >
        <mesh
          castShadow
          position={cubeA}
          onPointerOver={(e) => {
            setIsMoving(true);
          }}
          onPointerOut={(e) => {
            setIsMoving(false);
          }}
        >
          {/* <sphereGeometry args={[1, 32, 32]} /> */}
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color="#FF1493" opacity={0.7} transparent />
          <Text
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            Cube A
          </Text>
        </mesh>

        <mesh>
          {/* top side notation */}
          <Text
            position={[cubeA[0], cubeA[1] + 1.6, cubeA[2] + 1.5]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            a
          </Text>
        </mesh>

        <mesh>
          {/* left side notation */}
          <Text
            position={[cubeA[0] - 1.6, cubeA[1], cubeA[2] + 1.5]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            a
          </Text>
        </mesh>
        <mesh>
          {/* top left side notation */}
          <Text
            position={[cubeA[0] - 1.6, cubeA[1] + 1.6, cubeA[2]]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            a
          </Text>
        </mesh>
      </group>

      {/* Cube B geometry */}
      <group  >
        <mesh
          castShadow
          position={cubeB}
          onPointerOver={(e) => {
            //console.log("mouse on cube B");
            // setAngleAzimuthal(0);
            // setAnglePolar(0);
            setIsMoving(true);
          }}
          onPointerOut={(e) => {
            //console.log("mouse not on cube B");
            // setAngleAzimuthal(150);
            // setAnglePolar(70);
            setIsMoving(false);
          }}
        >
          {/* <sphereGeometry args={[1, 32, 32]} /> */}
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#155fe8" opacity={0.7} transparent />
          <Text
            scale={[2, 2, 2]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            Cube B
          </Text>
        </mesh>

        <mesh>
          {/* top side notation */}
          <Text
            position={[cubeB[0], cubeB[1] + 0.6, cubeB[2] + 0.5]}
            scale={[2, 2, 2]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            b
          </Text>
        </mesh>

        <mesh>
          {/* top right side notation */}
          <Text
            position={[cubeB[0] + 0.57, cubeB[1] + 0.5, cubeB[2]]}
            scale={[2, 2, 2]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            b
          </Text>
        </mesh>

        <mesh>
          {/* right side notation */}
          <Text
            position={[cubeB[0] + 0.57, cubeB[1], cubeB[2] + 0.5]}
            scale={[2, 2, 2]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            b
          </Text>
        </mesh>
      </group>

      {/* ambient light */}
      <ambientLight args={["#ffffff", 1]} />

      {/* point source light */}
      <pointLight
        castShadow
        position={[8, 10, 5]}
        args={["#ffffff", 0.5, 100, 2]}
      />


    </>
  );
};

export default Cubes;