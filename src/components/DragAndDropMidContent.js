import React from 'react'
import { useState } from 'react'
import { Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { Canvas } from 'react-three-fiber'
import FinalCube from './FinalCube'
import BackNextBar from './MajorComponents/BackNextBar'

const DragAndDropMidContent = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);

    const onNext = () =>{
        navigate("/letusverify/draganddrop")
    }
    const submitoperation = () =>{
        navigate("/letusverify/fbxdemo")
    }

    const pull_data = (data) => {
        setCount(data);
    }
  return (
    <div style={{ height: "100%" }}>
            <div style={{ height: "90%", width: '100%' }}>
                <Canvas shadows camera={{ position: [-3, 2, 5], fov: 40 }} >
                    <Suspense fallback={null}>
                        <FinalCube func={pull_data}  />
                    </Suspense>
                </Canvas>
            </div>
                      <BackNextBar
            setForward={onNext}
            clickSubmit={submitoperation}
            backvisible="visible"
            nextvisible="visible"
            submitvisible="visible"
            buttonname="show demo"
        />

        </div>
  )
}

export default DragAndDropMidContent