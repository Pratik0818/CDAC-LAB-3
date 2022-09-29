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

const ThreeCuboidsAMidContent = () => {

    let {firstStore } = useSelector((globalState) => globalState);
  
     //states...hooks
     const navigate = useNavigate();
     const [disabled, setDisabled] = useState(true);
     const [disabled1, setDisabled1] = useState(true);

    // User input values
    let cubeA = parseInt(localStorage.getItem("val1"));
    let cubeB = parseInt(localStorage.getItem("val2"));
    const [firstInputValue, setFirstInputValue] = useState(0);
    const [secondInputValue, setSecondInputValue] = useState(0);

    useEffect(()=>{
        console.log("firststore ", firstStore.firstInputValue1);
        if(firstStore.firstInputValue1===3 && firstStore.secondInputValue1===1)
        {
            setFirstInputValue(3);
            setSecondInputValue(1);
        }
        else
        {
            setFirstInputValue(4);
            setSecondInputValue(2);
        }
    });

    const onNext = () =>{
        navigate("/letusverify/threecuboidBtext");
    }

     // first input
     const inputValues = (event) =>{
        let value = parseInt(event.target.value);
        if((value === 9) && (cubeA === 3))
        {
            setDisabled(!disabled);
            toast.success("Good! You were right",{
                position:"top-center",
                autoClose:500,
            });
        }
        else if((value === 32) && (cubeA === 4)){
            setDisabled(!disabled);
            toast.success("Good! You were right",{
                position:"top-center",
                autoClose:500,
            });
           
        }
        else{
             toast.error("Wrong value please enter again",{
                position:"top-center",
                autoClose:500,
            });
        }
    }

    //second input
    const inputValuesTwo = (event) =>{
        let value = parseInt(event.target.value);
        if((value === 27) && (cubeB === 1))
        {
            setDisabled1(!disabled1);
            toast.success("Good! You were right",{
                position:"top-center",
                autoClose:500,
            });
        }
        else if((value === 96) && (cubeB === 2)){
            setDisabled1(!disabled1);
            toast.success("Good! You were right",{
                position:"top-center",
                autoClose:500,
            });
           
        }
        else{
             toast.error("Wrong value please enter again",{
                position:"top-center",
                autoClose:500,
            });
        }
    }

    
    return (
        <div style={{ height: "100%" }}>
            <div style={{ height: "80%", width: '100%' }}>
                <Canvas shadows camera={{ position: [-3, 2, 5], fov: 40 }} >
                    <Suspense fallback={null}>
                        <CuboidsA  />
                    </Suspense>
                </Canvas>
            </div>
            <div className='d-flex fw-bold' style={{ height: "10%" }}>
                <div className='my-1 col-6 text-center'><label style={{ fontSize: "1.2vw" }}>
                    Volume of each cuboids a²b i.e {firstInputValue}² * {secondInputValue} =
                    <input
                         disabled={disabled ? false : true}
                        id="first"
                        type="number"
                        onBlur={inputValues}
                        style={{ width: "20%" }}
                        required
                    ></input> </label></div>
                <div className='my-1 col-6 text-center'> <label style={{ fontSize: "1.2vw" }}>
                Volume of three cuboids 3a²b i.e 3 * {firstInputValue}² * {secondInputValue} =
                    <input
                        disabled={disabled1  ? false : true}
                        id="first"
                        type="number"
                        onBlur={inputValuesTwo}
                        style={{ width: "20%" }}
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