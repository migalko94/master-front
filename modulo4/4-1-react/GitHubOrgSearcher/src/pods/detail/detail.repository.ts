import * as api from "./api/api";
import { mapMemberDetailToVM } from "./detail.mapper";
import { DetailMemberEntity } from "./detail.vm";

export const getDetailMember = (id: string): Promise<DetailMemberEntity> => {
  return api.getMemberDetail(id).then(mapMemberDetailToVM);
};
