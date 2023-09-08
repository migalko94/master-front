import React from "react";

import { Alert, Box, Button, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { Context } from "@/core";

export const CompleteComponent: React.FC = () => {
  const { getPercentage, order } = React.useContext(Context);

  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Pedido completado con éxito
        </Alert>
      </Collapse>
      <Button
        disabled={getPercentage(order) >= 100 ? false : true}
        variant="contained"
        onClick={() => {
          setOpen(true);
        }}
      >
        Enviar
      </Button>
    </Box>
  );
};
