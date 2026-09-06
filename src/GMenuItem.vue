<template>
  <li
    ref="item"
    class="g-menu-item" :class="{ disabled: disabled, open: open, }"
    @mouseover="onMouseOver"
    @mouseleave="onMouseLeave"
    @click.stop="onClick"
  >
    <slot name="icon"></slot>
    <span v-if="label" class="label">{{ label }}</span>
    <slot />
  </li>
</template>

<style lang="scss">
.g-menu-item {
  display: flex;
  gap: 8px;
  align-items: center;
  position: relative;
  list-style: none;
  padding: 4px 14px;
  cursor: pointer;
  user-select: none;

  &.disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  &:hover {
    background-color: #ccc;
  }

  // Children are always vertical
  &.open {
    & > ul.g-menu {
      display: flex;
      flex-direction: column;
    }
  }

  // Added caret right to parent item
  &:has(.g-menu) {
    &::after {
      content: "🞂";
      padding-left: 10px;
    }
  }

  // Label has full width but keeps space for caret
  > span.label {
    flex-grow: 1;
  }

  // Child menu block
  ul.g-menu {
    display: none;
    position: absolute;
    top: 0;
    left: 100%;
    border: 1px solid #ccc;
    padding: 0;
    margin: 0;
    list-style: none;
    min-width: 150px;

    .g-menu-item {
      width: 100%;
      box-sizing: border-box;
    }
  }

  .g-icon {
    width: 24px;
  }
}

.g-menu-bar > .g-menu-item > .g-menu {
    left: 0;
    top: 100%;
}
</style>

<script setup>
import { ref } from 'vue';

const item = ref(null);
const open = ref(false);

const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  keepMenu: {
    type: Boolean,
    default: false,
  },
  trigger: {
    type: String,
    default: 'hover',   // Available options: 'hover', 'click'
  },
});

function onClick(e) {
  const parent = item.value?.closest('.g-menu');
  const childMenu = item.value.querySelector('.g-menu') != null;

  if (childMenu) {
    if (props.trigger == 'click') {
      open.value = !open.value;
    }
  }
  else if (parent && !props.keepMenu) {
    parent.dispatchEvent(new Event('gclosemenu'));
  }
}

function onMouseOver(e) {
  if (props.trigger == 'hover') {
    open.value = true;
  }
}

function onMouseLeave(e) {
  open.value = false;
}
</script>
