import React from "react";
import Instructionimg from "../../Img/Instruction.png";

const Footercomp = ({ footheight, instruction }) => {
  return (
    <div className="" style={{ height: `${footheight}` }}>
      <img
        className="mt-5 ms-4"
        style={{
          width: "8%",
          height: "6%",
          position: "absolute",
        }}
        src={Instructionimg}
        alt="Logo"
      />
      <div
        className="bg-light  col-11 d-flex justify-content-end"
        style={{
          height: "95%",
          borderRadius: "20px",
          boxShadow: "0px 7px 4px rgba(0, 0, 0, 0.25)",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="col-11 d-flex align-items-center fw-normal " style={{fontSize:"1.2vw"}}>
          {instruction}
        </div>
      </div>
    </div>
  );
};

export default Footercomp;
