import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

function MuiTab() {
  const [value, setValue] = useState("1");
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ height: "200px", bgcolor: "#ddede1" }}>
      <Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", width: "500px" }}>
            <TabList
              aria-label="Tabs example"
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab
                label="Tab One"
                value="1"
                icon={<FavoriteIcon />}
                iconPosition="start"
              />
              <Tab label="Tab Two" value="2" />
              <Tab label="Tab Three" value="3" />
              <Tab label="Disabled" value="4" disabled />
              <Tab label="Tab Five" value="5" />
              <Tab label="Tab Six" value="6" />
            </TabList>
          </Box>
          <TabPanel value="1">Panel One</TabPanel>
          <TabPanel value="2">Panel Two </TabPanel>
          <TabPanel value="3">Panel Three</TabPanel>
          <TabPanel value="4">Disabled</TabPanel>
          <TabPanel value="5">Panel Five</TabPanel>
          <TabPanel value="6">Panel Six </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}

export default MuiTab;
