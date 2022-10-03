import React, { useState } from 'react'
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction"
import Footercomp from './MajorComponents/Footercomp'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'
import ThreeCuboidsAMidContent from './ThreeCuboidsAMidContent';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';


const ThreeCuboidsA = () => {

  let [changeInstruction, setChangeInstruction] = useState(Instru.Instruction_2());

  useEffect(() => {
    toast.success("Three Cuboids of dimensions a*a*b is drawn successfully ", {
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
        midcontent={<ThreeCuboidsAMidContent instruction={setChangeInstruction}/>}
        toolvisible="hidden"
       
      />

      <Footercomp footheight="15%" instruction={changeInstruction} />
      <ToastContainer/>
    </div>
  )
}

export default ThreeCuboidsA