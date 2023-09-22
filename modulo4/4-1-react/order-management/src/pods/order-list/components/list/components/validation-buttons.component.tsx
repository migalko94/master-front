import React from "react";

import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";

import { Context } from "@/core";

export const ValidationComponent: React.FC = () => {
  const [, setChecked] = React.useState<boolean>(null);

  const { order, setOrder } = React.useContext(Context);

  const setValidation = (isValid: boolean) => {
    const updatedOrder = order.map((orderItem) => {
      if (orderItem.selected === true) {
        return { ...orderItem, validation: isValid };
      } else {
        return orderItem;
      }
    });

    return setOrder(updatedOrder);
  };

  const handleCheck = (checked: boolean) => {
    setChecked(checked);
    setValidation(checked);
  };

  return (
    <Box padding={3}>
      <ToggleButtonGroup color="primary" exclusive aria-label="Platform">
        <ToggleButton value={""} onClick={() => handleCheck(true)}>
          Validar
        </ToggleButton>
        <ToggleButton value={""} onClick={() => handleCheck(false)}>
          Invalidar
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
