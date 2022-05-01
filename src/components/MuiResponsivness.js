import { Box, styled, Typography } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.status.danger,
}));

const StyledBox2 = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.palette.neutral.darker,
}));

function MuiResponsivness() {
  return (
    <>
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
          bgcolor: "secondary.dark",
        }}
      ></Box>
      <Typography>Customizing theme</Typography>
      <StyledBox />
      <StyledBox2 />
    </>
  );
}

export default MuiResponsivness;
