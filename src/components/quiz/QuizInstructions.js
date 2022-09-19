import { useState } from "react";
import backgroundImg from "../../Img/backg.jpg";
// import question from "../../assets/img/question.jpg";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import "../../styles/components/_quiz-instructions.css";

//import "../../../node_modules/materialize-css/dist/css/materialize.min.css"
//import "../../../node_modules/materialize-css/dist/js/materialize.min.js"

import "../../../node_modules/@mdi/font/css/materialdesignicons.min.css";
import Headcomp from "../MajorComponents/Headcomp";


const QuizInstructions = () => {
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();

  const openDialog = () => {
    setShowDialog(true);
  };
  const closeDialog = () => {
    setShowDialog(false);
  };

  const onAgree = () => {
    navigate("/letusverify/quiz");
  };

  return (
    <div
      className=""
      style={{
        height: "100vh",
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Headcomp />

      <div
        className=" d-flex justify-content-center align-items-center"
        style={{ height: "90%" }}
      >
        <div
          className="col-11 bg-light shadow-lg"
          style={{
            height: "94%",
            borderRadius: "20px",
          }}
        >
          <div
            className=" d-flex justify-content-center align-items-center flex-column"
            style={{ height: "100%" }}
          >
            <div className=" bg-warning col-6 d-flex justify-content-center align-items-center" style={{ height: "60%" }}>
              <ul>
                <li> </li>
                <li> </li>
                <li> </li>
              </ul>
            </div>
            <div
              className=" col-6 d-flex justify-content-around align-items-center"
              style={{ height: "10%" }}
            >
              <Button variant="contained" color="primary">
                <Link
                  className="text-light"
                  to="/letusverify/act1startpage"
                  style={{ textDecoration: "none" }}
                >
                  No take me back
                </Link>
              </Button>
              <Button variant="contained" color="primary" onClick={openDialog}>
                Okay, Let's do it !!
              </Button>
            </div>
          </div>

          <Dialog open={showDialog}>
            <DialogTitle>Instructions for quiz</DialogTitle>
            <DialogContent dividers>
              <DialogContentText>
                <p>Ensure you read this guide from start to finish.</p>
                <ul className="broswer-default" id="main-list">
                  <li>
                    The Quiz has a duration of 10 minutes and ends as soon as
                    your time is elapses.
                  </li>
                  <li>
                    After clicking on Button "OK LETS DO IT" quiz will start
                    alongwith time
                  </li>
                  <li>
                    <div>Every question has 4 options.</div>
                    {/* <img src={question} alt="Quiz Question"></img> */}
                  </li>
                  <li>
                    Select the option which best answers the question by cliking
                    (or selectig) it.
                  </li>
                  <li>
                    If the question is fill in the blanks type then it is
                    necessary to drag and drop the correct option in the blank
                    space .
                  </li>
                  <li>
                    {" "}
                    You will have 2 chances to select correct option.
                    <li>
                      If you dont know the answer you may skip the question and
                      review it again if time remains
                    </li>
                    <li>
                      If the question is attemted you cannot attemt it again.
                    </li>
                    <li>
                      The score and timing is displayed on top of the screen
                    </li>
                  </li>
                </ul>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" color="secondary" onClick={onAgree}>
                Agree
              </Button>
              <Button onClick={closeDialog}>Cancel</Button>
            </DialogActions>
          </Dialog>

        </div>
      </div>
    </div>
  );
};

export default QuizInstructions;
