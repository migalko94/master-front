import React from "react";

import { Context } from "@/core";
import { PictureInfoVM } from "@/core/common";

import { Row } from "@/pods";

interface Props {
  puppy: PictureInfoVM;
}

export const PuppiesRowContainer: React.FC<Props> = (props) => {
  const { puppy } = props;
  const { addToCart, removeFromCart, isItemInCart } = React.useContext(Context);

  const [checked, setChecked] = React.useState(isItemInCart(puppy));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    checked ? removeFromCart(puppy) : addToCart(puppy);
  };

  React.useEffect(() => {
    setChecked(isItemInCart(puppy));
  }, [isItemInCart(puppy)]);

  return <Row item={puppy} handleChange={handleChange} checked={checked} />;
};
