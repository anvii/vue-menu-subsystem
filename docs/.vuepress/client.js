import { defineClientConfig } from 'vuepress/client';
import BasicMenu from './components/BasicMenu.vue';
import MenuBar from './components/MenuBar.vue';
import ContextMenu from './components/ContextMenu.vue';
import MaterialBasicMenu from './components/MaterialBasicMenu.vue';
import AwesomeBasicMenu from './components/AwesomeBasicMenu.vue';
import Checkboxes from './components/Checkboxes.vue';
import Catalog from './components/Catalog.vue';

export default defineClientConfig({
  enhance({ app }) {
    app.component('BasicMenu', BasicMenu);
    app.component('MenuBar', MenuBar);
    app.component('ContextMenu', ContextMenu);
    app.component('MaterialBasicMenu', MaterialBasicMenu);
    app.component('AwesomeBasicMenu', AwesomeBasicMenu);
    app.component('Checkboxes', Checkboxes);
    app.component('Catalog', Catalog);
  },
});
