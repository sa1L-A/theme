<script setup lang="ts">
import type { PropType } from 'vue'

type JustifyContent =
  | '-moz-initial'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'revert-layer'
  | 'unset'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'center'
  | 'flex-end'
  | 'flex-start'

const props = defineProps({
  justify: {
    type: String as PropType<JustifyContent>,
    default: 'center',
  },
})
</script>

<template>
  <div class="s-row" :style="{ justifyContent: props.justify }">
    <slot />
  </div>
</template>

<style scoped>
.s-row {
  width: 100%;
  height: fit-content;
  display: flex;
}
</style>
