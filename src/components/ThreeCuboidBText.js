import React from 'react'
import Footercomp from './MajorComponents/Footercomp'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'
import ThreeCuboidBTextMidContent from './ThreeCuboidBTextMidContent'
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction"

const ThreeCuboidBText = () => {
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
      midcontent={<ThreeCuboidBTextMidContent />}
      toolvisible="hidden"
     
    />

    <Footercomp footheight="20%" instruction={Instru.default()} />
  </div>
  )
}

export default ThreeCuboidBText
