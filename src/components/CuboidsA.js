import React, { useEffect } from "react";
import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import { angleToRadians } from "./Services.js";
import { useRef, useState } from "react";
import * as THREE from "three";
import { DoubleSide } from "three";


const CuboidsA = () => {

  // User input values
  let firstInput = parseInt(localStorage.getItem("val1"));


  const orbitControlsRef = useRef(null);

  // check whether object is dragging or not
  var [isMoving, setIsMoving] = useState(false);

  // Positions of cuboids
  const [cuboidL, setCuboidL] = useState([0, 1.5, 0]); // origine position for cuboidL 

  const [cuboidM, setCuboidM] = useState([4, 1.5, 0]); // origine position for cuboidM 

  const [cuboidN, setCuboidN] = useState([-4, 1.5, 0]); // origine position for cuboidN 


  useEffect(
    (event) => {
      if (!!orbitControlsRef.current) {
        // console.log(orbitControlsRef.current + "useEffect");
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
        />
      </PerspectiveCamera>

      {/* Axis helper */}
      <primitive object={new THREE.AxesHelper(30)} />

      {/* floor */}
      <mesh receiveShadow rotation={[-angleToRadians(90), 0, 0]}>
        <planeGeometry args={[60, 60]} />
        <meshStandardMaterial color="#5b87a8" side={DoubleSide} />
      </mesh>

      {/* cuboid L geometry */}
      <group >
        <mesh
          castShadow
          position={cuboidL}
          onPointerOver={(e) => {
            setIsMoving(true);
          }}
          onPointerOut={(e) => {
            setIsMoving(false);
          }}
        >
          {/* <sphereGeometry args={[1, 32, 32]} /> */}
          <boxGeometry args={[3, 3, 1]} />
          <meshStandardMaterial color="#008000" opacity={0.7} transparent />
          <Text
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            Cuboid L
          </Text>
        </mesh>

        <mesh>
          {/* top side notation */}
          <Text
            position={[cuboidL[0], cuboidL[1] + 1.6, cuboidL[2] + 0.5]}
            scale={[3, 3, 1]}
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
            position={[cuboidL[0] - 1.6, cuboidL[1], cuboidL[2] + 0.5]}
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
            position={[cuboidL[0] - 1.6, cuboidL[1] + 1.6, cuboidL[2]]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            b
          </Text>
        </mesh>
      </group>

      {/* Cuboid M geometry */}
      <group >
        <mesh
          castShadow
          position={cuboidM}
          onPointerOver={(e) => {

            setIsMoving(true);
          }}
          onPointerOut={(e) => {

            setIsMoving(false);
          }}
        >
          {/* <sphereGeometry args={[1, 32, 32]} /> */}
          <boxGeometry args={[3, 3, 1]} />
          <meshStandardMaterial color="#008000" opacity={0.7} transparent />
          <Text
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            Cuboid M
          </Text>
        </mesh>

        <mesh>
          {/* top left side notation */}
          <Text
            position={[cuboidM[0] - 1.5, cuboidM[1] + 1.6, cuboidM[2]]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            b
          </Text>
        </mesh>

        <mesh>
          {/* left side notation */}
          <Text
            position={[cuboidM[0] -1.6 , cuboidM[1], cuboidM[2] + 0.5]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            a
          </Text>
        </mesh>

        <mesh>
          {/* top side notation */}
          <Text
            position={[cuboidM[0] , cuboidM[1] + 1.6, cuboidM[2] + 0.5]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            a
          </Text>
        </mesh>
      </group>

      {/* cuboid N geometry */}
      <group >
        <mesh
          castShadow
          position={cuboidN}
          onPointerOver={(e) => {
            setIsMoving(true);
          }}
          onPointerOut={(e) => {
            setIsMoving(false);
          }}
        >
          {/* <sphereGeometry args={[1, 32, 32]} /> */}
          <boxGeometry args={[3, 3, 1]} />
          <meshStandardMaterial color="#008000" opacity={0.7} transparent />
          <Text
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            Cuboid N
          </Text>

        </mesh>

        <mesh>
          {/* top side notation */}
          <Text
            position={[cuboidN[0] , cuboidN[1]+1.6, cuboidN[2] + 0.6]}
            scale={[3, 3, 1]}
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
            position={[cuboidN[0] - 1.6, cuboidN[1] , cuboidN[2] + 0.5]}
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
            position={[cuboidN[0] - 1.5, cuboidN[1] + 1.6, cuboidN[2]]}
            scale={[3, 3, 3]}
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

export default CuboidsA;