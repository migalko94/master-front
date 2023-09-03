<template>
  <form @submit.prevent="onSubmit">
    <input
      class="search-org"
      type="text"
      v-model="store.organization"
      placeholder="Search organization..."
    />
    <button class="button" type="submit">Search</button>
  </form>

  <ul class="member-list">
    <MemberTitle />
    <li
      v-for="member in Array.from(list).slice(
        store.firstMember,
        store.firstMember + store.showedMembers
      )"
      :key="member.id"
    >
      <NuxtLink :to="`member/${member.login}`">
        <MemberListItem :list="list" :member="member" />
      </NuxtLink>
    </li>
  </ul>
  <PreNextButtons
    :list="list"
    :firstMember="store.firstMember"
    :showedMembers="store.showedMembers"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "~/composables/useStore";

const store = useStore();

let list = ref(await store.getMembers(store.organization));

const onSubmit = async () => {
  store.firstMember = 0;
  list.value = await store.getMembers(store.organization);
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");

.member-list {
  padding: 0;
  li {
    margin-bottom: 2em;
  }
}

.search-org {
  height: 30px;
  width: 230px;
  margin: 1rem;
}
</style>
