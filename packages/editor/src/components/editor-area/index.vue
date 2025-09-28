<template>
  <EditorAreaVisualPage v-if="store.editorAreaUIState.visualType === 'paper'" />
  <EditorAreaVisualWeb v-if="store.editorAreaUIState.visualType === 'web'" />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { DOMUtils, getPaperSizeStyle } from "@exam-paper/renderer";
import { useEditortore } from "@/stores/editor-store";
import EditorAreaVisualPage from "./visual-page/index.vue";
import EditorAreaVisualWeb from "./visual-web/index.vue";
import { type CSSNestedObjectProperties } from "@exam-paper/structure";

defineOptions({
  name: "EditorArea",
});

const store = useEditortore();

function applyPageStyles() {
  const id = "exam-paper-editor-agent-style-sheet";
  const previous = document.getElementById(id);
  if (previous) {
    DOMUtils.removeDOM(previous);
  }
  const styleElement = DOMUtils.handleCSSToStyleElement(
    getPaperSizeStyle(
      ".editor-area",
      ".editor-page",
      "0.75"
    ) as CSSNestedObjectProperties
  );
  if (!styleElement) return;
  DOMUtils.addStyleElement(styleElement, id);
}

const init = () => {
  applyPageStyles();
};

onMounted(() => {
  init();
});
</script>

<style scoped lang="less"></style>
