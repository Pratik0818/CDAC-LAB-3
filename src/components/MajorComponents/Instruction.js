import React from "react";

const expression = () => {
  
  return (
    <>
      Welcome................
    </>
  );
};

const Instruction_1 = () => {
  return <ul>
  Enter the value for cube A and cube B either(a=3 and b=1) or (a=4 and b=2).
</ul>;
};

const Instruction_2 = () => {
  return (
    <ul>
      <li>
        Enter value of numerator and denominator and click on OK button.
      </li>
      <li>Denominator value must be greater than numerator.</li>
    </ul>
  );
};

const Instruction_3 = () => {
  return <ul>Click on "Tools" button and select red pen.</ul>;
};

const Instruction_4 = () => {
  let firstNumerator = parseInt(localStorage.getItem("val1"));
 
  let secondDenominator = parseInt(localStorage.getItem("val4"));
  
  let firstValue = firstNumerator * secondDenominator;
  
  return (
    <ul>
      
        <b>Step1: </b> Mark {firstValue} cells with
        <span className="text-danger">‘+’</span> sign with Red sketch pen in sequentially along with row wise manner.
    
    </ul>
  );
};

const Instruction_5 = () => {
  
  let firstDenominator = parseInt(localStorage.getItem("val2"));
 
  let secondNumerator = parseInt(localStorage.getItem("val3"));
  
  let secondValue = firstDenominator * secondNumerator;
  return (
    <ul>
      
      <b>Step1: </b> Mark {secondValue} cells with
        <span className="text-danger">‘+’</span> sign with Blue sketch pen in sequentially along with row wise manner.
      
    </ul>
  );
};

const Instruction_6 = () => {
  return (
    <ul>
      
        Enter all values into their respective boxes and click on RESULT button
        to see final result.
      
     
    </ul>
  );
};

const Instruction_7 = () => {
  return (
   
     <ul>Click on "Tools" button and select blue pen.</ul>
    
  );
};

const Instruction_8 = () => {
  return (
   
    <ul>
    <li>
      Activity successfully completed.
    </li>
    <li>Click on RESTART button.</li>
  </ul>
    
  );
};
const Instruction_9 = () => {
  return (
   
    <ul>
  
       Click on <b>Next</b> button.
      
  </ul>
    
  );
};

const Instruction_10 = () => {
  return (
    <ul>
      <li>
        Enter value of numerator and denominator and click on OK button.
      </li>
      <li>Denominator value must be greater than numerator.</li>
      <li>First numerator value must be greater than second numerator and second denominator value must be gerater than first denominator.</li>
    </ul>
  );
};

export default expression;

export {
  Instruction_1,
  Instruction_2,
  Instruction_3,
  Instruction_4,
  Instruction_5,
  Instruction_6,
  Instruction_7,
  Instruction_8,
  Instruction_9,
  Instruction_10
};
