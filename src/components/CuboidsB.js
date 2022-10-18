import React, { useEffect } from "react";
import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import { angleToRadians } from "./Services.js";
import { useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { DoubleSide } from "three";


const CuboidsB = () => {
  // User input values
  let firstInput = parseInt(localStorage.getItem("val1"));

  const orbitControlsRef = useRef(null);
  // check whether object is dragging or not
  var [isMoving, setIsMoving] = useState(false);

  const [cuboidP, setCuboidP] = useState([0, 1.5, 0]); // origine position for cuboidP 

  const [cuboidQ, setCuboidQ] = useState([4, 1.5, 0]); // origine position for cuboidQ

  const [cuboidR, setCuboidR] = useState([-4, 1.5, 0]); // origine position for cuboidR


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

      <PerspectiveCamera makeDefault position={[0, 2, firstInput === 3 ? 12 : 9]}>
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

      {/* cube P geometry */}
      <group>
        <mesh
          castShadow
          position={cuboidP}
          onPointerOver={(e) => {
            setIsMoving(true);
          }}
          onPointerOut={(e) => {
            setIsMoving(false);
          }}
        >
          {/* <sphereGeometry args={[1, 32, 32]} /> */}
          <boxGeometry args={[1, 1, 3]} />
          <meshStandardMaterial color="#B22222" opacity={0.7} transparent />
          <Text
            scale={[2.5, 2.5, 2.5]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            Cuboid P
          </Text>

        </mesh>

        <mesh>
          {/* top side notation */}
          <Text
            position={[cuboidP[0], cuboidP[1] + 0.6, cuboidP[2] + 1.5]}
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
            position={[cuboidP[0] - 0.6, cuboidP[1], cuboidP[2] + 1.5]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            b
          </Text>
        </mesh>
        <mesh>
          {/* top left side notation */}
          <Text
            position={[cuboidP[0] - 0.6, cuboidP[1] + 0.6, cuboidP[2] + 0.1]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            a
          </Text>
        </mesh>
      </group>

      {/* cube Q geometry */}
      <group >
        <mesh
          castShadow
          position={cuboidQ}
          onPointerOver={(e) => {
            setIsMoving(true);
          }}
          onPointerOut={(e) => {
            setIsMoving(false);
          }}
        >
          {/* <sphereGeometry args={[1, 32, 32]} /> */}
          <boxGeometry args={[1, 1, 3]} />
          <meshStandardMaterial color="#B22222" opacity={0.7} transparent />
          <Text
            scale={[2.5, 2.5, 2.5]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            Cuboid Q
          </Text>

        </mesh>

        <mesh>
          {/* top side notation */}
          <Text
            position={[cuboidP[0] + 4.0, cuboidP[1] + 0.6, cuboidP[2] + 1.5]}
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
            position={[cuboidP[0] + 3.4, cuboidP[1] + 0.6, cuboidP[2] + 0.1]}
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
            position={[cuboidP[0] + 3.4, cuboidP[1], cuboidP[2] + 1.5]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            b
          </Text>
        </mesh>
      </group>

      {/* Cube R geometry*/}
      <group >
        <mesh
          castShadow
          position={cuboidR}
          onPointerOver={(e) => {
            setIsMoving(true);
          }}
          onPointerOut={(e) => {
            setIsMoving(false);
          }}
        >
          {/* <sphereGeometry args={[1, 32, 32]} /> */}
          <boxGeometry args={[1, 1, 3]} />
          <meshStandardMaterial color="#B22222" opacity={0.7} transparent />
          <Text
            scale={[2.5, 2.5, 2.5]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            Cuboid R
          </Text>
        </mesh>

        <mesh>
          {/* top side notation */}
          <Text
            position={[cuboidQ[0] - 8.0, cuboidQ[1] + 0.6, cuboidQ[2] + 1.5]}
            scale={[3, 3, 3]}
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
            position={[cuboidQ[0] - 8.6, cuboidQ[1], cuboidQ[2] + 1.5]}
            scale={[3, 3, 3]}
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
            position={[cuboidQ[0] - 8.6, cuboidQ[1] + 0.5, cuboidQ[2]]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            a
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

export default CuboidsB;