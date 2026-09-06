<template>
  <div class="showbox">
    <g-menu-bar>
      <g-menu-item label="File">
        <g-menu>
          <g-menu-item label="New" />
          <g-menu-item label="Open" />
          <g-menu-item label="Open recent">
            <g-menu>
              <g-menu-item label="Project 1" />
              <g-menu-item label="Project 2" />
              <g-menu-item label="Project 3" />
            </g-menu>
          </g-menu-item>
          <g-menu-item label="Save" />
          <hr />
          <g-menu-item label="Close (disabled)" disabled />
        </g-menu>
      </g-menu-item>

      <g-menu-item label="Edit">
        <g-menu>
          <g-menu-item label="Undo" />
          <g-menu-item label="Redo" disabled />
          <hr />
          <g-menu-item label="Cut" />
          <g-menu-item label="Copy" />
          <g-menu-item label="Paste" />
        </g-menu>
      </g-menu-item>

      <g-menu-item label="By click" trigger="click">
        <g-menu>
          <g-menu-item label="New" />
          <g-menu-item label="Open" />
          <g-menu-item label="Open recent" trigger="click">
            <g-menu>
              <g-menu-item label="Project 1" />
              <g-menu-item label="Project 2" />
              <g-menu-item label="Project 3" />
            </g-menu>
          </g-menu-item>
          <g-menu-item label="Save" />
          <hr />
          <g-menu-item label="Close (disabled)" disabled />
        </g-menu>
      </g-menu-item>

      <div style="flex-grow: 1;"></div>
      
      <g-menu-item label="Help">
        <g-menu>
          <g-menu-item label="Documentation" />
          <g-menu-item label="About" />
        </g-menu>
      </g-menu-item>
    </g-menu-bar>
  </div>
</template>

<script setup>
import GMenu from '../../../src/GMenu.vue';
import GMenuItem from '../../../src/GMenuItem.vue';
import GMenuBar from '../../../src/GMenuBar.vue';
import './style.css';
</script>
