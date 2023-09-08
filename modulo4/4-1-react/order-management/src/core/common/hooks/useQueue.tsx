import React from "react";

import { VMOrderInfo } from "@/core";

const defaultQueue: VMOrderInfo[] = [];

export const useQueue = () => {
  const [queue, setQueue] = React.useState(defaultQueue);

  const isInQueue = (item: VMOrderInfo): boolean =>
    queue.some((element) => element.id === item.id);

  const addToQueue = (item: VMOrderInfo) =>
    setQueue([{ ...item, selected: true }, ...queue]);

  const removeFromQueue = (item: VMOrderInfo) => {
    item = { ...item, selected: false };
    setQueue((queue) => queue.filter((queueItem) => queueItem.id !== item.id));
  };

  const getTotalPrice = (order: VMOrderInfo[]): number => {
    const filteredOrder = order.filter(
      (orderItem) => orderItem.selected === true
    );

    return filteredOrder.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  };

  return {
    queue,
    setQueue,
    isInQueue,
    addToQueue,
    removeFromQueue,
    getTotalPrice,
  };
};
