<!--
    Implementation of context menu
    Usage:

    <div @contextmenu.prevent="$refs.menu.show($event)">
        ...
    </div>

    <g-context-menu ref="menu" @show="..." @hide="...">
        <g-menu-item label="..." />
        .....
    </g-context-menu>
-->
<template>
  <div ref="blocker" class="g-screen-blocker" v-if="visible"
    @click.prevent="hide"
    @contextmenu.prevent="hide"
    @wheel.prevent="false"
    @mouseenter="autohide ? hide() : null"
  >
  </div>
  <g-menu ref="menu" tabindex="0" class="g-context-menu" v-if="visible" v-bind="$attrs"
    @keydown.esc="hide()"
    @keydown="preventScrollByKeys"
    @gclosemenu.prevent.stop="hide()"
  >
    <slot />
  </g-menu>
</template>

<style lang="scss">
.g-context-menu {
  display: inline-flex;
  flex-direction: column;
  position: absolute;

  &:focus {
    outline: none;
  }
}

.g-screen-blocker {
  position: fixed;
  inset: 0;
}

.g-context-menu, .g-screen-blocker {
  z-index: 10;
}

/*
*:has(.g-screen-blocker) {
  overflow: hidden !important;
}
*/
</style>

<script setup>
import { ref, watch } from 'vue';
import GMenu from './GMenu.vue';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  autohide: {
    type: Boolean,
    default: false,
  },
});

defineExpose({
  show, hide,
});

const emit = defineEmits(['show', 'hide']);

const visible = ref(false);
const menu = ref(null);
const blocker = ref(null);

watch(visible, value => {
  emit(value ? 'show' : 'hide');
});

function show(event) {
  console.assert(event, 'GContextMenu.show(): Missing parameter `event`');
  visible.value = true;
  this.$nextTick(() => {
    //resizeBlocker(event);
    reposition(event);
  });
}

function hide() {
  visible.value = false;
}

function reposition(event) {
  const menuEl = menu.value.$el;

  const { innerWidth, innerHeight } = window;
  const { offsetWidth, offsetHeight } = menuEl;
  const shift = 2;   // Shift menu to fix autoclose
  let left = event.clientX - shift;
  let top = event.clientY - shift;

  // Move menu to left side
  if (left + offsetWidth > innerWidth) {
    left = event.clientX - offsetWidth + shift;
  }

  // Move menu to bottom side
  if (top + offsetHeight > innerHeight) {
    top = event.clientY - offsetHeight + shift;
  }

  menuEl.style.position = 'fixed';
  menuEl.style.left = `${left}px`;
  menuEl.style.top = `${top}px`;

  menuEl.focus();
}

function preventScrollByKeys(event) {
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  const keys = {37: 1, 38: 1, 39: 1, 40: 1};
  if (keys[event.keyCode]) {
    event.preventDefault();
    return false;
  }
}

</script>
