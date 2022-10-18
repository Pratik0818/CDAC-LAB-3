import React from 'react'
import { useState } from 'react'
import { Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { Canvas } from 'react-three-fiber'
import FinalCube from './FinalCube'
import BackNextBar from './MajorComponents/BackNextBar'


const ObservationMidContent = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);

    const pull_data = (data) => {
        setCount(data);
    }

    const onNext = () => {
        navigate("/letusverify/verification");
    }

    return (
        <div style={{ height: "100%" }}>
            <div className='d-flex' style={{ height: "80%", width: '100%' }}>
               
                    <Canvas shadows camera={{ position: [-3, 2, 5], fov: 40 }} >
                        <Suspense fallback={null}>
                            <FinalCube func={pull_data} />
                        </Suspense>
                    </Canvas>
                {/* <div className='col-6'>
                    <Canvas shadows camera={{ position: [-3, 2, 5], fov: 40 }} >
                        <Suspense fallback={null}>
                            <FinalCube func={pull_data} />
                        </Suspense>
                    </Canvas></div> */}
            </div>
            <div className='text-center ' style={{ height: "10%", width: '100%' }}>
            <label className='fw-bold'>What do you observe?</label><br/>
                <label>Hence, we can observe from figure that, by adding the volumes of all cubes and cuboids in the RHS, a new cube of side (a+b) is formed in the LHS.</label>
                <br/>
                <label>Therefore, LHS=RHS hence verified.</label>
            </div>
            <BackNextBar
                setForward={onNext}
                backvisible="visible"
                nextvisible="visible"
                submitvisible="hidden"

            />

        </div>
    )
}

export default ObservationMidContent
