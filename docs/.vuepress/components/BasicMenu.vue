<template>
  <div class="showbox">
    <g-menu>
      <g-menu-item label="New" keep-menu />
      <g-menu-item label="Open" keep-menu />
      <g-menu-item label="Open recent" keep-menu>
        <g-menu>
          <g-menu-item label="Project 1" />
          <g-menu-item label="Project 2" />
          <g-menu-item label="Project 3" />
        </g-menu>
      </g-menu-item>
      <g-menu-item label="Save" keep-menu />
      <hr />
      <g-menu-item label="Close (disabled)" disabled />
    </g-menu>
  </div>
</template>

<script setup>
import GMenu from '../../../src/GMenu.vue';
import GMenuItem from '../../../src/GMenuItem.vue';
import './style.css';
</script>
