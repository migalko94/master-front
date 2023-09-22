import React from "react";

import { Grid, Paper, styled } from "@mui/material";

import {
  StaticHeaderCalendarComponent,
  StaticHeaderProviderComponent,
} from "./static-header.components";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const StaticHeader: React.FC = () => {
  return (
    <>
      <Grid item xs={2}>
        <Item>FF5733</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <StaticHeaderProviderComponent />
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          <StaticHeaderCalendarComponent />
        </Item>
      </Grid>
    </>
  );
};
