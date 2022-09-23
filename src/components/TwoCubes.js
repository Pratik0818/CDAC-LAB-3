import React from 'react'
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction"
import Footercomp from './MajorComponents/Footercomp'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'
import TwoCubesMidContent from './TwoCubesMidContent'
import { toast } from 'react-toastify';

const TwoCubes = () => {

  // User input values
  let cubeA = parseInt(localStorage.getItem("val1"));
  let cubeB = parseInt(localStorage.getItem("val2"));
  toast.success(`cube of side a=${cubeA} and cube of side b=${cubeB} is drawn successfully `,{
    position: "top-center",
    autoClose: 3000,
  })
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
        midcontent={<TwoCubesMidContent />}
        toolvisible="hidden"
       
      />

      <Footercomp footheight="15%" instruction={Instru.Instruction_1()} />
    </div>
  )
}

export default TwoCubes