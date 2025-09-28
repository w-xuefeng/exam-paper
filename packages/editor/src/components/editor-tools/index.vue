<template>
  <div class="editor-tools">
    <select v-model="store.exam.option.paper">
      <option v-for="item in paperSizeMap" :value="item.name" :key="item.name">
        {{ item.name }}
      </option>
    </select>
    <select v-model="store.exam.option.direction">
      <option v-for="item in PAPER_DIRECTION" :value="item" :key="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useEditortore } from "@/stores/editor-store";
import { paperSizeMap, PAPER_DIRECTION } from "@exam-paper/structure";

const store = useEditortore();

defineOptions({
  name: "EditorTools",
});
</script>

<style scoped lang="less">
.editor-tools {
  width: 100%;
  height: var(--editor-tools-height);
  display: flex;
  background-color: #006dce;
}
</style>
