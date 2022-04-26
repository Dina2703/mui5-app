import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

function MuiSelectMulti2() {
  const [countries, setCountries] = useState([]);

  console.log({ countries });
  const handleChange = (e) => {
    const value = e.target.value;
    setCountries(value);
  };
  return (
    <Box width="450px">
      <TextField
        label="Select multiple countries"
        fullWidth
        select
        value={countries}
        SelectProps={{ multiple: true }}
        onChange={handleChange}
        size="small"
        helperText="please select your country"
      >
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="KZ">KZ</MenuItem>
        <MenuItem value="Australia">Australia</MenuItem>
      </TextField>
    </Box>
  );
}

export default MuiSelectMulti2;
