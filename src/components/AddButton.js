import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const buttonStyle = {
  backgroundColor: "#0C969D",
  color: "white",
  height: 56,
  width: 56,
  position: "absolute",
  right: 130,
  top: 1000,
};

export default function AddButton() {
  return (
    <Fab sx={buttonStyle} aria-label="add">
      <AddIcon />
    </Fab>
  );
}
