import React from 'react'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'
import ObservationMidContent from './ObservationMidContent'
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction"
import Footercomp from './MajorComponents/Footercomp';

const Observation = () => {
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
      midcontent={<ObservationMidContent />}
      toolvisible="hidden"
      
    />

    <Footercomp footheight="20%" instruction={Instru.Instruction_5()} />
  </div>
  )
}

export default Observation