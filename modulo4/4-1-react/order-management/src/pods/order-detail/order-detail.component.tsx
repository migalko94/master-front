import { VMOrderInfo } from "@/core";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import {
  OrderDetailHeader,
  OrderDetailRow,
  ValidationContainer,
} from "./components";

interface Props {
  orderItems: VMOrderInfo[];
}

export const OrderDetailComponent: React.FC<Props> = (props) => {
  const { orderItems } = props;

  return (
    <>
      <ValidationContainer />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <OrderDetailHeader />
          <TableBody>
            {orderItems.map((item) => (
              <OrderDetailRow key={item.id} item={item} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
