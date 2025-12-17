<!--
  Implementation of horizontal-oriented menu
-->
<template>
  <g-menu class="g-menu-bar">
    <slot />
  </g-menu>
</template>

<style lang="scss">
.g-menu-bar {
  display: flex;
  flex-direction: row;

  // Caret-right must not be shown in horizontal menu
  > .g-menu-item:has(.g-menu) {
    &::after {
      content: "";
      display: none;
      padding: 0;
    }
  }
}
</style>

<script setup>
import GMenu from './GMenu.vue';
</script>
