<template>
  <div
    class="editor-area"
    :style="{
      '--editor-area-scale': scale,
    }"
    :paper="store.exam.option.paper"
    :direction="store.exam.option.direction"
  >
    <EditorWeb />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useEditortore } from "@/stores/editor-store";
import EditorWeb from "@/components/editor-web/index.vue";

defineOptions({
  name: "EditorAreaVisualWeb",
});

const store = useEditortore();

const scale = computed(() => {
  return store.editorAreaUIState.scale[store.editorAreaUIState.visualType];
});
</script>

<style scoped lang="less">
.editor-area {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: var(--editor-area-background);
  overflow: scroll;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
