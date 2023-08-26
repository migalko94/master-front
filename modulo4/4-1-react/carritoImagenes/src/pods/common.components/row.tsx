import React from "react";

import { Checkbox, TableCell, TableRow } from "@mui/material";

import { PictureInfoVM } from "@/core";

interface Props {
  item: PictureInfoVM;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

export const Row: React.FC<Props> = (props) => {
  const { item, handleChange, checked } = props;

  return (
    <TableRow key={item.id}>
      <TableCell>{item.id}</TableCell>
      <TableCell>
        <img src={item.picUrl} />
      </TableCell>
      <TableCell>{item.title}</TableCell>
      <TableCell>
        <Checkbox
          color="success"
          size="medium"
          checked={checked}
          onChange={handleChange}
        />
      </TableCell>
    </TableRow>
  );
};
