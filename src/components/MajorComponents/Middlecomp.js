import React, { useState } from "react";
import workbench from "../../Img/workbench1.png";
import tools1 from "../../Img/tools1.png";
import Tools from "./Tools";
const Middlecomp = ({
  midheight,
  midcontent,
  toolvisible,
  toolimgsrc,
  toolname,
  toolnavigate,
}) => {
  const [flag, setFlag] = useState(false);

  const ToolStore = () => {
    setFlag(!flag);
  };

  return (
    <div className="" style={{ height: `${midheight}` }}>
      <img
        className="mt-5 ms-4"
        style={{
          width: "8%",
          height: "6%",
          position: "absolute",
        }}
        src={workbench}
        alt="Logo"
      />
      <div
        className="col-11 bg-light d-flex"
        style={{
          height: "95%",
          borderRadius: "20px",
          boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.40)",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          className="d-flex align-items-end"
          style={{ height: "100%", width: "7%" }}
        >
          <button
            className="bg-light"
            onClick={ToolStore}
            style={{
              border: "none",
              borderBottomLeftRadius: "20px",
              visibility: `${toolvisible}`,
            }}
          >
            <img
              className=""
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                maxHeight: "100%",
                maxWidth: "100%",
              }}
              src={tools1}
              alt="Logo"
            />
          </button>
        </div>
        <div style={{ height: "100%", width: "93%" }}>
          {flag ? (
            <Tools
              sources={toolimgsrc}
              names={toolname}
              navigateto={toolnavigate}
            />
          ) : (
            midcontent
          )}
        </div>
      </div>
    </div>
  );
};

export default Middlecomp;
