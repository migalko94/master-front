import React from "react";

import { Context } from "@/core";

import { CartItemsComponent } from "./components";
import { CartComponent } from "./cart.component";

export const CartContainer: React.FC = () => {
  const { visible, setVisible, data } = React.useContext(Context);

  const filteredData = data.filter((item) => item.selected === true);

  const showCart = () =>
    filteredData.map((item) => {
      return <CartItemsComponent key={item.id} item={item} />;
    });

  const handleVisibility = () => setVisible(!visible);

  return (
    <>
      <CartComponent handleVisibility={handleVisibility} showCart={showCart} />
    </>
  );
};
