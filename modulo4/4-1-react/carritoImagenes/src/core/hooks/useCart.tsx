import React from "react";

import { PictureInfoVM } from "@/core";

const defaultCart: PictureInfoVM[] = [];

export const useCart = () => {
  const [cart, setCart] = React.useState(defaultCart);

  const isItemInCart = (item: PictureInfoVM): boolean =>
    cart.some((element) => element.id === item.id);

  const addToCart = (item: PictureInfoVM) =>
    setCart([{ ...item, selected: true }, ...cart]);

  const isAnyItem = (): boolean => cart.length > 0;

  const removeFromCart = (item: PictureInfoVM) => {
    item = { ...item, selected: false };
    setCart((cart) => cart.filter((cart) => cart.id !== item.id));
  };

  const emptyCart = () => setCart([]);

  return {
    cart,
    setCart,
    isItemInCart,
    addToCart,
    isAnyItem,
    removeFromCart,
    emptyCart,
  };
};
