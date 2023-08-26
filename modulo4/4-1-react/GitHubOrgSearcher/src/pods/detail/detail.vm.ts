export interface DetailMemberEntity {
  id: number;
  login: string;
  name: string;
  company: string;
  bio: string;
  avatarUrl: string;
}

export const createDefaultMemberDetail = (): DetailMemberEntity => ({
  id: null,
  login: "",
  name: "",
  company: "",
  bio: "",
  avatarUrl: "",
});
