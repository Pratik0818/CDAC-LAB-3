import React, { useEffect } from 'react'
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction"
import Footercomp from './MajorComponents/Footercomp'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'
import TwoCubesMidContent from './TwoCubesMidContent'
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';

const TwoCubes = () => {
 // User input values
    let cubeA = parseInt(localStorage.getItem("val1"));
    let cubeB = parseInt(localStorage.getItem("val2"));

    const [changeInstruction, setChangeInstruction] = useState(Instru.Instruction_2());
 
    useEffect(() => {
    toast.success("Cube A of side a and Cube B of side b is drawn successfully ", {
      position: "top-center",
      autoClose: 3000,
    })
  }, []);


  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Headcomp />

      <Middlecomp
        midheight="75%"
        midcontent={<TwoCubesMidContent instruction={setChangeInstruction}/>}
        toolvisible="hidden"

      />

      <Footercomp footheight="15%" instruction={changeInstruction} />
      <ToastContainer/>
    </div>
  )
}

export default TwoCubes