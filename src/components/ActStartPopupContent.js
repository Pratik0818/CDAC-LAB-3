import React from "react";
import { ListItemText } from "@mui/material";
//import crossmulti from "../Img/crossmultiplication.png";

const ActStartPopupContent = () => {
  return (
    <>
      <ListItemText sx={{ display: "list-item" }}>We are going to practically verify the algebric identity (a+b)³ = a³ + b³ + 3a²b + 3ab².
       </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
        We are going to take RHS as fragments of values of cubes (a³,b³) and cuboids (3a²b,3ab²) where a is greater than b.
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
       Then we are going to combine all these fragments of RHS to make another cube of side (a+b) and volume (a+b)³ which will depict our LHS.
      </ListItemText>
     

    </>
  );
};

export default ActStartPopupContent;
