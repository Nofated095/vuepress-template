import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default

export default defineUserConfig({
  base: '/',
  lang: 'en-US',
  // to replace "en" with "zh-CN".
  title: 'My Site',
  description: 'This is my first VuePress site.',
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'PageAtRoot',
        link: '/pageatroot.md',
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/guide/create-a-page.md', '/guide/create-a-document.md'],
      },
      {
        text: 'GitHub',
        link: 'https://github.com/Nofated095/vuepress-examples',
      },
    ],
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      // SidebarItem
      {
        text: 'Home',
        link: '/',
        children: [
          // SidebarItem
          // 字符串 - 页面文件路径
          '/',
        ],
      },
      '/pageatroot.md',
      {
        text: 'Guide',
        link: '/guide/creat-a-page.md',
        children: [
          // SidebarItem
          // 字符串 - 页面文件路径
          '/guide/create-a-page.md',
          '/guide/create-a-document.md',
        ],
      },
    ],
  }),
})
