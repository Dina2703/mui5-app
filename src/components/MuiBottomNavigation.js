import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

import { useState } from "react";

function MuiBottomNavigation() {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      sx={{ width: "100%", position: "fixed", bottom: 0 }}
      value={value}
      onChange={(e, newvalue) => setValue(newvalue)}
      showLabels //to hide labels, remove the prop.
    >
      <BottomNavigationAction icon={<HomeIcon />} label="Home" />
      <BottomNavigationAction icon={<FavoriteIcon li />} label="Favorites" />
      <BottomNavigationAction icon={<PersonIcon />} label="Profile" />
    </BottomNavigation>
  );
}

export default MuiBottomNavigation;
