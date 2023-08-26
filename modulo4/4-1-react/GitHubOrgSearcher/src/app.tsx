import React from "react";

import { AppRouter, OrganizationProvider } from "@/core";

export const App = () => {
  return (
    <OrganizationProvider>
      <AppRouter />
    </OrganizationProvider>
  );
};
