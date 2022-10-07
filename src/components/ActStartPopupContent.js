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
       Then we are going to combine all these fragments of RHS.
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
      On combining all the small fragments of R.H.S we will get a cube which will be our nothing but L.H.S of the equation which has side (a+b) and volume (a+b)³.
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
       After this we have our verification part of the activity where student will get to set the value of side of cubes and cuboids which is depicted as 'a' unit and 'b' unit.
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
      As the student chooses or changes the values of 'a' and 'b' the student will get to verify L.H.S as well as R.H.S part of the algebric equation.
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
     Now let us start our activity with R.H.S first.
      </ListItemText>
     

    </>
  );
};

export default ActStartPopupContent;
