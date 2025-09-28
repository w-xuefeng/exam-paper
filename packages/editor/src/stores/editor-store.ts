import { defineStore } from "pinia";
import {
  PAGINATION_TYPE,
  PAPER_DIRECTION,
  STRUCTURAL_TYPE,
  type ExamPaperWrapper,
  type ExamWidget,
  type PageWrapper,
  type PaperOption,
} from "@exam-paper/structure";
import { ref } from "vue";
import type { EditorVisualType } from "./consts/editor-state";

interface EditorAreaUIState {
  visualType: EditorVisualType;
  scale: Record<EditorVisualType, number>;
}

export const useEditortore = defineStore("editor-store", () => {
  const createInitialPaperOption = () =>
    ({
      paper: "A4",
      direction: PAPER_DIRECTION.PORTRAIT,
      pagination: {
        type: PAGINATION_TYPE.INNER,
        formatter: "第 %current 页 / 共 %total 页",
        position: "bottom-center",
        style: {
          color: "rgba(0,0,0,0.85)",
          fontSize: "12px",
        },
      },
    } as PaperOption);

  const createInitialPage = (layout: ExamWidget[] = []) =>
    ({
      type: STRUCTURAL_TYPE.PAGE,
      layout,
    } as PageWrapper<ExamWidget[]>);

  const createInitialExam = () =>
    ({
      type: STRUCTURAL_TYPE.PAPER,
      option: createInitialPaperOption(),
      pages: [createInitialPage(), createInitialPage(), createInitialPage()],
    } as ExamPaperWrapper);

  const exam = ref<ExamPaperWrapper>(createInitialExam());

  const updateExam = (nextExam: ExamPaperWrapper) => {
    exam.value = nextExam;
  };

  const newPage = (layout: ExamWidget[] = []) => {
    exam.value.pages.push(createInitialPage(layout));
  };

  const editorAreaUIState = ref<EditorAreaUIState>({
    visualType: "paper",
    scale: {
      paper: 1,
      web: 1,
    },
  });

  return {
    exam,
    editorAreaUIState,
    updateExam,
    newPage,
    createInitialPaperOption,
    createInitialPage,
    createInitialExam,
  };
});
