import React from "react";
import errorimg from "../../Img/errorimg.jpg";

const Errorpage = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <img
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          maxHeight: "100%"
        }}
        src={errorimg}
        alt="Logo"
      />
    </div>
  );
};

export default Errorpage;
