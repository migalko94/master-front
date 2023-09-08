import React from "react";

import { Checkbox, TableCell, TableRow, TextField } from "@mui/material";

import { Context, VMOrderInfo } from "@/core";

interface Props {
  item: VMOrderInfo;
}

export const OrderDetailRow: React.FC<Props> = (props) => {
  const { item } = props;

  const { addToQueue, removeFromQueue, isInQueue, setPrice } =
    React.useContext(Context);

  const [checked, setChecked] = React.useState(isInQueue(item));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    checked ? removeFromQueue(item) : addToQueue(item);
  };

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPrice(item, Number(e.target.value));

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
