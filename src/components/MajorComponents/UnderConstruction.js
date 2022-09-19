import React from 'react'
import underconstruction from "../../Img/image.png"
const UnderConstruction = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
    <img
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        maxHeight: "100%",
        
      }}
      src={underconstruction}
      alt="Logo"
    />
  </div>
  )
}

export default UnderConstruction