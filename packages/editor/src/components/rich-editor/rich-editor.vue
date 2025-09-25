<template>
  <div id="exam-rich-editor">
  </div>
</template>

<script setup lang="ts">
import EditorJS from '@editorjs/editorjs';
import { onMounted, shallowRef } from 'vue';
import { StyleInlineTool } from './tools/inline-style';
// import { TitleTool } from './tools/title';
import { ColorPicker } from './tools/color-picker';
import { MathLatexInlineTool } from './tools/inline-math-latex';
import { TitleTool } from './tools/block-title';

const editor = shallowRef<EditorJS>()

onMounted(() => {
  editor.value = new EditorJS({
    holder: 'exam-rich-editor',
    autofocus: true,
    tools: {
      style: StyleInlineTool,
      title: TitleTool,
      colorPicker: ColorPicker,
      mathLaTex: MathLatexInlineTool
    },
  });
})

</script>

<style scoped lang="less">
#exam-rich-editor {
  width: 100%;
  background-color: #fff;
  max-width: var(--editor-width-px);
  min-width: 600px;
  min-height: 400px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 -3px 29px -5px rgba(34, 39, 47, .14);

  :deep(.ce-popover:has(.title-settings-panel)),
  :deep(.ce-popover:has(.editorjs-inline-style-setting)) {
    --width: fit-content;
    --max-height: 500px;
  }
}
</style>
