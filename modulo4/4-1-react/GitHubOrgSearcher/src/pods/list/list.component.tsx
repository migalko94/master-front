import React from "react";

import { Table, TableBody } from "@mui/material";

import { ListHeader, MemberRow } from "./components";

interface Props {
  members: MemberEntity[];
}

interface MemberEntity {
  id: number;
  login: string;
  avatarUrl: string;
}

export const ListComponent: React.FC<Props> = (props) => {
  const { members } = props;

  return (
    <Table>
      <ListHeader />
      <TableBody>
        {members.map((member) => (
          <MemberRow key={member.id} member={member} />
        ))}
      </TableBody>
    </Table>
  );
};
