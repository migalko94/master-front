import React from "react";

import { Context } from "@/core";
import { PictureInfoVM } from "@/core/common";
import { Row } from "@/pods";

interface Props {
  kitty: PictureInfoVM;
}

export const KittiesRowContainer: React.FC<Props> = (props) => {
  const { kitty } = props;
  const { addToCart, removeFromCart, isItemInCart } = React.useContext(Context);

  const [checked, setChecked] = React.useState(isItemInCart(kitty));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    checked ? removeFromCart(kitty) : addToCart(kitty);
  };

  React.useEffect(() => {
    setChecked(isItemInCart(kitty));
  }, [isItemInCart(kitty)]);

  return <Row item={kitty} handleChange={handleChange} checked={checked} />;
};
