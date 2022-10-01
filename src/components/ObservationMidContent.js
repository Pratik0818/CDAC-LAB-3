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
        navigate("/letusverify/observation");
    }

    return (
        <div style={{ height: "100%" }}>
            <div className='d-flex' style={{ height: "80%", width: '100%' }}>
                <div className='col-6'>
                    <Canvas shadows camera={{ position: [-3, 2, 5], fov: 40 }} >
                        <Suspense fallback={null}>
                            <FinalCube func={pull_data} />
                        </Suspense>
                    </Canvas></div>
                <div className='col-6'>
                    <Canvas shadows camera={{ position: [-3, 2, 5], fov: 40 }} >
                        <Suspense fallback={null}>
                            <FinalCube func={pull_data} />
                        </Suspense>
                    </Canvas></div>
            </div>
            <div style={{ height: "10%", width: '100%' }}>2</div>
            <BackNextBar
                setForward={onNext}
                backvisible="visible"
                nextvisible={count === 7 ? "visible" : "hidden"}
                submitvisible="hidden"

            />

        </div>
    )
}

export default ObservationMidContent
