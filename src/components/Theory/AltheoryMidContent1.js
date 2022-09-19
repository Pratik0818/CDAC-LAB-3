import React from "react";
import grid from "../../Img/Shapes/grid.png";
import "../MajorComponents/Mid.css";

const AltheoryMidContent1 = () => {


  return (
    <div className="overflow-auto scrollbar-primary" style={{ height: "100%" }}>

      <div className="my-5" style={{ width: "93%" }}>
        <h6 className="">Objective</h6>
        <ul>
          To subtract a smaller fraction ​from greater fraction with the
          different denominators.
        </ul>
        <h6>Pre-requisite Knowledge</h6>
        <ul>
          <li>Concept of subtraction of natural numbers.</li>
          <li>Concept of fractions.</li>
          <li>Concept of grid method.</li>
        </ul>
        <h6>What is Fraction?</h6>
        <ul>
          A fraction is a numerical value that represents the parts of the
          whole.
        </ul>
        <h6>Parts of a Fraction</h6>
        <ul>
          A fraction consists of two parts, namely the numerator and the
          denominator. The upper part of the fraction is called the numerator
          and the lower part of the fraction is called the denominator. For
          example, 4/7 is a fraction. Here, 4 is the numerator and 7 is the
          denominator.
        </ul>
        <h6>Unlike fraction</h6>
        <ul>
          <li>
            Fractions with the different denominators are called unlike
            fractions.
          </li>
          <li> Thus, 1/5, 2/7, 3/2, 8/5 are all like fractions.</li>
        </ul>

        <h6>Grid representation of fraction</h6>
        <img
          className=""
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            maxHeight: "50%",
            maxWidth: "50%",
          }}
          src={grid}
          alt="img"
        />

        <p>
          We can represent a fraction numerator/denominator by letting a
          rectangular grid consisting of denominator stand for one whole and
          then numerator stand for the part of one whole.
        </p>

      </div>


    </div>
  );
};

export default AltheoryMidContent1;
