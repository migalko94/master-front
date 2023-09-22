import React from "react";

import { TableCell, TableHead, TableRow } from "@mui/material";

export const ListHeader: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="right">Estado</TableCell>
        <TableCell align="right">Descripción</TableCell>
        <TableCell align="right">Importe</TableCell>
      </TableRow>
    </TableHead>
  );
};
