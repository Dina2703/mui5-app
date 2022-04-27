import { CatchingPokemon } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";

function MuiNavbar() {
  const anchorRef = React.useRef(null);
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POKEMONAPP
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button
            color="inherit"
            id="resources-button"
            ref={anchorRef}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon></KeyboardArrowDownIcon>}
            aria-controls={open ? "resources-menu" : "undefined"}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            Resource
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>
        <Menu
          anchorEl={anchorRef.current}
          id="resources-menu"
          open={open}
          MenuListProps={{
            "aria-labelledby": "resources-button",
          }}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          // transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default MuiNavbar;

// comment out below lines in App.css file to make fullwidth of a navbar
// body {
//   background: #eeeeee;
// }

// .App {
//   padding: 4rem;
// }
