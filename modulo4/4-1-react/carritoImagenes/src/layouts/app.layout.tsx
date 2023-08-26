import React from "react";

import { Provider } from "@/core";

interface Props extends React.PropsWithChildren {}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <Provider>
      <div className="my-layout">{children}</div>
    </Provider>
  );
};
