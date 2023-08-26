import * as mock from "./mock.api.model";

import { mapDataToVM } from "./mock.mappers";

import { PictureInfoVM } from "@/core/common";

export const getData = (): Promise<PictureInfoVM[]> => {
  return mock.getData().then(mapDataToVM);
};
