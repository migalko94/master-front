import { ApiOrderInfo } from "./mock.api.model";
import { VMOrderInfo } from "./mock.vm";

const mapDataHelper = (data: ApiOrderInfo): VMOrderInfo => ({
  id: data.id,
  description: data.description,
  price: data.price,
  selected: false,
  validation: false,
});

export const mapDataToVM = (data: ApiOrderInfo[]): VMOrderInfo[] =>
  data.map(mapDataHelper);
