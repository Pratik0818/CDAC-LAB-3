import React from 'react'
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction"

import CubeValuesMidContent from './CubeValuesMidContent'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp';
import Footercomp from './MajorComponents/Footercomp';
import { ToastContainer } from 'react-toastify';

const CubeValues = () => {
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
        midcontent={<CubeValuesMidContent />}
        toolvisible="hidden"
       
      />

      <Footercomp footheight="20%" instruction={Instru.default()} />
      <ToastContainer/>
    </div>
  )
}

export default CubeValues