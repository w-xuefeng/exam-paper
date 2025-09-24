<template>
  <div class="editor-container">
    <CodeEditor />
    <RichEditor />
  </div>
</template>

<script setup lang="ts">
import RichEditor from '@/components/rich-editor/rich-editor.vue';
import CodeEditor from '@/components/code-editor/code-editor.vue';

</script>

<style scoped lang="less">
.editor-container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  gap: var(--editor-gap);
  padding-block: var(--editor-padding-block);
  padding-inline: var(--editor-padding-inline);
  box-sizing: border-box;
}
</style>
