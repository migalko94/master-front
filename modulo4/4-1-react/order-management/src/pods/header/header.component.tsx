import React from "react";

import { Grid, Box } from "@mui/material";

import { StaticHeader, DynamicHeader } from "./components";

export const HeaderComponent: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <StaticHeader />
          <DynamicHeader />
        </Grid>
      </Box>
    </>
  );
};
