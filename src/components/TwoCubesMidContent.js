import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Suspense } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Canvas } from 'react-three-fiber'
import { toast } from 'react-toastify'
import { setFirstInputValue1, setSecondInputValue1 } from '../store/Store'
import Cubes from './Cubes'
import BackNextBar from './MajorComponents/BackNextBar'
import * as Instru from "./MajorComponents/Instruction"

const TwoCubesMidContent = ({instruction}) => {

     // User input values
     let cubeA = parseInt(localStorage.getItem("val1"));
     let cubeB = parseInt(localStorage.getItem("val2"));

     //states...hooks
     const navigate = useNavigate();
     const [firstInputValue, setFirstInputValue] = useState(0);
     const [secondInputValue, setSecondInputValue] = useState(0);
     const [disabled, setDisabled] = useState(true);
     const [disabled1, setDisabled1] = useState(true);
     let dispatch = useDispatch();

     useEffect(()=>{
        if(!disabled && !disabled1)
        {
            instruction(Instru.Instruction_4());
        }
     })
   
    useEffect(()=>{
        if(cubeA===3 && cubeB===1)
        {
            setFirstInputValue(3);
            dispatch(setFirstInputValue1(firstInputValue));
            setSecondInputValue(1);
            dispatch(setSecondInputValue1(secondInputValue));
        }
        else
        {
            setFirstInputValue(4);
            setSecondInputValue(2);
        }
    });

    // first input
    const inputValues = (event) =>{
        let value = parseInt(event.target.value);
        if((value === 27) && (cubeA === 3))
        {
            setDisabled(!disabled);
            toast.success("Good! You were right",{
                position:"top-center",
                autoClose:500,
            });
        }
        else if((value === 64) && (cubeA === 4)){
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
        if((value === 1) && (cubeB === 1))
        {
            setDisabled1(!disabled1);
            toast.success("Good! You were right",{
                position:"top-center",
                autoClose:500,
            });
        }
        else if((value === 8) && (cubeB === 2)){
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

    const onNext = () => {
        navigate("/letusverify/threecuboidAtext");

    }

    
    return (
        <div style={{ height: "100%" }}>
            <div style={{ height: "80%", width: '100%' }}>
                <Canvas shadows camera={{ position: [-3, 2, 5], fov: 40 }} >
                    <Suspense fallback={null}>
                        <Cubes  />
                    </Suspense>
                </Canvas>
            </div>
            <div className='d-flex fw-bold' style={{ height: "10%" }}>
                <div className='my-1 col-6 text-center'><label >
                    Volume of cube with side a = {firstInputValue} i.e a³ =
                    <input
                         disabled={disabled ? false : true}
                        id="first"
                        type="number"
                        onBlur={inputValues}
                        style={{ width: "20%" }}
                        required
                    ></input> </label></div>
                <div className='my-1 col-6 text-center'> <label>
                    Volume of cube with side b = {secondInputValue} i.e b³ =
                    <input
                        disabled={disabled1  ? false : true}
                        id="first"
                        type="number"
                        onChange={inputValuesTwo}
                        style={{ width: "20%" }}
                        required
                    ></input> </label></div>

            </div>
            <BackNextBar
                setForward={onNext}
                //clickSubmit={submitoperation}
                backvisible="visible"
                nextvisible={(!disabled && !disabled1) ? "visible" : "hidden"}
                submitvisible="hidden"
            />
            
        </div>


    )
}

export default TwoCubesMidContent