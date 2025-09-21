import { styledContentRenderer } from "../style-renderer";
import { ELEMENTS } from "../consts/elements";
import { defineRenderer } from "../shared";
import type { BlankWrapper } from "@exam-paper/structure";

class ExamPaperBlank extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {}
}

export function blankRenderer(blank: BlankWrapper) {
  defineRenderer(ELEMENTS.BLANK, ExamPaperBlank);
  return styledContentRenderer(
    {
      value: "",
      style: blank.style,
    },
    ELEMENTS.BLANK
  );
}
