<script setup lang="ts">
import { useData } from 'vitepress'

import SHeader from './components/SHeader.vue'

import { loadPage } from './routes'

const { frontmatter } = useData()
</script>

<template>
  <div class="paper-layout-container">
    <SHeader />
    <component :is="loadPage(frontmatter.layout)" />
  </div>
</template>

<style scoped>
.paper-layout-container {
  width: 100vw;
  height: 100%;
  text-align: center;
}
</style>
