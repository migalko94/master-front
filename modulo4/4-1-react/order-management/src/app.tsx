import React from "react";

import { AppLayout } from "./layouts";
import { OrderDetailScene, HeaderScene } from "./scenes";

export const App = () => {
  return (
    <AppLayout>
      <HeaderScene />
      <OrderDetailScene />
    </AppLayout>
  );
};
