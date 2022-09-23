import React, { useEffect } from "react";
import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import { angleToRadians } from "./Services.js";
import { useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";
import * as THREE from "three";
import { DoubleSide } from "three";
import { toast } from "react-toastify";

const Cubes = (props) => {
  let a = localStorage.getItem("A");
  //console.log(a);

  let [count, setCount] = useState(0);
  let [isActive, setIsActive] = useState(false);
  let [showVolume_A, setShowVolume_A] = useState(false);
  let [showVolume_B, setShowVolume_B] = useState(false);

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

  const [cubeA, setCubeA] = useState([0, 1.5, 0]); // origine position for cubeA // side A=2
  const [cubeB, setCubeB] = useState([4, 0.5, 1]); // origine position for cubeB // side B=1

  const { size, viewport } = useThree();
  let aspect = size.width / viewport.width;

  const bindCubeB = useDrag(
    ({ offset: [x] }) => {
      const [, y, z] = cubeB;

      setCubeB([x / aspect + 4, y, z]);

      //console.log("position of cubeB = x , y , z "+ cubeB[0].toFixed(1)+"  " + cubeB[1] +"  " +cubeB[2].toFixed(1));
      //if(cubeB[0].toFixed(1)>=-1.5 &&  cubeB[0].toFixed(1)<=2.5 && cubeB[2].toFixed(1)>=-0.3 &&  cubeB[2].toFixed(1)<=0.3 )
      if (cubeB[0].toFixed(1) >= -1 && cubeB[0].toFixed(1) <= -1) {
        //console.log('inside if : ',cubeB);

        setCubeB(true);
        setCubeB([-1, 0.5, 1]);
        localStorage.setItem("pos_B", -1);
        // console.log('inside if')
        // cubeB[0].toFixed(1) >= -0.1 &&  cubeB[0].toFixed(1) <= 0.1 ? setCubeB([-2,0.5,2]) : setCubeB([0,0.5,2]);
        //count = count + 1;
        setCount(1);
        setIsActive(true);
        // toast.success("Cube B has been dragged successfully.....!", {
        //   position: "top-center",
        //   autoClose: 1000,

        // });
        //alert('Cube B has been dragged successfully.....!')
      } else if (cubeB[0].toFixed(1) >= 1 && cubeB[0].toFixed(1) <= 1) {
        setCubeB(true);
        setCubeB([1, 0.5, 1]);
        localStorage.setItem("pos_B", 1);
        setCount(1);
        setIsActive(true);
      }
    },
    { pointerEvents: true }
  );

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

  return (
    <>
    
      {/* Camera perspective */}
      <PerspectiveCamera makeDefault position={[0, 2, a == 3 ? 11 : 9]}>
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
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color="#3dbf55" opacity={0.7} transparent />
          <Text
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            Cube A
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
          {/* bottom left side notation */}
          <Text
            position={[cubeA[0] - 1, cubeA[1] - 0.8, cubeA[2] + 1.6]}
            scale={[6, 6, 6]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            .
          </Text>
        </mesh>
        <mesh>
          {/* bottom right side notation */}
          <Text
            position={[cubeA[0] + 1, cubeA[1] - 0.8, cubeA[2] + 1.6]}
            scale={[6, 6, 6]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            .
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

      {/* Cube B */}
      <group onClick={cube_B} {...bindCubeB()} ref={cube_bRef}>
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

      {/* LHS text */}
      {isActive && (
        <mesh>
          <Text
            position={[0, 0.2, 5]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            LHS = a&#179; - b&#179;
          </Text>
        </mesh>
      )}
    </>
  );
};

export default Cubes;