import React from 'react'
import homeimage from "../../Img/backg.jpg"
import Headcomp from './Headcomp'
import Startact from './Startact'

const Letusverify = () => {
  return (
    <div
    className=""
    style={{
      height: "100vh",
      backgroundImage: "url("+homeimage+")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <Headcomp />
    <div className="d-flex justify-content-center align-items-center" style={{ height: "90%" }}>
      <div
        className="col-12 col-md-9 border border-light border-2"
        style={{
          height: "75vh",
          background: "rgba(255, 255, 255, .45)",
          border: "3px solid rgba(255, 255, 255, .5)",
          backdropFilter: "blur(5px)",
          borderRadius: "20px",
        }}
      >
        <Startact />
      </div>
    </div>
  </div>
  )
}

export default Letusverify