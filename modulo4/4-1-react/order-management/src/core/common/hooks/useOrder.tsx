import React from "react";

import { VMOrderInfo, getVMData } from "@/core";

export const useOrder = () => {
  const [order, setOrder] = React.useState<VMOrderInfo[]>([]);

  React.useEffect(() => {
    getVMData().then((result) => setOrder(result));
  }, []);

  React.useEffect(() => {
    const updatedData = order.map((item) => ({
      ...item,
    }));
    setOrder(updatedData);
  }, [order]);

  return {
    order,
    setOrder,
  };
};
