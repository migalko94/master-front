import React from "react";

import { PictureInfoVM } from "@/core";

interface Props {
  item: PictureInfoVM;
}

export const CartItemsComponent: React.FC<Props> = (props) => {
  const { item } = props;

  return (
    <div className="cart-item" key={item.id}>
      <p>{item.title}</p>
      <img src={item.picUrl} alt={item.title} />
    </div>
  );
};
