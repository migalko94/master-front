import React from "react";
import { Table, TableBody } from "@mui/material";

import { PictureInfoVM } from "@/core";
import { Header } from "@/pods";

import { KittiesRowContainer } from "./kitties.row.container";

interface Props {
  kitties: PictureInfoVM[];
}

export const KittiesComponent: React.FC<Props> = (props) => {
  const { kitties } = props;

  return (
    <>
      <Table>
        <Header />
        <TableBody>
          {kitties.map((kitty) => (
            <KittiesRowContainer key={kitty.id} kitty={kitty} />
          ))}
        </TableBody>
      </Table>
    </>
  );
};
