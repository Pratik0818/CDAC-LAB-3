import React from 'react'
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction"
import FbxDemoMidContent from './FbxDemoMidContent'
import Footercomp from './MajorComponents/Footercomp'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'

const FbxDemo = () => {
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
        midcontent={<FbxDemoMidContent />}
        toolvisible="hidden"
      
      />

      <Footercomp footheight="15%" instruction={Instru.Instruction_3()} />
    </div>
  )
}

export default FbxDemo