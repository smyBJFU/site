import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SMY NOTE",
  description: "学习笔记",

  // srcDir: 'docs',
  base: '/site/',
  head: [
    ['link', { rel: 'icon', href: '/site/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // siteTitle: 'KJQ',
    nav: [

      { text: '主页', link: '/' },
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
    // 广告配置
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // },
    sidebar: false,

    // 最后更新时间戳
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 底部信息
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Your Name'
    },

    search: {
      provider: 'local' ,// 使用本地搜索
    },

    outline: {
      level: [1, 2, 3],
      label: '目录'
    },

    // docFooter: {
    //   prev: '上一页',
    //   next: '下一页'
    // },


  }
})