import * as am from "./api/api.model";
import * as vm from "./list.vm";

const mapMemberHelper = (data: am.MemberEntity): vm.MemberEntity => {
  return {
    id: data.id,
    login: data.login,
    avatarUrl: data.avatar_url,
  };
};

export const mapMembersToVM = (data: am.MemberEntity[]): vm.MemberEntity[] => {
  return data.map(mapMemberHelper);
};
