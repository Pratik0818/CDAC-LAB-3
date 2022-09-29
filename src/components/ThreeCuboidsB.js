import React from 'react'
import Footercomp from './MajorComponents/Footercomp'
import Headcomp from './MajorComponents/Headcomp'
import Middlecomp from './MajorComponents/Middlecomp'
import ThreeCuboidsBMidContent from './ThreeCuboidsBMidContent'
import backgroundImg from "../Img/backg.jpg";
import * as Instru from "./MajorComponents/Instruction"
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const ThreeCuboidsB = () => {

  useEffect(() => {
    toast.success("Three Cuboids of dimensions a*b*b is drawn successfully ", {
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
        midcontent={<ThreeCuboidsBMidContent />}
        toolvisible="hidden"
       
      />

      <Footercomp footheight="15%" instruction={Instru.Instruction_2()} />
      <ToastContainer/>
    </div>
  )
}

export default ThreeCuboidsB