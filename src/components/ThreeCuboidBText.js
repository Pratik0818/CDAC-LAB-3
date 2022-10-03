import React from 'react'
import Footercomp from './MajorComponents/Footercomp'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'
import ThreeCuboidBTextMidContent from './ThreeCuboidBTextMidContent'
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction"
import { ToastContainer } from 'react-toastify'
import { useState } from 'react'

const ThreeCuboidBText = () => {
  let [changeInstruction, setChangeInstruction] = useState(Instru.Instruction_2());
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
      midheight="70%"
      midcontent={<ThreeCuboidBTextMidContent instruction={setChangeInstruction}/>}
      toolvisible="hidden"
     
    />

    <Footercomp footheight="20%" instruction={changeInstruction} />
    <ToastContainer/>
  </div>
  )
}

export default ThreeCuboidBText
