<template>
  <div class="editor-info-bar">
    <div class="end-panel">
      <div @click="store.editorAreaUIState.visualType = 'paper'">paper</div>
      <div @click="store.editorAreaUIState.visualType = 'web'">web</div>
      <div class="area-scale">
        <input
          min="0.1"
          max="5"
          type="range"
          step="0.01"
          v-model="
            store.editorAreaUIState.scale[store.editorAreaUIState.visualType]
          "
          @input="handleScaleInput"
        />
        <span @click="hanleScaleToInitial">{{ areaScale }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { EVENT_NAME } from "@/stores/consts/event-name";
import { useEditortore } from "@/stores/editor-store";
import { EventBus } from "@/utils/event-bus";
import { computed } from "vue";

defineOptions({
  name: "EditorInfoBar",
});

const store = useEditortore();

const scale = computed(() => {
  return store.editorAreaUIState.scale[store.editorAreaUIState.visualType];
});

const areaScale = computed(() => `${(scale.value * 100).toFixed(0)}%`);

const handleScaleInput = (e: Event) => {
  const { target } = e;
  if (!(target instanceof HTMLInputElement)) return;
  EventBus.emit(EVENT_NAME.VISUAL_SCALE, target.value);
};

const hanleScaleToInitial = () => {
  store.editorAreaUIState.scale[store.editorAreaUIState.visualType] = 1;
  EventBus.emit(EVENT_NAME.VISUAL_SCALE, 1);
};
</script>

<style scoped lang="less">
.editor-info-bar {
  width: 100%;
  height: var(--editor-info-bar-height);
  display: flex;
  background: var(--editor-info-bar-background);
  color: var(--color);
  border-block-start: 1px solid #e4e4e4;
  display: flex;
  align-items: center;

  .end-panel {
    margin-inline-start: auto;
    display: flex;
    align-items: center;
    gap: 4px;

    .area-scale {
      display: flex;
      align-items: center;
    }
  }
}
</style>
