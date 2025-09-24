<template>
  <div class="code-eidtor" ref="jsoneditor"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, shallowRef, useTemplateRef } from 'vue';
import JSONEditor from 'jsoneditor';
import testJSON from './test.json'
import 'jsoneditor/dist/jsoneditor.min.css';

const editor = shallowRef<JSONEditor>();
const container = useTemplateRef('jsoneditor')

onMounted(() => {
  if (!container.value) {
    return
  }
  editor.value = new JSONEditor(container.value, {
    mode: 'code',
    language: 'zh-CN',
  });
  editor.value.set(testJSON)
})

onUnmounted(() => {
  editor.value?.destroy()
})
</script>

<style scoped lang="less">
.code-eidtor {
  width: calc(50vw - var(--editor-gap) / 2);
  box-shadow: 0 -3px 29px -5px rgba(34, 39, 47, .14);
  max-width: var(--editor-width-px);
  min-width: 500px;
  min-height: 400px;
}
</style>
