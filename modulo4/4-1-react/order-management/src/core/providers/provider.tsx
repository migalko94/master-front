import React from "react";

import { VMOrderInfo, getVMData, useQueue, useFigures } from "@/core/common";

import { Context } from "./provider.contex";

export const Provider: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  const [order, setOrder] = React.useState<VMOrderInfo[]>([]);

  const { isInQueue, queue, addToQueue, removeFromQueue, getTotalPrice } =
    useQueue();

  const { getPercentage } = useFigures();

  React.useEffect(() => {
    getVMData().then((result) => setOrder(result));
  }, []);

  React.useEffect(() => {
    const updatedData = order.map((item) => ({
      ...item,
      selected: isInQueue(item),
    }));
    setOrder(updatedData);
  }, [queue]);

  const setValidation = (isValid: boolean) => {
    const updatedOrder = order.map((orderItem) => {
      if (orderItem.selected === true) {
        return { ...orderItem, validation: isValid };
      } else {
        return orderItem;
      }
    });

    return setOrder(updatedOrder);
  };

  const setPrice = (item: VMOrderInfo, value: number) => {
    const updatedOrder = order.map((orderItem) => {
      if (orderItem.id === item.id) {
        return { ...orderItem, price: value };
      } else {
        return orderItem;
      }
    });

    return setOrder(updatedOrder);
  };

  return (
    <Context.Provider
      value={{
        order,
        setOrder,
        setPrice,
        addToQueue,
        removeFromQueue,
        isInQueue,
        queue,
        getTotalPrice,
        setValidation,
        getPercentage,
      }}
    >
      {children}
    </Context.Provider>
  );
};
