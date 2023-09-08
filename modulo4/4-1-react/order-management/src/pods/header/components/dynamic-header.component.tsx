import React from "react";
import { Grid, Paper, styled } from "@mui/material";

import { Context } from "@/core";

import { CompleteComponent } from "./dynamic-header.components";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const DynamicHeader: React.FC = () => {
  const { order, getTotalPrice, getPercentage } = React.useContext(Context);
  return (
    <>
      <Grid item xs={2}>
        <Item>Importe total: {getTotalPrice(order)} €</Item>
      </Grid>
      <Grid item xs={2}>
        <Item>Porcentaje: {getPercentage(order)} %</Item>
      </Grid>

      <Grid item xs={2}>
        <CompleteComponent />
      </Grid>
    </>
  );
};
