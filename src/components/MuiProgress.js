import { CircularProgress, LinearProgress, Stack } from "@mui/material";
import React from "react";

function MuiProgress() {
  return (
    <Stack spacing={2}>
      <CircularProgress variant="determinate" value={50} />
      {/*<CircularProgress color="success" />*/}
      {/* <LinearProgress /> */}
      <LinearProgress color="error" variant="determinate" value={60} />
    </Stack>
  );
}

export default MuiProgress;

//Progress indicators inform users abput the status of ongoing processes such as loading an app, submitting a form or saving updates. in MUI there are linear and circular indicators. They can be determinated or indeterminated.
