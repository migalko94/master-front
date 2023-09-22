import React from "react";

import { Context, VMOrderInfo } from "@/core";

import { DynamicHeaderComponent } from "./dynamic-header.component";

export const DynamicHeaderContainer: React.FC = () => {
  const { order } = React.useContext(Context);

  const getPercentage = (order: VMOrderInfo[]): number => {
    const filteredOrder = order.filter(
      (orderItem) => orderItem.validation === true
    );

    const percentage = (filteredOrder.length / order.length) * 100;
    return Number(percentage.toFixed(2));
  };

  const getTotalPrice = (order: VMOrderInfo[]): number => {
    const filteredOrder = order.filter(
      (orderItem) => orderItem.selected === true
    );

    return filteredOrder.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  };

  return (
    <DynamicHeaderComponent
      order={order}
      getPercentage={getPercentage}
      getTotalPrice={getTotalPrice}
    />
  );
};
