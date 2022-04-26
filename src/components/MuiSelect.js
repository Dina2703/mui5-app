import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

function MuiSelect() {
  const [country, setCountry] = useState("");

  console.log(country);

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  //when we have defined width, we can add 'fullWidth' attr for 'TextField'
  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="KZ">KZ</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
}

export default MuiSelect;
