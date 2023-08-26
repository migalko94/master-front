import * as am from "./api/api.model";
import * as vm from "./detail.vm";

export const mapMemberDetailToVM = (
  data: am.DetailMemberEntity
): vm.DetailMemberEntity => {
  return {
    id: data.id,
    login: data.login,
    avatarUrl: data.avatar_url,
    name: data.name,
    company: data.company,
    bio: data.bio,
  };
};
