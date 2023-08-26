import React, { ReactNode } from "react";

import { Context } from "@/core";

import {
  DisplayedCartButtonsComponent,
  NonDisplayedCartButtonsComponent,
} from "./components";

interface Props {
  handleVisibility: () => void;
  showCart: () => ReactNode;
}

export const CartComponent: React.FC<Props> = (props) => {
  const { handleVisibility, showCart } = props;

  const { emptyCart, isAnyItem, visible } = React.useContext(Context);

  return visible ? (
    <>
      <DisplayedCartButtonsComponent
        isAnyItem={isAnyItem}
        handleVisibility={handleVisibility}
        emptyCart={emptyCart}
        showCart={showCart}
      />
    </>
  ) : (
    <NonDisplayedCartButtonsComponent
      isAnyItem={isAnyItem}
      handleVisibility={handleVisibility}
    />
  );
};
