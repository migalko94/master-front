import React, { ReactNode } from "react";

import { Button } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteIcon from "@mui/icons-material/Delete";

import { ShoppingCartButton } from "./cart.button";

interface Props {
  isAnyItem: () => boolean;
  handleVisibility: () => void;
  emptyCart: () => void;
  showCart: () => ReactNode;
}

export const DisplayedCartButtonsComponent: React.FC<Props> = (props) => {
  const { isAnyItem, handleVisibility, emptyCart, showCart } = props;

  return (
    <div className="cart-core">
      <Button
        size="small"
        startIcon={<RemoveCircleIcon />}
        style={{ display: isAnyItem() ? "block" : "none" }}
        onClick={handleVisibility}
      ></Button>

      <ShoppingCartButton isAnyItem={isAnyItem} />

      <Button
        color="warning"
        size="small"
        style={{ display: isAnyItem() ? "block" : "none" }}
        startIcon={<DeleteIcon />}
        onClick={() => {
          emptyCart();
        }}
      >
        All
      </Button>
      <div className="cart-items-div">{showCart()}</div>
    </div>
  );
};
