import { defineStore } from "pinia";
import { membersService } from "~/services/members";

export const useStore = defineStore("org", () => {
  const organization = ref("lemoncode");
  const showedMembers = 3;
  let firstMember = ref(0);
  const getMembers = async (organization: string) =>
    await membersService.getOrganization(organization);

  const nextSet = () => {
    return (firstMember.value = firstMember.value + showedMembers);
  };

  const previousSet = () => {
    return (firstMember.value = firstMember.value - showedMembers);
  };

  return {
    organization,
    getMembers,
    showedMembers,
    firstMember,
    nextSet,
    previousSet,
  };
});
