import React from "react";
import { VMOrderInfo } from "../common";

interface ContextModel {
  order: VMOrderInfo[];
  setOrder: (order: VMOrderInfo[]) => void;

  queue: VMOrderInfo[];
  addToQueue: (item: VMOrderInfo) => void;
  removeFromQueue: (item: VMOrderInfo) => void;
  isInQueue: (item: VMOrderInfo) => boolean;

  getTotalPrice: (order: VMOrderInfo[]) => number;
  getPercentage: (order: VMOrderInfo[]) => number;
  setPrice: (item: VMOrderInfo, value: number) => void;
  setValidation: (isValid: boolean) => void;
}

export const Context = React.createContext<ContextModel>(null);
