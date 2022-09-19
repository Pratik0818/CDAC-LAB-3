import React, { useState } from "react";
import "./Rightsidemenu.css";
import { Navbar, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

import theory from "../../Img/theory.png";
import mcq from "../../Img/mcq.png";
import help from "../../Img/help.png";
import settings from "../../Img/settings.png";

import InfoPopup from "./InfoPopup";
import QuizPopupContent from "../QuizPopupContent";

const Rightsidemenu = () => {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }));

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
    <>
      <InfoPopup
        openDialog={showDialog}
        onAgree={onAgree}
        closeDialog={closeDialog}
        content={<QuizPopupContent/>}
        popuptitle="Instructions for quiz"
      />

      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid className="">
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ width: "125px", height: "300px", background: "#8bb7c5" }}
            >
              <div className="" style={{ height: "100%" }}>
                <div
                  className=" d-flex justify-content-center align-items-center p-3"
                  style={{ height: "33%" }}
                >
                  <LightTooltip title="Theory" placement="left" arrow>
                    <Link to="/letusverify/sqtheory">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          maxHeight: "100%",
                          maxWidth: "100%",
                        }}
                        src={theory}
                        alt="Logo"
                      ></motion.img>
                    </Link>
                  </LightTooltip>
                </div>

                <div
                  className=" d-flex justify-content-center align-items-center p-3"
                  style={{ height: "33%" }}
                >
                  <LightTooltip title="Viva voce" placement="left" arrow>
                    <div onClick={openDialog}>
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          maxHeight: "100%",
                          maxWidth: "100%",
                          cursor:"pointer"
                        }}
                        src={mcq}
                        alt="Logo"
                      ></motion.img>
                    </div>
                  </LightTooltip>
                </div>
{/* 
                <div
                  className=" d-flex justify-content-center align-items-center p-3"
                  style={{ height: "25%" }}
                >
                  <LightTooltip title="Settings" placement="left" arrow>
                    <Link to="/letusverify/game">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          maxHeight: "100%",
                          maxWidth: "100%",
                        }}
                        src={settings}
                        alt="Logo"
                      ></motion.img>
                    </Link>
                  </LightTooltip>
                </div> */}

                <div
                  className=" d-flex justify-content-center align-items-center p-3"
                  style={{ height: "34%" }}
                >
                  <LightTooltip title="Help" placement="left" arrow>
                    <Link to="/underconstruction">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          maxHeight: "100%",
                          maxWidth: "100%",
                          cursor:"pointer"
                        }}
                        src={help}
                        alt="Logo"
                      ></motion.img>
                    </Link>
                  </LightTooltip>
                </div>
              </div>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Rightsidemenu;
