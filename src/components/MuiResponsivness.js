import { Box } from "@mui/material";

function MuiResponsivness() {
  return (
    <Box
      sx={{
        height: {
          xs: 100,
          sm: 200,
          md: 300,
          lg: 400,
          xl: 500,
        },
        width: {
          xs: 100, //0
          sm: 200, //600
          md: 300, //900
          lg: 400, //1200
          xl: 500, //1536
        },
        bgcolor: "primary.main",
      }}
    ></Box>
  );
}

export default MuiResponsivness;
