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
     Enter value into their respective boxes and click on <b>DRAW CUBE</b> button.
  </ul>;
};

const Instruction_2 = () => {
  return (
    <ul>
      Enter value into their respective boxes. 
    </ul>
  );
};

const Instruction_3 = () => {
  return <ul><li>Drag the Cuboids (M,N,L,Q,P,R) and Cube B</li>
    <li>Click SHOW DEMO Button to see demo.</li></ul>;
};

const Instruction_4 = () => {

  return (
    <ul>

      <ul>

        Click on <b>Next</b> button.

      </ul>
    </ul>
  );
};

const Instruction_5 = () => {


  return (
    <ul>

      Activity successfully completed click on RESTART Button.
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
};
