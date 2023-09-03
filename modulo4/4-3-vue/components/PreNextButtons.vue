<template>
  <div class="prevNextButtonContainer">
    <button
      class="button"
      @click="store.previousSet"
      :disabled="
        store.firstMember + store.showedMembers === store.showedMembers
      "
    >
      Previous
    </button>
    <button
      class="button"
      @click="store.nextSet"
      :disabled="firstMember + showedMembers >= list.length - 1"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { MemberEntity } from "~/types";
const store = useStore();

defineProps<{
  list: MemberEntity[];
  firstMember: number;
  showedMembers: number;
}>();
</script>

<style lang="scss" scoped>
.prevNextButtonContainer {
  display: flex;
  gap: 1.5rem;
  margin: 1rem;
  justify-content: center;
  .button {
    font-size: 16px;
  }
  .button:disabled {
    background-color: lightgray;
    color: whitesmoke;
  }
}
</style>
