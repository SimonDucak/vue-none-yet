<template>
  <div id="app">
    <the-navigation />
    <!-- Content -->
    <main class="content block">
      <router-view />
    </main>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: {
    TheNavigation
  }
};
</script>

<style lang="scss">
@import "./assets/scss/system";
@import "./assets/scss/main";
</style>
