<template>
  <div id="web-lines" class="flex count-children-8 block">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
#web-lines {
  position: fixed;
  > * {
    height: 100%;
    border-right: 1px solid $border-light-color;
    &:last-of-type {
      border-right: none;
    }
  }
}
</style>
