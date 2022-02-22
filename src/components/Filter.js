import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function Filter(props) {
  const [value, setValue] = useState("All");
  const [inputValue, setInputValue] = useState("All");

  const options = ["All", "Active", "Inactive"];

  const filterStyle = {
    backgroundColor: "#EBF0F3",
    height: 48,
    width: 199,
    borderRadius: "16px",
    fontFamily: "Poppins",
  };

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={props.data(inputValue)}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <FormControlLabel
            control={
              <Radio
                sx={{
                  position: "absolute",
                  right: 0,
                }}
              />
            }
            label={option}
            labelPlacement="start"
            checked={selected}
          />
          {option.title}
        </li>
      )}
      id="wasCookedFilter"
      options={options}
      popupIcon={<KeyboardArrowDownIcon />}
      sx={filterStyle}
      renderInput={(params) => (
        <TextField
          {...params}
          label={`Cooked Before: ${inputValue}`}
          variant="standard"
        />
      )}
    />
  );
}
