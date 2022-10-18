import React, { useEffect } from 'react'
import { useState } from 'react'
import { Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Canvas } from 'react-three-fiber'
import { setButtonOff } from '../store/Store'
import DragAndDropCube from './DragAndDropCube'
import BackNextBar from './MajorComponents/BackNextBar'
import * as Instru from "./MajorComponents/Instruction"

const DragAndDropMidContent = ({ instruction }) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);
    const [height, setHeight] = useState("90%");
    let dispatch = useDispatch();
    let { firstStore } = useSelector((globalState) => globalState);

    useEffect(() => {
        if (count === 7) {
            setHeight("75%")
        }
        

        

    })

    const pull_data = (data) => {
        setCount(data);
        if (count === 0) {
            instruction(Instru.Instruction_6());
        }
        if (count === 1) {
            instruction(Instru.Instruction_7());
        }
        if (count === 2) {
            instruction(Instru.Instruction_8());
        }
        if (count === 3) {
            instruction(Instru.Instruction_9());
        }
        if (count === 4) {
            instruction(Instru.Instruction_10());
        }
        if (count === 5) {
            instruction(Instru.Instruction_11());
        }
        if (count === 6) {
            instruction(Instru.Instruction_12());
        }
        if (count === 7) {
            instruction(Instru.Instruction_4());
        }
        // if (firstStore.buttonOff==false) {
        //     instruction(Instru.Instruction_13());
        // }
    }

    const onNext = () => {
        navigate("/letusverify/observation");
    }
    const submitoperation = () => {

        dispatch(setButtonOff(false));
        navigate("/letusverify/fbxdemo");
    }

    return (
        <div style={{ height: "100%" }}>
            <div className='d-flex' style={{ height: height, width: '100%' }}>

                <Canvas shadows camera={{ position: [-3, 2, 5], fov: 40 }} >
                    <Suspense fallback={null}>
                        <DragAndDropCube func={pull_data} />
                    </Suspense>
                </Canvas>


            </div>
            {count === 7 && <div className='text-center' style={{ height: "15%", width: '100%' }}>
                <label>Here, cube is formed having length=width=height=(a+b)
                </label>
                <br />
                <label>So, Volume of cube = (a+b) * (a+b) * (a+b)</label>
                <br />
                <label className=''> = (a+b)³ Which is LHS </label>
            </div>}
            <BackNextBar
                setForward={onNext}
                clickSubmit={submitoperation}
                backvisible="visible"
                nextvisible={count === 7 ? "visible" : "hidden"}
                submitvisible={(firstStore.buttonOff) ? "visible" : "hidden"}
                buttonname="show demo"
            />

        </div>
    )
}

export default DragAndDropMidContent