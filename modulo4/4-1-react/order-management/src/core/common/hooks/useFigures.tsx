import { VMOrderInfo } from "@/core";

export const useFigures = () => {
  const getPercentage = (order: VMOrderInfo[]) => {
    const filteredOrder = order.filter(
      (orderItem) => orderItem.validation === true
    );

    const percentage = (filteredOrder.length / order.length) * 100;
    return Number(percentage.toFixed(2));
  };

  return {
    getPercentage,
  };
};
