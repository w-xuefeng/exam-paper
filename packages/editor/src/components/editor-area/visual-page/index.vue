<template>
  <div
    class="editor-area"
    :style="{
      '--editor-area-scale': scale,
      '--editor-area-scale-origin': scaleOrigin,
      padding: 'var(--editor-area-padding)',
    }"
    :paper="store.exam.option.paper"
    :direction="store.exam.option.direction"
  >
    <div class="editor-area-paper-wrapper" ref="editor-area-paper-wrapper">
      <EditorPage
        v-for="(page, index) in store.exam.pages"
        :key="index"
        :page="page"
        :index="index"
        :total="store.exam.pages.length"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, useTemplateRef } from "vue";
import { useEditortore } from "@/stores/editor-store";
import EditorPage from "@/components/editor-page/index.vue";
import { EventBus } from "@/utils/event-bus";
import { EVENT_NAME } from "@/stores/consts/event-name";

defineOptions({
  name: "EditorAreaVisualPage",
});

const store = useEditortore();
const scaleOverflow = ref(false);
const editorAreaPaperWrapperRef = useTemplateRef("editor-area-paper-wrapper");

const scale = computed(() => {
  return store.editorAreaUIState.scale[store.editorAreaUIState.visualType];
});

const scaleOrigin = computed(() => {
  return scaleOverflow.value ? "left top" : "center top";
});

const onScaleChange = () => {
  if (!editorAreaPaperWrapperRef.value) {
    return;
  }
  const { width } = editorAreaPaperWrapperRef.value.getBoundingClientRect();
  scaleOverflow.value = width > document.body.clientWidth;
};

onMounted(() => {
  EventBus.on(EVENT_NAME.VISUAL_SCALE, onScaleChange);
});

onUnmounted(() => {
  EventBus.off(EVENT_NAME.VISUAL_SCALE, onScaleChange);
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

  .editor-area-paper-wrapper {
    width: fit-content;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transform: scale(var(--editor-area-scale));
    transform-origin: var(--editor-area-scale-origin);
  }
}
</style>
