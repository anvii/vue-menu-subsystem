<template>
  <div class="showbox show-contextmenu" @contextmenu.prevent="$refs.menu.show($event)">
    Right-click here to open context menu
    <g-context-menu ref="menu" autohide>
      <g-menu-item label="New" />
      <g-menu-item label="Open" />
      <g-menu-item label="Open recent" keep-menu>
        <g-menu>
          <g-menu-item label="Project 1" />
          <g-menu-item label="Project 2" />
          <g-menu-item label="Project 3" />
        </g-menu>
      </g-menu-item>
      <g-menu-item label="Save" />
      <hr />
      <g-menu-item label="Close (disabled)" disabled />
    </g-context-menu>
  </div>

</template>

<script setup>
import GMenu from '../../../src/GMenu.vue';
import GMenuItem from '../../../src/GMenuItem.vue';
import GContextMenu from '../../../src/GContextMenu.vue';
import './style.css';
</script>

<style>
.show-contextmenu {
  height: 200px;
  display: flex;
  background: #888;
  justify-content: center;
  align-items: center;
}
</style>
