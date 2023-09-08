import React from "react";

import { Context } from "@/core";

import { OrderDetailComponent } from "./order-detail.component";

export const OrderDetailContainer: React.FC = () => {
  const { order } = React.useContext(Context);

  return (
    <>
      <OrderDetailComponent orderItems={order} />
    </>
  );
};
