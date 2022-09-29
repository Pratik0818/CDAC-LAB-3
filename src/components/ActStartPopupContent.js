import React from "react";
import { ListItemText } from "@mui/material";
//import crossmulti from "../Img/crossmultiplication.png";

const ActStartPopupContent = () => {
  return (
    <>
      <ListItemText sx={{ display: "list-item" }}>We are going to learn subtraction of fractions having unlike denominators.
        To calculate the subtraction, following steps needs to be done:</ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
        First student will be taking numerator (a) , denominator(b) for fraction-I and numerator (c) , denominator(d) for fraction-II.
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
        Denominator of both the fractions is multiplied (b*d) and resultant of the multiplication will form the number of the cells of the grid.
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
        Then, student will mark the number of cells with red sketch pen up to the resultant of the cross multiplication of a*d.
      </ListItemText>
      <ListItemText sx={{ display: "list-item" }}>
        Then, student will mark the number of cells with blue sketch pen up to the resultant of the cross multiplication of c*b.
      </ListItemText>
      <ListItemText >
        <img
          className="img-fluid"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            maxHeight: "100%",
            maxWidth: "100%",

          }}
         // src={crossmulti}
          alt="img"
        />
      </ListItemText>
      <ListItemText sx={{ display: 'list-item' }}>
        Student will be able to derive conclusions from the resultant grid that is combination of first two grid.
      </ListItemText>

    </>
  );
};

export default ActStartPopupContent;
