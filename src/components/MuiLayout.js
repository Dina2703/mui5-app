import { Box, Stack, Divider, Grid, Paper } from "@mui/material";
import React from "react";

function MuiLayout() {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Stack
        spacing={2}
        p={1}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        sx={{ border: "1px solid" }}
      >
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
      </Stack>
      <Grid container my={3} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={10} sm={6} md={3}>
          <Box bgcolor="primary.light" p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={10} sm={6} md={3}>
          <Box bgcolor="primary.light" p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={10} sm={6} md={3}>
          <Box bgcolor="primary.light" p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={10} sm={6} md={3}>
          <Box bgcolor="primary.light" p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
      <Grid container my={3} spacing={3}>
        <Grid item xs>
          <Box bgcolor="primary.light" p={1}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="primary.light" p={1}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="primary.light" p={1}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor="primary.light" p={1}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MuiLayout;
/*
//Box accepts 'sx' props for custom styling, and use MUI themes, like 'primary.main', and access MUI css system props (see: https://mui.com/system/properties/)

//Stack used to manage layout in one-dimention(vertical or horizontal axis), it's default direction is column/vertical. can use: row,column-reverse, row-reverse for direction prop.

//Grid (uses flexbox module) used to create two-dimention and responsive layout. Grid has two variations: grid 'container' for a parent, gird 'item' for children.

//Paper used to establish sections of UI. It is used under the hood to build the card component in MUI.

//Card contains content and actions about a single topic. 
*/
