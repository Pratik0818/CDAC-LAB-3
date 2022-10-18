import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Canvas } from 'react-three-fiber'
import { toast } from 'react-toastify'
import CuboidsA from './CuboidsA'
import BackNextBar from './MajorComponents/BackNextBar'
import * as Instru from "./MajorComponents/Instruction"


const ThreeCuboidsAMidContent = ({ instruction }) => {

    let { firstStore } = useSelector((globalState) => globalState);

    //states...hooks
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);
    const [disabled1, setDisabled1] = useState(true);

    // User input values
    let cubeA = parseInt(localStorage.getItem("val1"));
    let cubeB = parseInt(localStorage.getItem("val2"));
    const [firstInputValue, setFirstInputValue] = useState(0);
    const [secondInputValue, setSecondInputValue] = useState(0);
    

    useEffect(() => {
        if (!disabled && !disabled1) {
            instruction(Instru.Instruction_4());
        }
    })

    useEffect(() => {
        //console.log("firststore ", firstStore.firstInputValue1);
        // if (firstStore.firstInputValue1 === 3 && firstStore.secondInputValue1 === 1) {
        //     setFirstInputValue(3);
        //     setSecondInputValue(1);
        // }
        if (cubeA === 3 && cubeB === 1) {
            setFirstInputValue(3);
            setSecondInputValue(1);
        }
        else {
            setFirstInputValue(4);
            setSecondInputValue(2);
        }
    });

    const onNext = () => {
        navigate("/letusverify/threecuboidBtext");
    }

    // regex
    const exp = /^9$/;
    const exp1 = /^32$/;
    // first input
    const inputValues = (event) => {
        let value = (event.target.value);
        if (cubeA === 3) {
            if ((exp.test(value))) {
                setDisabled(!disabled);
                toast.success("Good! You were right", {
                    position: "top-center",
                    autoClose: 900,
                });
            }
            else {
                toast.error("Wrong value please enter again", {
                    position: "top-center",
                    autoClose: 900,
                });
            }
        }

        if (cubeA === 4) {
            if (value.length == 2) {
                if ((exp1.test(value))) {
                    setDisabled(!disabled);
                    toast.success("Good! You were right", {
                        position: "top-center",
                        autoClose: 900,
                    });

                }
                else {
                    toast.error("Wrong value please enter again", {
                        position: "top-center",
                        autoClose: 900,
                    });
                }
            }

        }




    }
    // regex
    const exp2 = /^27$/;
    const exp3 = /^96$/;

    //second input
    const inputValuesTwo = (event) => {
        let value = (event.target.value);
        if (value.length == 2) {
            if ((exp2.test(value)) && (cubeB === 1)) {
                setDisabled1(!disabled1);
                toast.success("Good! You are right", {
                    position: "top-center",
                    autoClose: 900,
                });
            }
            else if ((exp3.test(value)) && (cubeB === 2)) {
                setDisabled1(!disabled1);
                toast.success("Good! You are right", {
                    position: "top-center",
                    autoClose: 900,
                });

            }
            else {
                toast.error("Wrong value please enter again", {
                    position: "top-center",
                    autoClose: 900,
                });
            }
        }

    }


    return (
        <div style={{ height: "100%" }}>
            <div style={{ height: "80%", width: '100%' }}>
                <Canvas shadows camera={{ position: [-3, 2, 5], fov: 40 }} >
                    <Suspense fallback={null}>
                        <CuboidsA />
                    </Suspense>
                </Canvas>
            </div>
            <div className='d-flex fw-bold' style={{ height: "10%" }}>
                <div className='my-1 col-6 text-center'><label style={{ fontSize: "1.2vw" }}>
                    Volume of each cuboid a²b i.e {firstInputValue}² * {secondInputValue} =
                    <input
                        disabled={disabled ? false : true}
                        type="email"
                        onChange={inputValues}
                        style={{ width: "20%" }}
                        maxLength={cubeA == 4 ? 2 : 1}
                        required
                    ></input> </label></div>
                <div className='my-1 col-6 text-center'> <label style={{ fontSize: "1.2vw" }}>
                    Volume of three cuboids 3a²b i.e 3 * {firstInputValue}² * {secondInputValue} =
                    <input
                        disabled={disabled1 ? false : true}
                        type="email"
                        onChange={inputValuesTwo}
                        style={{ width: "20%" }}
                        maxLength={2}
                        required
                    ></input> </label></div>

            </div>
            <BackNextBar
                setForward={onNext}
                backvisible="visible"
                nextvisible={(!disabled && !disabled1) ? "visible" : "hidden"}
                submitvisible="hidden"
            />

        </div>


    )
}

export default ThreeCuboidsAMidContent