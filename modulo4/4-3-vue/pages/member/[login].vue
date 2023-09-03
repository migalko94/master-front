<template>
  <div class="container">
    <article>
      <div>
        <img :src="member?.avatar_url" alt="" />
      </div>
      <div>
        <h1>{{ member?.login }}</h1>
        <h2 class="flex">Member of {{ orgStore.organization }}</h2>
        <p>Name: {{ member?.name }}</p>
      </div>

      <div>
        <p class="flex">Id: {{ member?.id }}</p>
        <p class="flex">Company: {{ member?.company }}</p>
        <p class="flex">Bio: {{ member?.bio }}</p>
      </div>
    </article>
    <div class="link">
      <NuxtLink to="/" class="back"
        >Back to {{ orgStore.organization }}</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { singleMemberService } from "~/services/members";

import { DetailMemberEntity } from "~~/types";
import { useStore } from "~/composables/useStore";

const route = useRoute();
const login = route.params.login as string;
const company = route.params.company as string;

const orgStore = useStore();

const { data: member } = useAsyncData<DetailMemberEntity>(() =>
  singleMemberService.getMemberById(login)
);
</script>

<style scoped>
.container {
  margin: 1rem;
  border: 1px solid black;
  border-radius: 8px;
  display: inline-flex;
  padding: 1rem;
  flex-direction: column;
  max-width: 300px;
}
.back {
  display: block;
  margin: 1rem 0;
}

img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.link {
  display: inline-flex;
  justify-content: flex-start;
  color: darkorchid;

  padding: 0.5rem;
}
</style>
