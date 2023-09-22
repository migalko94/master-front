import React from "react";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export const StaticHeaderProviderComponent: React.FC = () => {
  const [provider, setProvider] = React.useState("");

  const handleProvider = (event: SelectChangeEvent) =>
    setProvider(event.target.value);

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="select-provider">Proveedor</InputLabel>
      <Select
        labelId="select-provider"
        id="select-provider"
        value={provider}
        label="Proveedor"
        onChange={handleProvider}
      >
        <MenuItem value={1}>Aparejadores del Levante</MenuItem>
        <MenuItem value={2}>Construcciones del Norte</MenuItem>
        <MenuItem value={3}>Ingenieros del Mundo</MenuItem>
      </Select>
    </FormControl>
  );
};
