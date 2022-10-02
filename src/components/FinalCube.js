import React, { useEffect } from "react";
import { OrbitControls, PerspectiveCamera, Text } from "@react-three/drei";
import { angleToRadians } from "./Services.js";
import { useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";
import * as THREE from "three";
import { DoubleSide } from "three";
import Line from "./Line.js";
import { Instruction_5 } from "./MajorComponents/Instruction.js";

const FinalCube = (props) => {
  // User input values
  let firstInput = parseInt(localStorage.getItem("val1"));

  let [count, setCount] = useState(0);


  const orbitControlsRef = useRef(null);



  // check whether object is dragging or not
  var [isMoving, setIsMoving] = useState(false);
  //Dragging logic
  const cube_aRef = useRef(); // ref for cube A
  const cube_bRef = useRef(); // ref for cube B
  const cube_cRef = useRef(); // ref for cube C

  const [cubeA, setCubeA] = useState([-5, 1.5, 0]); // origine position for cubeA 
  const [cubeL, setCubeL] = useState([-7.0, 1.5, 0]); // origine position for cubeL
  const [cubeM, setCubeM] = useState([-5, 3.5, 0]); // origine position for cubeM
  const [cubeN, setCubeN] = useState([-5, 1.5, -2.0]); // origine position for cubeN
  const [cubeP, setCubeP] = useState([-7.0, 3.5, 0]); // origine position for cubeP
  const [cubeQ, setCubeQ] = useState([-5, 3.5, -2.0]); // origine position for cubeQ
  const [cubeR, setCubeR] = useState([-7.0, 1.5, -2.0]); // origine position for cubeR
  const [cubeB, setCubeB] = useState([-7.0, 3.5, -2.0]); // origine position for cubeB

  const [cubeA1, setCubeA1] = useState([5.0, 1.5, 0]); // origine position for cubeA 
  const [cubeL1, setCubeL1] = useState([9, 1.6, 0]); // origine position for cubeL
  const [cubeM1, setCubeM1] = useState([5, 5, 0]); // origine position for cubeM
  const [cubeN1, setCubeN1] = useState([5, 1.6, -5.0]); // origine position for cubeN
  const [cubeP1, setCubeP1] = useState([9, 5.0, 0]); // origine position for cubeP
  const [cubeQ1, setCubeQ1] = useState([5, 5.0, -5.0]); // origine position for cubeQ
  const [cubeR1, setCubeR1] = useState([9, 1.6, -5.0]); // origine position for cubeR
  const [cubeB1, setCubeB1] = useState([9, 5.0, -3.0]); // origine position for cubeB



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
      const [x, , z] = cubeM;
      setCubeM([x, (y / aspect), z]);
      setCubeM([0, 3.5, 0]);
      setCount(count + 1);

    }
    ,
    { pointerEvents: true }
  );

  // Drag and drop logic of Cuboid N
  const bindCuboidN = useDrag(
    ({ offset: [z] }) => {

      const [x, y,] = cubeN;
      setCubeN([x, y, z / aspect]);
      setCubeN([0, 1.5, -2.0]);
      setCount(count + 1);

    }
    ,
    { pointerEvents: true }
  );

  // Drag and drop logic of Cuboid L
  const bindCuboidL = useDrag(
    ({ offset: [x] }) => {

      const [, y, z] = cubeL;
      setCubeL([x / aspect, y, z]);
      setCubeL([-2.0, 1.5, 0]);
      setCount(count + 1);


    }
    ,
    { pointerEvents: true }
  );

  // Drag and drop logic of Cuboid Q
  const bindCuboidQ = useDrag(
    ({ offset: [z, y] }) => {

      const [x, ,] = cubeQ;
      setCubeQ([x, y / aspect, z / aspect]);
      setCubeQ([0, 3.5, -2.0]);
      setCount(count + 1);

    }
    ,
    { pointerEvents: true }
  );

  // Drag and drop logic of Cuboid P
  const bindCuboidP = useDrag(
    ({ offset: [x, y] }) => {

      const [, , z] = cubeP;
      setCubeP([x / aspect, y / aspect, z]);
      setCubeP([-2.0, 3.5, 0]);
      setCount(count + 1);


    }
    ,
    { pointerEvents: true }
  );

  // Drag and drop logic of Cuboid R
  const bindCuboidR = useDrag(
    ({ offset: [x, z] }) => {

      const [, , y] = cubeR;
      setCubeR([x / aspect, y, z / aspect]);
      setCubeR([-2.0, 1.5, -2.0]);
      setCount(count + 1);

    }
    ,
    { pointerEvents: true }
  );

  // Drag and drop logic of Cube B
  const bindCubeB = useDrag(
    ({ offset: [x, y, z] }) => {
      const [, ,] = cubeB;
      setCubeB([x / aspect, y / aspect, z / aspect]);
      setCubeB([-2.0, 3.5, - 2.0]);
      setCount(count + 1);

    }
    ,
    { pointerEvents: true }
  );

  return (
    <>

      {/* Camera perspective */}

      <PerspectiveCamera makeDefault position={[0, 2, firstInput === 3 ? 17 : 15]}>
        <OrbitControls
          ref={orbitControlsRef}
          minPolarAngle={angleToRadians(50)}
          maxPolarAngle={angleToRadians(85)}
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
            position={[cubeA[0], cubeA[1] - 1.4, cubeA[2] + 1.6]}
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
            position={[cubeA[0] + 1.6, cubeA[1], cubeA[2] + 1.5]}
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
      <group>

        <mesh
          castShadow
          position={cubeL}
          onPointerOver={(e) => {

            setIsMoving(true);
          }}
          onPointerOut={(e) => {

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
        </mesh>

        <mesh>
          {/* top side notation */}
          <Text
            position={[cubeL[0], cubeL[1] - 1.4, cubeL[2] + 1.6]}
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
      <group >
        <mesh
          castShadow
          position={cubeM}
          onPointerOver={(e) => {
            setIsMoving(true);
          }}
          onPointerOut={(e) => {
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
      <group>
        <mesh
          castShadow
          position={cubeN}
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
      <group>
        <mesh
          castShadow
          position={cubeP}
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
      <group>
        <mesh
          castShadow
          position={cubeQ}
          onPointerOver={(e) => {

            setIsMoving(true);
          }}
          onPointerOut={(e) => {

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
      <group >
        <mesh
          castShadow
          position={cubeR}
          onPointerOver={(e) => {
            setIsMoving(true);
          }}
          onPointerOut={(e) => {
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
            position={[cubeR[0] - 0.6, cubeR[1] + 1.5, cubeR[2]]}
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
            position={[cubeR[0] - 0.6, cubeR[1] + 0.1, cubeR[2] + 0.5]}
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
      <group>
        <mesh
          castShadow
          position={cubeB}
          onPointerOver={(e) => {
            setIsMoving(true);
          }}
          onPointerOut={(e) => {
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


      {/* Edges*/}
      {/* Line bottom  */}
      <Line start={[-7.5, 0, + 1.8]} end={[-3.5, 0, + 1.8]}></Line>

      {/* Right side Line */}
      <Line start={[-3.5, 0, 2.1]} end={[-3.5, 0, 1.5]}></Line>

      {/* Left side Line */}
      <Line start={[-7.5, 0, 2.1]} end={[-7.5, 0, 1.5]}></Line>

      {/* line Text  */}
      <Text
        position={[-5.5, 0.01, 2.2]}
        rotation={[-angleToRadians(90), 0, 0]}
        scale={[3, 3, 3]}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        (a+b)
      </Text>


      {/******************************************************************************/}

      {/* Vertical line left  */}
      <Line start={[-7.5, 0, 1.8]} end={[-7.5, 4, + 1.8]}></Line>

      {/* Top side Line */}
      <Line start={[-7.8, 4, 1.8]} end={[-7.2, 4, 1.8]}></Line>

      {/* bottom side Line */}
      <Line start={[-7.8, 0, 1.8]} end={[-7.2, 0, 1.8]}></Line>

      {/* line Text  */}
      <Text
        position={[-7.9, 2.3, 1.8]}
        // rotation={[0, 0, 0]}
        scale={[3, 3, 3]}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        (a+b)
      </Text>

      {/******************************************************************************/}

      {/* Horizontal line left  */}
      <Line start={[-7.8, 0, 1.5]} end={[-7.8, 0, -2.5]}></Line>

      {/* front side Line */}
      <Line start={[-8.1, 0, 1.5]} end={[-7.5, 0, 1.5]}></Line>

      {/* back side Line */}
      <Line start={[-8.1, 0, -2.5]} end={[-7.5, 0, -2.5]}></Line>

      {/* line Text  */}
      <Text
        position={[-8.1, 0.01, -0.5]}
        rotation={[-angleToRadians(90), 0, -angleToRadians(90)]}
        scale={[3, 3, 3]}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        (a+b)
      </Text>

      {/* cube A1 geometry */}
      <group >
        <mesh
          castShadow
          position={cubeA1}
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
            position={[cubeA1[0], cubeA1[1] - 1.4, cubeA1[2] + 1.6]}
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
            position={[cubeA1[0] + 1.6, cubeA1[1], cubeA1[2] + 1.5]}
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

      {/* cuboid L1 geometry */}
      <group >

        <mesh
          castShadow
          position={cubeL1}
          onPointerOver={(e) => {

            setIsMoving(true);
          }}
          onPointerOut={(e) => {

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
        </mesh>

        <mesh>
          {/* top side notation */}
          <Text
            position={[cubeL1[0], cubeL1[1] - 1.4, cubeL1[2] + 1.6]}
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
            position={[cubeL1[0] - 0.6, cubeL1[1], cubeL1[2] + 1.5]}
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
            position={[cubeL1[0] - 0.6, cubeL1[1] + 1.6, cubeL1[2]]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            a
          </Text>
        </mesh>
      </group>

      {/* cuboid M1 geometry */}
      <group>
        <mesh
          castShadow
          position={cubeM1}
          onPointerOver={(e) => {
            setIsMoving(true);
          }}
          onPointerOut={(e) => {
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
            position={[cubeM1[0] + 1.6, cubeM1[1] + 0.5, cubeM1[2]]}
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
            position={[cubeM1[0], cubeM1[1] + 0.6, cubeM1[2] + 1.5]}
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
            position={[cubeM1[0] + 1.5, cubeM1[1], cubeM1[2] + 1.6]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            b
          </Text>
        </mesh>
      </group>

      {/* cuboid N1 geometry */}
      <group>
        <mesh
          castShadow
          position={cubeN1}
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
            position={[cubeN1[0], cubeN1[1] + 1.6, cubeN1[2] + 0.5]}
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
            position={[cubeN1[0] - 1.6, cubeN1[1], cubeN1[2] + 0.5]}
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
            position={[cubeN1[0] - 1.6, cubeN1[1] + 1.6, cubeN1[2]]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            b
          </Text>
        </mesh>
      </group>

      {/* cuboid P1 geometry */}
      <group>
        <mesh
          castShadow
          position={cubeP1}
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
            position={[cubeP1[0], cubeP1[1] + 0.6, cubeP1[2] + 1.5]}
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
            position={[cubeP1[0] - 0.6, cubeP1[1], cubeP1[2] + 1.5]}
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
            position={[cubeP1[0] - 0.6, cubeP1[1] + 0.6, cubeP1[2] + 0.1]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            a
          </Text>
        </mesh>
      </group>

      {/* Cuboid Q1 geometry */}
      <group>
        <mesh
          castShadow
          position={cubeQ1}
          onPointerOver={(e) => {

            setIsMoving(true);
          }}
          onPointerOut={(e) => {

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

        </mesh>

        <mesh>
          {/* top side notation */}
          <Text
            position={[cubeQ1[0], cubeQ1[1] + 0.6, cubeQ1[2] + 0.6]}
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
            position={[cubeQ1[0] + 1.6, cubeQ1[1], cubeQ1[2] + 0.5]}
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
            position={[cubeQ1[0] + 1.6, cubeQ1[1] + 0.6, cubeQ1[2] + 0.1]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            b
          </Text>
        </mesh>
      </group>

      {/* Cuboid R1 geometry */}
      <group>
        <mesh
          castShadow
          position={cubeR1}
          onPointerOver={(e) => {
            setIsMoving(true);
          }}
          onPointerOut={(e) => {
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

        </mesh>

        <mesh>
          {/* top side notation */}
          <Text
            position={[cubeR1[0], cubeR1[1] + 1.6, cubeR1[2] + 0.5]}
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
            position={[cubeR1[0] - 0.6, cubeR1[1] + 1.5, cubeR1[2]]}
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
            position={[cubeR1[0] - 0.6, cubeR1[1] + 0.1, cubeR1[2] + 0.5]}
            scale={[3, 3, 3]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            a
          </Text>
        </mesh>
      </group>

      {/* Cube B1 geometry*/}
      <group>
        <mesh
          castShadow
          position={cubeB1}
          onPointerOver={(e) => {
            setIsMoving(true);
          }}
          onPointerOut={(e) => {
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
            position={[cubeB1[0], cubeB1[1] + 0.6, cubeB1[2] + 0.5]}
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
            position={[cubeB1[0] + 0.57, cubeB1[1] + 0.5, cubeB1[2]]}
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
            position={[cubeB1[0] + 0.57, cubeB1[1], cubeB1[2] + 0.5]}
            scale={[2, 2, 2]}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            b
          </Text>
        </mesh>
      </group>

 {/* LHS Text  */}
 <Text
        position={[-5.5, 0.5, 3.0]}
        //rotation={[-angleToRadians(90), 0, -angleToRadians(90)]}
        scale={[4.5, 4.5, 4.5]}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        LHS
      </Text>

      {/* RHS Text  */}
 <Text
        position={[5, 0.5, 3.0]}
        //rotation={[-angleToRadians(90), 0, -angleToRadians(90)]}
        scale={[4.5, 4.5, 4.5]}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        RHS
      </Text>

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