<template>
  <div id="app">
    <the-web-lines />
    <the-navigation />
    <!-- Content -->
    <main class="content block">
      <router-view />
    </main>
  </div>
</template>

<script>
import TheWebLines from "@/components/TheWebLines.vue";
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: {
    TheWebLines,
    TheNavigation
  }
};
</script>

<style lang="scss">
@import "./assets/scss/system";
@import "./assets/scss/main";
</style>
