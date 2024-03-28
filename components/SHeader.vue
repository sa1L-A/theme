<script setup lang="ts">
import SRow from './SRow.vue'
</script>

<template>
  <SRow class="header" justify="space-around">
    <div class="title">
      Sa1L
    </div>
    <div class="tabs">
      <div class="tab">
        文章
      </div>
      <div class="tab">
        搜索
      </div>
      <div class="tab">
        标签
      </div>
    </div>
  </SRow>
</template>

<style scoped>
.header {
  padding: 0px 30px;
  width: fit-content;
  width: 100%;
  min-width: 100vw;
  display: flex;
  justify-content: space-between;
  height: 60px;
  font-family: 'Inter-Bold', sans-serif;
  .title {
    color: #1e1e1e;
    text-align: left;

    font-size: 24px;
    line-height: 60px;
    font-weight: 700;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>
