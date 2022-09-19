import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Tools = ({ sources, names, navigateto }) => {

  const navigate=useNavigate();

  const toolclickredirect =()=>{
    navigate(navigateto);
  }

  return (
    <div className="d-flex align-items-center" style={{ height: "100%" }}>
      <motion.div
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        className="col-11 shadow-lg d-flex align-items-center justify-content-center "
        style={{
          height: "90%",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <div
          className="col-4 d-flex justify-content-center align-items-center flex-column "
          style={{ height: "50%" }}
        >
          <button
            className="d-flex bg-light justify-content-center align-items-center"
            style={{ height: "70%", border: "none" }}
            onClick={toolclickredirect}
          >
            <img
              className=""
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                maxHeight: "100%",
                maxWidth: "100%",
                cursor: "pointer",
              }}
              src={sources}
              alt="img"
            />
          </button>

          <div
            className="d-flex justify-content-center fs-5 text-success fw-bold"
            style={{ height: "30%" }}
          >
            {names}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Tools;
