import React from "react";

import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { ShoppingCartButton } from "./cart.button";

interface Props {
  isAnyItem: () => boolean;
  handleVisibility: () => void;
}

export const NonDisplayedCartButtonsComponent: React.FC<Props> = (props) => {
  const { isAnyItem, handleVisibility } = props;

  return (
    <>
      <div className="cart-core">
        <Button
          startIcon={<AddCircleIcon />}
          size="small"
          style={{ display: isAnyItem() ? "block" : "none" }}
          onClick={handleVisibility}
        ></Button>

        <ShoppingCartButton isAnyItem={isAnyItem} />
      </div>
    </>
  );
};
