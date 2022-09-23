import React, { useEffect } from "react";
import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import { angleToRadians } from "./Services.js";
import { useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";
import * as THREE from "three";
import { DoubleSide } from "three";

const FinalCube = (props) => {
  let a = localStorage.getItem("A");
  //console.log(a);

  let [count, setCount] = useState(0);


  const orbitControlsRef = useRef(null);



  // check whether object is dragging or not
  var [isMoving, setIsMoving] = useState(false);
  //Dragging logic
  const cube_aRef = useRef(); // ref for cube A
  const cube_bRef = useRef(); // ref for cube B
  const cube_cRef = useRef(); // ref for cube C

  const [cubeA, setCubeA] = useState([0, 1.5, 0]); // origine position for cubeA 
  const [cubeL, setCubeL] = useState([-5.0, 1.5, 0]); // origine position for cubeL
  const [cubeM, setCubeM] = useState([0, 5, 0]); // origine position for cubeM
  const [cubeN, setCubeN] = useState([0, 1.5, -5.0]); // origine position for cubeN
  const [cubeP, setCubeP] = useState([-5.0, 5.0, 0]); // origine position for cubeP
  const [cubeQ, setCubeQ] = useState([0, 5.0, -5.0]); // origine position for cubeQ
  const [cubeR, setCubeR] = useState([-5.0, 1.5, -5.0]); // origine position for cubeR
  const [cubeB, setCubeB] = useState([-5.0, 5.0, -3.0]); // origine position for cubeB



  const { size, viewport } = useThree();
  let aspect = size.width / viewport.width;



  props.func(count);

  useEffect(
    () => {
      if (!!orbitControlsRef.current) {
        console.log(orbitControlsRef.current + "useEffect");
      }
    },
    [orbitControlsRef.current]
  );



  // Drag and drop logic of Cuboid M
  const bindCuboidM = useDrag(
    ({ offset: [y] }) => {
      if (count === 0) {
        const [x, , z] = cubeM;
        setCubeM([x, (-y / aspect), z]);
        setCubeM([0, 3.5, 0]);
        setCount(count + 1);

      }

    }
    ,
    { pointerEvents: true }
  );

  // Drag and drop logic of Cuboid N
  const bindCuboidN = useDrag(
    ({ offset: [z] }) => {
      if (count === 1) {
        const [x, y,] = cubeN;
        setCubeN([x, y, z / aspect]);
        setCubeN([0, 1.5, -2.0]);
        setCount(count + 1);
      }
    }
    ,
    { pointerEvents: true }
  );

  // Drag and drop logic of Cuboid L
  const bindCuboidL = useDrag(
    ({ offset: [x] }) => {
      if (count === 2) {
        const [, y, z] = cubeL;
        setCubeL([x / aspect, y, z]);
        setCubeL([-2.0, 1.5, 0]);
        setCount(count + 1);
      }

    }
    ,
    { pointerEvents: true }
  );

  // Drag and drop logic of Cuboid Q
  const bindCuboidQ = useDrag(
    ({ offset: [z, y] }) => {
      if (count === 3) {
        const [x, ,] = cubeQ;
        setCubeQ([x, y / aspect, z / aspect]);
        setCubeQ([0, 3.5, -2.0]);
        setCount(count + 1);
      }
    }
    ,
    { pointerEvents: true }
  );

  // Drag and drop logic of Cuboid P
  const bindCuboidP = useDrag(
    ({ offset: [x, y] }) => {
      if (count === 4) {
        const [, , z] = cubeP;
        setCubeP([x / aspect, y / aspect, z]);
        setCubeP([-2.0, 3.5, 0]);
        setCount(count + 1);
      }

    }
    ,
    { pointerEvents: true }
  );

  // Drag and drop logic of Cuboid R
  const bindCuboidR = useDrag(
    ({ offset: [x, z] }) => {
      if (count === 5) {
        const [, , y] = cubeR;
        setCubeR([x / aspect, y, z / aspect]);
        setCubeR([-2.0, 1.5, -2.0]);
        setCount(count + 1);
      }
    }
    ,
    { pointerEvents: true }
  );

  // Drag and drop logic of Cube B
  const bindCubeB = useDrag(
    ({ offset: [x, y, z] }) => {
      if (count === 6) {
        const [, ,] = cubeB;
        setCubeB([x / aspect, y / aspect, z / aspect]);
        setCubeB([-2.0, 3.5, - 2.0]);
        setCount(count + 1);
      }
    }
    ,
    { pointerEvents: true }
  );

  return (
    <>

      {/* Camera perspective */}

      <PerspectiveCamera makeDefault position={[0, 2, 15]}>
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

      {/* cuboid L geometry */}
      <group {...bindCuboidL()}>
        <mesh
          castShadow
          position={cubeL}
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
          <boxGeometry args={[1, 3, 3]} />
          <meshStandardMaterial color="#008000" opacity={0.7} transparent />
          <Text
            scale={[2.5, 2.5, 2.5]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            Cuboid L
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
            position={[cubeL[0], cubeL[1] + 1.6, cubeL[2] + 1.5]}
            scale={[3, 3, 1]}
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
            position={[cubeL[0] - 0.6, cubeL[1], cubeL[2] + 1.5]}
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
            position={[cubeL[0] - 0.6, cubeL[1] + 1.6, cubeL[2]]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            a
          </Text>
        </mesh>
      </group>

      {/* cuboid M geometry */}
      <group {...bindCuboidM()}>
        <mesh
          castShadow
          position={cubeM}
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
          <boxGeometry args={[3, 1, 3]} />
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
            position={[cubeM[0] + 1.6, cubeM[1] + 0.5, cubeM[2]]}
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
            position={[cubeM[0], cubeM[1] + 0.6, cubeM[2] + 1.5]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            a
          </Text>
        </mesh>
        <mesh>
          {/*  left side notation */}
          <Text
            position={[cubeM[0] + 1.5, cubeM[1], cubeM[2] + 1.6]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            b
          </Text>
        </mesh>
      </group>

      {/* cuboid N geometry */}
      <group {...bindCuboidN()}>
        <mesh
          castShadow
          position={cubeN}
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
            position={[cubeN[0], cubeN[1] + 1.6, cubeN[2] + 0.5]}
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
            position={[cubeN[0] - 1.6, cubeN[1], cubeN[2] + 0.5]}
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
            position={[cubeN[0] - 1.6, cubeN[1] + 1.6, cubeN[2]]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            b
          </Text>
        </mesh>
      </group>

      {/* cuboid P geometry */}
      <group {...bindCuboidP()}>
        <mesh
          castShadow
          position={cubeP}
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
            position={[cubeP[0], cubeP[1] + 0.6, cubeP[2] + 1.5]}
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
            position={[cubeP[0] - 0.6, cubeP[1], cubeP[2] + 1.5]}
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
            position={[cubeP[0] - 0.6, cubeP[1] + 0.6, cubeP[2] + 0.1]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            a
          </Text>
        </mesh>
      </group>

      {/* Cuboid Q geometry */}
      <group {...bindCuboidQ()}>
        <mesh
          castShadow
          position={cubeQ}
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
          <boxGeometry args={[3, 1, 1]} />
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
            position={[cubeQ[0], cubeQ[1] + 0.6, cubeQ[2] + 0.6]}
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
            position={[cubeQ[0] + 1.6, cubeQ[1], cubeQ[2] + 0.5]}
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
            position={[cubeQ[0] + 1.6, cubeQ[1] + 0.6, cubeQ[2] + 0.1]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            b
          </Text>
        </mesh>
      </group>

      {/* Cuboid R geometry */}
      <group {...bindCuboidR()}>
        <mesh
          castShadow
          position={cubeR}
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
          <boxGeometry args={[1, 3, 1]} />
          <meshStandardMaterial color="#B22222" opacity={0.7} transparent />
          <Text
            scale={[2.5, 2.5, 2.5]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            Cuboid R
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
            position={[cubeR[0], cubeR[1] + 1.6, cubeR[2] + 0.5]}
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
            position={[cubeR[0] - 0.6, cubeR[1], cubeR[2] + 1.5]}
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
            position={[cubeR[0] - 0.6, cubeR[1] + 0.6, cubeR[2] + 0.1]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            a
          </Text>
        </mesh>
      </group>

      {/* Cube B geometry*/}
      <group {...bindCubeB()}>
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


    </>
  );
};

export default FinalCube;