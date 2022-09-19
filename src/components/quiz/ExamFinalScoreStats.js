import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import parse from "html-react-parser";
import {Modal} from 'react-bootstrap'
import { Navigate } from "react-router";
import { stepConnectorClasses } from "@mui/material";
import trophy from "../../Img/QuizImage/trophy.png"

class ExamFinalScoreStats extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        showModalExamScore: this.props.propsScore.showModalExamScore,
        score: this.props.propsScore.score,
        questions: this.props.propsScore.questions,
        noOfQuestion: this.props.propsScore.questions.length,
        noOfQuesList: this.props.propsScore.noOfQuesList,
        time: this.props.propsScore.time,
        redirect: false,
        totalMarks : 0,
        noOfCorrectAnswers: 0,
        noOfUnattempts: 0,
        noOfWrongAttempts: 0,
        noOfPartialAttempts: 0,
    };
  }

  componentDidMount() {
    // call api or anything
    this.getQuestionStatistics(this.state.noOfQuesList);
  }  

  renderRedirect = () => {
    this.props.propsScore.scoreUpdate(false);
    if (this.state.redirect) {
      return <Navigate to="/letusverify" />;
    }
  };

  getQuestionStatistics = (tempnoOfQuesList) => {
    this.getTotalMarks();
    this.getAttemptStatistics(tempnoOfQuesList)
  }

  getTotalMarks = () => {
    var maxMarks = 0;
    const listItems = this.state.questions.map((currQue) =>
        maxMarks = maxMarks + currQue.maxMarks
    );
    this.setState({totalMarks: maxMarks});
  }

//   getCount = () => {
//     switch (elementId) {
//         case "option-a":
//           this.updateBackColorParams(0);
//           break;
//         case "option-b":
//           this.updateBackColorParams(1);
//           break;
//         case "option-c":
//           this.updateBackColorParams(2);
//           break;
//         case "option-d":
//           this.updateBackColorParams(3);
//           break;
//         default:
//           break;
//       }
//   }

  getAttemptStatistics = (tempnoOfQuesList) => {

    var tempNoOfCorrectAnswers = 0;
    var tempNoOfUnattempts = 0;
    var tempNoOfWrongAttempts = 0;
    var tempNoOfPartialAttempts = 0;

    const listItems = tempnoOfQuesList.map((queList, index) =>
        queList === 2 ? tempNoOfCorrectAnswers=tempNoOfCorrectAnswers+1 :
        queList === 1 ? tempNoOfWrongAttempts=tempNoOfWrongAttempts+1 :
        queList === 0 ? tempNoOfPartialAttempts=tempNoOfPartialAttempts+1:
        queList === -1 ? tempNoOfUnattempts=tempNoOfUnattempts+1 : null
    );

    console.log(tempNoOfCorrectAnswers +" " +tempNoOfUnattempts+ " " + tempNoOfWrongAttempts + " " + tempNoOfPartialAttempts);

    this.setState({
        noOfCorrectAnswers: tempNoOfCorrectAnswers,
        noOfUnattempts: tempNoOfUnattempts,
        noOfWrongAttempts: tempNoOfWrongAttempts,
        noOfPartialAttempts: tempNoOfPartialAttempts,
    });
  } 

  handleClose = () => {
    this.setState({ showModalQuitExam: false, redirect: true});
  };

  render() {
    const {
        showModalExamScore,
        time,
        score,
        redirect,
        totalMarks,
        noOfQuestion,
        noOfCorrectAnswers,
        noOfUnattempts,
        noOfWrongAttempts,
        noOfPartialAttempts,
      } = this.state;    

    return (<Fragment>

          {redirect && this.renderRedirect()}

          <Modal size="md"
            show={showModalExamScore}
            onHide={() => {
                this.handleClose();
            }}
            centered
          >
          <Modal.Header closeButton>
            <Modal.Title>Result</Modal.Title>
          </Modal.Header>
          <Modal.Body centered>

            <h5 style={{textAlign:"center"}}> You Scored : {score} out of {totalMarks} </h5>

        <div style={{ justifyContent:"center", display: "block", textAlign:"center" }}>

            <img style={{width:"95px", justifyContent:"center"}} className="trophy-img"
                    src={trophy}
                    alt="cannot load img"
            />

            {score/totalMarks == 1 && <h5> Congratulations ... !!! </h5>}

            <table class="table" style={{width:"80%", marginLeft:"auto", marginRight:"auto", textAlign:"left"}}>
            <thead class="table-dark" style={{textAlign:"center"}}>
                <tr> <th colspan="3" scope="col"># Total no of Question : {noOfQuestion}</th> </tr>
            </thead>
            <tbody>
                <tr class="table-info">
                    <th scope="row">1</th>
                    <td>Correct Answers</td> <td>{noOfCorrectAnswers}</td>
                </tr>
                <tr class="table-danger">
                    <th scope="row">2</th>
                    <td>Wrong Answers</td> <td>{noOfWrongAttempts}</td>
                </tr>
                <tr class="table-warning">
                    <th scope="row">3</th>
                    <td>Partial Apptempts</td> <td>{noOfPartialAttempts}</td>
                </tr>                
                <tr class="table-light">
                    <th scope="row">4</th>
                    <td>Unattempted</td>
                    <td>{noOfUnattempts}</td>
                </tr>
                <tr class="table-light">
                    <th scope="row"></th>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="table-primary">
                    <th scope="row"></th>
                    <td>Time Taken</td>
                    <td>{time.minutes} minutes :{time.seconds} seconds</td>
                </tr>
            </tbody>
            </table>
        </div>

          </Modal.Body>
          <Modal.Footer style={{ justifyContent: "center" }}>
            <Button variant="contained" color="primary" size="small"
              onClick={() => {
                                this.handleClose(); 
                        }}    >   
              Continue
            </Button>
          </Modal.Footer>
        </Modal>
    </Fragment>);
}}

export default ExamFinalScoreStats;