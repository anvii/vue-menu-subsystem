<template>
  <ul ref="root" v-show="visible" class="g-menu" @contextmenu.prevent.stop="false" @gclosemenu="hide">
    <slot />
  </ul>
</template>

<style lang="scss">
.g-menu {
  border: 1px solid #ccc;
  display: inline-flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  background: #fff;
  opacity: 0;  // Hide until repositioned
  z-index: 10;

  // divider
  hr {
    border: none;
    border-top: 1px solid #ccc;
    margin: 0.1rem 0;
    width: 100%;
  }
}
</style>

<script setup>
import { onMounted, ref } from 'vue';

const root = ref(null);
const visible = ref(true);

onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        reposition(entry.target);
        entry.target.style.opacity = 1;
      }
      else {
        entry.target.style.opacity = 0;
      }
    });
  });
  observer.observe(root.value);
});

/**
 * Reposition vertical-oriented sub g-menu to left if there is no space at the right
 * 
 * @param el html element
 */
function reposition(el) {

  const parentItem = el.parentElement;
  if (!parentItem?.classList.contains('g-menu-item')) {
    return;
  }

  el.style.top = '';
  el.style.left = '';

  const parentMenu = parentItem.parentElement;

  const { innerWidth, innerHeight } = window;
  const { offsetWidth, offsetHeight } = el;

  const parentRect = parentMenu.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();


  // Child of g-menu-bar
  if (parentMenu.classList.contains('g-menu-bar')) {

    if (parentRect.bottom + offsetHeight > innerHeight) {
      el.style.top = `-${offsetHeight}px`;
    }
    
    if (elRect.left + elRect.width > innerWidth) {
      el.style.left = `${-elRect.width+parentItem.offsetWidth}px`;
    }
    
  }
  else {
    if (parentRect.right + offsetWidth > innerWidth) {
      el.style.left = `-${offsetWidth}px`;
    }
  }
}

/**
 * Hide menu
 */
function hide(event) {
  event.stopPropagation();
  event.preventDefault();
  // Switch off property `visible` temporary to emit proper `mouseleave` event
  visible.value = false;
  setTimeout(() => visible.value = true, 100);
}
</script>
