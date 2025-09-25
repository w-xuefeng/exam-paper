import { defineStore } from "pinia";
import type { ExamPaperWrapper } from "@exam-paper/structure";
import { ref } from "vue";

export const useEditortore = defineStore("editor-store", () => {
  const exam = ref<ExamPaperWrapper>();
  const updateExam = (nextExam: ExamPaperWrapper) => {
    exam.value = nextExam;
  };

  return { exam, updateExam };
});
