<template>
  <div class="editor-web" contenteditable="true" autofocus="true">
    editor web
  </div>
</template>

<script setup lang="ts">
// import { useEditortore } from "@/stores/editor-store";
import { onMounted } from "vue";

defineOptions({
  name: "EditorPage",
});

// const store = useEditortore();

onMounted(() => {
  console.log("🚀 ~ editor web:", onMounted);
});
</script>

<style scoped lang="less">
.editor-web {
  background: var(--editor-area-background);
  color: var(--editor-page-color);
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  outline: none;
  transform: scale(var(--editor-area-scale));
  transform-origin: left top;
}
</style>
