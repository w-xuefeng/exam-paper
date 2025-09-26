import { STRUCTURAL_TYPE, type ExamWidget } from "@exam-paper/structure";

import { questionRenderer } from "../question-renderer";
import { titleRenderer } from "../title-renderer";
import { descriptionRenderer } from "../description-renderer";
import { blankRenderer } from "../blank-renderer";
import { headerRenderer } from "../header-renderer";
import { footerRenderer } from "../footer-renderer";
import { answerRenderer } from "../answer-renderer";

export function matchRender(examWidget: ExamWidget): HTMLElement | null {
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
