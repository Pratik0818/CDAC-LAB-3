import { Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BackNextBar from './MajorComponents/BackNextBar';

const CubeValuesMidContent = () => {

    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const [secondvalue, setSecondvalue] = useState("");

    const inputValues = (event) => {
        setValue(parseInt(event.target.value));
        localStorage.setItem("val1", event.target.value);
    };
   
    const inputValuestwo = (event) => {
        setSecondvalue(parseInt(event.target.value));
        localStorage.setItem("val2", event.target.value);
    };

    const submitoperation = (e) => {
        e.preventDefault();
        if ((value === 3) && (secondvalue === 1)) {
            navigate("/letusverify/twocubes");
        } else if (value === 4 && secondvalue === 2) {
            navigate("/letusverify/twocubes");
        } else {
            toast.error("Either (a=3 and b=1) or (a=4 and b=2)", {
                position: "top-center",
                autoClose: 3000,
            });
        }
    };
    return (
        <div className="" style={{ height: "100%" }}>
            <div style={{ height: "90%" }}>
                <form onSubmit={submitoperation} style={{ height: "90%" }}>
                    <div
                        className="col-11 border rounded-pill shadow-lg "
                        style={{ height: "100%" }}
                    >
                        <div
                            className=" d-flex justify-content-center align-items-center"
                            style={{ height: "20%" }}
                        >
                            <div
                                className="fw-bold fst-italic text-primary "
                                style={{ fontSize: "1.3vw" }}
                            >
                                Enter Values
                            </div>
                        </div>

                        <div className="" style={{ height: "80%" }}>
                            <div
                                className=" d-flex justify-content-center align-items-center"
                                style={{ height: "30%" }}
                            >
                                <label
                                    className="col-6 fw-normal  d-flex justify-content-end align-items-center"
                                    style={{ height: "100%", fontSize: "1.2vw" }}
                                >
                                    Enter the value of side a for cube A (Range: 3 to
                                    4)
                                </label>
                                <div
                                    className="col-6  d-flex align-items-center"
                                    style={{ height: "100%" }}
                                >
                                    <input
                                        min="3"
                                        max="4"
                                        className=" form-control  ms-5 "
                                        type="number"
                                        value={value}
                                        onChange={inputValues}
                                        style={{ width: "30%", height: "50%" }}
                                        required
                                    />
                                </div>
                            </div>

                            <div
                                className=" d-flex justify-content-center align-items-center"
                                style={{ height: "30%" }}
                            >
                                <label
                                    className="col-6 fw-normal  d-flex justify-content-end align-items-center"
                                    style={{ height: "100%", fontSize: "1.2vw" }}
                                >
                                    Enter the value of side b for cube B (Range: 1 to
                                    2)
                                </label>
                                <div
                                    className="col-6 d-flex align-items-center"
                                    style={{ height: "100%" }}
                                >
                                    <input
                                        min="1"
                                        max="2"
                                        className="form-control ms-5  "
                                        type="number"
                                        value={secondvalue}
                                        onChange={inputValuestwo}
                                        style={{ width: "30%", height: "50%" }}
                                        required
                                    />
                                </div>
                            </div>

                            <div
                                className=" d-flex justify-content-center align-items-center"
                                style={{ height: "40%" }}
                            >
                                <Button variant="contained" type="submit">
                                    Draw Cube
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <BackNextBar
                backvisible="visible"
                nextvisible="hidden"
                submitvisible="hidden"
            />
        </div>
    )
}

export default CubeValuesMidContent