import { getApiData } from "./mock.api.model";
import { mapDataToVM } from "./mock.mappers";
import { VMOrderInfo } from "./mock.vm";

export const getVMData = (): Promise<VMOrderInfo[]> =>
  getApiData().then(mapDataToVM);
