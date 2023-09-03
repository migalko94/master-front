import { DetailMemberEntity, MemberEntity } from "~~/types";

export const membersService = {
  async getOrganization(organization: string) {
    const response = await fetch(
      `https://api.github.com/orgs/${organization}/members`
    );
    if (!response.ok) {
      throw new Error("No se pudo conectar con el servidor");
    }
    const members = await response.json();
    return members as MemberEntity[];
  },
};

export const singleMemberService = {
  async getMemberById(login: string) {
    const member = await fetch(`https://api.github.com/users/${login}`).then(
      (r) => r.json()
    );
    return member as DetailMemberEntity;
  },
};
