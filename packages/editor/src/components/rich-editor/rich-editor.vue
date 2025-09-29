<template>
  <div id="exam-rich-editor" ref="editorRef"></div>
</template>

<script setup lang="ts">
import EditorJS from "@editorjs/editorjs";
import { onMounted, shallowRef, useTemplateRef } from "vue";
import { StyleInlineTool } from "./tools/inline-style";
// import { TitleTool } from './tools/title';
import { ColorPicker } from "./tools/color-picker";
import { MathLatexInlineTool } from "./tools/inline-math-latex";
import { TitleTool } from "./tools/block-title";

const editor = shallowRef<EditorJS>();
const editorRef = useTemplateRef("editorRef");

onMounted(() => {
  if (!editorRef.value) {
    return;
  }
  editor.value = new EditorJS({
    holder: editorRef.value,
    autofocus: true,
    tools: {
      style: StyleInlineTool,
      title: TitleTool,
      colorPicker: ColorPicker,
      mathLaTex: MathLatexInlineTool,
    },
  });
});
</script>

<style scoped lang="less">
#exam-rich-editor {
  width: 100%;
  box-sizing: border-box;

  :deep(.ce-popover:has(.title-settings-panel)),
  :deep(.ce-popover:has(.editorjs-inline-style-setting)) {
    --width: fit-content;
    --max-height: 500px;
  }
}
</style>
