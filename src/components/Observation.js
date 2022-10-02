import React from 'react'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction"
import Footercomp from './MajorComponents/Footercomp';
import ObservationMidContent from './ObservationMidContent';

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
          midheight="75%"
          midcontent={<ObservationMidContent />}
          toolvisible="hidden"
          
        />
    
        <Footercomp footheight="15%" instruction={Instru.Instruction_4()} />
      </div>
      )
}

export default Observation
