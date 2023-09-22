import React from "react";

import { Checkbox, TableCell, TableRow, TextField } from "@mui/material";

import { VMOrderInfo } from "@/core";

interface Props {
  item: VMOrderInfo;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ListRowComponent: React.FC<Props> = (props) => {
  const { item, handleChange, handlePrice } = props;

  return (
    <>
      <TableRow>
        <TableCell align="right">
          <Checkbox
            onChange={handleChange}
            color="primary"
            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
          />
          {item.validation ? "Validado" : "Pendiente"}
        </TableCell>

        <TableCell align="right">{item.description}</TableCell>

        <TableCell align="right">
          <TextField
            type="number"
            size="small"
            id="outlined-helperText"
            label="price"
            defaultValue={item.price}
            onChange={handlePrice}
          />
        </TableCell>
      </TableRow>
    </>
  );
};
