<template>
  <div id="web-lines" class="count-children-8 block">
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

<style lang="scss">
#web-lines {
  position: fixed;
  > * {
    height: 100%;
    border-right: 1px solid #F2F2F2;
    &:last-of-type {
      border-right: none;
    }
  }
}
</style>
