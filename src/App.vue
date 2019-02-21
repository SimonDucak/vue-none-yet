<template>
  <div id="app">
    <WebLines />

    <nav id="nav" class="col-6 justify-between align-items-center x-center p-between-x-4">
      <div></div>
      <ul class="m-right-children-2 align-items-center">
        <router-link tag="li" to="/">
          <a>Home</a>
        </router-link>
        <router-link tag="li" to="/about">
          <a>About us</a>
        </router-link>
        <router-link tag="li" to="/contact">
          <button>Contact</button>
        </router-link>
      </ul>
    </nav>

    <router-view />
  </div>
</template>

<script>
import WebLines from "@/components/web_lines.vue";

export default {
  components: {
    WebLines
  }
};
</script>

<style lang="scss">
//
// Settings
//
// Grid settings
$count-column: 8;
// Padding settings
$count-padding: 6;
$padding-size: 1;
$padding-unit: rem;
$allow-padding: false;
$allow-padding-left: false;
$allow-padding-right: false;
$allow-padding-bottom: false;
$allow-padding-top: false;
$allow-padding-between-x: true;
$allow-padding-between-y: false;
// Padding children settings
$allow-padding-children: false;
$allow-padding-left-children: false;
$allow-padding-right-children: false;
$allow-padding-bottom-children: false;
$allow-padding-top-children: false;
$allow-padding-between-children-x: false;
$allow-padding-between-children-y: false;
// Margin settings
$count-margin: 6;
$margin-size: 1;
$margin-unit: rem;
$allow-margin: false;
$allow-margin-left: false;
$allow-margin-right: false;
$allow-margin-bottom: false;
$allow-margin-top: false;
$allow-margin-between-x: false;
$allow-margin-between-y: false;
// Margin children settings
$allow-margin-children: false;
$allow-margin-left-children: false;
$allow-margin-right-children: true;
$allow-margin-bottom-children: false;
$allow-margin-top-children: false;
$allow-margin-between-children-x: false;
$allow-margin-between-children-y: false;
//
// Functions
//
@function rem($number) {
  @return $number / 16 + rem;
}
//
// Mixins
//
@mixin google-font($font) {
  $font: unquote($font);
  @import url(https://fonts.googleapis.com/css?family=#{$font}:400,700&amp;subset=latin-ext);
}
@mixin remove-margin-padding {
  margin: 0;
  padding: 0;
}
@mixin low-priority {
  z-index: 100;
}
@mixin medium-priority {
  z-index: 200;
}
@mixin high-priority {
  z-index: 300;
}
//
// Grid SCSS system
//
@for $i from 2 through $count-column {
  .count-children-#{$i} {
    > * {
      width: #{100% / $i};
    }
  }
}
@for $i from 1 through $count-column {
  .col-#{$i} {
    width: #{100% / $count-column * $i};
  }
}
//
// Flex SCSS system
//
$flex-values-list: (
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between"
);
@each $key, $val in $flex-values-list {
  .justify-#{$key} {
    justify-content: #{$val};
  }
}
@each $key, $val in $flex-values-list {
  .align-items-#{$key} {
    align-items: #{$val};
  }
}
//
// Basic SCSS
//
// Padding
@if ($allow-padding) {
  @for $i from 1 through $count-padding {
    .p-#{$i} {
      padding: #{$i * $padding-size}$padding-unit;
    }
  }
}
@if ($allow-padding-right) {
  @for $i from 1 through $count-padding {
    .p-right-#{$i} {
      padding-right: #{$i * $padding-size}$padding-unit;
    }
  }
}
@if ($allow-padding-left) {
  @for $i from 1 through $count-padding {
    .p-left-#{$i} {
      padding-left: #{$i * $padding-size}$padding-unit;
    }
  }
}
@if ($allow-padding-bottom) {
  @for $i from 1 through $count-padding {
    .p-bottom-#{$i} {
      padding-bottom: #{$i * $padding-size}$padding-unit;
    }
  }
}
@if ($allow-padding-top) {
  @for $i from 1 through $count-padding {
    .p-top-#{$i} {
      padding-top: #{$i * $padding-size}$padding-unit;
    }
  }
}
@if ($allow-padding-between-x) {
  @for $i from 1 through $count-padding {
    .p-between-x-#{$i} {
      padding: 0 #{$i * $padding-size}$padding-unit;
    }
  }
}
@if ($allow-padding-between-y) {
  @for $i from 1 through $count-padding {
    .p-between-y-#{$i} {
      padding: #{$i * $padding-size}$padding-unit 0;
    }
  }
}
// Padding children
@if ($allow-padding-children) {
  @for $i from 1 through $count-padding {
    .p-children-#{$i} {
      > * {
        padding: #{$i * $padding-size}$padding-unit;
        &:last-of-type {
          padding: 0;
        }
      }
    }
  }
}
@if ($allow-padding-right-children) {
  @for $i from 1 through $count-padding {
    .p-right-children-#{$i} {
      > * {
        padding-right: #{$i * $padding-size}$padding-unit;
      }
      &:last-of-type {
        padding-right: 0;
      }
    }
  }
}
@if ($allow-padding-left-children) {
  @for $i from 1 through $count-padding {
    .p-left-children-#{$i} {
      > * {
        padding-left: #{$i * $padding-size}$padding-unit;
        &:last-of-type {
          padding-left: 0;
        }
      }
    }
  }
}
@if ($allow-padding-bottom-children) {
  @for $i from 1 through $count-padding {
    .p-bottom-children-#{$i} {
      > * {
        padding-bottom: #{$i * $padding-size}$padding-unit;
        &:last-of-type {
          padding-bottom: 0;
        }
      }
    }
  }
}
@if ($allow-padding-top-children) {
  @for $i from 1 through $count-padding {
    .p-top-children-#{$i} {
      > * {
        padding-top: #{$i * $padding-size}$padding-unit;
        &:last-of-type {
          padding-top: 0;
        }
      }
    }
  }
}
@if ($allow-padding-between-children-x) {
  @for $i from 1 through $count-padding {
    .p-between-x-#{$i} {
      > {
        padding: 0 #{$i * $padding-size}$padding-unit;
      }
    }
  }
}
@if ($allow-padding-between-children-y) {
  @for $i from 1 through $count-padding {
    .p-between-y-#{$i} {
      > * {
        padding: #{$i * $padding-size}$padding-unit 0;
      }
    }
  }
}
// Margin
@if ($allow-margin) {
  @for $i from 1 through $count-margin {
    .m-#{$i} {
      margin: #{$i * $padding-size}$margin-unit;
    }
  }
}
@if ($allow-margin-right) {
  @for $i from 1 through $count-margin {
    .m-right-#{$i} {
      margin-right: #{$i * $margin-size}$margin-unit;
    }
  }
}
@if ($allow-margin-bottom) {
  @for $i from 1 through $count-margin {
    .m-bottom-#{$i} {
      margin-bottom: #{$i * $margin-size}$margin-unit;
    }
  }
}
@if ($allow-margin-left) {
  @for $i from 1 through $count-margin {
    .m-left-#{$i} {
      margin-left: #{$i * $margin-size}$margin-unit;
    }
  }
}
@if ($allow-margin-top) {
  @for $i from 1 through $count-margin {
    .m-top-#{$i} {
      margin-top: #{$i * $margin-size}$margin-unit;
    }
  }
}
@if ($allow-margin-between-x) {
  @for $i from 1 through $count-margin {
    .m-between-x-#{$i} {
      margin: 0 #{$i * $margin-size}$margin-unit;
    }
  }
}
@if ($allow-margin-between-y) {
  @for $i from 1 through $count-margin {
    .m-between-y-#{$i} {
      margin: #{$i * $margin-size}$margin-unit 0;
    }
  }
}
// Margin children
@if ($allow-margin-children) {
  @for $i from 1 through $count-margin {
    .m-children-#{$i} {
      > * {
        margin: #{$i * $padding-size}$margin-unit;
        &:last-of-type {
          margin: 0;
        }
      }
    }
  }
}
@if ($allow-margin-right-children) {
  @for $i from 1 through $count-margin {
    .m-right-children-#{$i} {
      > * {
        margin-right: #{$i * $margin-size}$margin-unit;
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
  }
}
@if ($allow-margin-bottom-children) {
  @for $i from 1 through $count-margin {
    .m-bottom-children-#{$i} {
      > * {
        margin-bottom: #{$i * $margin-size}$margin-unit;
        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
}
@if ($allow-margin-left-children) {
  @for $i from 1 through $count-margin {
    .m-left-children-#{$i} {
      > * {
        margin-left: #{$i * $margin-size}$margin-unit;
        &:last-of-type {
          margin-left: 0;
        }
      }
    }
  }
}
@if ($allow-margin-top-children) {
  @for $i from 1 through $count-margin {
    .m-top-children-#{$i} {
      > * {
        margin-top: #{$i * $margin-size}$margin-unit;
        &:last-of-type {
          margin-top: 0;
        }
      }
    }
  }
}
@if ($allow-margin-between-children-x) {
  @for $i from 1 through $count-margin {
    .m-between-x-#{$i} {
      > * {
        margin: 0 #{$i * $margin-size}$margin-unit;
      }
    }
  }
}
@if ($allow-margin-between-children-y) {
  @for $i from 1 through $count-margin {
    .m-between-y-#{$i} {
      > * {
        margin: #{$i * $margin-size}$margin-unit 0;
      }
    }
  }
}
// End of margin and padding
//
// Project Variables
//
// Colors
$light-color: #FFF;
$dark-color: #343434;
// Fonts
$primary-font: 'Raleway';
//
// Project styles
//
html {
  font-size: 1rem;
}
@include google-font($primary-font);
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  background-color: $light-color;
  color: $dark-color;
  font-family: $primary-font, "sans-serif";
  @include remove-margin-padding;
  *,
  *:after,
  *:before {
    display: flex;
    position: relative;
    box-sizing: inherit;
    @include remove-margin-padding;
  }
}
a {
  color: inherit;
  text-decoration: none;
}
button {
  background-color: $dark-color;
  color: $light-color;
  border: 2px solid $dark-color;
  padding: rem(8) rem(25);
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
}
.block {
  width: 100%;
  height: 100%;
}
.x-center {
  left: 50%;
  transform: translateX(-50%);
}
// Specific styles
#nav {
  display: none;
  position: fixed;
  height: rem(80);
  font-weight: 700;
}
</style>
