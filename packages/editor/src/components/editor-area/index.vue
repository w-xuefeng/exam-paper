<template>
  <div class="editor-area">
    <RichEditor />
  </div>
</template>

<script setup lang="ts">
import RichEditor from '@/components/rich-editor/rich-editor.vue';
// import CodeEditor from '@/components/code-editor/code-editor.vue';

defineOptions({
  name: 'EditorArea'
})


</script>

<style scoped lang="less">
.editor-area {
  width: 100%;
  height: 100%;
  background: var(--editor-area-background);
  overflow: auto;
  box-sizing: border-box;
  padding: var(--editor-area-padding);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
