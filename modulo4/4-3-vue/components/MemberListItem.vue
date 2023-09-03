<template>
  <article class="grid member-container card">
    <div class="image">
      <img :src="member.avatar_url" alt="" loading="lazy" />
    </div>
    <div class="member-container__content">
      {{ member.login }}
    </div>
    <div class="flex member-container__aside">
      <div class="text-align-end aside__price">
        {{ member.id }}
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { MemberEntity } from "~/types";

defineProps<{
  list: MemberEntity[];
  member: MemberEntity;
}>();
</script>

<style lang="scss" scoped>
.member-container {
  align-items: flex-start;
  grid-template-columns: 210px 1fr 100px;
  margin: 1rem;
}

.image {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  img {
    width: 70%;
    border-radius: 8px;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
}

.member-container__aside {
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
