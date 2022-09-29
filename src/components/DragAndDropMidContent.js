import React from 'react'
import { useState } from 'react'
import { Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { Canvas } from 'react-three-fiber'
import FinalCube from './FinalCube'
import BackNextBar from './MajorComponents/BackNextBar'
import * as Instru from "./MajorComponents/Instruction"

const DragAndDropMidContent = ({instruction}) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);

    const pull_data = (data) => {
        setCount(data);
        if(count === 7)
        {
            instruction(Instru.Instruction_4());
        }
    }

    const onNext = () => {
        navigate("/letusverify/observation");
    }
    const submitoperation = () => {
        navigate("/letusverify/fbxdemo");
    }

    return (
        <div style={{ height: "100%" }}>
            <div style={{ height: "90%", width: '100%' }}>
                <Canvas shadows camera={{ position: [-3, 2, 5], fov: 40 }} >
                    <Suspense fallback={null}>
                        <FinalCube func={pull_data}/>
                    </Suspense>
                </Canvas>
            </div>
            <BackNextBar
                setForward={onNext}
                clickSubmit={submitoperation}
                backvisible="visible"
                nextvisible={count === 7 ? "visible" : "hidden"}
                submitvisible="visible"
                buttonname="show demo"
            />

        </div>
    )
}

export default DragAndDropMidContent