import React from "react";

import { Table, TableBody, TableContainer } from "@mui/material";

import { VMOrderInfo } from "@/core";
import {
  ListHeader,
  ListRowContainer,
  ValidationContainer,
} from "./components";

interface Props {
  orderItems: VMOrderInfo[];
}

export const ListComponent: React.FC<Props> = (props) => {
  const { orderItems } = props;

  return (
    <>
      <ValidationContainer />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <ListHeader />
          <TableBody>
            {orderItems.map((item) => (
              <ListRowContainer key={item.id} item={item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
