import {
  STRUCTURAL_TYPE,
  type ExamPaperWrapper,
  type ExamWidget,
} from "@exam-paper/structure";
import { paperRenderer } from "../paper-renderer";
import { questionRenderer } from "../question-renderer";
import { titleRenderer } from "../title-renderer";
import { descriptionRenderer } from "../description-renderer";
import { blankRenderer } from "../blank-renderer";
import { headerRenderer } from "../header-renderer";
import { footerRenderer } from "../footer-renderer";
import { answerRenderer } from "../answer-renderer";
import { domMountToParent } from "../shared/dom";

export function matchRender(examWidget: ExamWidget) {
  switch (examWidget.type) {
    case STRUCTURAL_TYPE.QUESTION:
      return questionRenderer(examWidget);
    case STRUCTURAL_TYPE.TITLE:
      return titleRenderer(examWidget);
    case STRUCTURAL_TYPE.DESCRIPTION:
      return descriptionRenderer(examWidget);
    case STRUCTURAL_TYPE.BLANK:
      return blankRenderer(examWidget);
    case STRUCTURAL_TYPE.HEADER:
      return headerRenderer(examWidget);
    case STRUCTURAL_TYPE.FOOTER:
      return footerRenderer(examWidget);
    case STRUCTURAL_TYPE.ANSWER:
      return answerRenderer(examWidget);
    default:
      return null;
  }
}

export function examPaperRenderer(examPaper: ExamPaperWrapper) {
  const {
    value: { layout: exam },
  } = examPaper;

  const paper = paperRenderer(examPaper);
  const layout: HTMLElement[] = [];

  const { header, title, description, main, answer, footer } = exam;

  if (header) {
    layout.push(headerRenderer(header));
  }

  if (title) {
    layout.push(titleRenderer(title));
  }

  if (description) {
    layout.push(descriptionRenderer(description));
  }

  if (main) {
    layout.push(...(main.map(matchRender).filter(Boolean) as HTMLElement[]));
  }

  if (answer) {
    layout.push(...answer.map(answerRenderer));
  }

  if (footer) {
    layout.push(footerRenderer(footer));
  }

  paper.layout = layout;

  return {
    paper,
    mounted: (
      parent: HTMLElement | Document | ShadowRoot | string = document.body
    ) => {
      domMountToParent(paper, parent);
    },
  };
}
