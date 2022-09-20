import React from 'react'
import { useState } from 'react'
import { Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { Canvas } from 'react-three-fiber'
import Cubes from './Cubes'
import BackNextBar from './MajorComponents/BackNextBar'

const TwoCubesMidContent = () => {

    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const onNext = () =>{
       navigate("/letusverify/threecubes"); 

    }

    const pull_data = (data) => {
        setCount(data);
    }
    return (
        <div style={{ height: "100%" }}>
            <div style={{ height: "80%", width: '100%' }}>
                <Canvas shadows camera={{ position: [-3, 2, 5], fov: 40 }} >
                    <Suspense fallback={null}>
                        <Cubes func={pull_data} />
                    </Suspense>
                </Canvas>
            </div>
            <div className='d-flex' style={{ height: "10%" }}>
                <div className='my-1'><label style={{ fontSize: "1.2vw" }}>
                Volume of cube with side a 3 units =
                <input
                 // disabled={disabled && minusCount === secondValue ? false : true}
                  id="first"
                  type="number"
                  //onBlur={inputValues}
                  style={{ width: "20%" }}
                  required
                ></input> </label></div>
                <div className='my-1'> <label style={{ fontSize: "1.2vw" }}>
                Volume of cube with side b 1 units =
                <input
                 // disabled={disabled && minusCount === secondValue ? false : true}
                  id="first"
                  type="number"
                  //onBlur={inputValues}
                  style={{ width: "20%" }}
                  required
                ></input> </label></div>
               
            </div>
            <BackNextBar
            setForward={onNext}
            //clickSubmit={submitoperation}
            backvisible="visible"
            nextvisible="visible"
            submitvisible="hidden"
        />

        </div>


    )
}

export default TwoCubesMidContent