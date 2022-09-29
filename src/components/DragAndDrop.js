import React from 'react'
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction"
import DragAndDropMidContent from './DragAndDropMidContent'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'
import Footercomp from './MajorComponents/Footercomp';
import { useState } from 'react';

const DragAndDrop = () => {

  const [changeinstruction, setChangeInstruction] = useState(Instru.Instruction_3());
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
        midcontent={<DragAndDropMidContent instruction={setChangeInstruction}/>}
        toolvisible="hidden"
       
      />

      <Footercomp footheight="15%" instruction={changeinstruction} />
    </div>
  )
}

export default DragAndDrop