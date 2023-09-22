import React from "react";

import { VMOrderInfo } from "@/core/common";

interface ContextModel {
  order: VMOrderInfo[];
  setOrder: (order: VMOrderInfo[]) => void;
}

export const Context = React.createContext<ContextModel>(null);
