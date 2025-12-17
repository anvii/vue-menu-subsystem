<template>
  <div class="showbox">
    <g-menu-bar>
      <g-menu-item label="Catalog">
        <g-menu class="catalog-menu">
          <li v-for="g in 3" class="catalog-group">
            <div class="group-title">Group {{ g }}</div>
            <ul class="group">
              <g-menu-item v-for="i in 5" :label="`Menu item ${i}`" />
            </ul>
          </li>
        </g-menu>
      </g-menu-item>
    </g-menu-bar>
  </div>
</template>

<style>
.catalog-menu {
  padding: 10px !important;
  columns: 3;
}
.g-menu-item:hover > ul.catalog-menu.g-menu {
  display: block;
}
.group-title {
  padding: 10px 15px;
  font-weight: bold;
}
ul.group {
  padding: 0;
  min-width: 150px;
}
</style>

<script setup>
import GMenu from '../../../src/GMenu.vue';
import GMenuItem from '../../../src/GMenuItem.vue';
import GMenuBar from '../../../src/GMenuBar.vue';
import './style.css';
</script>
