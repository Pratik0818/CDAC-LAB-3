import React from 'react'
import { useNavigate } from 'react-router-dom';
import BackNextBar from './MajorComponents/BackNextBar'
import cuboidswidthA from "../Img/Shapes/cuboidswidthA.png"

const ThreeCuboidBTextMidContent = () => {

  const navigate = useNavigate();


  const onNext = (e) => {
    navigate("/letusverify/threecuboidsB");
  };

  return (
    <div style={{ height: "100%" }}>
      <div style={{ height: "90%" }}>
        <div className='d-flex' style={{ height: "70%" }}>
        <div className='col-4 d-flex justify-content-center align-items-center'>
        <img
          className=""
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            maxHeight: "80%",
            maxWidth: "80%",
          }}
          src={cuboidswidthA}
          alt="img"
        />
        </div>
        <div className='col-4 d-flex justify-content-center align-items-center'>
        <img
          className=""
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            maxHeight: "80%",
            maxWidth: "80%",
          }}
          src={cuboidswidthA}
          alt="img"
        />
        </div>
        <div className='col-4 d-flex justify-content-center align-items-center'>
        <img
          className=""
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            maxHeight: "80%",
            maxWidth: "80%",
          }}
          src={cuboidswidthA}
          alt="img"
        />
        </div>
        
        </div>
        <div className='text-center' style={{ height: "30%" }}>
          <div>Three cuboids of dimensions a*b*b is drawn successfully.</div>
          <div>Cuboids in fig having width = a, length = b, height = b   </div>
          <div>Volume of cuboid = length * width * height</div>
          <div>Volume of each cuboid  = ab² </div>
          <div>Volume of three cuboids  = ab² + ab² + ab² = 3ab²</div>

        </div>
      </div>
      <BackNextBar
        setForward={onNext}
        backvisible="visible"
        nextvisible="visible"
        submitvisible="hidden"
      />
    </div>
  )
}

export default ThreeCuboidBTextMidContent