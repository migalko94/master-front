import * as api from "./api/api";

import { mapMembersToVM } from "./list.mappers";
import { MemberEntity } from "./list.vm";

export const getMembers = (organization: string): Promise<MemberEntity[]> => {
  return api.getMembers(organization).then(mapMembersToVM);
};
