import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import parse from "html-react-parser";
import {Modal} from 'react-bootstrap'

class QuestionExplanation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        showModalQueExp: this.props.propsExlanation.showModal,
        currentQuestion: this.props.propsExlanation.currentQuestion,
        currentQuestionIndex: this.props.propsExlanation.currentQuestionIndex,
        noOfAttemptList: this.props.propsExlanation.noOfAttemptList,
    };
  }
  //style={(this.state.changeBackColor[0]) ? {backgroundColor:"red"} : {backgroundColor:"rgba(75, 75, 177, 0.808)"}} 
  
  handleClose = () => {
    this.setState({ showModalQueExp: false });
    this.props.propsExlanation.ExplnationUpdate(false);
  };

  render() {

    const {
        currentQuestion,
        showModalQueExp,
        currentQuestionIndex,
        noOfAttemptList,
      } = this.state;    

    return (<Fragment>
        <Modal size="lg"
          show={showModalQueExp ? true : false}
          onHide={this.handleClose} centered>
        
        <Modal.Header closeButton>
          <Modal.Title>Explanation</Modal.Title>
         </Modal.Header>

        <Modal.Body>
          <p>{parse("" + currentQuestion.explanation)}</p>

          {currentQuestion.explanationHasImg ? (
              <img
                src={require(`../../Img/OptionImg/${currentQuestion.explanationImg}`)}
                alt="cannot load img"
              />
            ) : null}

            {noOfAttemptList[currentQuestionIndex] >= currentQuestion.noOfAttempts ? (
                <div className="DisplayExplanationMssg">
                    <p>You Reached Maximum Attempts !!</p>
                    <p>Please Attempt Next Question</p>
                </div>
                ) : (
                <div className="DisplayExplanationMssg">
                    <p>Please Try Again !! !!</p>
                </div>
            )}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="contained" color="primary"  size="small" onClick={this.handleClose}>
              Close    </Button>
          </Modal.Footer>
        </Modal>
        
    </Fragment>);
}}

export default QuestionExplanation;