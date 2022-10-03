import React from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "./MajorComponents/BackNextBar";
import cuboidswidthB from "../Img/Shapes/cuboidswidthB.png";
import { toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";
import * as Instru from "./MajorComponents/Instruction"

const ThreeCuboidATextMidContent = ({instruction}) => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [disabled1, setDisabled1] = useState(true);
  const [disabled2, setDisabled2] = useState(true);
  const [disabled3, setDisabled3] = useState(true);
  const [disabled4, setDisabled4] = useState(true);

  useEffect (()=>{
    if(!disabled && !disabled1 && !disabled2 && !disabled3 && !disabled4)
    {
      instruction(Instru.Instruction_4());
    }
  })

  const onNext = (e) => {
    navigate("/letusverify/threecuboidsA");
  };

  const firstInput = (e) => {
    let value = e.target.value;
    if (value === "a") {
      setDisabled(!disabled);
      toast.success("Good! You were right", {
        position: "top-center",
        autoClose: 500,
      });
    }
    else{
      toast.error("Wrong input", {
        position: "top-center",
        autoClose: 500,
      });
    }
  };
  const secondInput = (e) => {
    let value = e.target.value;
    if (value === "b") {
      setDisabled1(!disabled1);
      toast.success("Good! You were right", {
        position: "top-center",
        autoClose: 500,
      });
    }
    else{
      toast.error("Wrong input", {
        position: "top-center",
        autoClose: 500,
      });
    }
  };
  const thirdInput = (e) => {
    let value = e.target.value;
    if (value == 3) {
      setDisabled2(!disabled2);
      toast.success("Good! You were right", {
        position: "top-center",
        autoClose: 500,
      });
    }
    else{
      toast.error("Wrong input", {
        position: "top-center",
        autoClose: 500,
      });
    }
  };
  const forthInput = (e) => {
    let value = e.target.value;
    if (value === "a") {
      setDisabled3(!disabled3);
      toast.success("Good! You were right", {
        position: "top-center",
        autoClose: 500,
      });
    }
    else{
      toast.error("Wrong input", {
        position: "top-center",
        autoClose: 500,
      });
    }
  };
  const fifthInput = (e) => {
    let value = e.target.value;
    if (value === "b") {
      setDisabled4(!disabled4);
      toast.success("Good! You were right", {
        position: "top-center",
        autoClose: 500,
      });
    }
    else{
      toast.error("Wrong input", {
        position: "top-center",
        autoClose: 500,
      });
    }
  };
 

  return (
    <div style={{ height: "100%" }}>
      <div style={{ height: "90%" }}>
        <div className="d-flex" style={{ height: "60%" }}>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <img
              className=""
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                maxHeight: "80%",
                maxWidth: "80%",
              }}
              src={cuboidswidthB}
              alt="img"
            />
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <img
              className=""
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                maxHeight: "80%",
                maxWidth: "80%",
              }}
              src={cuboidswidthB}
              alt="img"
            />
          </div>
          <div className="col-4 d-flex justify-content-center align-items-center">
            <img
              className=""
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                maxHeight: "80%",
                maxWidth: "80%",
              }}
              src={cuboidswidthB}
              alt="img"
            />
          </div>
        </div>
        <div className="text-center" style={{ height: "40%" }}>
          <div>Three cuboids of dimensions a*b*a is drawn successfully.</div>
          <div>Cuboids in figure having width = b, length = a, height = a </div>
          <div>Volume of cuboid = length * width * height</div>
          <div>
            Volume of each cuboid = a * b * a =
            <input
            disabled={disabled ? false : true}
              type="text"
              onChange={firstInput}
              style={{ width: "4%", height: "4%" }}
            />
            ² 
            * <input
             disabled={(!disabled && disabled1) ? false : true}
              type="text"
              onChange={secondInput}
              style={{ width: "4%", height: "4%" }}
            />
          </div>
        
          <div className="my-1">
            Volume of three cuboids = a²b + a²b + a²b =
            <input
             disabled={(!disabled && !disabled1 && disabled2) ? false : true}
              type="number"
              onChange={thirdInput}
              style={{ width: "4%", height: "4%" }}
            /> 
            * <input
            disabled={(!disabled && !disabled1 && !disabled2 && disabled3) ? false : true}
              type="text"
              onChange={forthInput}
              style={{ width: "4%", height: "4%" }}
            />
            ²
            * <input
              disabled={(!disabled && !disabled1 && !disabled2 && !disabled3 && disabled4) ? false : true}
              type="text"
              onChange={fifthInput}
              style={{ width: "4%", height: "4%" }}
            />
          </div>
        </div>
      </div>
      <BackNextBar
        setForward={onNext}
        backvisible="visible"
        nextvisible={(!disabled && !disabled1 && !disabled2 && !disabled3 && !disabled4) ? "visible" : "hidden"}
        submitvisible="hidden"
      />
    </div>
  );
};

export default ThreeCuboidATextMidContent;
