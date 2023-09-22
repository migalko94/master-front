import React from "react";

import { Context, VMOrderInfo } from "@/core";

import { ListRowComponent } from "./list-row.component";

interface Props {
  item: VMOrderInfo;
}

export const ListRowContainer: React.FC<Props> = (props) => {
  const { item } = props;

  const { order, setOrder } = React.useContext(Context);

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

  const toggleSelect = (item: VMOrderInfo, selection: boolean) => {
    const updatedOrder = order.map((orderItem) => {
      if (orderItem.id === item.id) {
        return { ...orderItem, selected: selection };
      } else {
        return orderItem;
      }
    });
    return setOrder(updatedOrder);
  };

  const [checked, setChecked] = React.useState(item.selected);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    checked ? toggleSelect(item, false) : toggleSelect(item, true);
  };

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPrice(item, Number(e.target.value));

  return (
    <ListRowComponent
      item={item}
      handleChange={handleChange}
      handlePrice={handlePrice}
    />
  );
};
