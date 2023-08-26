import React from "react";

import { routes } from "@/core";
import { Link } from "react-router-dom";
import { TableCell, TableRow } from "@mui/material";

import { MemberEntity } from "@/pods";

interface Props {
  member: MemberEntity;
}

export const MemberRow: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <TableRow key={member.id}>
      <TableCell>
        <img src={member.avatarUrl} />
      </TableCell>
      <TableCell>{member.id}</TableCell>
      <TableCell>
        <Link to={routes.detail(member.login)}>{member.login}</Link>
      </TableCell>
    </TableRow>
  );
};
