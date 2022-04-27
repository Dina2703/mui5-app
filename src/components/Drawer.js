import { useState } from "react";
import { Drawer, Typography, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function DrawerMUI() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        aria-label="menu-icon-button"
        size="large"
        edge="start"
        color="inherit"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

export default DrawerMUI;
