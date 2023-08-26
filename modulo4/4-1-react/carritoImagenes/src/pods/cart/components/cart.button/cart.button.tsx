import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface Props {
  isAnyItem: () => boolean;
}

export const ShoppingCartButton: React.FC<Props> = (props) => {
  const { isAnyItem } = props;

  return (
    <>
      <div className="cart-title">
        <ShoppingCartIcon
          fontSize="large"
          style={{ display: isAnyItem() ? "block" : "none" }}
        ></ShoppingCartIcon>
      </div>
    </>
  );
};
