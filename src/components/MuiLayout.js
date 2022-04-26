import { Box } from "@mui/material";
import React from "react";

function MuiLayout() {
  //Box accepts 'sx' props for custom styling, and use MUI themes, like 'primary.main', and access MUI css system props (see: https://mui.com/system/properties/)
  return (
    <>
      <Box
        sx={{
          color: "#fff",
          backgroundColor: "primary.main",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        example #1
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      >
        example #2
      </Box>
    </>
  );
}

export default MuiLayout;
