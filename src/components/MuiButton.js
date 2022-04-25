import { useState } from "react";
import Button from "@mui/material/Button";
import {
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

function MuiButton() {
  const [formats, setFormats] = useState([]);

  const handleFormatChange = (e, newFormats) => {
    setFormats(newFormats);
  };

  console.log(formats);
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
          text
        </Button>
        <Button variant="contained" color="warning">
          contained
        </Button>
        <Button variant="outlined" color="success">
          outlined
        </Button>
      </Stack>
      <Stack display="block" spacing={4} direction="row" mt={3}>
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row" mt={3}>
        <Button variant="contained" disableRipple startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" disableElevation endIcon={<SendIcon />}>
          Send
        </Button>
        <IconButton
          color="success"
          size="small"
          onClick={() => alert("Clicked")}
        >
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" mt={3}>
        <ButtonGroup variant="outlined">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack mt={3}>
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="success"
        >
          <Button>Upper</Button>
          <Button>Center</Button>
          <Button>Lower</Button>
        </ButtonGroup>
      </Stack>
      <Typography variant="h5" color="initial" mt={4}>
        Toggle Button
      </Typography>
      <Stack direction="row" mt={3}>
        <ToggleButtonGroup
          value={formats}
          onChange={handleFormatChange}
          size="samll"
          color="success"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </>
  );
}

export default MuiButton;
