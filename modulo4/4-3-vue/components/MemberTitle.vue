<template>
  <li>
    <article class="grid member-title-container card">
      <div class="member-container__content">Avatar</div>
      <div class="member-container__content">Login</div>
      <div class="flex member-container__aside">
        <div class="text-align-end aside__price">Id</div>
      </div>
    </article>
  </li>
</template>

<style lang="scss" scoped>
.member-title-container {
  font-family: "Roboto", sans-serif;
  align-items: flex-start;
  grid-template-columns: 210px 1fr 100px;
  background-color: black;
  color: white;
  margin: 1rem;
}

.member-container__content {
  padding: 0 1em;
}

.member-container__aside {
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
