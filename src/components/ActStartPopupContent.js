import React from "react";
import { ListItemText } from "@mui/material";
//import crossmulti from "../Img/crossmultiplication.png";

const ActStartPopupContent = () => {
  return (
    <>
      <ListItemText sx={{ display: "list-item" }}>We are going to practically verify the algebraic identity (a+b)³ = a³ + b³ + 3a²b + 3ab².
       </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
        We are going to take RHS as fragments of values of cubes (a³,b³) and cuboids (3a²b,3ab²) where a is greater than b.
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
       Then we are going to add all these fragments of RHS.
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
      LHS will be our cube of addition of two number which is (a+b)³.
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
