import { CatchingPokemon } from "@mui/icons-material";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

function MuiNavbar() {
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
          <Button color="inherit">Login</Button>
        </Stack>
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
