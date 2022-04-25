import { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import Stack from "@mui/material/Stack";
import AppleIcon from "@mui/icons-material/Apple";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function MuiTextField() {
  const [value, setValue] = useState("");
  return (
    <div>
      <Stack spacing={3}>
        <Stack direction="row" spacing={3}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
        </Stack>
        <Stack direction="row" spacing={3}>
          <TextField label="Small secondary" size="small" color="secondary" />
          <TextField
            label="Name"
            size="medium"
            color="success"
            variant="filled"
          />
          <TextField
            label="Name"
            size="large"
            color="error"
            variant="standard"
          />
        </Stack>
        <Stack direction="row" spacing={3}>
          <TextField label="Form Input" required color="secondary" disabled />
          <TextField
            label="Form Input"
            required
            helperText="you can see the text"
          />
          <TextField
            label="Form Input"
            type="password"
            required
            helperText="you don't see the text, type is 'password'"
          />
          <TextField label="Read Only" InputProps={{ readOnly: true }} />
        </Stack>
        {/* Adornment act like suffixes or prefixes. You can use icons*/}
        <Stack direction="row" spacing={3}>
          <TextField
            label="Amout"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />

          <TextField
            label="Version"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AppleIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="password"
            type="password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityOffIcon />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack direction="row" spacing={3}>
          <TextField
            label="Form Input"
            required
            error={!value}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            helperText={!value ? "Required" : "Well done"}
          />
        </Stack>
      </Stack>
    </div>
  );
}

export default MuiTextField;
