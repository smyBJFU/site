import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  base: '/site/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'JAVA WEB',
        items: [
          { text: 'JAVA', link: '/JAVA' },
          { text: 'SpringBoot', link: '/SpringBoot' },
          { text: 'SpringCloud', link: '/SpringCloud' },
        ]
      },
      { text: '前端',
        items: [
          { text: 'nuxt.js', link: '/NuxtJS' },
          { text: 'vue.js', link: '/VueJs' },
        ]
      },
      { text: '八股文', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: false,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    outline: {
      level: [1, 2, 3],
      label: '目录'
    }
  }
})