<script setup lang="ts">
import { useData } from 'vitepress'
import Theme from 'vitepress/theme'

import SHeader from './components/SHeader.vue'

import { loadPage } from './routes'

const { frontmatter } = useData()
const { Layout } = Theme
</script>

<template>
  <Layout>
    <component :is="loadPage(frontmatter.layout)" />
  </Layout>
</template>

<style scoped>
.paper-layout-container {
  width: 100vw;
  height: 100%;
  text-align: center;
}
</style>
