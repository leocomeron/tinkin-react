import * as React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

import { recipes } from "../constants/Recipes";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import RecipeItem from "./RecipeItem";
import ListTitle from "./ListTitle";

const ReciepeList = () => {
  const [filterInput, setFilterInput] = useState("All");

  const callbackFilterHandler = (childData) => {
    setFilterInput(childData);
  };

  return (
    <div>
      <div style={{ display: "flex", marginBottom: 40 }}>
        <SearchBar />
        <Filter data={callbackFilterHandler} />
      </div>
      <TableContainer component={Paper}>
        <Table padding="none" sx={{ minWidth: 1002 }} aria-label="simple table">
          <ListTitle />
          <TableBody>
            {recipes.map((recipe) => {
              let isFilterOn =
                (filterInput === "All" && true) ||
                (filterInput === "Active" && recipe.wasCookedBefore) ||
                (filterInput === "Inactive" && !recipe.wasCookedBefore);
              return (
                isFilterOn && (
                  <RecipeItem
                    key={recipe.id}
                    name={recipe.name}
                    review={recipe.review}
                    wasCookedBefore={recipe.wasCookedBefore}
                  />
                )
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ReciepeList;
