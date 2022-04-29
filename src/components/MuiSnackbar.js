import { Button, Snackbar, Alert, AlertProps, Stack } from "@mui/material";
import { useState, forwardRef } from "react";

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});

function MuiSnackbar() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleClose2 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen2(false);
  };

  return (
    <Stack spacing={2} direction="row">
      <Button onClick={() => setOpen(true)} variant="outlined">
        Sumbit
      </Button>
      <Snackbar
        message="Form submitted successfully"
        autoHideDuration={3000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />
      <Button onClick={() => setOpen2(true)} variant="outlined">
        Sumbit 2
      </Button>
      <Snackbar autoHideDuration={3000} open={open2} onClose={handleClose2}>
        <SnackbarAlert onClose={handleClose2} severity="success">
          Form submitted successfully
        </SnackbarAlert>
      </Snackbar>
    </Stack>
  );
}

export default MuiSnackbar;

//Snackbars provide brif notifications, also known as the toast notifications. Snackbars inform users of an process that an app has performed or will perform.
