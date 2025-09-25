<template>
  <EditorContainer>
    <template #tools>
      <EditorTools />
    </template>
    <template #area>
      <EditorArea />
    </template>
    <template #info>
      <EditorInfoBar />
    </template>
  </EditorContainer>
</template>

<script setup lang="ts">
import EditorContainer from '@/components/editor-container/index.vue';
import EditorTools from '@/components/editor-tools/index.vue'
import EditorArea from '@/components/editor-area/index.vue';
import EditorInfoBar from '@/components/editor-info-bar/index.vue';
</script>

<style scoped lang="less"></style>
