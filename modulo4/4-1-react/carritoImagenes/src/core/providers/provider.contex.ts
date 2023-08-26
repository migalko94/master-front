import React from "react";

import { PictureInfoVM } from "@/core/common";

interface ContextModel {
  data: PictureInfoVM[];
  setData: (data: PictureInfoVM[]) => void;

  cart: PictureInfoVM[];
  setCart: (cart: PictureInfoVM[]) => void;

  addToCart: (item: PictureInfoVM) => void;
  removeFromCart: (item: PictureInfoVM) => void;
  emptyCart: () => void;
  isAnyItem: () => boolean;
  isItemInCart: (item: PictureInfoVM) => boolean;

  visible: boolean;
  setVisible: (visible: boolean) => void;
}

export const Context = React.createContext<ContextModel>(null);

export const useContext = () => {
  return React.useContext(Context);
};
