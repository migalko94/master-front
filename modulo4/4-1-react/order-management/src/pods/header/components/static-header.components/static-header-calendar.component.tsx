import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

export const StaticHeaderCalendarComponent: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Fecha de entrega"
        slotProps={{ textField: { size: "small" } }}
      />
    </LocalizationProvider>
  );
};
