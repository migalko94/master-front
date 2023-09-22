import React from "react";

import { Grid, Paper, styled } from "@mui/material";

import { VMOrderInfo } from "@/core";
import { CompleteComponent } from "./dynamic-header.components";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface Props {
  order: VMOrderInfo[];
  getTotalPrice: (order: VMOrderInfo[]) => number;
  getPercentage: (order: VMOrderInfo[]) => number;
}

export const DynamicHeaderComponent: React.FC<Props> = (props) => {
  const { getTotalPrice, getPercentage, order } = props;

  return (
    <>
      <Grid item xs={2}>
        <Item>Importe total: {getTotalPrice(order)} €</Item>
      </Grid>
      <Grid item xs={2}>
        <Item>Porcentaje: {getPercentage(order)} %</Item>
      </Grid>

      <Grid item xs={2}>
        <CompleteComponent getPercentage={getPercentage} />
      </Grid>
    </>
  );
};
