import React from "react";

import { Context } from "@/core";

import { ListComponent } from "./list.component";

export const ListContainer: React.FC = () => {
  const { order } = React.useContext(Context);

  return (
    <>
      <ListComponent orderItems={order} />
    </>
  );
};
