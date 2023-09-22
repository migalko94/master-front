import React from "react";

import { AppLayout } from "./layouts";
import { OrderListScene } from "./scenes";

export const App = () => {
  return (
    <AppLayout>
      <OrderListScene />
    </AppLayout>
  );
};
