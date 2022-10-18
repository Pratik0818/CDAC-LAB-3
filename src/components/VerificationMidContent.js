import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "./MajorComponents/BackNextBar";
import * as Instru from "./MajorComponents/Instruction";



const VerificationMidContent = () => {
  const navigate = useNavigate();

  const submitoperation = () => {
    navigate("/letusverify");
    localStorage.clear();
  };

 

  const [value, setValue] = useState(0);
  const [secondvalue, setSecondvalue] = useState(0);
  let res0 =  parseInt(value) ;
  let res1 =  parseInt(secondvalue) ;
  let res2 = res0 + res1
  let res3 = res2 * res2 * res2;
  let res4 = value * value * value;
  let res5 = secondvalue * secondvalue * secondvalue;
  let res6 = 3 * value * value * secondvalue;
  let res7 = 3 * value * secondvalue * secondvalue;
  let res8 = res4 + res5 + res6 + res7;
 

  const inputValues = (event) => {
    if(event.target.value >=0)
    setValue(event.target.value);
    //console.log("This is valu: " + event.target.value);
  };
  const inputValuestwo = (event) => {
    if(event.target.value >=0)
    setSecondvalue(event.target.value);
    //console.log("This is valu2: " + event.target.value);
  };


  return (
    <div style={{ height: "100%" }}>
      <div style={{ height: "90%" }}>
        <div className="" style={{ height: "15%" }}>
          <div
            className=" fst-italic shadow rounded-pill fw-bolder text-danger d-flex align-items-center justify-content-center"
            style={{ fontSize: "1.2vw" }}
          >
            VERIFICATION
          </div>
        </div>
        <div className="" style={{ height: "15%" }}>
          <form className="">
            <div className=" d-flex  ">
              <div className="col-6  d-flex justify-content-center">
                <label className="fs-5 fw-bold">
                  Enter a value for side "a" :
                </label>
                <input
                  className="form-control ms-3 "
                  min="0"
                  type="number"
                  value={value}
                  onChange={inputValues}
                  style={{ width: "20%" }}
                  required
                />
              </div>

              <div className="col-6  d-flex justify-content-center">
                <label className="fs-5 fw-bold">
                  Enter a value for side "b" :
                </label>

                <input
                  className="form-control ms-3"
                  type="number"
                  min="0"
                  value={secondvalue}
                  onChange={inputValuestwo}
                  style={{ width: "20%" }}
                  required
                />
              </div>

              {/* <input
              className="btn btn-danger col-2"
              type="submit"
              value="Draw"
            /> */}
            </div>
          </form>
        </div>
        <div
          className=" d-flex flex-column  fw-bolder shadow  fs-6  "
          style={{ height: "60%" }}
        >
          
          <div className=" d-flex" style={{ height: "60%" }}>
            <div className="d-flex justify-content-center align-items-center col-6 ">
              <div className="d-flex">
                <div className="col-3 d-flex justify-content-end ">L.H.S</div>
                <div className="col-9">
                  <div>
                    = (a+b)<sup>3</sup>
                  </div>
                  <div>
                    = ({value} + {secondvalue})<sup>3</sup>
                  </div>
                  <div>= {res2}<sup>3</sup> </div>
                  <div>= {res3}</div>
                </div>
              </div>
            </div>
            <div className="d-flex  justify-content-center align-items-center col-6  my-3">
              <div className=" d-flex col-5" style={{ height: "100%" , width:'50%'}}>
                <div
                  className="col-2  d-flex justify-content-end"
                  style={{ height: "100%" }}
                >
                  R.H.S
                </div>
                <div className=" col-10 ">
                  <div>
                 = a<sup>3</sup>+ b<sup>3</sup>+ 3 * a<sup>2</sup> * b + 3 * a * b<sup>2</sup> 
                  </div>
                  <div className="">
                    = {value}<sup>3</sup> + {secondvalue}<sup>3</sup> + 3 * {value} 
                    <sup>2</sup> * {secondvalue} + 3 * {value} * {secondvalue}<sup>2</sup>  
                  </div>
                  <div>
                    ={res4} + {res5} + {res6} + {res7}
                  </div>
                  <div>
                    ={res8}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "20%" }}
          >
           LHS=RHS
          </div>
          <div
            className="d-flex text-success justify-content-center align-items-center"
            style={{ height: "20%" }}
          >
           Therefore, (a+b)³ = a³ + b³ + 3 * a² * b + 3 * a * b²
          </div>
        </div>
      </div>

      <BackNextBar
        
        clickSubmit={submitoperation}
        backvisible="visible"
        nextvisible="hidden"
        submitvisible="visible"
        buttonname="Restart"
      />
    </div>
  );
};

export default VerificationMidContent;