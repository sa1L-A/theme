<script setup lang="ts">
import { useData } from 'vitepress'

const { site } = useData()
</script>

<template>
  <div>
    <h1>{{ site.title }}</h1>
    <p>{{ site.description }}</p>
  </div>
</template>
