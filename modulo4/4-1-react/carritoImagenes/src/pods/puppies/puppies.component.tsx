import React from "react";
import { Table, TableBody } from "@mui/material";

import { Header } from "@/pods";
import { PictureInfoVM } from "@/core/common";

import { PuppiesRowContainer } from "./puppies.row.container";

interface Props {
  puppies: PictureInfoVM[];
}

export const PuppiesComponent: React.FC<Props> = (props) => {
  const { puppies } = props;

  return (
    <>
      <Table>
        <Header />
        <TableBody>
          {puppies.map((puppy) => (
            <PuppiesRowContainer key={puppy.id} puppy={puppy} />
          ))}
        </TableBody>
      </Table>
    </>
  );
};
