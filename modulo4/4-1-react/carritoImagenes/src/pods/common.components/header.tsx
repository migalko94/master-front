import React from "react";

import {
  TableCell,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const Header: React.FC = () => {
  return (
    <TableHead className="list-head">
      <TableRow>
        <StyledTableCell>Id</StyledTableCell>
        <StyledTableCell>Picture</StyledTableCell>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell>Add to Card</StyledTableCell>
      </TableRow>
    </TableHead>
  );
};
