import React from "react";

import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";

import { Context } from "@/core";

export const ValidationComponent: React.FC = () => {
  const [, setChecked] = React.useState<boolean>(null);

  const { setValidation } = React.useContext(Context);

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
