import React from "react";

import { Route, Routes } from "react-router-dom";
import Help from "./components/HelpVideo/Help";

import Errorpage from "./components/MajorComponents/Errorpage";
import Launchpage from "./components/MajorComponents/Launchpage";
import Letusverify from "./components/MajorComponents/Letusverify";

import Play from "./components/quiz/Play";
import QuizInstructions from "./components/quiz/QuizInstructions";


import AItheory1 from "./components/Theory/AItheory1";




import UnderConstruction from "./components/MajorComponents/UnderConstruction";
import CubeValues from "./components/CubeValues";
import Cubes from "./components/Cubes";
import CubesMidComponent from "./components/CubesMidContent";



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Launchpage />} />
      <Route path="/letusverify" element={<Letusverify />} />

      <Route
        path="/letusverify/cubevalues"
        element={<CubeValues />}
      />
      <Route
        path="/letusverify/cubesmidcontent"
        element={<CubesMidComponent />}
      />


      
      <Route path="/letusverify/sqtheory" element={<AItheory1 />} />
      


      <Route path="/letusverify/instructions" element={<QuizInstructions />} />
      <Route path="/letusverify/quiz" element={<Play />} />


      <Route path="/letusverify/help" element={<Help />} />
      <Route path="/underconstruction" element={<UnderConstruction />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  );
};

export default App;
