import React from "react";
import Button from "@mui/material/Button";
import { IconButton, Stack } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

function MuiButton() {
  return (
    <>
      <Stack spacing={4} direction="row" mb={3}>
        <Button variant="contained" color="primary">
          button
        </Button>
        <Button variant="contained" color="info">
          button
        </Button>
        <Button variant="contained" color="success">
          button
        </Button>
        <Button variant="contained" color="warning">
          button
        </Button>
        <Button variant="contained" href="https://google.com" color="secondary">
          button
        </Button>
        <Button variant="contained" color="error">
          button
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          button
        </Button>
        <Button variant="contained" color="warning">
          button
        </Button>
        <Button variant="outlined" color="success">
          button
        </Button>
      </Stack>

      <Stack display="block" spacing={4} direction="row" mt={3}>
        <Button variant="contained" size="small">
          BUTTON
        </Button>
        <Button variant="contained" size="medium">
          BUTTON
        </Button>
        <Button variant="contained" size="large">
          BUTTON
        </Button>
      </Stack>
      <Stack spacing={2} direction="row" mt={3}>
        <Button variant="contained" disableRipple startIcon={<SendIcon />}>
          Button
        </Button>
        <Button variant="contained" disableElevation endIcon={<SendIcon />}>
          Button
        </Button>
        <IconButton
          color="success"
          size="small"
          onClick={() => alert("Clicked")}
        >
          <SendIcon />
        </IconButton>
      </Stack>
    </>
  );
}

export default MuiButton;
