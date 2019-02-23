<template>
  <nav
    id="navigation"
    class="flex col-6 x-center justify-between align-items-center p-between-x-4"
  >
    <div>
      <router-link to="/">LOGO</router-link>
    </div>
    <ul class="flex m-right-children-2 align-items-center">
      <router-link tag="li" to="/">
        <a>Home</a>
      </router-link>
      <router-link tag="li" to="/about">
        <a>About us</a>
      </router-link>
      <router-link tag="li" to="/contact">
        <a>Contact</a>
      </router-link>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
#navigation {
  @include high-priority;
  height: rem(100);
  position: fixed;
  font-weight: 700;
}
</style>
