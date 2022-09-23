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
import CubesMidComponent from "./components/CubesMidContent";
import TwoCubes from "./components/TwoCubes";
import ThreeCuboidsA from "./components/ThreeCuboidsA";
import ThreeCuboidsB from "./components/ThreeCuboidsB";
import DragAndDrop from "./components/DragAndDrop";
import FbxDemo from "./components/FbxDemo";




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
      <Route
        path="/letusverify/twocubes"
        element={<TwoCubes />}
      />
      <Route
        path="/letusverify/threecubesa"
        element={<ThreeCuboidsA />}
      />
      <Route
        path="/letusverify/threecuboidsb"
        element={<ThreeCuboidsB />}
      />
      <Route
        path="/letusverify/draganddrop"
        element={<DragAndDrop />}
      />
      <Route
        path="/letusverify/fbxdemo"
        element={<FbxDemo />}
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
