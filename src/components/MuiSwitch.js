import { FormControlLabel, Switch } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

function MuiSwitch() {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    console.log({ checked });
  };

  return (
    <Box>
      <FormControlLabel
        label={checked ? "light mode" : "dark mode"}
        className={checked ? "day" : "dark"}
        control={
          <Switch
            onChange={handleChange}
            checked={checked}
            color="secondary"
            size="small"
          />
        }
      />
    </Box>
  );
}

export default MuiSwitch;
