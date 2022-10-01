import React from 'react'
import { useState } from 'react'
import { Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { Canvas } from 'react-three-fiber'
import DragAndDropCube from './DragAndDropCube'
import BackNextBar from './MajorComponents/BackNextBar'
import * as Instru from "./MajorComponents/Instruction"

const DragAndDropMidContent = ({instruction}) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);

    const pull_data = (data) => {
        setCount(data); 
        if(count === 0)
        {
            instruction(Instru.Instruction_6());
        }
        if(count === 1)
        {
            instruction(Instru.Instruction_7());
        }
        if(count === 2)
        {
            instruction(Instru.Instruction_8());
        }
        if(count === 3)
        {
            instruction(Instru.Instruction_9());
        }
        if(count === 4)
        {
            instruction(Instru.Instruction_10());
        }
        if(count === 5)
        {
            instruction(Instru.Instruction_11());
        }
        if(count === 6)
        {
            instruction(Instru.Instruction_12());
        }
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
            <div style={{ height: "80%", width: '100%' }}>
                <Canvas shadows camera={{ position: [-3, 2, 5], fov: 40 }} >
                    <Suspense fallback={null}>
                        <DragAndDropCube func={pull_data}/>
                    </Suspense>
                </Canvas>
            </div>
           <div style={{ height: "10%", width: '100%' }}>2</div>
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