import { PictureInfoVM } from "@/core/common";

import { PictureInfoMockApi } from "./mock.api.model";

const mapDataHelper = (data: PictureInfoMockApi): PictureInfoVM => {
  return {
    id: data.id,
    picUrl: data.picUrl,
    title: data.title,
    selected: false,
  };
};

export const mapDataToVM = (data: PictureInfoMockApi[]): PictureInfoVM[] => {
  return data.map(mapDataHelper);
};
