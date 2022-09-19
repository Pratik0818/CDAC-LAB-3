import React from "react";
import Headcomp from "../MajorComponents/Headcomp";
import Middlecomp from "../MajorComponents/Middlecomp";
import AltheoryMidContent1 from "./AltheoryMidContent1";
import backgroundImg from "../../Img/backg.jpg";

const AItheory1 = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "url(" + backgroundImg + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Headcomp />

      <Middlecomp
        midheight="90%"
        midcontent={<AltheoryMidContent1 />}
        toolvisible="hidden"
      />
    </div>
  );
};

export default AItheory1;