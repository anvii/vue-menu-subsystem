import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
  bundler: viteBundler(),
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=draft,folder_open,save' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css', integrity: "sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==", crossorigin: "anonymous", referrerpolicy: "no-referrer" }]
  ],
  theme: defaultTheme({
    navbar: [
      { text: 'Base demo', link: '/' },
      { text: 'Styling', link: '/Styling' },
      { text: 'Customization', link: '/Customize' },
      { text: 'API', link: '/API' },
    ],
  }),

  lang: 'en-US',
  title: 'Vue Menu Subsystem',
  description: 'Vue components for creating menus in web applications',
  base: '/menu/',
});
