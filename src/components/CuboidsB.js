import React, { useEffect } from "react";
import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import { angleToRadians } from "./Services.js";
import { useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";
import * as THREE from "three";
import { DoubleSide } from "three";
import { toast } from "react-toastify";

const CuboidsB = (props) => {
  let a = localStorage.getItem("A");
  //console.log(a);

  let [count, setCount] = useState(0);
  let [isActive, setIsActive] = useState(false);
  let [showVolume_A, setShowVolume_A] = useState(false);
  let [showVolume_B, setShowVolume_B] = useState(false);
  let [showVolume_C, setShowVolume_C] = useState(false);

  // var [sideA, setSideA] = useState(0);
  // var [sideB, setSideB] = useState(0);
  // var [count, setCount] = useState(0);

  //console.log(angleToRadians(90));
  const orbitControlsRef = useRef(null);

  //azimuthal angle variable
  //const [angleAzimuthal, setAngleAzimuthal] = useState(150);
  //polar angle variable
  //const [anglePolar, setAnglePolar] = useState(60);

  // check whether object is dragging or not
  var [isMoving, setIsMoving] = useState(false);
  //Dragging logic
  const cube_aRef = useRef(); // ref for cube A
  const cube_bRef = useRef(); // ref for cube B
  const cube_cRef = useRef(); // ref for cube C

  const [cubeA, setCubeA] = useState([0, 1.5, 0]); // origine position for cubeA // side A=2

  const [cubeB, setCubeB] = useState([4, 1.5, 0]); // origine position for cubeB // side B=1
 
  const [cubeC, setCubeC] = useState([-4, 1.5, 0]); // origine position for cubeB // side C=1

  const { size, viewport } = useThree();
  let aspect = size.width / viewport.width;

 

  props.func(count);

  useEffect(
    (event) => {
      if (!!orbitControlsRef.current) {
        console.log(orbitControlsRef.current + "useEffect");
      }
    },
    [orbitControlsRef.current]
  );

  const cube_A = () => {
    setShowVolume_A(true);
  }
  const cube_B = () => {
    setShowVolume_B(true);
  }
  const cube_C = () => {
    setShowVolume_C(true);
  }

  return (
    <>

      {/* Camera perspective */}

      <PerspectiveCamera makeDefault position={[0, 2, 9]}>
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

      {/* cube A geometry */}
      <group onClick={cube_A} ref={cube_aRef}>
        <mesh
          castShadow
          position={cubeA}
          onPointerOver={(e) => {
            //console.log("mouse on cube A");
            // setAngleAzimuthal(0);
            // setAnglePolar(0);
            setIsMoving(true);
          }}
          onPointerOut={(e) => {
            //console.log("mouse not on cube A");
            // setAngleAzimuthal(180);
            // setAnglePolar(70);
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
          {/* {showVolume_A && <Text
            position={[cubeA[0] - 4, cubeA[1], cubeA[2] + 1.5]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            Volume of cube A = a * a * a = a&#179;
          </Text>} */}
        </mesh>

        <mesh>
          {/* top side notation */}
          <Text
            position={[cubeA[0], cubeA[1] + 0.6, cubeA[2] + 1.5]}
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
            position={[cubeA[0] - 0.6, cubeA[1], cubeA[2] + 1.5]}
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
            position={[cubeA[0] - 0.6, cubeA[1] + 0.6, cubeA[2]+ 0.1 ]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
           a
          </Text>
        </mesh>
      </group>


      {/* cube B geometry */}
      <group onClick={cube_B} ref={cube_bRef}>
        <mesh
          castShadow
          position={cubeB}
          onPointerOver={(e) => {
            //console.log("mouse on cube A");
            // setAngleAzimuthal(0);
            // setAnglePolar(0);
            setIsMoving(true);
          }}
          onPointerOut={(e) => {
            //console.log("mouse not on cube A");
            // setAngleAzimuthal(180);
            // setAnglePolar(70);
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
          {/* {showVolume_A && <Text
            position={[cubeA[0] - 4, cubeA[1], cubeA[2] + 1.5]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            Volume of cube A = a * a * a = a&#179;
          </Text>} */}
        </mesh>

        <mesh>
          {/* top side notation */}
          <Text
            position={[cubeA[0] + 4.0, cubeA[1]+0.6 , cubeA[2]+1.5 ]}
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
            position={[cubeA[0] + 3.4, cubeA[1] + 0.6, cubeA[2] + 0.1]}
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
            position={[cubeA[0] + 3.4 , cubeA[1]  , cubeA[2] + 1.5]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            b
          </Text>
        </mesh>
      </group>

      {/* Cube C geometry*/}
      <group onClick={cube_C} ref={cube_cRef}>
        <mesh
          castShadow
          position={cubeC}
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
            position={[cubeB[0] - 8.0, cubeB[1] + 0.6 , cubeB[2] + 1.5]}
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
            position={[cubeB[0] - 8.6, cubeB[1]  , cubeB[2] + 1.5]}
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
            position={[cubeB[0] - 8.6, cubeB[1] + 0.5, cubeB[2] ]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            a
          </Text>
        </mesh>
      </group>

      {/* volume text*/}
      {/* {showVolume_B && <mesh>
        <Text
          position={[6.5, 1, 1.5]}
          scale={[2, 2, 2]}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Volume of Cube B = b * b * b = b&#179;
        </Text>
      </mesh>} */}

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