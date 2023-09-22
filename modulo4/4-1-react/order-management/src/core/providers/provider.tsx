import React from "react";

import { useOrder } from "@/core/common";

import { Context } from "./provider.contex";

export const Provider: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  const { order, setOrder } = useOrder();

  return (
    <Context.Provider
      value={{
        order,
        setOrder,
      }}
    >
      {children}
    </Context.Provider>
  );
};
