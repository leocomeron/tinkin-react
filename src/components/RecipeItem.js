import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Rating from "@mui/material/Rating";
import styled from "@mui/material/styles/styled";

import Switch from "./Switcher";

const recipeStyle = {
  fontFamily: "Poppins",
  FontSize: 14,
  fontStyle: "normal",
  fontWeight: "normal",
  lineHeight: "24px",
  letterSpacing: 0,
  textAlign: "left",
  color: "#19191A",
};

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#FFD19A",
  },
});

const RecipeItem = (props) => {
  return (
    <TableRow sx={{ height: 40 }}>
      <TableCell
        sx={
          (props.wasCookedBefore === false && {
            ...recipeStyle,
            color: "#79797A",
          }) ||
          recipeStyle
        }
      >
        {props.name}
      </TableCell>
      <TableCell align="center">
        <StyledRating value={props.review} readOnly />
      </TableCell>
      <TableCell align="center">
        <Switch wasCookedBefore={props.wasCookedBefore} />
      </TableCell>
    </TableRow>
  );
};

export default RecipeItem;
