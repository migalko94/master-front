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

export const ListHeader: React.FC = () => {
  return (
    <TableHead className="list-head">
      <TableRow>
        <StyledTableCell>Avatar</StyledTableCell>
        <StyledTableCell>Id</StyledTableCell>
        <StyledTableCell>Name</StyledTableCell>
      </TableRow>
    </TableHead>
  );
};
