<template>
  <div class="showbox">
    <g-menu>
      <label class="g-menu-item">
        <input type="checkbox">
        Left
      </label>
      <label class="g-menu-item">
        <input type="checkbox">
        Top
      </label>
      <label class="g-menu-item">
        <input type="checkbox">
        Right
      </label>
      <label class="g-menu-item">
        <input type="checkbox">
        Bottom
      </label>
    </g-menu>
  </div>
</template>

<script setup>
import GMenu from '../../../src/GMenu.vue';
import './style.css';
</script>
