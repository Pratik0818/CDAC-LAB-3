import React, { Fragment } from "react";
import "../../styles/components/_questionupdatestate.css";

class QuestionStatusUpdate extends React.Component {

  constructor(props) {
    super(props);
  }
  //style={(this.state.changeBackColor[0]) ? {backgroundColor:"red"} : {backgroundColor:"rgba(75, 75, 177, 0.808)"}} 
  
  render() {

    return (<Fragment>
      <div className="questionAttemptStatus">
        {this.props.noOfQues.map((stat, index) => 
            <button  disabled={true}
                style={(stat === 2) ? {backgroundColor:"#28a745", color:"white"} : (stat === 1) ? {backgroundColor:"#dc3545", color:"white"} : (stat === 0) ? {backgroundColor:"#ffc107", color:"white"} : {backgroundColor: null}  } 
                className="buttonQuestion" key={index.toString()}>
                {index+1} 
            </button>
        )}
      </div>
    </Fragment>);
}}

export default QuestionStatusUpdate;