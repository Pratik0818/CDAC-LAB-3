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
                <label>Here, we can observe from figure that, when we combine the RHS part it will form a cube of side (a+b) and volume = (a+b)³ which is LHS </label>
                <br/>
                <label>Therfore, LHS=RHS hence verified.</label>
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
