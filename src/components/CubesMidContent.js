import React, { useState } from 'react';
import {Canvas} from "@react-three/fiber";
import { Suspense } from "react";
import Cubes from './Cubes.js';
import BackNextBar from './MajorComponents/BackNextBar.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const CubesMidComponent = () => {

    const [count, setCount] = useState(0);
 
    const pull_data = (data) => {
        setCount(data);
      }
    
    const navigate = useNavigate();

    const submitoperation = () => {
        console.log("hello click");
    };
    
    const onNext = (e) => {
        if(count == 1)
        {
            navigate("/letusverify/input/cube1/cube2");
        }
        else
        {
            toast.error("You haven't drag cube B to its desired position.", {
                position: "top-center",
                autoClose: 2000,
            });
        }
    };

  return (
    <div className='col-12'  style={{ height: "100vh" }}>
        <div style={{ height: "90%" , width : '100%'}}>
            <Canvas shadows camera={{ position: [-3, 2, 5], fov: 40 }} >      
                <Suspense fallback={null}>
                    <Cubes func={pull_data}/>
                </Suspense>
            </Canvas>  
        </div>
        
        <BackNextBar
            setForward={onNext}
            clickSubmit={submitoperation}
            backvisible="visible"
            nextvisible="visible"
            submitvisible="hidden"
        />
    </div>
  )
}

export default CubesMidComponent