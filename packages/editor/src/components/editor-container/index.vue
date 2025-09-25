<template>
  <div class="editor-container">
    <slot name="tools"></slot>
    <slot name="area" class="editor-area"></slot>
    <slot name="info"></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'EditorContainer'
})
</script>

<style scoped lang="less">
.editor-container {
  width: var(--editor-container-width);
  height: var(--editor-container-height);
  display: flex;
  flex-direction: column;

  .editor-area {
    flex-grow: 1;
  }
}
</style>
