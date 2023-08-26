import React from "react";

import { PictureInfoVM, getData } from "@/core/common";
import { useCart, useVisible } from "@/core/hooks";

import { Context } from "./provider.contex";

export const Provider: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  const [data, setData] = React.useState<PictureInfoVM[]>([]);

  const { visible, setVisible } = useVisible();
  const {
    cart,
    setCart,
    isItemInCart,
    addToCart,
    isAnyItem,
    removeFromCart,
    emptyCart,
  } = useCart();

  React.useEffect(() => {
    getData().then((result) => {
      setData(result);
    });
  }, []);

  React.useEffect(() => {
    const updatedData = data.map((item) => ({
      ...item,
      selected: isItemInCart(item),
    }));
    setData(updatedData);
  }, [cart]);

  return (
    <Context.Provider
      value={{
        data,
        setData,
        cart,
        setCart,
        visible,
        setVisible,
        addToCart,
        removeFromCart,
        emptyCart,
        isAnyItem,
        isItemInCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};
