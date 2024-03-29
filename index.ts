// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp(context) {
    DefaultTheme.enhanceApp(context)
    const { app, router, siteData } = context
    console.log(app, router, siteData)

    // ...
  },
} satisfies Theme
