<template>
  <div class="editor-info-bar">

  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'EditorInfoBar'
})
</script>

<style scoped lang="less">
.editor-info-bar {
  width: 100%;
  height: var(--editor-info-bar-height);
  display: flex;
  background: var(--editor-info-bar-background);
}
</style>
