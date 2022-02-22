import React from "react";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const titleStyle = {
  fontFamily: "Poppins",
  FontSize: 12,
  fontStyle: "normal",
  color: "#79797A",
  lineHeight: "16px",
  fontWeight: 600,
  height: 48,
};

const ListTitle = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={titleStyle}>Recipe name</TableCell>
        <TableCell sx={titleStyle} align="center">
          Reviews
        </TableCell>
        <TableCell sx={titleStyle} align="center">
          Cooked before
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default ListTitle;
