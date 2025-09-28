<template>
  <div class="editor-page-container">
    <div class="page-padding-block-left-top"></div>
    <div class="page-padding-block-right-top"></div>
    <div class="page-padding-block-left-bottom"></div>
    <div class="page-padding-block-right-bottom"></div>
    <div class="editor-page" contenteditable="true" autofocus="true"></div>
  </div>
</template>

<script setup lang="ts">
import { useEditortore } from "@/stores/editor-store";
import { onMounted } from "vue";
import type { ExamWidget, PageWrapper } from "@exam-paper/structure";

defineOptions({
  name: "EditorPage",
});

const props = defineProps<{
  index: number;
  total: number;
  page: PageWrapper<ExamWidget[]>;
}>();

const store = useEditortore();

onMounted(() => {
  console.log("🚀 ~ editor page props:", props);
  console.log("🚀 ~ editor page store:", store);
});
</script>

<style scoped lang="less">
.editor-page-container {
  position: relative;
  flex-shrink: 0;
  background-color: var(--editor-page-background);
  color: var(--editor-page-color);
  box-sizing: border-box;
  outline: 1px solid var(--editor-page-outline-color);
  transform: translateZ(0);
  padding: var(--editor-page-padding-top) var(--editor-page-padding-right)
    var(--editor-page-padding-bottom) var(--editor-page-padding-left);
  .editor-page {
    box-sizing: border-box;
    display: block;
    outline: none;
  }
  .page-padding-block-left-top {
    position: absolute;
    border-right: 1px solid var(--editor-page-padding-block-border-color);
    border-bottom: 1px solid var(--editor-page-padding-block-border-color);
    top: max(
      0px,
      calc(
        var(--editor-page-padding-top) -
          var(--editor-page-padding-block-border-size)
      )
    );
    left: max(
      0px,
      calc(
        var(--editor-page-padding-left) -
          var(--editor-page-padding-block-border-size)
      )
    );
    width: min(
      var(--editor-page-padding-left),
      var(--editor-page-padding-block-border-size)
    );
    height: min(
      var(--editor-page-padding-top),
      var(--editor-page-padding-block-border-size)
    );
  }
  .page-padding-block-right-top {
    position: absolute;
    border-left: 1px solid var(--editor-page-padding-block-border-color);
    border-bottom: 1px solid var(--editor-page-padding-block-border-color);
    top: max(
      0px,
      calc(
        var(--editor-page-padding-top) -
          var(--editor-page-padding-block-border-size)
      )
    );
    right: max(
      0px,
      calc(
        var(--editor-page-padding-right) -
          var(--editor-page-padding-block-border-size)
      )
    );
    width: min(
      var(--editor-page-padding-right),
      var(--editor-page-padding-block-border-size)
    );
    height: min(
      var(--editor-page-padding-top),
      var(--editor-page-padding-block-border-size)
    );
  }
  .page-padding-block-left-bottom {
    position: absolute;
    border-right: 1px solid var(--editor-page-padding-block-border-color);
    border-top: 1px solid var(--editor-page-padding-block-border-color);
    bottom: max(
      0px,
      calc(
        var(--editor-page-padding-bottom) -
          var(--editor-page-padding-block-border-size)
      )
    );
    left: max(
      0px,
      calc(
        var(--editor-page-padding-left) -
          var(--editor-page-padding-block-border-size)
      )
    );
    width: min(
      var(--editor-page-padding-left),
      var(--editor-page-padding-block-border-size)
    );
    height: min(
      var(--editor-page-padding-bottom),
      var(--editor-page-padding-block-border-size)
    );
  }
  .page-padding-block-right-bottom {
    position: absolute;
    border-left: 1px solid var(--editor-page-padding-block-border-color);
    border-top: 1px solid var(--editor-page-padding-block-border-color);
    bottom: max(
      0px,
      calc(
        var(--editor-page-padding-bottom) -
          var(--editor-page-padding-block-border-size)
      )
    );
    right: max(
      0px,
      calc(
        var(--editor-page-padding-right) -
          var(--editor-page-padding-block-border-size)
      )
    );
    width: min(
      var(--editor-page-padding-right),
      var(--editor-page-padding-block-border-size)
    );
    height: min(
      var(--editor-page-padding-bottom),
      var(--editor-page-padding-block-border-size)
    );
  }
}
</style>
