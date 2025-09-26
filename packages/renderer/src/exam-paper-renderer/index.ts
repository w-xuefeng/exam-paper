import { type ExamPaperWrapper } from "@exam-paper/structure";
import { paperRenderer } from "../paper-renderer";
import { domMountToParent } from "../shared/dom";
import { pageRenderer } from "../page-render";

export function examPaperRenderer(examPaper: ExamPaperWrapper) {
  const { option, header, footer, pages } = examPaper;
  const globalWidget = { header, footer, option };
  const paper = paperRenderer(examPaper);
  const totalPages = pages.length;
  paper.pages = pages.map((page, index) =>
    pageRenderer(page, index, totalPages, globalWidget)
  );
  return {
    paper,
    mount: (
      parent: HTMLElement | Document | ShadowRoot | string = document.body
    ) => {
      domMountToParent(paper, parent);
    },
  };
}
