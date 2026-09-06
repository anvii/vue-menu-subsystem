<template>
  <div class="showbox">
    <g-menu>
      <g-menu-item label="New" keep-menu>
        <template #icon>
          <i class="fas fa-file"></i>
        </template>
      </g-menu-item>
      <g-menu-item label="Open" keep-menu>
        <template #icon>
          <i class="fas fa-folder-open"></i>
        </template>
      </g-menu-item>
      <g-menu-item label="Open recent">
        <template #icon>
          <i class="fas"></i>
        </template>
        <g-menu>
          <g-menu-item label="Project 1" />
          <g-menu-item label="Project 2" />
          <g-menu-item label="Project 3" />
        </g-menu>
      </g-menu-item>
      <g-menu-item label="Save" keep-menu>
        <template #icon>
          <i class="fas fa-save"></i>
        </template>
      </g-menu-item>
      <hr />
      <g-menu-item label="Close (disabled)" disabled>
        <template #icon>
          <i class="fas fa-window-close"></i>
        </template>
      </g-menu-item>
    </g-menu>
  </div>
</template>

<script setup>
import GMenu from '../../../src/GMenu.vue';
import GMenuItem from '../../../src/GMenuItem.vue';
import './style.css';
</script>
